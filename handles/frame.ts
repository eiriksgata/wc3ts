/** @noSelfInFile */

/// <reference path="../types/japi.d.ts" />

import { Handle } from "./handle";

/**
 * Warcraft III's UI uses a proprietary format known as FDF (Frame Definition Files).
 * This class provides the ability to manipulate and create them dynamically through code.
 *
 * @example Create a simple button.
 * ```ts
 * const gameui = Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0);
 * if (gameui) {
 *  // Create a "GLUEBUTTON" named "Facebutton", the clickable Button, for game UI
 *  const buttonFrame = Frame.createType("FaceButton", gameui, 0, "GLUEBUTTON", "");
 *  if (buttonFrame) {
 *    // Create a BACKDROP named "FaceButtonIcon", the visible image, for buttonFrame.
 *    const buttonIconFrame = Frame.createType("FaceButton", buttonFrame, 0, "BACKDROP", "");
 *    // buttonIconFrame will mimic buttonFrame in size and position
 *    buttonIconFrame?.setAllPoints(buttonFrame);
 *    // Set a Texture
 *    buttonIconFrame?.setTexture("ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn", 0, true);
 *    // Place the buttonFrame to the center of the screen
 *    buttonFrame.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.3);
 *    // Give that buttonFrame a size
 *    buttonFrame.setSize(0.05, 0.05);
 *  }
 *}
 *```
 *
 * There are many aspects to modifying the UI and it can become complicated, so here are some
 * guides:
 *
 * https://www.hiveworkshop.com/threads/ui-frames-starting-guide.318603/
 * https://www.hiveworkshop.com/pastebin/913bd439799b3d917e5b522dd9ef458f20598/
 * https://www.hiveworkshop.com/tags/ui-fdf/
 */
export class Frame extends Handle<framehandle> {
  /**
   * @deprecated use `Frame.create` instead.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param priority
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  constructor(
    name: string,
    owner: Frame,
    priority: number,
    createContext: number
  );

  /**
   * @deprecated use `Frame.createSimple` instead.
   *
   * https://www.hiveworkshop.com/threads/ui-simpleframes.320385/
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param priority
   * @param owner The parent frame.
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  constructor(name: string, owner: Frame, priority: number);

  /**
   * @deprecated use `Frame.createType` instead.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param priority
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   * @param typeName The type of Frame.
   * @param inherits The name of the Frame it inherits.
   */
  constructor(
    name: string,
    owner: Frame,
    priority: number,
    createContext: number,
    typeName: string,
    inherits: string
  );

  constructor(
    name: string,
    owner: Frame,
    priority: number,
    createContext?: number,
    typeName?: string,
    inherits?: string
  ) {
    if (Handle.initFromHandle()) {
      super();
      return;
    }

    let handle: framehandle | undefined;

    if (createContext === undefined) {
      handle = DzCreateSimpleFrame(name, owner.handle as any, priority) as any;
    } else if (typeName !== undefined && inherits !== undefined) {
      handle = DzCreateFrameByTagName(
        typeName,
        name,
        owner.handle as any,
        inherits,
        createContext
      ) as any;
    } else {
      handle = DzCreateFrame(name, owner.handle as any, priority) as any;
    }

    if (handle === undefined) {
      Error("w3ts failed to create framehandle handle.");
    }

    super(handle);
  }

