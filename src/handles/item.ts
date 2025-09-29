/** @noSelfInFile */

/// <reference path="../types/japi.d.ts" />

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Widget } from "./widget";

export class Item extends Widget {
  declare public readonly handle: item;

  /**
   * @deprecated use `Item.create` instead.
   * @param itemId The rawcode of the item.
   * @param x The x-coordinate of the item
   * @param y The y-coordinate of the item
   * @param skinId  The skin ID of the item.
   */
  constructor(itemId: number, x: number, y: number) {
    if (Handle.initFromHandle()) {
      super();
      return;
    }
    const handle = CreateItem(itemId, x, y);
    if (handle === undefined) {
      Error("w3ts failed to create item handle.");
    }

    super(handle);
  }

  /**
   * Creates an item object at the specified coordinates.
   * @param itemId The rawcode of the item.
   * @param x The x-coordinate of the item
   * @param y The y-coordinate of the item
   * @param skinId  The skin ID of the item.
   */
  public static create(itemId: number, x: number, y: number): Item | undefined {
    const handle = CreateItem(itemId, x, y);
    if (handle != null) {
      const obj = this.getObject(handle) as Item;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  public get charges() {
    return GetItemCharges(this.handle);
  }

  public set charges(value: number) {
    SetItemCharges(this.handle, value);
  }

  public set invulnerable(flag: boolean) {
    SetItemInvulnerable(this.handle, true);
  }

  public get invulnerable() {
    return IsItemInvulnerable(this.handle);
  }

  public get level() {
    return GetItemLevel(this.handle);
  }

  /**
   * @async
   */
  get extendedTooltip() {
    // @ts-ignore - BlzGetItemExtendedTooltip not available in current API
    return BlzGetItemExtendedTooltip(this.handle) ?? "";
  }

  set extendedTooltip(tooltip: string) {
    // @ts-ignore - BlzSetItemExtendedTooltip not available in current API
    BlzSetItemExtendedTooltip(this.handle, tooltip);
  }

  /**
   * @async
   */
  get icon() {
    // @ts-ignore - BlzGetItemIconPath not available in current API
    return BlzGetItemIconPath(this.handle) ?? "";
  }

  set icon(path: string) {
    // @ts-ignore - BlzSetItemIconPath not available in current API
    BlzSetItemIconPath(this.handle, path);
  }

  /**
   * @async
   */
  get name() {
    return GetItemName(this.handle) ?? "";
  }

  set name(value: string) {
    // @ts-ignore - BlzSetItemName not available in current API
    BlzSetItemName(this.handle, value);
  }

  /**
   * @async
   */
  get tooltip() {
    // @ts-ignore - BlzGetItemTooltip not available in current API
    return BlzGetItemTooltip(this.handle) ?? "";
  }

  set tooltip(tooltip: string) {
    // @ts-ignore - BlzSetItemTooltip not available in current API
    BlzSetItemTooltip(this.handle, tooltip);
  }

  public get pawnable() {
    return IsItemPawnable(this.handle);
  }

  public set pawnable(flag: boolean) {
    SetItemPawnable(this.handle, flag);
  }

  public get player() {
    return GetItemPlayer(this.handle);
  }

  public get type() {
    return GetItemType(this.handle);
  }

  public get typeId() {
    return GetItemTypeId(this.handle);
  }

  public get userData() {
    return GetItemUserData(this.handle);
  }

  public set userData(value: number) {
    SetItemUserData(this.handle, value);
  }

  public get visible() {
    return IsItemVisible(this.handle);
  }

  public set visible(flag: boolean) {
    SetItemVisible(this.handle, flag);
  }

  public override get x() {
    return GetItemX(this.handle);
  }

  public override set x(value: number) {
    SetItemPosition(this.handle, value, this.y);
  }

  public override get y() {
    return GetItemY(this.handle);
  }

  public override set y(value: number) {
    SetItemPosition(this.handle, this.x, value);
  }

  public addAbility(abilCode: number) {
    // @ts-ignore - BlzItemAddAbility not available in current API
    BlzItemAddAbility(this.handle, abilCode);
  }

  public getAbility(abilCode: number) {
    // @ts-ignore - BlzGetItemAbility not available in current API
    return BlzGetItemAbility(this.handle, abilCode);
  }

  public getAbilityByIndex(index: number) {
    // @ts-ignore - BlzGetItemAbilityByIndex not available in current API
    return BlzGetItemAbilityByIndex(this.handle, index);
  }

  public removeAbility(abilCode: number) {
    // @ts-ignore - BlzItemRemoveAbility not available in current API
    BlzItemRemoveAbility(this.handle, abilCode);
  }

  public destroy() {
    RemoveItem(this.handle);
  }

  public getField(field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    switch (fieldType) {
      case "unitbooleanfield":
        // @ts-ignore - BlzGetItemBooleanField not available in current API
        return BlzGetItemBooleanField(this.handle, field as itembooleanfield);
      case "unitintegerfield":
        // @ts-ignore - BlzGetItemIntegerField not available in current API
        return BlzGetItemIntegerField(this.handle, field as itemintegerfield);
      case "unitrealfield":
        // @ts-ignore - BlzGetItemRealField not available in current API
        return BlzGetItemRealField(this.handle, field as itemrealfield);
      case "unitstringfield":
        // @ts-ignore - BlzGetItemStringField not available in current API
        return BlzGetItemStringField(this.handle, field as itemstringfield);
      default:
        return 0;
    }
  }

  public isOwned() {
    return IsItemOwned(this.handle);
  }

  public isPawnable() {
    return IsItemPawnable(this.handle);
  }

  public isPowerup() {
    return IsItemPowerup(this.handle);
  }

  public isSellable() {
    return IsItemSellable(this.handle);
  }

  public setDropId(unitId: number) {
    SetItemDropID(this.handle, unitId);
  }

  public setDropOnDeath(flag: boolean) {
    SetItemDropOnDeath(this.handle, flag);
  }

  public setDroppable(flag: boolean) {
    SetItemDroppable(this.handle, flag);
  }

  public setField(
    field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield,
    value: boolean | number | string
  ) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
      // @ts-ignore - BlzSetItemBooleanField not available in current API
      return BlzSetItemBooleanField(this.handle, field as itembooleanfield, value);
    }
    if (fieldType === "unitintegerfield" && typeof value === "number") {
      // @ts-ignore - BlzSetItemIntegerField not available in current API
      return BlzSetItemIntegerField(this.handle, field as itemintegerfield, value);
    }
    if (fieldType === "unitrealfield" && typeof value === "number") {
      // @ts-ignore - BlzSetItemRealField not available in current API
      return BlzSetItemRealField(this.handle, field as itemrealfield, value);
    }
    if (fieldType === "unitstringfield" && typeof value === "string") {
      // @ts-ignore - BlzSetItemStringField not available in current API
      return BlzSetItemStringField(this.handle, field as itemstringfield, value);
    }

    return false;
  }

  public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
    SetItemPlayer(this.handle, whichPlayer.handle, changeColor);
  }

  public setPoint(whichPoint: Point) {
    SetItemPosition(this.handle, whichPoint.x, whichPoint.y);
  }

  public setPosition(x: number, y: number) {
    SetItemPosition(this.handle, x, y);
  }

  public static override fromEvent() {
    return this.fromHandle(GetManipulatedItem());
  }

  public static override fromHandle(handle: item | undefined): Item | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static isIdPawnable(itemId: number) {
    return IsItemIdPawnable(itemId);
  }

  public static isIdPowerup(itemId: number) {
    return IsItemIdPowerup(itemId);
  }

  public static isIdSellable(itemId: number) {
    return IsItemIdSellable(itemId);
  }
}
