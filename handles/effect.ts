/** @noSelfInFile */

/// <reference path="../types/common.d.ts" />
/// <reference path="../types/japi.d.ts" />

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Widget } from "./widget";

export class Effect extends Handle<effect> {
  public readonly attachWidget?: Widget;

  public readonly attachPointName?: string;

  /**
   * @deprecated use `Effect.create` or `Effect.createAttachment` instead.
   * @param modelName The path of the model that the effect will use.
   * @param x
   * @param y
   */
  constructor(modelName: string, x: number, y: number);

  /**
   * @deprecated use `Effect.create` or `Effect.createAttachment` instead.
   * @param modelName The path of the model that the effect will use.
   * @param targetWidget The widget to attach the effect to.
   * @param attachPointName The attachment point of the widget where the effect will
   * be placed. Attachment points are points in a model that can be referenced to as
   * areas for effects to be attached, whether it be from a spell or this function.
   * If the attachment point does not exist, it will attach the effect to the model's origin.
   */
  constructor(modelName: string, targetWidget: Widget, attachPointName: string);

  constructor(modelName: string, a: number | Widget, b: number | string) {
    if (Handle.initFromHandle()) {
      super();
      return;
    }

    let handle: effect | undefined;

    if (typeof a === "number" && typeof b === "number") {
      handle = AddSpecialEffect(modelName, a, b);
    } else if (typeof a !== "number" && typeof b === "string") {
      handle = AddSpecialEffectTarget(modelName, a.handle, b);
    }

    if (handle === undefined) {
      Error("w3ts failed to create effect handle.");
    }

    super(handle);

    if (typeof a !== "number" && typeof b === "string") {
      this.attachWidget = a;
      this.attachPointName = b;
    }
  }

