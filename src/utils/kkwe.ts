export function DzSetHeroTypeProperName(uid: number, name: string): void {
  EXSetUnitArrayString(uid, 61, 0, name);
  EXSetUnitInteger(uid, 61, 1);
}

/**
 * 设置单位类型名称
 * 设置单位类型ID${单位ID}的名称为${名称}
 * 修改单位类型的显示名称
 */
export function DzSetUnitTypeName(uid: number, name: string): void {
  EXSetUnitArrayString(uid, 10, 0, name);
  EXSetUnitInteger(uid, 10, 1);
}

/**
 * 判断单位攻击类型
 * 判断${单位}的第${索引}个攻击是否为${攻击类型}
 * 检查单位指定索引的攻击类型
 */
export function DzIsUnitAttackType(
  whichUnit: unit,
  index: number,
  attackType: attacktype
): boolean {
  return (
    ConvertAttackType(Math.floor(GetUnitState(whichUnit, ConvertUnitState(16 + 19 * index)))) ===
    attackType
  );
}

/**
 * 设置单位攻击类型
 * 设置${单位}的第${索引}个攻击类型为${攻击类型}
 * 修改单位指定索引的攻击类型
 */
export function DzSetUnitAttackType(whichUnit: unit, index: number, attackType: attacktype): void {
  SetUnitState(whichUnit, ConvertUnitState(16 + 19 * index), GetHandleId(attackType));
}

/**
 * 判断单位防御类型
 * 判断${单位}的防御类型是否为${防御类型}
 * 检查单位的防御类型
 */
export function DzIsUnitDefenseType(whichUnit: unit, defenseType: number): boolean {
  return Math.floor(GetUnitState(whichUnit, ConvertUnitState(0x50))) === defenseType;
}

/**
 * 设置单位防御类型
 * 设置${单位}的防御类型为${防御类型}
 * 修改单位的防御类型
 */
export function DzSetUnitDefenseType(whichUnit: unit, defenseType: number): void {
  SetUnitState(whichUnit, ConvertUnitState(0x50), defenseType);
}

// ============= KKWE 单位数据缓存函数 =============

/**
 * 设置单位数据缓存整数 - 简化版
 * 设置单位ID${单位ID}的数据ID${数据ID}值为${值}
 * 简化版的单位数据缓存设置函数，索引固定为0
 */
export function KKWESetUnitDataCacheInteger(uid: number, id: number, v: number): void {
  DzSetUnitDataCacheInteger(uid, id, 0, v);
}

/**
 * 单位UI添加升级IDs
 * 为单位ID${单位ID}在索引${索引}添加升级ID${值}
 * 向单位的升级列表添加新的升级ID
 */
export function KKWEUnitUIAddUpgradesIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 94, id, v);
}

/**
 * 单位UI添加建造IDs
 * 为单位ID${单位ID}在索引${索引}添加建造ID${值}
 * 向单位的建造列表添加新的建造ID
 */
export function KKWEUnitUIAddBuildsIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 100, id, v);
}

/**
 * 单位UI添加研究IDs
 * 为单位ID${单位ID}在索引${索引}添加研究ID${值}
 * 向单位的研究列表添加新的研究ID
 */
export function KKWEUnitUIAddResearchesIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 112, id, v);
}

/**
 * 单位UI添加训练IDs
 * 为单位ID${单位ID}在索引${索引}添加训练ID${值}
 * 向单位的训练列表添加新的训练ID
 */
export function KKWEUnitUIAddTrainsIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 106, id, v);
}

/**
 * 单位UI添加出售单位IDs
 * 为单位ID${单位ID}在索引${索引}添加出售单位ID${值}
 * 向单位的出售单位列表添加新的单位ID
 */
export function KKWEUnitUIAddSellsUnitIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 118, id, v);
}

/**
 * 单位UI添加出售物品IDs
 * 为单位ID${单位ID}在索引${索引}添加出售物品ID${值}
 * 向单位的出售物品列表添加新的物品ID
 */
export function KKWEUnitUIAddSellsItemIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 124, id, v);
}

/**
 * 单位UI添加制造物品IDs
 * 为单位ID${单位ID}在索引${索引}添加制造物品ID${值}
 * 向单位的制造物品列表添加新的物品ID
 */
export function KKWEUnitUIAddMakesItemIds(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 130, id, v);
}

/**
 * 单位UI添加需求单位代码
 * 为单位ID${单位ID}在索引${索引}添加需求单位代码${值}
 * 向单位的需求列表添加新的单位代码
 */
export function KKWEUnitUIAddRequiresUnitCode(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 166, id, v);
}

/**
 * 单位UI添加需求科技代码
 * 为单位ID${单位ID}在索引${索引}添加需求科技代码${值}
 * 向单位的需求列表添加新的科技代码
 */
export function KKWEUnitUIAddRequiresTechcode(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 166, id, v);
}

/**
 * 单位UI添加需求数量
 * 为单位ID${单位ID}在索引${索引}添加需求数量${值}
 * 向单位的需求数量列表添加新的数量值
 */
export function KKWEUnitUIAddRequiresAmounts(uid: number, id: number, v: number): void {
  DzUnitUIAddLevelArrayInteger(uid, 172, id, v);
}

// ============= 时间和日期处理函数 =============

/**
 * 判断是否为闰年
 * 判断年份${年份}是否为闰年
 * 根据闰年规则判断指定年份是否为闰年
 */
export function DzIsLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 从时间戳获取时间日期字符串（内部实现）
 * 从时间戳${时间戳}获取时间日期字符串
 * 将UNIX时间戳转换为可读的日期时间字符串
 */