  /**
   * Creates a Frame.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param priority Should be a natural number (greater equal to 0).
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  public static create(
    name: string,
    owner: Frame,
    priority: number,
    createContext: number
  ): Frame | undefined {
    const handle = DzCreateFrame(name, owner.handle as any, priority) as any;
    if (handle) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a SimpleFrame.
   *
   * https://www.hiveworkshop.com/threads/ui-simpleframes.320385/
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   */
  public static createSimple(
    name: string,
    owner: Frame,
    createContext: number
  ): Frame | undefined {
    const handle = DzCreateSimpleFrame(
      name,
      owner.handle as any,
      createContext
    ) as any;
    if (handle) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Create a Frame by type.
   * @param name The name of the frame to be accessed with `Frame.fromName`.
   * @param owner The parent frame.
   * @param createContext The ID assigned to a frame to be accessed with `Frame.fromName`. This value does not have to be unique and can be overwritten.
   * @param typeName The type of Frame.
   * @param inherits The name of the Frame it inherits.
   */
  public static createType(
    name: string,
    owner: Frame,
    createContext: number,
    typeName: string,
    inherits: string
  ): Frame | undefined {
    const handle = DzCreateFrameByTagName(
      typeName,
      name,
      owner.handle as any,
      inherits,
      createContext
    ) as any;

    if (handle) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  public set alpha(alpha: number) {
    DzFrameSetAlpha(this.handle as any, alpha);
  }

  public get alpha() {
    return DzFrameGetAlpha(this.handle as any);
  }

  public get children() {
    const count = this.childrenCount;
    const output: Frame[] = [];
    for (let i = 0; i < count; i++) {
      const child = this.getChild(i);
      if (child) {
        output.push(child);
      }
    }
    return output;
  }

  public get childrenCount() {
    // @ts-ignore - BlzFrameGetChildrenCount not available in current API
    return BlzFrameGetChildrenCount(this.handle);
  }

  public set enabled(flag: boolean) {
    DzFrameSetEnable(this.handle as any, flag);
  }

  public get enabled() {
    return DzFrameGetEnable(this.handle as any);
  }

  public set height(height: number) {
    DzFrameSetSize(this.handle as any, this.width, height);
  }

  public get height() {
    return DzFrameGetHeight(this.handle as any);
  }

  /**
   * @deprecated use `getParent` and `setParent` instead.
   */
  public set parent(parent: Frame) {
    DzFrameSetParent(this.handle as any, parent.handle as any);
  }

  public get parent() {
    return Frame.fromHandle(
      DzFrameGetParent(this.handle as any) as unknown as framehandle
    ) as Frame;
  }

  public set text(text: string) {
    DzFrameSetText(this.handle as any, text);
  }

  public get text() {
    return DzFrameGetText(this.handle as any) ?? "";
  }

  public set textSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle as any, size);
  }

  public get textSizeLimit() {
    return DzFrameGetTextSizeLimit(this.handle as any);
  }

  public set value(value: number) {
    DzFrameSetValue(this.handle as any, value);
  }

  public get value() {
    return DzFrameGetValue(this.handle as any);
  }

  public set visible(flag: boolean) {
    DzFrameShow(this.handle as any, flag);
  }

  public get visible() {
    // @ts-ignore - BlzFrameIsVisible not available in current API
    return BlzFrameIsVisible(this.handle);
  }

  public set width(width: number) {
    DzFrameSetSize(this.handle as any, width, this.height);
  }

  public get width() {
    // @ts-ignore - BlzFrameGetWidth not available in current API
    return BlzFrameGetWidth(this.handle);
  }

  public addText(text: string) {
    // @ts-ignore - BlzFrameAddText not available in current API
    BlzFrameAddText(this.handle, text);
    return this;
  }

  public cageMouse(enable: boolean) {
    DzFrameCageMouse(this.handle as any, enable);
    return this;
  }

  public clearPoints() {
    DzFrameClearAllPoints(this.handle as any);
    return this;
  }

  public click() {
    DzClickFrame(this.handle as any);
    return this;
  }

  public destroy() {
    DzDestroyFrame(this.handle as any);
    return this;
  }

  public getChild(index: number) {
    // @ts-ignore - BlzFrameGetChild not available in current API
    return Frame.fromHandle(BlzFrameGetChild(this.handle, index));
  }

  public setAbsPoint(point: framepointtype, x: number, y: number) {
    DzFrameSetAbsolutePoint(this.handle as any, point as any, x, y);
    return this;
  }

  public setAllPoints(relative: Frame) {
    DzFrameSetAllPoints(this.handle as any, relative.handle as any);
    return this;
  }

  public setAlpha(alpha: number) {
    DzFrameSetAlpha(this.handle as any, alpha);
    return this;
  }

  public setEnabled(flag: boolean) {
    DzFrameSetEnable(this.handle as any, flag);
    return this;
  }

  public setFocus(flag: boolean) {
    DzFrameSetFocus(this.handle as any, flag);
    return this;
  }

  public setFont(filename: string, height: number, flags: number) {
    DzFrameSetFont(this.handle as any, filename, height, flags);
    return this;
  }

  public setHeight(height: number) {
    DzFrameSetSize(this.handle as any, this.width, height);
    return this;
  }

  public setLevel(level: number) {
    // @ts-ignore - BlzFrameSetLevel not available in current API
    BlzFrameSetLevel(this.handle, level);
    return this;
  }