  /**
   * Creates a special effect.
   * @param modelName The path of the model that the effect will use.
   * @param x
   * @param y
   */
  public static create(modelName: string, x: number, y: number): Effect | undefined {
    const handle = AddSpecialEffect(modelName, x, y);
    if (handle !== null && handle !== undefined) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  /**
   * Creates a special effect attached to a widget.
   * @param modelName The path of the model that the effect will use.
   * @param targetWidget The widget to attach the effect to.
   * @param attachPointName The attachment point of the widget where the effect will
   * be placed. Attachment points are points in a model that can be referenced to as
   * areas for effects to be attached, whether it be from a spell or this function.
   * If the attachment point does not exist, it will attach the effect to the model's origin.
   */
  public static createAttachment(
    modelName: string,
    targetWidget: Widget,
    attachPointName: string
  ): Effect | undefined {
    const handle = AddSpecialEffectTarget(modelName, targetWidget.handle, attachPointName);
    if (handle !== null && handle !== undefined) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;
      values.attachWidget = targetWidget;
      values.attachPointName = attachPointName;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a spell visual effect at position.
   * ```ts
   * // Create Thunder Clap's caster art effect at [0,0]
   * const clap = Effect.createSpell(FourCC("AHtz"), EFFECT_TYPE_CASTER, 0, 0);
   * ```
   */
  public static createSpell(
    abilityId: number,
    effectType: effecttype,
    x: number,
    y: number
  ): Effect | undefined {
    const handle = AddSpellEffectById(abilityId, effectType, x, y);
    if (handle !== null && handle !== undefined) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a spell visual effect at position.
   * ```ts
   * const red = Players[0];
   * const peasant = Unit.create(red, FourCC("hpea"), 0, 0);
   * // Create Thunder Clap's caster art effect attached to "origin" of peasant.
   * const clap = Effect.createSpellAttachment(FourCC("AHtc"), EFFECT_TYPE_CASTER, peasant, "origin");
   * clap?.destroy();
   * ```
   */
  public static createSpellAttachment(
    abilityId: number,
    effectType: effecttype,
    targetWidget: Widget,
    attachPointName: string
  ): Effect | undefined {
    const handle = AddSpellEffectTargetById(
      abilityId,
      effectType,
      targetWidget.handle,
      attachPointName
    );
    if (handle !== null && handle !== undefined) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;
      values.attachWidget = targetWidget;
      values.attachPointName = attachPointName;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  public get scale() {
    return EXGetEffectSize(this.handle);
  }

  public set scale(scale: number) {
    EXSetEffectSize(this.handle, scale);
  }

  /**
   * Warning: asynchronous
   * @async
   */
  public get x() {
    return EXGetEffectX(this.handle);
  }

  public set x(x: number) {
    EXSetEffectXY(this.handle, x, this.y);
  }

  /**
   * Warning: asynchronous
   * @async
   */
  public get y() {
    return EXGetEffectY(this.handle);
  }

  public set y(y: number) {
    EXSetEffectXY(this.handle, this.x, y);
  }

  /**
   * Warning: asynchronous
   * @async
   */
  public get z() {
    return EXGetEffectZ(this.handle);
  }

  public set z(z: number) {
    EXSetEffectZ(this.handle, z);
  }

  public addSubAnimation(subAnim: subanimtype) {
    // @ts-ignore - BlzSpecialEffectAddSubAnimation not available in current API
    BlzSpecialEffectAddSubAnimation(this.handle, subAnim);
  }

  public clearSubAnimations() {
    // @ts-ignore - BlzSpecialEffectClearSubAnimations not available in current API
    BlzSpecialEffectClearSubAnimations(this.handle);
  }

  /**
   * Destroy the effect handle. This will play the effect's death animation.
   */
  public destroy() {
    DestroyEffect(this.handle);
  }

  public playAnimation(animType: animtype) {
    // @ts-ignore - BlzPlaySpecialEffect not available in current API
    BlzPlaySpecialEffect(this.handle, animType);
  }

  public playWithTimeScale(animType: animtype, timeScale: number) {
    // @ts-ignore - BlzPlaySpecialEffectWithTimeScale not available in current API
    BlzPlaySpecialEffectWithTimeScale(this.handle, animType, timeScale);
  }

  public removeSubAnimation(subAnim: subanimtype) {
    // @ts-ignore - BlzSpecialEffectRemoveSubAnimation not available in current API
    BlzSpecialEffectRemoveSubAnimation(this.handle, subAnim);
  }

  public resetScaleMatrix() {
    EXEffectMatReset(this.handle);
  }

  public setAlpha(alpha: number) {
    // @ts-ignore - BlzSetSpecialEffectAlpha not available in current API
    BlzSetSpecialEffectAlpha(this.handle, alpha);
  }

  public setColor(red: number, green: number, blue: number) {
    // @ts-ignore - BlzSetSpecialEffectColor not available in current API
    BlzSetSpecialEffectColor(this.handle, red, green, blue);
  }

  public setColorByPlayer(whichPlayer: MapPlayer) {
    // @ts-ignore - BlzSetSpecialEffectColorByPlayer not available in current API
    BlzSetSpecialEffectColorByPlayer(this.handle, whichPlayer.handle);
  }

  public setHeight(height: number) {
    // @ts-ignore - BlzSetSpecialEffectHeight not available in current API
    BlzSetSpecialEffectHeight(this.handle, height);
  }

  public setOrientation(yaw: number, pitch: number, roll: number) {
    // @ts-ignore - BlzSetSpecialEffectOrientation not available in current API
    BlzSetSpecialEffectOrientation(this.handle, yaw, pitch, roll);
  }

  public setPitch(pitch: number) {
    // @ts-ignore - BlzSetSpecialEffectPitch not available in current API
    BlzSetSpecialEffectPitch(this.handle, pitch);
  }

  public setPoint(p: Point) {
    // @ts-ignore - BlzSetSpecialEffectPositionLoc not available in current API
    BlzSetSpecialEffectPositionLoc(this.handle, p.handle);
  }

  public setPosition(x: number, y: number, z: number) {
    // @ts-ignore - BlzSetSpecialEffectPosition not available in current API
    BlzSetSpecialEffectPosition(this.handle, x, y, z);
  }

  public setRoll(roll: number) {
    // @ts-ignore - BlzSetSpecialEffectRoll not available in current API
    BlzSetSpecialEffectRoll(this.handle, roll);
  }

  public setScaleMatrix(x: number, y: number, z: number) {
    EXEffectMatScale(this.handle, x, y, z);
  }

  public setTime(value: number) {
    // @ts-ignore - BlzSetSpecialEffectTime not available in current API
    BlzSetSpecialEffectTime(this.handle, value);
  }

  public setTimeScale(timeScale: number) {
    // @ts-ignore - BlzSetSpecialEffectTimeScale not available in current API
    BlzSetSpecialEffectTimeScale(this.handle, timeScale);
  }

  public setYaw(y: number) {
    // @ts-ignore - BlzSetSpecialEffectYaw not available in current API
    BlzSetSpecialEffectYaw(this.handle, y);
  }

  public static fromHandle(handle: effect | undefined): Effect | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