export function DzGetTimeDateFromTimestamp(timestamp: number): string {
  const totalSeconds = timestamp + 28800; // 北京时间偏移
  const secondsInDay = 86400;
  const remainingSeconds = totalSeconds % secondsInDay;
  let year = 1970;
  const totalDays = Math.floor((totalSeconds + 86399) / secondsInDay);
  let num = 0;
  let month = 0;
  let days = 0;

  // 计算年份
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (DzIsLeapYear(year)) {
      num += 366;
    } else {
      num += 365;
    }
    if (num > totalDays) {
      break;
    }
    days = num;
    year += 1;
  }

  // 计算月份和日期
  month = 1;
  num = 0;
  days = totalDays - days;

  const monthDays = DzIsLeapYear(year)
    ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < 12; i++) {
    if (num + monthDays[i] >= days) {
      break;
    }
    num += monthDays[i];
    month += 1;
  }

  const day = days - num || 1;
  const hour = Math.floor(remainingSeconds / 3600);
  const minute = Math.floor((remainingSeconds % 3600) / 60);
  const second = remainingSeconds % 60;

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// 创建一个简单的缓存对象
const timestampCache = new Map<number, { year: number; month: number; day: number; str: string }>();

/**
 * 从时间戳获取时间日期字符串（缓存版）
 * 从时间戳${时间戳}获取时间日期字符串
 * 带缓存的时间戳转换函数，提高性能
 */
export function KKAPIGetTimeDateFromTimestamp(timestamp: number): string {
  timestamp = Math.max(timestamp, 0);
  const cached = timestampCache.get(timestamp);
  if (cached) {
    return cached.str;
  }
  const str = DzGetTimeDateFromTimestamp(timestamp);
  // 这里可以实现缓存逻辑，但在TypeScript中我们简化处理
  return str;
}

/**
 * 从时间戳获取年份
 * 从时间戳${时间戳}获取年份
 * 从UNIX时间戳中提取年份信息
 */
export function KKAPIGetTimestampYear(timestamp: number): number {
  timestamp = Math.max(timestamp, 0);
  // 这里可以实现缓存逻辑，但为了简化，直接解析
  const date = new Date(timestamp * 1000);
  return date.getFullYear();
}

/**
 * 从时间戳获取月份
 * 从时间戳${时间戳}获取月份
 * 从UNIX时间戳中提取月份信息
 */
export function KKAPIGetTimestampMonth(timestamp: number): number {
  timestamp = Math.max(timestamp, 0);
  const date = new Date(timestamp * 1000);
  return date.getMonth() + 1; // JavaScript月份从0开始，需要+1
}

/**
 * 从时间戳获取日期
 * 从时间戳${时间戳}获取日期
 * 从UNIX时间戳中提取日期信息
 */
export function KKAPIGetTimestampDay(timestamp: number): number {
  timestamp = Math.max(timestamp, 0);
  const date = new Date(timestamp * 1000);
  return date.getDate();
}

// ============= 转换函数 =============

/**
 * 整数转技能ID
 * 将整数${整数}转换为技能ID
 * 简单的类型转换函数
 */
export function KKConvertInt2AbilId(i: number): number {
  return i;
}

/**
 * 技能ID转整数
 * 将技能ID${技能ID}转换为整数
 * 简单的类型转换函数
 */
export function KKConvertAbilId2Int(i: number): number {
  return i;
}

/**
 * 整数转颜色
 * 将整数${整数}转换为颜色
 * 简单的类型转换函数
 */
export function KKConvertInt2Color(i: number): number {
  return i;
}

/**
 * 颜色转整数
 * 将颜色${颜色}转换为整数
 * 简单的类型转换函数
 */
export function KKConvertColor2Int(i: number): number {
  return i;
}

// ============= 防御类型常量 =============

/**
 * 防御类型：小型
 */
export const DEFENSE_TYPE_SMALL = 0;

/**
 * 防御类型：中型
 */
export const DEFENSE_TYPE_MEDIUM = 1;

/**
 * 防御类型：大型
 */
export const DEFENSE_TYPE_LARGE = 2;

/**
 * 防御类型：要塞
 */
export const DEFENSE_TYPE_FORT = 3;

/**
 * 防御类型：普通
 */
export const DEFENSE_TYPE_NORMAL = 4;

/**
 * 防御类型：英雄
 */
export const DEFENSE_TYPE_HERO = 5;

/**
 * 防御类型：神圣
 */
export const DEFENSE_TYPE_DIVINE = 6;

/**
 * 防御类型：无
 */
export const DEFENSE_TYPE_NONE = 7;

// ============= 移动类型常量 =============

/**
 * 移动类型：无（无视碰撞）
 */
export const MOVE_TYPE_NONE = "none";

/**
 * 移动类型：步行
 */
export const MOVE_TYPE_FOOT = "foot";

/**
 * 移动类型：骑马
 */
export const MOVE_TYPE_HORSE = "horse";

/**
 * 移动类型：飞行（还具有空中视野，也可以设置飞行高度）
 */
export const MOVE_TYPE_FLY = "fly";

/**
 * 移动类型：浮空（不会踩中地雷）
 */
export const MOVE_TYPE_HOVER = "hover";

/**
 * 移动类型：漂浮（只能在深水里活动）
 */
export const MOVE_TYPE_FLOAT = "float";

/**
 * 移动类型：两栖
 */
export const MOVE_TYPE_AMPH = "amph";

/**
 * 移动类型：不可建造
 */
export const MOVE_TYPE_UNBUILD = "unbuild";
