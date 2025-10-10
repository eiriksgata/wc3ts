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
  constructor(name: string, owner: Frame, priority: number, createContext: number);

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
      handle = DzCreateSimpleFrame(name, owner.handle, priority);
    } else if (typeName !== undefined && inherits !== undefined) {
      handle = DzCreateFrameByTagName(typeName, name, owner.handle, inherits, createContext);
    } else {
      handle = DzCreateFrame(name, owner.handle, priority);
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
    const handle = DzCreateFrame(name, owner.handle, priority);
    if (handle !== undefined) {
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
  public static createSimple(name: string, owner: Frame, createContext: number): Frame | undefined {
    const handle = DzCreateSimpleFrame(name, owner.handle, createContext);
    if (handle !== undefined) {
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
    const handle = DzCreateFrameByTagName(typeName, name, owner.handle, inherits, createContext);

    if (handle !== undefined) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  public set alpha(alpha: number) {
    DzFrameSetAlpha(this.handle, alpha);
  }

  public get alpha() {
    return DzFrameGetAlpha(this.handle);
  }

  public set enabled(flag: boolean) {
    DzFrameSetEnable(this.handle, flag);
  }

  public get enabled() {
    return DzFrameGetEnable(this.handle);
  }

  public set height(height: number) {
    DzFrameSetSize(this.handle, this.width, height);
  }

  public get height() {
    return DzFrameGetHeight(this.handle);
  }

  /**
   * @deprecated use `getParent` and `setParent` instead.
   */
  public set parent(parent: Frame) {
    DzFrameSetParent(this.handle, parent.handle);
  }

  public get parent() {
    return Frame.fromHandle(DzFrameGetParent(this.handle) as unknown as framehandle) as Frame;
  }

  public set text(text: string) {
    DzFrameSetText(this.handle, text);
  }

  public get text() {
    return DzFrameGetText(this.handle) ?? "";
  }

  public set textSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle, size);
  }

  public get textSizeLimit() {
    return DzFrameGetTextSizeLimit(this.handle);
  }

  public set value(value: number) {
    DzFrameSetValue(this.handle, value);
  }

  public get value() {
    return DzFrameGetValue(this.handle);
  }

  public set visible(flag: boolean) {
    DzFrameShow(this.handle, flag);
  }

  public set width(width: number) {
    DzFrameSetSize(this.handle, width, this.height);
  }

  public cageMouse(enable: boolean) {
    DzFrameCageMouse(this.handle, enable);
    return this;
  }

  public clearPoints() {
    DzFrameClearAllPoints(this.handle);
    return this;
  }

  public click() {
    DzClickFrame(this.handle);
    return this;
  }

  public destroy() {
    DzDestroyFrame(this.handle);
    return this;
  }

  public setAbsPoint(point: number, x: number, y: number) {
    DzFrameSetAbsolutePoint(this.handle, point, x, y);
    return this;
  }

  public setAllPoints(relative: Frame) {
    DzFrameSetAllPoints(this.handle, relative.handle);
    return this;
  }

  public setAlpha(alpha: number) {
    DzFrameSetAlpha(this.handle, alpha);
    return this;
  }

  public setEnabled(flag: boolean) {
    DzFrameSetEnable(this.handle, flag);
    return this;
  }

  public setFocus(flag: boolean) {
    DzFrameSetFocus(this.handle, flag);
    return this;
  }

  public setFont(filename: string, height: number, flags: number) {
    DzFrameSetFont(this.handle, filename, height, flags);
    return this;
  }

  public setHeight(height: number) {
    DzFrameSetSize(this.handle, this.width, height);
    return this;
  }

  public setMinMaxValue(minValue: number, maxValue: number) {
    DzFrameSetMinMaxValue(this.handle, minValue, maxValue);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setTextAlignment(vert: number, horz: number) {
    DzFrameSetTextAlignment(this.handle, vert);
    return this;
  }

  public setModel(modelFile: string, cameraIndex: number) {
    DzFrameSetModel(this.handle, modelFile, cameraIndex, 0);
    return this;
  }

  public getParent() {
    return Frame.fromHandle(DzFrameGetParent(this.handle));
  }

  public setParent(parent: Frame) {
    DzFrameSetParent(this.handle, parent.handle);
    return this;
  }

  public setPoint(point: number, relative: Frame, relativePoint: number, x: number, y: number) {
    DzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y);
    return this;
  }

  public setScale(scale: number) {
    DzFrameSetScale(this.handle, scale);
    return this;
  }

  public setSize(width: number, height: number) {
    DzFrameSetSize(this.handle, width, height);
    return this;
  }

  public setStepSize(stepSize: number) {
    // @ts-ignore - DzFrameSetStepSize not available in current API
    DzFrameSetStepSize(this.handle, stepSize);
    return this;
  }

  public setText(text: string) {
    DzFrameSetText(this.handle, text);
    return this;
  }

  public setTextSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle, size);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setTexture(texFile: string, flag: number, blend: boolean) {
    DzFrameSetTexture(this.handle, texFile, flag);
    return this;
  }

  public setValue(value: number) {
    DzFrameSetValue(this.handle, value);
    return this;
  }

  public setVertexColor(color: number) {
    DzFrameSetVertexColor(this.handle, color);
    return this;
  }

  public setVisible(flag: boolean) {
    DzFrameShow(this.handle, flag);
    return this;
  }

  public setWidth(width: number) {
    DzFrameSetSize(this.handle, width, this.height);
    return this;
  }

  public static fromHandle(handle: framehandle | undefined): Frame | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromName(name: string, createContext: number) {
    return this.fromHandle(DzFrameFindByName(name, createContext) as unknown as framehandle);
  }

  public static loadTOC(filename: string) {
    return DzLoadToc(filename);
  }
}