  public setMinMaxValue(minValue: number, maxValue: number) {
    DzFrameSetMinMaxValue(this.handle as any, minValue, maxValue);
    return this;
  }

  public setTextAlignment(vert: textaligntype, horz: textaligntype) {
    DzFrameSetTextAlignment(this.handle as any, vert as any);
    return this;
  }

  public setModel(modelFile: string, cameraIndex: number) {
    DzFrameSetModel(this.handle as any, modelFile, cameraIndex, 0);
    return this;
  }

  public getParent() {
    return Frame.fromHandle(DzFrameGetParent(this.handle as any) as any);
  }

  public setParent(parent: Frame) {
    DzFrameSetParent(this.handle as any, parent.handle as any);
    return this;
  }

  public setPoint(
    point: framepointtype,
    relative: Frame,
    relativePoint: framepointtype,
    x: number,
    y: number
  ) {
    DzFrameSetPoint(
      this.handle as any,
      point as any,
      relative.handle as any,
      relativePoint as any,
      x,
      y
    );
    return this;
  }

  public setScale(scale: number) {
    DzFrameSetScale(this.handle as any, scale);
    return this;
  }

  public setSize(width: number, height: number) {
    DzFrameSetSize(this.handle as any, width, height);
    return this;
  }

  public setSpriteAnimate(primaryProp: number, flags: number) {
    // @ts-ignore - BlzFrameSetSpriteAnimate not available in current API
    BlzFrameSetSpriteAnimate(this.handle, primaryProp, flags);
    return this;
  }

  public setStepSize(stepSize: number) {
    // @ts-ignore - DzFrameSetStepSize not available in current API
    DzFrameSetStepSize(this.handle, stepSize);
    return this;
  }

  public setText(text: string) {
    DzFrameSetText(this.handle as any, text);
    return this;
  }

  public setTextColor(color: number) {
    // @ts-ignore - BlzFrameSetTextColor not available in current API
    BlzFrameSetTextColor(this.handle, color);
    return this;
  }

  public setTextSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle as any, size);
    return this;
  }

  public setTexture(texFile: string, flag: number, blend: boolean) {
    DzFrameSetTexture(this.handle as any, texFile, flag);
    return this;
  }

  public setTooltip(tooltip: Frame) {
    // @ts-ignore - BlzFrameSetTooltip not available in current API
    BlzFrameSetTooltip(this.handle, tooltip.handle);
    return this;
  }

  public setValue(value: number) {
    DzFrameSetValue(this.handle as any, value);
    return this;
  }

  public setVertexColor(color: number) {
    DzFrameSetVertexColor(this.handle as any, color);
    return this;
  }

  public setVisible(flag: boolean) {
    DzFrameShow(this.handle as any, flag);
    return this;
  }

  public setWidth(width: number) {
    DzFrameSetSize(this.handle as any, width, this.height);
    return this;
  }

  public static autoPosition(enable: boolean) {
    // @ts-ignore - BlzEnableUIAutoPosition not available in current API
    BlzEnableUIAutoPosition(enable);
  }

  public static fromEvent() {
    // @ts-ignore - BlzGetTriggerFrame not available in current API
    return this.fromHandle(BlzGetTriggerFrame());
  }

  public static fromHandle(handle: framehandle | undefined): Frame | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromName(name: string, createContext: number) {
    return this.fromHandle(DzFrameFindByName(name, createContext));
  }

  public static fromOrigin(frameType: originframetype, index: number) {
    // @ts-ignore - BlzGetOriginFrame not available in current API
    return this.fromHandle(BlzGetOriginFrame(frameType, index));
  }

  public static getEventHandle() {
    // @ts-ignore - BlzGetTriggerFrameEvent not available in current API
    return BlzGetTriggerFrameEvent();
  }

  public static getEventText() {
    // @ts-ignore - BlzGetTriggerFrameValue not available in current API
    return BlzGetTriggerFrameValue();
  }

  public static getEventValue() {
    // @ts-ignore - BlzGetTriggerFrameValue not available in current API
    return BlzGetTriggerFrameValue();
  }

  public static hideOrigin(enable: boolean) {
    // @ts-ignore - BlzHideOriginFrames not available in current API
    BlzHideOriginFrames(enable);
  }

  public static loadTOC(filename: string) {
    return DzLoadToc(filename);
  }
}
