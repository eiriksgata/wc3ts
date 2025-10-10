/** @noSelfInFile **/
/// <reference path="base.d.ts" />

/**
 * 改变商店物品冷却时间
 * 改变商店物品冷却时间
 * 修改商店中物品的冷却时间
 */
declare function DzAPI_Map_ChangeStoreItemCoolDown(...option: any[]): any;

/**
 * 改变商店物品数量
 * 改变商店物品数量
 * 修改商店中物品的库存数量
 */
declare function DzAPI_Map_ChangeStoreItemCount(...option: any[]): any;

/**
 * 获取活动数据
 * 获取活动数据
 * 获取当前活动的相关数据信息
 */
declare function DzAPI_Map_GetActivityData(): string;

/**
 * 获取游戏开始时间
 * 获取游戏开始时间
 * 返回游戏开始的时间戳
 */
declare function DzAPI_Map_GetGameStartTime(): number;

/**
 * 获取公会名称
 * 获取${玩家}的公会名称
 * 返回指定玩家所在公会的名称
 */
declare function DzAPI_Map_GetGuildName(whichPlayer: player): string;

/**
 * 获取公会职位
 * 获取${玩家}的公会职位
 * 返回指定玩家在公会中的职位等级
 */
declare function DzAPI_Map_GetGuildRole(whichPlayer: player): number;

/**
 * 获取天梯等级
 * 获取${玩家}的天梯等级
 * 返回指定玩家的天梯等级
 */
declare function DzAPI_Map_GetLadderLevel(whichPlayer: player): number;

/**
 * 获取天梯排名
 * 获取${玩家}的天梯排名
 * 返回指定玩家的天梯排名
 */
declare function DzAPI_Map_GetLadderRank(whichPlayer: player): number;

/**
 * 获取地图配置
 * 获取地图配置${键名}
 * 根据键名获取地图的配置信息
 */
declare function DzAPI_Map_GetMapConfig(key: string): string;

/**
 * 获取地图等级
 * 获取${玩家}的地图等级
 * 返回指定玩家在当前地图的等级
 */
declare function DzAPI_Map_GetMapLevel(whichPlayer: player): number;

/**
 * 获取地图等级排名
 * 获取${玩家}的地图等级排名
 * 返回指定玩家在当前地图的等级排名
 */
declare function DzAPI_Map_GetMapLevelRank(whichPlayer: player): number;

/**
 * 获取匹配类型
 * 获取当前匹配类型
 * 返回当前游戏的匹配类型
 */
declare function DzAPI_Map_GetMatchType(): number;

/**
 * 获取平台VIP等级
 * 获取${玩家}的平台VIP等级
 * 返回指定玩家的平台VIP等级
 */
declare function DzAPI_Map_GetPlatformVIP(whichPlayer: player): number;

/**
 * 获取公共存档
 * 获取${玩家}的公共存档${键名}
 * 获取指定玩家的公共存档数据
 */
declare function DzAPI_Map_GetPublicArchive(whichPlayer: player, key: string): string;

/**
 * 获取服务器存档掉落
 * 获取${玩家}的服务器存档掉落${键名}
 * 获取指定玩家的服务器存档掉落数据
 */
declare function DzAPI_Map_GetServerArchiveDrop(whichPlayer: player, key: string): string;

/**
 * 获取服务器存档装备
 * 获取${玩家}的服务器存档装备${键名}
 * 获取指定玩家的服务器存档装备数据
 */
declare function DzAPI_Map_GetServerArchiveEquip(whichPlayer: player, key: string): number;

/**
 * 获取服务器数值
 * 获取${玩家}的服务器数值${键名}
 * 获取指定玩家的服务器存储数值
 */
declare function DzAPI_Map_GetServerValue(whichPlayer: player, key: string): string;

/**
 * 获取服务器数值错误码
 * 获取${玩家}的服务器数值错误码
 * 获取指定玩家的服务器数值操作错误码
 */
declare function DzAPI_Map_GetServerValueErrorCode(whichPlayer: player): number;

/**
 * 获取用户ID
 * 获取用户ID
 * 获取玩家的唯一用户标识
 */
declare function DzAPI_Map_GetUserID(...option: any[]): any;

/**
 * 检查商城物品
 * 检查${玩家}是否拥有商城物品${键名}
 * 检查指定玩家是否拥有指定的商城物品
 */
declare function DzAPI_Map_HasMallItem(whichPlayer: player, key: string): boolean;

/**
 * 是否为蓝钻VIP
 * 检查${玩家}是否为蓝钻VIP
 * 检查指定玩家是否为蓝钻VIP用户
 */
declare function DzAPI_Map_IsBlueVIP(whichPlayer: player): boolean;

/**
 * 是否为RPG天梯
 * 检查当前是否为RPG天梯模式
 * 检查当前游戏模式是否为RPG天梯
 */
declare function DzAPI_Map_IsRPGLadder(): boolean;

/**
 * 是否为RPG大厅
 * 检查当前是否为RPG大厅模式
 * 检查当前游戏模式是否为RPG大厅
 */
declare function DzAPI_Map_IsRPGLobby(): boolean;

/**
 * 是否为红钻VIP
 * 检查${玩家}是否为红钻VIP
 * 检查指定玩家是否为红钻VIP用户
 */
declare function DzAPI_Map_IsRedVIP(whichPlayer: player): boolean;

/**
 * 设置天梯玩家统计
 * 设置${玩家}的天梯统计${键名}为${数值}
 * 设置指定玩家的天梯统计数据
 */
declare function DzAPI_Map_Ladder_SetPlayerStat(
  whichPlayer: player,
  key: string,
  value: string
): void;

/**
 * 设置天梯统计
 * 设置${玩家}的天梯统计${键名}为${数值}
 * 设置指定玩家的天梯统计信息
 */
declare function DzAPI_Map_Ladder_SetStat(whichPlayer: player, key: string, value: string): void;

/**
 * 任务完成
 * ${玩家}完成任务${键名}数值${数值}
 * 标记指定玩家完成某个任务
 */
declare function DzAPI_Map_MissionComplete(whichPlayer: player, key: string, value: string): void;

/**
 * ORPG触发器
 * 触发${玩家}的ORPG事件${键名}
 * 触发指定玩家的ORPG相关事件
 */
declare function DzAPI_Map_OrpgTrigger(whichPlayer: player, key: string): void;

/**
 * 保存公共存档
 * 保存${玩家}的公共存档${键名}为${数值}
 * 保存指定玩家的公共存档数据，返回是否成功
 */
declare function DzAPI_Map_SavePublicArchive(
  whichPlayer: player,
  key: string,
  value: string
): boolean;

/**
 * 保存服务器数值
 * 保存${玩家}的服务器数值${键名}为${数值}
 * 保存指定玩家的服务器数值，返回是否成功
 */
declare function DzAPI_Map_SaveServerValue(
  whichPlayer: player,
  key: string,
  value: string
): boolean;

/**
 * 设置统计数据
 * 设置${玩家}的统计${键名}为${数值}
 * 设置指定玩家的统计数据
 */
declare function DzAPI_Map_Stat_SetStat(whichPlayer: player, key: string, value: string): void;

/**
 * 统计数据
 * 统计数据操作
 * 执行统计数据相关操作
 */
declare function DzAPI_Map_Statistics(...option: any[]): any;

/**
 * 切换商店
 * 切换商店状态
 * 切换商店的显示或隐藏状态
 */
declare function DzAPI_Map_ToggleStore(...option: any[]): any;

/**
 * 更新玩家英雄
 * 更新玩家英雄信息
 * 更新玩家的英雄相关信息
 */
declare function DzAPI_Map_UpdatePlayerHero(...option: any[]): any;

/**
 * 使用消耗品
 * ${玩家}使用消耗品${键名}
 * 玩家使用指定的消耗品物品
 */
declare function DzAPI_Map_UseConsumablesItem(whichPlayer: player, key: string): void;

/**
 * 改变地形
 * 改变地形
 * 修改地图的地形数据
 */
declare function DzChangeTerrain(...option: any[]): any;

/**
 * 点击
 * 点击${frame}
 *
 */
declare function DzClickFrame(frame: framehandle): void;

/**
 * 新建Frame
 * 新建Frame名字:${frame}父节点:${parent}ID:${Id}
 * 名字为fdf文件中的名字，ID默认填0。重复创建同名Frame会导致游戏退出时显示崩溃消息，如需避免可以使用Tag创建
 */
declare function DzCreateFrame(frame: string, parent: framehandle, id: number): framehandle;

/**
 * 新建Frame[Tag]
 * 创建类型:${type}名字:${frame}父节点:${parent}模版:${template}ID:${Id}
 * 此处名字可以自定义，类型和模版填写fdf文件中的内容。通过此函数创建的Frame无法获取到子Frame。
 */
declare function DzCreateFrameByTagName(
  frameType: string,
  name: string,
  parent: framehandle,
  template: string,
  id: number
): framehandle;
declare function DzCreateSimpleFrame(frame: string, parent: framehandle, id: number): framehandle;

/**
 * 销毁
 * 销毁${frame}
 * 销毁一个被重复创建过的Frame会导致游戏崩溃，重复创建同名Frame请使用Tag创建
 */
declare function DzDestroyFrame(frame: framehandle): void;

/**
 * 设置可破坏物位置[BZAPI]
 * 设置${可破坏物}的坐标为(${x},${y})
 *
 */
declare function DzDestructablePosition(d: destructable, x: number, y: number): void;

/**
 * 原生-使用宽屏模式
 * 设置宽屏模式:${bool}
 *
 */
declare function DzEnableWideScreen(enable: boolean): void;

/**
 * 异步执行函数
 * 异步执行函数${funcName}
 *
 */
declare function DzExecuteFunc(funcName: string): void;

/**
 * 限制鼠标移动
 * 限制鼠标在${frame}内:${enable}
 *
 */
declare function DzFrameCageMouse(frame: framehandle, enable: boolean): void;

/**
 * 清空所有锚点
 * 清空${frame}的全部锚点
 *
 */
declare function DzFrameClearAllPoints(frame: framehandle): void;

/**
 * 原生-修改游戏渲染黑边范围
 * 修改游戏渲染黑边:上方高度:${upperHeight}下方高度:${bottomHeight}
 *
 */
declare function DzFrameEditBlackBorders(upperHeight: number, bottomHeight: number): void;

/**
 * 获取子Frame
 * 获取名字为${name}的子FrameID:${Id}
 * ID默认填0，同名时优先获取最后被创建的。非Simple类的Frame类型都用此函数来获取子Frame。
 */
declare function DzFrameFindByName(name: string, id: number): framehandle;

/**
 * 获取Frame的透明度(0-255)
 * 获取${Frame}的透明度
 *
 */
declare function DzFrameGetAlpha(frame: framehandle): number;

/**
 * 原生-玩家聊天信息框
 * 玩家聊天信息框
 *
 */
declare function DzFrameGetChatMessage(): framehandle;

/**
 * 原生-技能按钮
 * 技能按钮:(${row},${calumn})
 * 参考物编中的技能按钮(x,y)坐标
 */
declare function DzFrameGetCommandBarButton(row: number, column: number): framehandle;

/**
 * 控件是否启用
 * ${frame}是否启用
 *
 */
declare function DzFrameGetEnable(frame: framehandle): boolean;

/**
 * 获取Frame的高度[NEW]
 * 获取${frame}的高度
 *
 */
declare function DzFrameGetHeight(frame: framehandle): number;

/**
 * 原生-英雄按钮
 * 英雄按钮:${buttnoid}
 * 左侧的英雄头像，参数表示第N+1个英雄，索引从0开始
 */
declare function DzFrameGetHeroBarButton(buttonId: number): framehandle;

/**
 * 原生-英雄血条
 * 英雄血条:${buttnoid}
 * 左侧的英雄头像下的血条，参数表示第N+1个英雄，索引从0开始
 */
declare function DzFrameGetHeroHPBar(buttonId: number): framehandle;

/**
 * 原生-英雄蓝条
 * 英雄蓝条:${buttnoid}
 * 左侧的英雄头像下的蓝条，参数表示第N+1个英雄，索引从0开始
 */
declare function DzFrameGetHeroManaBar(buttonId: number): framehandle;

/**
 * 原生-物品栏按钮
 * 物品栏按钮:${buttnoid}
 * 索引从0开始
 */
declare function DzFrameGetItemBarButton(buttonId: number): framehandle;

/**
 * 原生-小地图
 * 小地图
 *
 */
declare function DzFrameGetMinimap(): framehandle;

/**
 * 原生-小地图按钮
 * 小地图按钮:${buttnoid}
 * 小地图右侧竖排按钮，索引从0开始
 */
declare function DzFrameGetMinimapButton(buttonId: number): framehandle;

/**
 * 获取Frame的名称[NEW]
 * 获取${frame}的名称
 *
 */
declare function DzFrameGetName(frame: framehandle): string;

/**
 * 获取Frame的Parent[NEW]
 * 获取${frame}的Parent
 *
 */
declare function DzFrameGetParent(frame: framehandle): framehandle;

/**
 * 原生-单位大头像
 * 单位大头像
 * 小地图右侧的大头像
 */
declare function DzFrameGetPortrait(): framehandle;

/**
 * 获取Frame内的文字
 * 获取${buttnoid}的文字
 * （支持EditBox,TextFrame,TextArea,SimpleFontString）
 */
declare function DzFrameGetText(frame: framehandle): string;

/**
 * 获取Frame的字数限制
 * 获取${frame}的字数限制
 * （支持EditBox）
 */
declare function DzFrameGetTextSizeLimit(frame: framehandle): number;

/**
 * 原生-鼠标提示
 * 鼠标提示
 * 鼠标移动到物品或技能按钮上显示的提示窗，初始位于技能栏上方
 */
declare function DzFrameGetTooltip(): framehandle;

/**
 * 原生-上方消息框
 * 上方消息框
 * 高维修费用等消息
 */
declare function DzFrameGetTopMessage(): framehandle;

/**
 * 原生-系统消息框
 * 系统消息框
 * 包含显示消息给玩家及显示Debug消息等，
 */
declare function DzFrameGetUnitMessage(): framehandle;

/**
 * 原生-界面按钮
 * 界面按钮:${buttnoid}
 * 左上的菜单等按钮，索引从0开始
 */
declare function DzFrameGetUpperButtonBarButton(buttonId: number): framehandle;

/**
 * 获取当前值
 * 获取${frame}当前值
 * （支持Slider、SimpleStatusBar、StatusBar）
 */
declare function DzFrameGetValue(frame: framehandle): number;

/**
 * 原生-隐藏界面元素
 * 隐藏所有界面UI
 * 不再在地图初始化时调用则会残留小地图和时钟模型
 */
declare function DzFrameHideInterface(): void;

/**
 * 设置绝对位置
 * 设置${frame}的${Point}锚点在(${x},${y})
 *
 */
declare function DzFrameSetAbsolutePoint(
  frame: framehandle,
  point: number,
  x: number,
  y: number
): void;

/**
 * 移动所有锚点到Frame
 * 移动${frame}的所有锚点到${frame}上
 *
 */
declare function DzFrameSetAllPoints(frame: framehandle, relativeFrame: framehandle): boolean;

/**
 * 设置透明度(0-255)
 * 设置${frame}的透明度为${alpha}
 *
 */
declare function DzFrameSetAlpha(frame: framehandle, alpha: number): void;

/**
 * 设置动画
 * 设置${frame}播放序号${alpha}的动画自动播放:${autocast}
 *
 */
declare function DzFrameSetAnimate(frame: framehandle, animId: number, autocast: boolean): void;

/**
 * 设置动画进度
 * 设置${frame}的动画进度为:${offset}
 * 自动播放为false是可用
 */
declare function DzFrameSetAnimateOffset(frame: framehandle, offset: number): void;

/**
 * 启用/禁用
 * 设置${frame}启用:${bottomHeight}
 *
 */
declare function DzFrameSetEnable(name: framehandle, enable: boolean): void;

/**
 * 设置焦点
 * 设置${frame}获取焦点${enable}
 *
 */
declare function DzFrameSetFocus(frame: framehandle, enable: boolean): boolean;

/**
 * 设置字体[NEW]
 * 设置${frame}的字体为${font},大小${height},flag${flag}
 * 支持EditBox、SimpleFontString、SimpleMessageFrame以及非SimpleFrame类型的例如TEXT，flag作用未知
 */
declare function DzFrameSetFont(
  frame: framehandle,
  fileName: string,
  height: number,
  flag: number
): void;

/**
 * 设置最大/最小值
 * 设置${frame}的最小值为${Min}最大值为${Max}
 * （支持Slider、SimpleStatusBar、StatusBar）
 */
declare function DzFrameSetMinMaxValue(
  frame: framehandle,
  minValue: number,
  maxValue: number
): void;

/**
 * 设置模型
 * 设置${frame}的模型文件为${modelFile}ModelType:${modelType}Flag:${flag}
 *
 */
declare function DzFrameSetModel(
  frame: framehandle,
  modelFile: string,
  modelType: number,
  flag: number
): void;

/**
 * 设置父窗口[NEW]
 * 设置${frame}的父窗口为${frame2}
 *
 */
declare function DzFrameSetParent(frame: framehandle, parent: framehandle): void;

/**
 * 设置相对位置
 * 设置${frame}的${Point}锚点(跟随Frame-->${relativeFrame}的${relativePoint}锚点)偏移(${x},${y})
 *
 */
declare function DzFrameSetPoint(
  frame: framehandle,
  point: number,
  relativeFrame: framehandle,
  relativePoint: number,
  x: number,
  y: number
): void;

/**
 * 设置优先级[NEW]
 * 设置${frame}优先级:${int}
 *
 */
declare function DzFrameSetPriority(frame: framehandle, priority: number): void;

/**
 * 设置缩放
 * 设置${frame}的缩放${scale}
 *
 */
declare function DzFrameSetScale(frame: framehandle, scale: number): void;

/**
 * 注册UI事件回调(funcname)
 * 注册${frame}的${事件类型}事件运行:${funcname}是否同步:${sync}
 *
 */
declare function DzFrameSetScript(
  frame: framehandle,
  eventId: number,
  func: string,
  sync: boolean
): void;

/**
 * 注册UI事件回调(funchandle)
 * 注册${frame}的${事件类型}事件运行:${codehandle}是否同步:${sync}
 * 运行触发器时需要打开同步
 */
declare function DzFrameSetScriptByCode(
  frame: framehandle,
  eventId: number,
  funcHandle: () => void,
  sync: boolean
): void;

/**
 * 设置大小
 * 设置${frame}（宽${w}高${h}）
 *
 */
declare function DzFrameSetSize(frame: framehandle, w: number, h: number): void;

/**
 * 设置步进值
 * 设置${frame}的步进值为${step}
 * （支持Slider）
 */
declare function DzFrameSetStepValue(frame: framehandle, step: number): void;

/**
 * 设置文本
 * 设置${frame}的文本为${string}
 * (支持EditBox,TextFrame,TextArea,SimpleFontString、GlueEditBoxWar3、SlashChatBox、TimerTextFrame、TextButtonFrame、GlueTextButton)
 */
declare function DzFrameSetText(frame: framehandle, text: string): void;

/**
 * 设置对齐方式[NEW]
 * 设置${frame}的对齐方式为${align}
 * 支持TextFrame、SimpleFontString、SimpleMessageFrame
 */
declare function DzFrameSetTextAlignment(frame: framehandle, align: number): void;

/**
 * 设置文本颜色
 * 设置${frame}的文本颜色为${color}
 * 修改Frame的文本显示颜色
 */
declare function DzFrameSetTextColor(frame: framehandle, color: number): void;

/**
 * 设置字数限制
 * 设置${frame}的字数限制为${size}
 *
 */
declare function DzFrameSetTextSizeLimit(frame: framehandle, size: number): void;

/**
 * 设置贴图
 * 设置${frame}的贴图为:${texture}是否平铺${flag}
 * （支持Backdrop、SimpleStatusBar）
 */
declare function DzFrameSetTexture(frame: framehandle, texture: string, flag: number): void;

/**
 * 设置提示
 * 设置${frame}的提示Frame为${tooltip}
 * 设置tooltip
 */
declare function DzFrameSetTooltip(frame: framehandle, tooltip: framehandle): void;
declare function DzFrameSetUpdateCallback(func: string): void;
declare function DzFrameSetUpdateCallbackByCode(funcHandle: () => void): void;

/**
 * 设置当前值
 * 设置${frame}的当前值为${value}
 * （支持Slider、SimpleStatusBar、StatusBar）
 */
declare function DzFrameSetValue(frame: framehandle, value: number): void;

/**
 * 设置颜色
 * 设置${frame}颜色${color}
 *
 */
declare function DzFrameSetVertexColor(frame: framehandle, color: number): void;

/**
 * 显示/隐藏
 * 设置${frame}显示:${bottomHeight}
 *
 */
declare function DzFrameShow(frame: framehandle, enable: boolean): void;
declare function DzGetClientHeight(...option: any[]): any;
declare function DzGetClientWidth(...option: any[]): any;

/**
 * 取RGBA色值
 * 红色:${Red}绿色:${Green}蓝色:${Blue}透明度:${Alpha}
 * 返回一个整数，用于设置Frame颜色
 */
declare function DzGetColor(r: number, g: number, b: number, a: number): number;
declare function DzGetConvertWorldPositionX(...option: any[]): any;
declare function DzGetConvertWorldPositionY(...option: any[]): any;

/**
 * 原生-游戏UI
 * 游戏UI
 * 一般用作创建自定义UI的父节点
 */
declare function DzGetGameUI(): framehandle;

/**
 * 获取客户端语言[NEW]
 * 获取客户端语言
 * 对不同语言客户端返回不同
 */
declare function DzGetLocale(): string;

/**
 * 鼠标所在的Frame控件指针
 * 不是所有类型的Frame都能响应鼠标，能响应的有BUTTON，TEXT等
 */
declare function DzGetMouseFocus(): framehandle;

/**
 * 获取鼠标在游戏内的坐标X
 */
declare function DzGetMouseTerrainX(): number;

/**
 * 获取鼠标在游戏内的坐标Y
 *
 */
declare function DzGetMouseTerrainY(): number;

/**
 * 获取鼠标在游戏内的坐标Z
 *
 */
declare function DzGetMouseTerrainZ(): number;

/**
 * 获取鼠标在屏幕的坐标X
 *
 */
declare function DzGetMouseX(): number;

/**
 * 获取鼠标游戏窗口坐标X
 *
 */
declare function DzGetMouseXRelative(): number;

/**
 * 获取鼠标在屏幕的坐标Y
 *
 */
declare function DzGetMouseY(): number;

/**
 * 获取鼠标游戏窗口坐标Y
 *
 */
declare function DzGetMouseYRelative(): number;

/**
 * 事件响应-获取触发的按键
 * 获取触发的按键
 * 响应[硬件]-按键事件
 */
declare function DzGetTriggerKey(): number;

/**
 * 事件响应-获取触发硬件事件的玩家
 * 获取触发硬件事件的玩家
 * 响应[硬件]-按键事件滚轮事件窗口大小变化事件
 */
declare function DzGetTriggerKeyPlayer(): player;

/**
 * 事件响应-获取同步的数据
 * 获取同步的数据
 * 响应[同步]-同步消息事件
 */
declare function DzGetTriggerSyncData(): string;

/**
 * 事件响应-获取同步数据的玩家
 * 获取同步数据的玩家
 * 响应[同步]-同步消息事件
 */
declare function DzGetTriggerSyncPlayer(): player;

/**
 * 事件响应-触发的Frame
 * 触发的Frame
 *
 */
declare function DzGetTriggerUIEventFrame(): framehandle;

/**
 * 事件响应-获取触发ui的玩家
 * 获取触发ui的玩家
 *
 */
declare function DzGetTriggerUIEventPlayer(): player;

/**
 * 获取升级所需经验[NEW]
 * 获取单位${unit}的${level}级升级所需经验
 *
 */
declare function DzGetUnitNeededXP(whichUnit: unit, level: number): number;

/**
 * 获取鼠标指向的单位
 * 鼠标指向的单位
 *
 */
declare function DzGetUnitUnderMouse(): unit;

/**
 * 事件响应-获取滚轮变化值
 * 获取滚轮变化值
 * 响应[硬件]-鼠标滚轮事件，正负区分上下
 */
declare function DzGetWheelDelta(): number;

/**
 * 获取魔兽窗口高度
 *
 */
declare function DzGetWindowHeight(): number;

/**
 * 获取war3窗口宽度
 * 获取魔兽窗口宽度
 *
 */
declare function DzGetWindowWidth(): number;

/**
 * 获取魔兽窗口X坐标
 *
 */
declare function DzGetWindowX(): number;

/**
 * 获取魔兽窗口Y坐标
 *
 */
declare function DzGetWindowY(): number;

/**
 * 判断按键是否按下
 * 判断${按键}是否按下
 *
 */
declare function DzIsKeyDown(iKey: number): boolean;

/**
 * 鼠标是否在游戏内
 *
 */
declare function DzIsMouseOverUI(): boolean;

/**
 * 判断游戏窗口是否处于活动状态
 *
 */
declare function DzIsWindowActive(): boolean;

/**
 * 加载Toc文件列表
 * 加载-->${fileName.toc}
 * 载入自己的fdf列表文件
 */
declare function DzLoadToc(fileName: string): void;
declare function DzOriginalUIAutoResetPoint(enable: boolean): void;

/**
 * 原生-修改屏幕比例(FOV)
 * 修改屏幕比例(FOV):${val}
 *
 */
declare function DzSetCustomFovFix(value: number): void;

/**
 * 设置内存数值
 * 设置内存数据${地址}=${数值}
 *
 */
declare function DzSetMemory(address: number, value: number): void;

/**
 * 设置鼠标的坐标
 * 设置鼠标的坐标为(${x},${y})
 *
 */
declare function DzSetMousePos(x: number, y: number): void;

/**
 * 替换单位类型[BZAPI]
 * 替换${单位}的单位类型为:${type}
 * 不会替换大头像中的模型
 */
declare function DzSetUnitID(whichUnit: unit, id: number): void;

/**
 * 替换单位模型[BZAPI]
 * 替换${单位}的模型:${path}
 * 不会替换大头像中的模型
 */
declare function DzSetUnitModel(whichUnit: unit, path: string): void;

/**
 * 设置单位位置-本地调用[BZAPI]
 * 设置${单位}的坐标为(${x},${y})
 *
 */
declare function DzSetUnitPosition(whichUnit: unit, x: number, y: number): void;

/**
 * 替换单位贴图[BZAPI]
 * 替换${单位}的贴图:${path}TexId:${texId})
 * 只能替换模型中有ReplaceableIDx贴图的模型，ID为索引。不会替换大头像中的模型
 */
declare function DzSetUnitTexture(whichUnit: unit, path: string, texId: number): void;

/**
 * 原生-设置小地图背景贴图
 * 修改小地图背景贴图为${bottomHeight}
 *
 */
declare function DzSetWar3MapMap(map: string): void;

/**
 * 获取子SimpleFontString
 * 获取名字为${name}的子SimpleFontStringID:${Id}
 * ID默认填0，同名时优先获取最后被创建的。SimpleFontString为fdf中的Frame类型。
 */
declare function DzSimpleFontStringFindByName(name: string, id: number): framehandle;

/**
 * 获取子SimpleFrame
 * 获取名字为${name}的子SimpleFrameID:${Id}
 * ID默认填0，同名时优先获取最后被创建的。SimpleFrame为fdf中的Frame类型。
 */
declare function DzSimpleFrameFindByName(name: string, id: number): framehandle;

/**
 * 获取子SimpleTexture
 * 获取名字为${name}的子SimpleTextureID:${Id}
 * ID默认填0，同名时优先获取最后被创建的。SimpleTexture为fdf中的Frame类型。
 */
declare function DzSimpleTextureFindByName(name: string, id: number): framehandle;

/**
 * 同步游戏数据
 * 同步标签：${prefix}发送数据：${data}
 *
 */
declare function DzSyncData(prefix: string, data: string): void;
declare function DzSyncDataImmediately(...option: any[]): any;
declare function DzTriggerRegisterKeyEvent(
  trig: trigger,
  key: number,
  status: number,
  sync: boolean,
  func: string
): void;
declare function DzTriggerRegisterKeyEventByCode(
  trig: trigger,
  key: number,
  status: number,
  sync: boolean,
  funcHandle: () => void
): void;
declare function DzTriggerRegisterMouseEvent(
  trig: trigger,
  btn: number,
  status: number,
  sync: boolean,
  func: string
): void;
declare function DzTriggerRegisterMouseEventByCode(
  trig: trigger,
  btn: number,
  status: number,
  sync: boolean,
  funcHandle: () => void
): void;
declare function DzTriggerRegisterMouseMoveEvent(trig: trigger, sync: boolean, func: string): void;
declare function DzTriggerRegisterMouseMoveEventByCode(
  trig: trigger,
  sync: boolean,
  funcHandle: () => void
): void;
declare function DzTriggerRegisterMouseWheelEvent(trig: trigger, sync: boolean, func: string): void;
declare function DzTriggerRegisterMouseWheelEventByCode(
  trig: trigger,
  sync: boolean,
  funcHandle: () => void
): void;

/**
 * 数据同步
 * 标签为${prefix}的数据被同步|来自平台:${server}
 * 来自平台的参数填false
 */
declare function DzTriggerRegisterSyncData(trig: trigger, prefix: string, server: boolean): void;
declare function DzTriggerRegisterWindowResizeEvent(
  trig: trigger,
  sync: boolean,
  func: string
): void;
declare function DzTriggerRegisterWindowResizeEventByCode(
  trig: trigger,
  sync: boolean,
  funcHandle: () => void
): void;
declare function EXBlendButtonIcon(...option: any[]): any;
declare function EXDclareButtonIcon(...option: any[]): any;
declare function EXDisplayChat(p: player, chat_recipient: number, message: string): void;

/**
 * 重置变换[JAPI][New!]
 * 重置${特效}
 * 清空所有的旋转和缩放，重置为初始状态。
 */
declare function EXEffectMatReset(e: effect): void;

/**
 * 绕X轴旋转[JAPI][New!]
 * ${特效}绕X轴旋转${度}度
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 */
declare function EXEffectMatRotateX(e: effect, angle: number): void;

/**
 * 绕Y轴旋转[JAPI][New!]
 * ${特效}绕Y轴旋转${度}度
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 */
declare function EXEffectMatRotateY(e: effect, angle: number): void;

/**
 * 绕Z轴旋转[JAPI][New!]
 * ${特效}绕Z轴旋转${度}度
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 */
declare function EXEffectMatRotateZ(e: effect, angle: number): void;

/**
 * 缩放[JAPI][New!]
 * 设置${特效}的X轴缩放[${缩放}]，Y轴缩放[${缩放}]，Z轴缩放[${缩放}]。
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。设置为2,2,2时相当于大小变为2倍。设置为负数时，就是镜像翻转。
 */
declare function EXEffectMatScale(e: effect, x: number, y: number, z: number): void;
declare function EXExecuteScript(script: string): string;
declare function EXGetAbilityDataInteger(abil: ability, level: number, data_type: number): number;
declare function EXGetAbilityDataReal(abil: ability, level: number, data_type: number): number;
declare function EXGetAbilityDataString(abil: ability, level: number, data_type: number): string;
declare function EXGetAbilityId(abil: ability): number;
declare function EXGetAbilityState(abil: ability, state_type: number): number;
declare function EXGetAbilityString(...option: any[]): any;
declare function EXGetBuffDataString(buffcode: number, data_type: number): string;

/**
 * 大小[JAPI][New!]
 * ${特效}的大小
 *
 */
declare function EXGetEffectSize(e: effect): number;

/**
 * X轴坐标[JAPI][New!]
 * ${特效}的X轴坐标
 *
 */
declare function EXGetEffectX(e: effect): number;

/**
 * Y轴坐标[JAPI][New!]
 * ${特效}的Y轴坐标
 *
 */
declare function EXGetEffectY(e: effect): number;

/**
 * 高度[JAPI][New!]
 * ${特效}的高度
 *
 */
declare function EXGetEffectZ(e: effect): number;
declare function EXGetEventDamageData(edd_type: number): number;
declare function EXGetItemDataString(itemcode: number, data_type: number): string;
declare function EXGetUnitAbility(u: unit, abilcode: number): ability;
declare function EXGetUnitAbilityByIndex(u: unit, index: number): ability;
declare function EXGetUnitArrayString(...option: any[]): any;
declare function EXGetUnitInteger(...option: any[]): any;
declare function EXGetUnitReal(...option: any[]): any;
declare function EXGetUnitString(...option: any[]): any;
declare function EXPauseUnit(u: unit, flag: boolean): void;
declare function EXSetAbilityAEmeDataA(abil: ability, unitid: number): boolean;
declare function EXSetAbilityDataInteger(
  abil: ability,
  level: number,
  data_type: number,
  value: number
): boolean;
declare function EXSetAbilityDataReal(
  abil: ability,
  level: number,
  data_type: number,
  value: number
): boolean;
declare function EXSetAbilityDataString(
  abil: ability,
  level: number,
  data_type: number,
  value: string
): boolean;
declare function EXSetAbilityState(abil: ability, state_type: number, value: number): boolean;
declare function EXSetAbilityString(...option: any[]): any;
declare function EXSetBuffDataString(buffcode: number, data_type: number, value: string): boolean;

/**
 * 设置大小[JAPI][New!]
 * 设置${特效}的大小为${大小}
 *
 */
declare function EXSetEffectSize(e: effect, size: number): void;

/**
 * 设置动画速度[JAPI][New!]
 * 设置${特效}的动画速度为${动画速度}
 *
 */
declare function EXSetEffectSpeed(e: effect, speed: number): void;

/**
 * 移动到坐标[JAPI][New!]
 * 移动${特效}到（${X},${Y}）
 *
 */
declare function EXSetEffectXY(e: effect, x: number, y: number): void;

/**
 * 设置高度[JAPI][New!]
 * 设置${特效}的高度为${高度}
 *
 */
declare function EXSetEffectZ(e: effect, z: number): void;
declare function EXSetEventDamage(amount: number): boolean;
declare function EXSetItemDataString(itemcode: number, data_type: number, value: string): boolean;
declare function EXSetUnitArrayString(...option: any[]): any;

/**
 * 设置单位的碰撞类型[JAPI][New!]
 * ${启用/禁用}${单位}对${碰撞}的碰撞
 *
 */
declare function EXSetUnitCollisionType(enable: boolean, u: unit, t: number): void;

/**
 * 设置单位面向角度[JAPI][New!]
 * 设置${单位}的面向角度为${Angle}度
 * 立即转身
 */
declare function EXSetUnitFacing(u: unit, angle: number): void;
declare function EXSetUnitInteger(...option: any[]): any;

/**
 * 设置单位的移动类型[JAPI][New!]
 * 设置${单位}的移动类型为${Value}
 *
 */
declare function EXSetUnitMoveType(u: unit, t: number): void;
declare function EXSetUnitReal(...option: any[]): any;
declare function EXSetUnitString(...option: any[]): any;

/**
 * 伤害值
 * 单位所受伤害
 * 响应'受到伤害'单位事件,指代单位所受伤害.
 */
declare function GetEventDamage(): number;

/**
 * 属性[R]
 * ${单位}的${Property}
 *
 */
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;
declare function RequestExtraBooleanData(
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
): boolean;
declare function RequestExtraIntegerData(
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
): number;
declare function RequestExtraRealData(
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
): number;
declare function RequestExtraStringData(
  dataType: number,
  whichPlayer: player,
  param1: string,
  param2: string,
  param3: boolean,
  param4: number,
  param5: number,
  param6: number
): string;

/**
 * 设置单位属性[R]
 * 设置${单位}的${属性}为${Value}
 *
 */
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: number): void;

declare function DzSetUnitName(unit: unit, name: string): void;
declare function DzSetUnitProperName(unit: unit, properName: string): void;

// ============= KKAPI 扩展函数 =============

/**
 * 获取当前选中的主要单位
 * 获取当前选中的主要单位
 * 返回玩家当前选中的主要单位，通常是选中单位组中的第一个单位
 */
declare function DzGetSelectedLeaderUnit(): unit;

/**
 * 判断聊天框是否打开
 * 判断聊天框是否打开
 * 检测玩家是否正在使用聊天框输入文字
 */
declare function DzIsChatBoxOpen(): boolean;

/**
 * 设置单位预选UI可见性
 * 设置${单位}预选UI显示:${可见性}
 * 控制单位的预选择界面是否可见
 */
declare function DzSetUnitPreselectUIVisible(whichUnit: unit, visible: boolean): void;

/**
 * 设置特效动画
 * 设置${特效}播放动画序号${序号}标志${标志}
 * 控制特效播放指定索引的动画
 */
declare function DzSetEffectAnimation(whichEffect: effect, index: number, flag: number): void;

/**
 * 设置特效位置
 * 设置${特效}位置到(${X},${Y},${Z})
 * 移动特效到指定的三维坐标
 */
declare function DzSetEffectPos(whichEffect: effect, x: number, y: number, z: number): void;

/**
 * 设置特效顶点颜色
 * 设置${特效}颜色${颜色}
 * 修改特效的整体颜色
 */
declare function DzSetEffectVertexColor(whichEffect: effect, color: number): void;

/**
 * 设置特效透明度
 * 设置${特效}透明度${透明度}
 * 修改特效的透明度，范围0-255
 */
declare function DzSetEffectVertexAlpha(whichEffect: effect, alpha: number): void;

/**
 * 设置特效模型
 * 设置${特效}模型为${模型路径}
 * 更换特效使用的模型文件
 */
declare function DzSetEffectModel(whichEffect: effect, model: string): void;

/**
 * 设置特效队伍颜色
 * 设置${特效}队伍颜色为玩家${玩家ID}的颜色
 * 将特效颜色设置为指定玩家的队伍颜色
 */
declare function DzSetEffectTeamColor(whichHandle: effect, playerId: number): void;

/**
 * 设置Frame剪切
 * 设置${Frame}剪切${启用}
 * 控制Frame是否启用剪切功能，超出范围的部分会被裁剪
 */
declare function DzFrameSetClip(whichframe: framehandle, enable: boolean): void;

/**
 * 改变窗口大小
 * 改变窗口大小为宽度${宽度}高度${高度}
 * 修改游戏窗口的尺寸，返回是否成功
 */
declare function DzChangeWindowSize(width: number, height: number): boolean;

/**
 * 播放特效动画
 * 播放${特效}动画${动画名}连接点${连接点}
 * 播放特效的指定动画，可指定连接点
 */
declare function DzPlayEffectAnimation(whichEffect: effect, anim: string, link: string): void;

/**
 * 绑定特效
 * 绑定${特效}到${父对象}的${连接点}
 * 将特效绑定到指定对象的连接点上
 */
declare function DzBindEffect(parent: widget, attachPoint: string, whichEffect: effect): void;

/**
 * 解绑特效
 * 解绑${特效}
 * 解除特效与对象的绑定关系
 */
declare function DzUnbindEffect(whichEffect: effect): void;

/**
 * 设置控件精灵缩放
 * 设置${控件}精灵缩放${缩放值}
 * 修改控件精灵的缩放比例
 */
declare function DzSetWidgetSpriteScale(whichUnit: widget, scale: number): void;

/**
 * 设置特效缩放
 * 设置${特效}缩放${缩放值}
 * 修改特效的整体缩放比例
 */
declare function DzSetEffectScale(whichHandle: effect, scale: number): void;

/**
 * 获取特效顶点颜色
 * 获取${特效}的顶点颜色
 * 返回特效当前的顶点颜色值
 */
declare function DzGetEffectVertexColor(whichEffect: effect): number;

/**
 * 获取特效透明度
 * 获取${特效}的透明度
 * 返回特效当前的透明度值
 */
declare function DzGetEffectVertexAlpha(whichEffect: effect): number;

/**
 * 获取物品技能
 * 获取${物品}的第${索引}个技能
 * 返回物品指定索引位置的技能
 */
declare function DzGetItemAbility(whichEffect: item, index: number): ability;

/**
 * 获取Frame子控件数量
 * 获取${Frame}的子控件数量
 * 返回指定Frame包含的子控件数量
 */
declare function DzFrameGetChildrenCount(whichframe: framehandle): number;

/**
 * 获取Frame子控件
 * 获取${Frame}的第${索引}个子控件
 * 返回指定Frame的第几个子控件
 */
declare function DzFrameGetChild(whichframe: framehandle, index: number): framehandle;

/**
 * 解锁BLP尺寸限制
 * 解锁BLP尺寸限制${启用}
 * 移除BLP贴图文件的尺寸限制
 */
declare function DzUnlockBlpSizeLimit(enable: boolean): void;

/**
 * 获取活跃的商店单位
 * 获取${商店}对${玩家}的活跃状态
 * 返回对指定玩家活跃的商店单位
 */
declare function DzGetActivePatron(store: unit, p: player): unit;

/**
 * 获取本地选中单位数量
 * 获取本地选中单位数量
 * 返回当前选中的单位数量
 */
declare function DzGetLocalSelectUnitCount(): number;

/**
 * 获取本地选中单位
 * 获取本地选中单位${索引}
 * 返回指定索引的选中单位
 */
declare function DzGetLocalSelectUnit(index: number): unit;

/**
 * 获取JASS字符串表数量
 * 获取JASS字符串表数量
 * 返回当前JASS字符串表中的条目数量
 */
declare function DzGetJassStringTableCount(): number;

/**
 * 从缓存移除模型
 * 从缓存移除模型${路径}
 * 将指定路径的模型从内存缓存中移除
 */
declare function DzModelRemoveFromCache(path: string): void;

/**
 * 清空模型缓存
 * 清空所有模型缓存
 * 将所有模型从内存缓存中移除
 */
declare function DzModelRemoveAllFromCache(): void;

/**
 * 获取信息面板选择按钮
 * 获取信息面板选择按钮${索引}
 * 返回信息面板中指定索引的选择按钮
 */
declare function DzFrameGetInfoPanelSelectButton(index: number): framehandle;

/**
 * 获取信息面板Buff按钮
 * 获取信息面板Buff按钮${索引}
 * 返回信息面板中指定索引的Buff按钮
 */
declare function DzFrameGetInfoPanelBuffButton(index: number): framehandle;

/**
 * 获取农民栏
 * 获取农民栏Frame
 * 返回农民/工人显示栏的Frame
 */
declare function DzFrameGetPeonBar(): framehandle;

/**
 * 获取命令栏按钮数字文本
 * 获取命令栏按钮${按钮}的数字文本Frame
 * 返回命令栏按钮上显示数字的文本Frame
 */
declare function DzFrameGetCommandBarButtonNumberText(whichframe: framehandle): framehandle;

/**
 * 获取命令栏按钮数字覆盖层
 * 获取命令栏按钮${按钮}的数字覆盖层Frame
 * 返回命令栏按钮数字覆盖层的Frame
 */
declare function DzFrameGetCommandBarButtonNumberOverlay(whichframe: framehandle): framehandle;

/**
 * 获取命令栏按钮冷却指示器
 * 获取命令栏按钮${按钮}的冷却指示器Frame
 * 返回命令栏按钮冷却显示的Frame
 */
declare function DzFrameGetCommandBarButtonCooldownIndicator(whichframe: framehandle): framehandle;

/**
 * 获取命令栏按钮自动施法指示器
 * 获取命令栏按钮${按钮}的自动施法指示器Frame
 * 返回命令栏按钮自动施法指示的Frame
 */
declare function DzFrameGetCommandBarButtonAutoCastIndicator(whichframe: framehandle): framehandle;

/**
 * 切换FPS显示
 * 切换FPS显示${显示}
 * 控制是否显示帧率信息
 */
declare function DzToggleFPS(show: boolean): void;

/**
 * 获取FPS
 * 获取当前FPS
 * 返回当前的帧率值
 */
declare function DzGetFPS(): number;

/**
 * 世界坐标转小地图X坐标
 * 世界坐标(${X},${Y})转小地图X坐标
 * 将世界坐标转换为小地图上的X坐标
 */
declare function DzFrameWorldToMinimapPosX(x: number, y: number): number;

/**
 * 世界坐标转小地图Y坐标
 * 世界坐标(${X},${Y})转小地图Y坐标
 * 将世界坐标转换为小地图上的Y坐标
 */
declare function DzFrameWorldToMinimapPosY(x: number, y: number): number;

/**
 * 设置控件小地图图标
 * 设置${单位}小地图图标为${路径}
 * 更改单位在小地图上显示的图标
 */
declare function DzWidgetSetMinimapIcon(whichunit: unit, path: string): void;

/**
 * 设置控件小地图图标启用
 * 设置${单位}小地图图标启用${启用}
 * 控制单位在小地图上的图标是否显示
 */
declare function DzWidgetSetMinimapIconEnable(whichunit: unit, enable: boolean): void;

/**
 * 获取世界Frame消息
 * 获取世界Frame消息
 * 返回世界Frame消息的Frame引用
 */
declare function DzFrameGetWorldFrameMessage(): framehandle;

/**
 * 简单消息Frame添加消息
 * 向${Frame}添加消息${文本}颜色${颜色}持续时间${持续时间}永久${永久}
 * 向简单消息Frame添加一条消息
 */
declare function DzSimpleMessageFrameAddMessage(
  whichframe: framehandle,
  text: string,
  color: number,
  duration: number,
  permanent: boolean
): void;

/**
 * 清空简单消息Frame
 * 清空${Frame}的所有消息
 * 清除简单消息Frame中的所有消息
 */
declare function DzSimpleMessageFrameClear(whichframe: framehandle): void;

/**
 * 转换屏幕坐标到世界坐标X
 * 屏幕坐标(${X},${Y})转世界X坐标
 * 将屏幕坐标转换为世界坐标的X分量
 */
declare function DzConvertScreenPositionX(x: number, y: number): number;

/**
 * 转换屏幕坐标到世界坐标Y
 * 屏幕坐标(${X},${Y})转世界Y坐标
 * 将屏幕坐标转换为世界坐标的Y分量
 */
declare function DzConvertScreenPositionY(x: number, y: number): number;

/**
 * 注册建筑选位置事件
 * 注册建筑选位置事件${函数}
 * 监听玩家选择建筑位置的本地事件
 */
declare function DzRegisterOnBuildLocal(func: () => void): void;

/**
 * 获取建筑选择命令ID
 * 获取建筑选择命令ID
 * 返回当前建筑选择的命令ID，等于0时是结束事件
 */
declare function DzGetOnBuildOrderId(): number;

/**
 * 获取建筑选择命令类型
 * 获取建筑选择命令类型
 * 返回当前建筑选择的命令类型
 */
declare function DzGetOnBuildOrderType(): number;

/**
 * 获取建筑选择执行者
 * 获取建筑选择执行者
 * 返回执行建筑选择的控件对象
 */
declare function DzGetOnBuildAgent(): widget;

/**
 * 注册技能选目标事件
 * 注册技能选目标事件${函数}
 * 监听玩家选择技能目标的本地事件
 */
declare function DzRegisterOnTargetLocal(func: () => void): void;

/**
 * 获取技能选择技能ID
 * 获取技能选择技能ID
 * 返回当前技能选择的技能ID，等于0时是结束事件
 */
declare function DzGetOnTargetAbilId(): number;

/**
 * 获取技能选择命令ID
 * 获取技能选择命令ID
 * 返回当前技能选择的命令ID
 */
declare function DzGetOnTargetOrderId(): number;

/**
 * 获取技能选择命令类型
 * 获取技能选择命令类型
 * 返回当前技能选择的命令类型
 */
declare function DzGetOnTargetOrderType(): number;

/**
 * 获取技能选择执行者
 * 获取技能选择执行者
 * 返回执行技能选择的控件对象
 */
declare function DzGetOnTargetAgent(): widget;

/**
 * 获取技能选择即时目标
 * 获取技能选择即时目标
 * 返回技能选择的即时目标控件
 */
declare function DzGetOnTargetInstantTarget(): widget;

/**
 * 打开QQ群链接
 * 打开QQ群链接${URL}
 * 在浏览器中打开指定的QQ群链接，返回是否成功
 */
declare function DzOpenQQGroupUrl(url: string): boolean;

/**
 * 启用Frame剪切矩形
 * 启用Frame剪切矩形${启用}
 * 控制Frame的剪切矩形功能
 */
declare function DzFrameEnableClipRect(enable: boolean): void;

/**
 * 设置单位头像
 * 设置${单位}头像为${模型文件}
 * 更改单位在UI中显示的头像模型
 */
declare function DzSetUnitPortrait(whichUnit: unit, modelFile: string): void;

/**
 * 设置单位描述
 * 设置${单位}描述为${描述}
 * 更改单位的描述文本
 */
declare function DzSetUnitDescription(whichUnit: unit, value: string): void;

/**
 * 设置单位投射物弧度
 * 设置${单位}投射物弧度为${弧度}
 * 修改单位投射物的飞行弧度
 */
declare function DzSetUnitMissileArc(whichUnit: unit, arc: number): void;

/**
 * 设置单位投射物模型
 * 设置${单位}投射物模型为${模型文件}
 * 更改单位投射物使用的模型
 */
declare function DzSetUnitMissileModel(whichUnit: unit, modelFile: string): void;

/**
 * 设置单位投射物追踪
 * 设置${单位}投射物追踪${启用}
 * 控制单位投射物是否具有追踪能力
 */
declare function DzSetUnitMissileHoming(whichUnit: unit, enable: boolean): void;

/**
 * 设置单位投射物速度
 * 设置${单位}投射物速度为${速度}
 * 修改单位投射物的飞行速度
 */
declare function DzSetUnitMissileSpeed(whichUnit: unit, speed: number): void;

/**
 * 设置特效可见性
 * 设置${特效}可见性${启用}
 * 控制特效是否可见
 */
declare function DzSetEffectVisible(whichHandle: effect, enable: boolean): void;

/**
 * 复活单位
 * 复活${单位}给${玩家}生命${生命值}魔法${魔法值}位置(${X},${Y})
 * 复活指定单位并设置其属性和位置
 */
declare function DzReviveUnit(
  whichUnit: unit,
  whichPlayer: player,
  hp: number,
  mp: number,
  x: number,
  y: number
): void;

/**
 * 获取攻击技能
 * 获取${单位}的攻击技能
 * 返回单位的攻击技能对象
 */
declare function DzGetAttackAbility(whichUnit: unit): ability;

/**
 * 攻击技能结束冷却
 * 结束${技能}的冷却时间
 * 立即结束攻击技能的冷却时间
 */
declare function DzAttackAbilityEndCooldown(whichHandle: ability): void;

// ============= 装饰物(Doodad)相关函数 =============

/**
 * 创建装饰物
 * 创建装饰物ID${ID}变体${变体}位置(${X},${Y},${Z})旋转${旋转}缩放${缩放}
 * 在指定位置创建一个装饰物对象
 */
declare function DzDoodadCreate(
  id: number,
  var_: number,
  x: number,
  y: number,
  z: number,
  rotate: number,
  scale: number
): number;

/**
 * 获取装饰物类型ID
 * 获取${装饰物}的类型ID
 * 返回装饰物的类型标识符
 */
declare function DzDoodadGetTypeId(doodad: number): number;

/**
 * 设置装饰物模型
 * 设置${装饰物}模型为${模型文件}
 * 更改装饰物使用的模型文件
 */
declare function DzDoodadSetModel(doodad: number, modelFile: string): void;

/**
 * 设置装饰物队伍颜色
 * 设置${装饰物}队伍颜色为${颜色}
 * 修改装饰物的队伍颜色
 */
declare function DzDoodadSetTeamColor(doodad: number, color: number): void;

/**
 * 设置装饰物颜色
 * 设置${装饰物}颜色为${颜色}
 * 修改装饰物的整体颜色
 */
declare function DzDoodadSetColor(doodad: number, color: number): void;

/**
 * 获取装饰物X坐标
 * 获取${装饰物}的X坐标
 * 返回装饰物当前的X坐标
 */
declare function DzDoodadGetX(doodad: number): number;

/**
 * 获取装饰物Y坐标
 * 获取${装饰物}的Y坐标
 * 返回装饰物当前的Y坐标
 */
declare function DzDoodadGetY(doodad: number): number;

/**
 * 获取装饰物Z坐标
 * 获取${装饰物}的Z坐标
 * 返回装饰物当前的Z坐标
 */
declare function DzDoodadGetZ(doodad: number): number;

/**
 * 设置装饰物位置
 * 设置${装饰物}位置为(${X},${Y},${Z})
 * 移动装饰物到指定的三维坐标
 */
declare function DzDoodadSetPosition(doodad: number, x: number, y: number, z: number): void;

/**
 * 设置装饰物方向矩阵旋转
 * 设置${装饰物}方向矩阵旋转角度${角度}轴(${轴X},${轴Y},${轴Z})
 * 围绕指定轴旋转装饰物
 */
declare function DzDoodadSetOrientMatrixRotate(
  doodad: number,
  angle: number,
  axisX: number,
  axisY: number,
  axisZ: number
): void;

/**
 * 设置装饰物方向矩阵缩放
 * 设置${装饰物}方向矩阵缩放(${X},${Y},${Z})
 * 在各个轴向上缩放装饰物
 */
declare function DzDoodadSetOrientMatrixScale(
  doodad: number,
  x: number,
  y: number,
  z: number
): void;

/**
 * 重置装饰物方向矩阵
 * 重置${装饰物}的方向矩阵
 * 将装饰物的变换矩阵重置为初始状态
 */
declare function DzDoodadSetOrientMatrixResize(doodad: number): void;

/**
 * 设置装饰物可见性
 * 设置${装饰物}可见性${启用}
 * 控制装饰物是否可见
 */
declare function DzDoodadSetVisible(doodad: number, enable: boolean): void;

/**
 * 设置装饰物动画
 * 设置${装饰物}动画${动画名}随机${随机}
 * 播放装饰物的指定动画
 */
declare function DzDoodadSetAnimation(doodad: number, animName: string, animRandom: boolean): void;

/**
 * 设置装饰物时间缩放
 * 设置${装饰物}时间缩放${缩放}
 * 修改装饰物动画播放的时间缩放
 */
declare function DzDoodadSetTimeScale(doodad: number, scale: number): void;

/**
 * 获取装饰物时间缩放
 * 获取${装饰物}的时间缩放
 * 返回装饰物当前的时间缩放值
 */
declare function DzDoodadGetTimeScale(doodad: number): number;

/**
 * 获取装饰物当前动画索引
 * 获取${装饰物}的当前动画索引
 * 返回装饰物当前播放的动画索引
 */
declare function DzDoodadGetCurrentAnimationIndex(doodad: number): number;

/**
 * 获取装饰物动画数量
 * 获取${装饰物}的动画数量
 * 返回装饰物包含的动画总数
 */
declare function DzDoodadGetAnimationCount(doodad: number): number;

/**
 * 获取装饰物动画名称
 * 获取${装饰物}第${索引}个动画的名称
 * 返回指定索引动画的名称
 */
declare function DzDoodadGetAnimationName(doodad: number, index: number): string;

/**
 * 获取装饰物动画时间
 * 获取${装饰物}第${索引}个动画的时间
 * 返回指定索引动画的持续时间
 */
declare function DzDoodadGetAnimationTime(doodad: number, index: number): number;

/**
 * 删除装饰物
 * 删除${装饰物}
 * 从游戏中移除指定的装饰物
 */
declare function DzDoodadRemove(doodad: number): void;

// ============= 其他实用函数 =============

/**
 * 解锁JASS字节码限制
 * 解锁JASS字节码限制${启用}
 * 移除JASS代码的字节码执行限制
 */
declare function DzUnlockOpCodeLimit(enable: boolean): void;

/**
 * 设置剪切板内容
 * 设置剪切板内容为${内容}
 * 将文本内容设置到系统剪切板，返回是否成功
 */
declare function DzSetClipboard(content: string): boolean;

/**
 * 移除玩家科技等级
 * 移除${玩家}的${科技ID}科技${等级}级
 * 减少玩家指定科技的等级
 */
declare function DzRemovePlayerTechResearched(
  whichPlayer: player,
  techid: number,
  removelevels: number
): void;

/**
 * 查找单位技能
 * 查找${单位}的技能${技能代码}
 * 返回单位的指定技能对象
 */
declare function DzUnitFindAbility(whichUnit: unit, abilcode: number): ability;

/**
 * 修改技能数据-字符串
 * 修改${技能}的${键}数据为${值}
 * 修改技能的字符串类型数据
 */
declare function DzAbilitySetStringData(whichAbility: ability, key: string, value: string): void;

/**
 * 启用/禁用技能
 * 设置${技能}启用${启用}隐藏UI${隐藏UI}
 * 控制技能的启用状态和UI显示
 */
declare function DzAbilitySetEnable(whichAbility: ability, enable: boolean, hideUI: boolean): void;

/**
 * 设置单位移动类型
 * 设置${单位}移动类型为${移动类型}
 * 修改单位的移动类型(如步行、飞行等)
 */
declare function DzUnitSetMoveType(whichUnit: unit, moveType: string): void;

/**
 * 获取控件宽度
 * 获取${Frame}的宽度
 * 返回Frame控件的宽度值
 */
declare function DzFrameGetWidth(frame: framehandle): number;

/**
 * 按索引设置Frame动画
 * 设置${Frame}动画索引${索引}标志${标志}
 * 通过索引设置Frame的动画
 */
declare function DzFrameSetAnimateByIndex(frame: framehandle, index: number, flag: number): void;

/**
 * 设置单位数据缓存整数
 * 设置单位ID${单位ID}数据ID${数据ID}索引${索引}值${值}
 * 修改单位数据缓存中的整数值
 */
declare function DzSetUnitDataCacheInteger(uid: number, id: number, index: number, v: number): void;

/**
 * 单位UI添加等级数组整数
 * 单位ID${单位ID}数据ID${数据ID}等级${等级}值${值}
 * 向单位UI的等级数组中添加整数值
 */
declare function DzUnitUIAddLevelArrayInteger(uid: number, id: number, lv: number, v: number): void;

// ============= 补全缺失的函数声明 =============

/**
 * 获取同步触发前缀
 * 获取同步触发前缀
 * 响应同步数据事件时获取触发的前缀
 */
declare function DzGetTriggerSyncPrefix(): string;

/**
 * 同步缓冲区数据
 * 同步缓冲区数据前缀${prefix}数据${data}长度${dataLen}
 * 同步指定长度的缓冲区数据
 */
declare function DzSyncBuffer(prefix: string, data: string, dataLen: number): void;

/**
 * Frame是否可见
 * 检查${frame}是否可见
 * 返回Frame当前的可见状态
 */
declare function DzFrameIsVisible(frame: framehandle): boolean;

/**
 * 显示/隐藏SimpleFrame
 * 设置${frame}显示${enable}
 * 控制SimpleFrame的显示或隐藏
 */
declare function DzSimpleFrameShow(frame: framehandle, enable: boolean): void;

/**
 * 追加文字
 * 向${frame}追加文字${text}
 * 向Frame追加文本内容（支持TextArea）
 */
declare function DzFrameAddText(frame: framehandle, text: string): void;

/**
 * 沉默单位-禁用技能
 * 设置${unit}沉默状态${disable}
 * 禁用或启用单位的技能使用
 */
declare function DzUnitSilence(whichUnit: unit, disable: boolean): void;

/**
 * 禁用攻击
 * 设置${unit}禁用攻击${disable}
 * 禁用或启用单位的攻击能力
 */
declare function DzUnitDisableAttack(whichUnit: unit, disable: boolean): void;

/**
 * 禁用道具
 * 设置${unit}禁用道具${disable}
 * 禁用或启用单位的道具使用
 */
declare function DzUnitDisableInventory(whichUnit: unit, disable: boolean): void;

/**
 * 刷新小地图
 * 刷新小地图显示
 * 强制刷新小地图的显示内容
 */
declare function DzUpdateMinimap(): void;

/**
 * 修改单位透明度
 * 设置${unit}透明度${alpha}强制更新${forceUpdate}
 * 修改单位的透明度值
 */
declare function DzUnitChangeAlpha(whichUnit: unit, alpha: number, forceUpdate: boolean): void;

/**
 * 设置单位是否可选中
 * 设置${unit}可选中状态${state}
 * 控制单位是否可以被玩家选中
 */
declare function DzUnitSetCanSelect(whichUnit: unit, state: boolean): void;

/**
 * 设置单位是否可作为目标
 * 设置${unit}可作为目标${state}
 * 控制单位是否可以被设置为技能或攻击目标
 */
declare function DzUnitSetTargetable(whichUnit: unit, state: boolean): void;

/**
 * 保存内存数据
 * 保存内存缓存${cache}
 * 将数据保存到内存缓存中
 */
declare function DzSaveMemoryCache(cache: string): void;

/**
 * 读取内存数据
 * 读取内存缓存
 * 从内存缓存中读取数据
 */
declare function DzGetMemoryCache(): string;

/**
 * 设置加速倍率
 * 设置游戏速度倍率${ratio}
 * 修改游戏的运行速度倍率
 */
declare function DzSetSpeed(ratio: number): void;

/**
 * 转换世界坐标为屏幕坐标-异步
 * 转换世界坐标(${x},${y},${z})为屏幕坐标回调${callback}
 * 异步转换世界坐标为屏幕坐标，结果通过回调函数获取
 */
declare function DzConvertWorldPosition(
  x: number,
  y: number,
  z: number,
  callback: () => void
): boolean;

/**
 * 创建命令按钮
 * 创建命令按钮父节点${parent}图标${icon}名称${name}描述${desc}
 * 创建一个新的命令按钮控件
 */
declare function DzCreateCommandButton(
  parent: framehandle,
  icon: string,
  name: string,
  desc: string
): framehandle;

/**
 * 触发器注册鼠标事件-简化版
 * 注册${trigger}的鼠标事件状态${status}按钮${btn}
 * 简化版本的鼠标事件注册函数
 */
declare function DzTriggerRegisterMouseEventTrg(trg: trigger, status: number, btn: number): void;

/**
 * 触发器注册按键事件-简化版
 * 注册${trigger}的按键事件状态${status}按键${btn}
 * 简化版本的按键事件注册函数
 */
declare function DzTriggerRegisterKeyEventTrg(trg: trigger, status: number, btn: number): void;

/**
 * 触发器注册鼠标移动事件-简化版
 * 注册${trigger}的鼠标移动事件
 * 简化版本的鼠标移动事件注册函数
 */
declare function DzTriggerRegisterMouseMoveEventTrg(trg: trigger): void;

/**
 * 触发器注册鼠标滚轮事件-简化版
 * 注册${trigger}的鼠标滚轮事件
 * 简化版本的鼠标滚轮事件注册函数
 */
declare function DzTriggerRegisterMouseWheelEventTrg(trg: trigger): void;

/**
 * 触发器注册窗口大小变化事件-简化版
 * 注册${trigger}的窗口大小变化事件
 * 简化版本的窗口大小变化事件注册函数
 */
declare function DzTriggerRegisterWindowResizeEventTrg(trg: trigger): void;

/**
 * 浮点数转整数
 * 将浮点数${i}转换为整数
 * Frame专用的浮点数到整数转换函数
 */
declare function DzF2I(i: number): number;

/**
 * 整数转浮点数
 * 将整数${i}转换为浮点数
 * Frame专用的整数到浮点数转换函数
 */
declare function DzI2F(i: number): number;

// ============= KKAPI 补充函数声明 =============

/**
 * 写入日志
 * 写入日志消息${msg}
 * 向游戏日志文件写入调试信息
 */
declare function DzWriteLog(msg: string): void;

// ============= TextTag 相关函数 =============

/**
 * 获取文字标签字体
 * 获取文字标签字体
 * 返回文字标签当前使用的字体文件名
 */
declare function DzTextTagGetFont(): string;

/**
 * 设置文字标签字体
 * 设置文字标签字体为${fileName}
 * 修改文字标签使用的字体文件
 */
declare function DzTextTagSetFont(fileName: string): void;

/**
 * 设置文字标签起始透明度
 * 设置${t}的起始透明度为${alpha}
 * 修改文字标签的起始透明度值
 */
declare function DzTextTagSetStartAlpha(t: texttag, alpha: number): void;

/**
 * 获取文字标签阴影颜色
 * 获取${t}的阴影颜色
 * 返回文字标签的阴影颜色值
 */
declare function DzTextTagGetShadowColor(t: texttag): number;

/**
 * 设置文字标签阴影颜色
 * 设置${t}的阴影颜色为${color}
 * 修改文字标签的阴影颜色
 */
declare function DzTextTagSetShadowColor(t: texttag, color: number): void;

// ============= Group 相关函数 =============

/**
 * 获取单位组数量
 * 获取${g}的单位数量
 * 返回单位组中包含的单位数量
 */
declare function DzGroupGetCount(g: group): number;

/**
 * 获取单位组中的单位
 * 获取${g}中索引为${index}的单位
 * 返回单位组中指定索引位置的单位
 */
declare function DzGroupGetUnitAt(g: group, index: number): unit;

// ============= Unit 相关函数 =============

/**
 * 创建幻象单位
 * 为${p}创建幻象单位ID${unitId}位置(${x},${y})朝向${face}
 * 创建一个幻象单位
 */
declare function DzUnitCreateIllusion(
  p: player,
  unitId: number,
  x: number,
  y: number,
  face: number
): unit;

/**
 * 从单位创建幻象
 * 从${u}创建幻象
 * 基于现有单位创建一个幻象副本
 */
declare function DzUnitCreateIllusionFromUnit(u: unit): unit;

// ============= String 字符串操作函数 =============

/**
 * 字符串包含检查
 * 检查${s}是否包含${whichString}区分大小写${caseSensitive}
 * 检查字符串是否包含指定子字符串
 */
declare function DzStringContains(s: string, whichString: string, caseSensitive: boolean): boolean;

/**
 * 查找字符串
 * 在${s}中从位置${off}查找${whichString}区分大小写${caseSensitive}
 * 在字符串中查找子字符串的位置
 */
declare function DzStringFind(
  s: string,
  whichString: string,
  off: number,
  caseSensitive: boolean
): number;

/**
 * 查找首个匹配字符
 * 在${s}中从位置${off}查找首个${whichString}中的字符区分大小写${caseSensitive}
 * 查找字符串中首个匹配指定字符集的位置
 */
declare function DzStringFindFirstOf(
  s: string,
  whichString: string,
  off: number,
  caseSensitive: boolean
): number;

/**
 * 查找首个不匹配字符
 * 在${s}中从位置${off}查找首个不在${whichString}中的字符区分大小写${caseSensitive}
 * 查找字符串中首个不匹配指定字符集的位置
 */
declare function DzStringFindFirstNotOf(
  s: string,
  whichString: string,
  off: number,
  caseSensitive: boolean
): number;

/**
 * 查找最后匹配字符
 * 在${s}中从位置${off}查找最后一个${whichString}中的字符区分大小写${caseSensitive}
 * 查找字符串中最后一个匹配指定字符集的位置
 */
declare function DzStringFindLastOf(
  s: string,
  whichString: string,
  off: number,
  caseSensitive: boolean
): number;

/**
 * 查找最后不匹配字符
 * 在${s}中从位置${off}查找最后一个不在${whichString}中的字符区分大小写${caseSensitive}
 * 查找字符串中最后一个不匹配指定字符集的位置
 */
declare function DzStringFindLastNotOf(
  s: string,
  whichString: string,
  off: number,
  caseSensitive: boolean
): number;

/**
 * 去除左侧空白
 * 去除${s}左侧的空白字符
 * 移除字符串左侧的空白字符
 */
declare function DzStringTrimLeft(s: string): string;

/**
 * 去除右侧空白
 * 去除${s}右侧的空白字符
 * 移除字符串右侧的空白字符
 */
declare function DzStringTrimRight(s: string): string;

/**
 * 去除两侧空白
 * 去除${s}两侧的空白字符
 * 移除字符串两侧的空白字符
 */
declare function DzStringTrim(s: string): string;

/**
 * 反转字符串
 * 反转字符串${s}
 * 将字符串中的字符顺序反转
 */
declare function DzStringReverse(s: string): string;

/**
 * 替换字符串
 * 在${s}中将${whichString}替换为${replaceWith}区分大小写${caseSensitive}
 * 替换字符串中的指定子字符串
 */
declare function DzStringReplace(
  s: string,
  whichString: string,
  replaceWith: string,
  caseSensitive: boolean
): string;

/**
 * 插入字符串
 * 在${s}的位置${whichPosition}插入${whichString}
 * 在字符串的指定位置插入新字符串
 */
declare function DzStringInsert(s: string, whichPosition: number, whichString: string): string;

// ============= Bit 位运算函数 =============

/**
 * 获取位值
 * 获取${i}的第${byteIndex}位
 * 获取整数指定位的值
 */
declare function DzBitGet(i: number, byteIndex: number): number;

/**
 * 设置位值
 * 设置${i}的第${byteIndex}位为${byteValue}
 * 设置整数指定位的值
 */
declare function DzBitSet(i: number, byteIndex: number, byteValue: number): number;

/**
 * 获取字节值
 * 获取${i}的第${byteIndex}字节
 * 获取整数指定字节的值
 */
declare function DzBitGetByte(i: number, byteIndex: number): number;

/**
 * 设置字节值
 * 设置${i}的第${byteIndex}字节为${byteValue}
 * 设置整数指定字节的值
 */
declare function DzBitSetByte(i: number, byteIndex: number, byteValue: number): number;

/**
 * 位取反
 * 对${i}进行位取反
 * 对整数的所有位进行取反操作
 */
declare function DzBitNot(i: number): number;

/**
 * 位与运算
 * ${a}与${b}进行位与运算
 * 对两个整数进行位与运算
 */
declare function DzBitAnd(a: number, b: number): number;

/**
 * 位或运算
 * ${a}与${b}进行位或运算
 * 对两个整数进行位或运算
 */
declare function DzBitOr(a: number, b: number): number;

/**
 * 位异或运算
 * ${a}与${b}进行位异或运算
 * 对两个整数进行位异或运算
 */
declare function DzBitXor(a: number, b: number): number;

/**
 * 左移位
 * 将${i}左移${bitsToShift}位
 * 将整数的位向左移动指定位数
 */
declare function DzBitShiftLeft(i: number, bitsToShift: number): number;

/**
 * 右移位
 * 将${i}右移${bitsToShift}位
 * 将整数的位向右移动指定位数
 */
declare function DzBitShiftRight(i: number, bitsToShift: number): number;

/**
 * 位转整数
 * 将位${b1},${b2},${b3},${b4}转换为整数
 * 将四个位值组合成一个整数
 */
declare function DzBitToInt(b1: number, b2: number, b3: number, b4: number): number;

// ============= Issue 命令队列函数 =============

/**
 * 队列单位组立即命令
 * 队列${whichGroup}执行立即命令${order}
 * 向单位组添加立即执行的命令到队列
 */
declare function DzQueueGroupImmediateOrderById(whichGroup: group, order: number): boolean;

/**
 * 队列单位组点目标命令
 * 队列${whichGroup}执行点目标命令${order}位置(${x},${y})
 * 向单位组添加点目标命令到队列
 */
declare function DzQueueGroupPointOrderById(
  whichGroup: group,
  order: number,
  x: number,
  y: number
): boolean;

/**
 * 队列单位组单位目标命令
 * 队列${whichGroup}执行单位目标命令${order}目标${targetWidget}
 * 向单位组添加单位目标命令到队列
 */
declare function DzQueueGroupTargetOrderById(
  whichGroup: group,
  order: number,
  targetWidget: widget
): boolean;

/**
 * 队列单位立即命令
 * 队列${whichUnit}执行立即命令${order}
 * 向单位添加立即执行的命令到队列
 */
declare function DzQueueIssueImmediateOrderById(whichUnit: unit, order: number): boolean;

/**
 * 队列单位点目标命令
 * 队列${whichUnit}执行点目标命令${order}位置(${x},${y})
 * 向单位添加点目标命令到队列
 */
declare function DzQueueIssuePointOrderById(
  whichUnit: unit,
  order: number,
  x: number,
  y: number
): boolean;

/**
 * 队列单位单位目标命令
 * 队列${whichUnit}执行单位目标命令${order}目标${targetWidget}
 * 向单位添加单位目标命令到队列
 */
declare function DzQueueIssueTargetOrderById(
  whichUnit: unit,
  order: number,
  targetWidget: widget
): boolean;

/**
 * 队列单位即时点目标命令
 * 队列${whichUnit}执行即时点目标命令${order}位置(${x},${y})即时目标${instantTargetWidget}
 * 向单位添加即时点目标命令到队列
 */
declare function DzQueueIssueInstantPointOrderById(
  whichUnit: unit,
  order: number,
  x: number,
  y: number,
  instantTargetWidget: widget
): boolean;

/**
 * 队列单位即时单位目标命令
 * 队列${whichUnit}执行即时单位目标命令${order}目标${targetWidget}即时目标${instantTargetWidget}
 * 向单位添加即时单位目标命令到队列
 */
declare function DzQueueIssueInstantTargetOrderById(
  whichUnit: unit,
  order: number,
  targetWidget: widget,
  instantTargetWidget: widget
): boolean;

/**
 * 队列建造命令
 * 队列${whichPeon}建造单位${unitId}位置(${x},${y})
 * 向工人单位添加建造命令到队列
 */
declare function DzQueueIssueBuildOrderById(
  whichPeon: unit,
  unitId: number,
  x: number,
  y: number
): boolean;

/**
 * 队列中立建筑立即命令
 * 队列玩家${forWhichPlayer}向中立建筑${neutralStructure}发出立即命令${unitId}
 * 向中立建筑添加立即命令到队列
 */
declare function DzQueueIssueNeutralImmediateOrderById(
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number
): boolean;

/**
 * 队列中立建筑点目标命令
 * 队列玩家${forWhichPlayer}向中立建筑${neutralStructure}发出点目标命令${unitId}位置(${x},${y})
 * 向中立建筑添加点目标命令到队列
 */
declare function DzQueueIssueNeutralPointOrderById(
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number,
  x: number,
  y: number
): boolean;

/**
 * 队列中立建筑单位目标命令
 * 队列玩家${forWhichPlayer}向中立建筑${neutralStructure}发出单位目标命令${unitId}目标${target}
 * 向中立建筑添加单位目标命令到队列
 */
declare function DzQueueIssueNeutralTargetOrderById(
  forWhichPlayer: player,
  neutralStructure: unit,
  unitId: number,
  target: widget
): boolean;

/**
 * 获取单位命令数量
 * 获取${u}的命令数量
 * 返回单位队列中的命令数量
 */
declare function DzUnitOrdersCount(u: unit): number;

/**
 * 清空单位命令
 * 清空${u}的命令队列仅排队${onlyQueued}
 * 清空单位的命令队列
 */
declare function DzUnitOrdersClear(u: unit, onlyQueued: boolean): void;

/**
 * 执行单位命令
 * 执行${u}的命令队列
 * 立即执行单位队列中的所有命令
 */
declare function DzUnitOrdersExec(u: unit): void;

/**
 * 强制停止单位
 * 强制停止${u}清空队列${clearQueue}
 * 强制停止单位并可选择清空命令队列
 */
declare function DzUnitOrdersForceStop(u: unit, clearQueue: boolean): void;

/**
 * 反转单位命令队列
 * 反转${u}的命令队列
 * 将单位命令队列的顺序反转
 */
declare function DzUnitOrdersReverse(u: unit): void;

// ============= XLSX Excel文件操作函数 =============

/**
 * 打开Excel文件
 * 打开Excel文件${filePath}
 * 打开指定路径的Excel文件，返回文件句柄
 */
declare function DzXlsxOpen(filePath: string): number;

/**
 * 关闭Excel文件
 * 关闭Excel文件${docHandle}
 * 关闭Excel文件句柄，返回是否成功
 */
declare function DzXlsxClose(docHandle: number): boolean;

/**
 * 获取Excel工作表行数
 * 获取Excel文件${docHandle}工作表${sheetName}的行数
 * 返回Excel工作表的行数
 */
declare function DzXlsxWorksheetGetRowCount(docHandle: number, sheetName: string): number;

/**
 * 获取Excel工作表列数
 * 获取Excel文件${docHandle}工作表${sheetName}的列数
 * 返回Excel工作表的列数
 */
declare function DzXlsxWorksheetGetColumnCount(docHandle: number, sheetName: string): number;

/**
 * 获取Excel单元格类型
 * 获取Excel文件${docHandle}工作表${sheetName}单元格(${row},${column})的类型
 * 返回Excel单元格的数据类型
 */
declare function DzXlsxWorksheetGetCellType(
  docHandle: number,
  sheetName: string,
  row: number,
  column: number
): number;

/**
 * 获取Excel单元格字符串
 * 获取Excel文件${docHandle}工作表${sheetName}单元格(${row},${column})的字符串值
 * 返回Excel单元格的字符串值
 */
declare function DzXlsxWorksheetGetCellString(
  docHandle: number,
  sheetName: string,
  row: number,
  column: number
): string;

/**
 * 获取Excel单元格整数
 * 获取Excel文件${docHandle}工作表${sheetName}单元格(${row},${column})的整数值
 * 返回Excel单元格的整数值
 */
declare function DzXlsxWorksheetGetCellInteger(
  docHandle: number,
  sheetName: string,
  row: number,
  column: number
): number;

/**
 * 获取Excel单元格布尔值
 * 获取Excel文件${docHandle}工作表${sheetName}单元格(${row},${column})的布尔值
 * 返回Excel单元格的布尔值
 */
declare function DzXlsxWorksheetGetCellBoolean(
  docHandle: number,
  sheetName: string,
  row: number,
  column: number
): boolean;

/**
 * 获取Excel单元格浮点数
 * 获取Excel文件${docHandle}工作表${sheetName}单元格(${row},${column})的浮点数值
 * 返回Excel单元格的浮点数值
 */
declare function DzXlsxWorksheetGetCellFloat(
  docHandle: number,
  sheetName: string,
  row: number,
  column: number
): number;

/**
 * 设置Frame纹理坐标
 * 设置${frame}纹理坐标左${left}上${top}右${right}下${bottom}
 * 修改Frame的纹理映射坐标
 */
declare function DzFrameSetTexCoord(
  frame: number,
  left: number,
  top: number,
  right: number,
  bottom: number
): void;

// ============= 单位技能属性设置函数 =============

/**
 * 设置单位技能范围
 * 设置${Unit}技能${abil_code}范围为${value}
 * 修改单位技能的作用范围
 */
declare function DzSetUnitAbilityRange(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能范围
 * 获取${Unit}技能${abil_code}的范围
 * 返回单位技能的作用范围
 */
declare function DzGetUnitAbilityRange(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能作用区域
 * 设置${Unit}技能${abil_code}作用区域为${value}
 * 修改单位技能的作用区域大小
 */
declare function DzSetUnitAbilityArea(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能作用区域
 * 获取${Unit}技能${abil_code}的作用区域
 * 返回单位技能的作用区域大小
 */
declare function DzGetUnitAbilityArea(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能冷却时间
 * 设置${Unit}技能${abil_code}冷却时间${cool}最大冷却${max_cool}
 * 修改单位技能的冷却时间
 */
declare function DzSetUnitAbilityCool(
  Unit: unit,
  abil_code: number,
  cool: number,
  max_cool: number
): boolean;

/**
 * 获取单位技能冷却时间
 * 获取${Unit}技能${abil_code}的冷却时间
 * 返回单位技能的当前冷却时间
 */
declare function DzGetUnitAbilityCool(Unit: unit, abil_code: number): number;

/**
 * 获取单位技能最大冷却时间
 * 获取${Unit}技能${abil_code}的最大冷却时间
 * 返回单位技能的最大冷却时间
 */
declare function DzGetUnitAbilityMaxCool(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能数据A
 * 设置${Unit}技能${abil_code}数据A为${value}
 * 修改单位技能的数据A字段
 */
declare function DzSetUnitAbilityDataA(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能数据A
 * 获取${Unit}技能${abil_code}的数据A
 * 返回单位技能的数据A字段值
 */
declare function DzGetUnitAbilityDataA(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能数据B
 * 设置${Unit}技能${abil_code}数据B为${value}
 * 修改单位技能的数据B字段
 */
declare function DzSetUnitAbilityDataB(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能数据B
 * 获取${Unit}技能${abil_code}的数据B
 * 返回单位技能的数据B字段值
 */
declare function DzGetUnitAbilityDataB(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能数据C
 * 设置${Unit}技能${abil_code}数据C为${value}
 * 修改单位技能的数据C字段
 */
declare function DzSetUnitAbilityDataC(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能数据C
 * 获取${Unit}技能${abil_code}的数据C
 * 返回单位技能的数据C字段值
 */
declare function DzGetUnitAbilityDataC(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能数据D
 * 设置${Unit}技能${abil_code}数据D为${value}
 * 修改单位技能的数据D字段
 */
declare function DzSetUnitAbilityDataD(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能数据D
 * 获取${Unit}技能${abil_code}的数据D
 * 返回单位技能的数据D字段值
 */
declare function DzGetUnitAbilityDataD(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能数据E
 * 设置${Unit}技能${abil_code}数据E为${value}
 * 修改单位技能的数据E字段
 */
declare function DzSetUnitAbilityDataE(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能数据E
 * 获取${Unit}技能${abil_code}的数据E
 * 返回单位技能的数据E字段值
 */
declare function DzGetUnitAbilityDataE(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能按钮位置
 * 设置${Unit}技能${abil_code}按钮位置(${x},${y})
 * 修改单位技能在UI中的按钮位置
 */
declare function DzSetUnitAbilityButtonPos(
  Unit: unit,
  abil_code: number,
  x: number,
  y: number
): boolean;

/**
 * 设置单位技能热键
 * 设置${Unit}技能${abil_code}热键为${key}
 * 修改单位技能的快捷键
 */
declare function DzSetUnitAbilityHotkey(Unit: unit, abil_code: number, key: string): boolean;

/**
 * 目标类型转字符串
 * 将目标类型${targs}转换为字符串
 * 将技能目标类型值转换为字符串格式
 */
declare function DzConvertTargs2Str(targs: number): string;

/**
 * 字符串转目标类型
 * 将字符串${targs}转换为目标类型
 * 将字符串格式的目标类型转换为数值
 */
declare function DzConvertStr2Targs(targs: string): number;

/**
 * 设置单位技能目标类型
 * 设置${Unit}技能${abil_code}目标类型为${value}
 * 修改单位技能的目标类型
 */
declare function DzSetUnitAbilityTargs(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能目标类型
 * 获取${Unit}技能${abil_code}的目标类型
 * 返回单位技能的目标类型
 */
declare function DzGetUnitAbilityTargs(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能消耗
 * 设置${Unit}技能${abil_code}消耗为${value}
 * 修改单位技能的魔法消耗
 */
declare function DzSetUnitAbilityCost(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能消耗
 * 获取${Unit}技能${abil_code}的消耗
 * 返回单位技能的魔法消耗
 */
declare function DzGetUnitAbilityCost(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能需求等级
 * 设置${Unit}技能${abil_code}需求等级为${value}
 * 修改单位技能的学习需求等级
 */
declare function DzSetUnitAbilityReqLevel(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能需求等级
 * 获取${Unit}技能${abil_code}的需求等级
 * 返回单位技能的学习需求等级
 */
declare function DzGetUnitAbilityReqLevel(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能单位ID
 * 设置${Unit}技能${abil_code}单位ID为${value}
 * 修改单位技能关联的单位ID
 */
declare function DzSetUnitAbilityUnitId(Unit: unit, abil_code: number, value: number): boolean;

/**
 * 获取单位技能单位ID
 * 获取${Unit}技能${abil_code}的单位ID
 * 返回单位技能关联的单位ID
 */
declare function DzGetUnitAbilityUnitId(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能建造命令ID
 * 设置${Unit}技能${abil_code}建造命令ID为${value}
 * 修改单位技能的建造命令ID
 */
declare function DzSetUnitAbilityBuildOrderId(
  Unit: unit,
  abil_code: number,
  value: number
): boolean;

/**
 * 获取单位技能建造命令ID
 * 获取${Unit}技能${abil_code}的建造命令ID
 * 返回单位技能的建造命令ID
 */
declare function DzGetUnitAbilityBuildOrderId(Unit: unit, abil_code: number): number;

/**
 * 设置单位技能建造模型
 * 设置${Unit}技能${abil_code}建造模型${model_path}缩放${model_scale}
 * 修改单位技能的建造预览模型
 */
declare function DzSetUnitAbilityBuildModel(
  Unit: unit,
  abil_code: number,
  model_path: string,
  model_scale: number
): boolean;

/**
 * 单位是否拥有技能
 * 检查${Unit}是否拥有技能${abil_code}
 * 检查单位是否拥有指定的技能
 */
declare function DzUnitHasAbility(Unit: unit, abil_code: number): boolean;

// ============= KK 命令按钮函数 =============

/**
 * 创建KK命令按钮
 * 创建KK命令按钮
 * 创建一个KK系统的命令按钮，返回按钮ID
 */
declare function KKCreateCommandButton(): number;

/**
 * 销毁KK命令按钮
 * 销毁KK命令按钮${btn}
 * 销毁指定的KK命令按钮
 */
declare function KKDestroyCommandButton(btn: number): void;

/**
 * KK命令按钮点击
 * 点击KK命令按钮${btn}鼠标类型${mouse_type}
 * 模拟点击KK命令按钮
 */
declare function KKCommandButtonClick(btn: number, mouse_type: number): void;

/**
 * KK命令目标点击
 * KK命令目标点击鼠标类型${mouse_type}目标${target}
 * 执行KK命令的目标点击操作，返回是否成功
 */
declare function KKCommandTargetClick(mouse_type: number, target: widget): boolean;

/**
 * KK命令地面点击
 * KK命令地面点击鼠标类型${mouse_type}位置(${x},${y},${z})
 * 执行KK命令的地面点击操作，返回是否成功
 */
declare function KKCommandTerrainClick(
  mouse_type: number,
  x: number,
  y: number,
  z: number
): boolean;

/**
 * 设置KK命令单位技能
 * 设置KK命令按钮${btn}单位${Unit}技能${abil_code}
 * 将KK命令按钮关联到单位的技能
 */
declare function KKSetCommandUnitAbility(btn: number, Unit: unit, abil_code: number): void;

// ============= 物品扩展函数 =============

/**
 * 获取物品顶点颜色
 * 获取${Item}的顶点颜色
 * 返回物品的顶点颜色值
 */
declare function DzItemGetVertexColor(Item: item): number;

/**
 * 设置物品大小
 * 设置${Item}大小为${size}
 * 修改物品的显示大小
 */
declare function DzItemSetSize(Item: item, size: number): void;

/**
 * 获取物品大小
 * 获取${Item}的大小
 * 返回物品的当前大小
 */
declare function DzItemGetSize(Item: item): number;

/**
 * 物品矩阵X轴旋转
 * 物品${Item}矩阵X轴旋转${x}
 * 围绕X轴旋转物品
 */
declare function DzItemMatRotateX(Item: item, x: number): void;

/**
 * 物品矩阵Y轴旋转
 * 物品${Item}矩阵Y轴旋转${y}
 * 围绕Y轴旋转物品
 */
declare function DzItemMatRotateY(Item: item, y: number): void;

/**
 * 物品矩阵Z轴旋转
 * 物品${Item}矩阵Z轴旋转${z}
 * 围绕Z轴旋转物品
 */
declare function DzItemMatRotateZ(Item: item, z: number): void;

/**
 * 物品矩阵缩放
 * 物品${Item}矩阵缩放(${x},${y},${z})
 * 在各个轴向上缩放物品
 */
declare function DzItemMatScale(Item: item, x: number, y: number, z: number): void;

/**
 * 重置物品矩阵
 * 重置${Item}的矩阵
 * 将物品的变换矩阵重置为初始状态
 */
declare function DzItemMatReset(Item: item): void;

/**
 * 获取最后选中的物品
 * 获取最后选中的物品
 * 返回玩家最后选中的物品
 */
declare function DzGetLastSelectedItem(): item;

/**
 * 设置粒子系统大小
 * 设置${Widget}粒子系统大小${scale}
 * 修改控件粒子系统的缩放大小
 */
declare function DzSetPariticle2Size(Widget: agent, scale: number): void;

/**
 * 设置单位碰撞大小
 * 设置${Unit}碰撞大小为${size}
 * 修改单位的碰撞体积大小
 */
declare function DzSetUnitCollisionSize(Unit: unit, size: number): void;

/**
 * 获取单位碰撞大小
 * 获取${Unit}的碰撞大小
 * 返回单位的碰撞体积大小
 */
declare function DzGetUnitCollisionSize(Unit: unit): number;

/**
 * 设置控件纹理
 * 设置${Handle}纹理${TexturePath}替换ID${ReplaceId}
 * 修改控件使用的纹理文件
 */
declare function DzSetWidgetTexture(Handle: agent, TexturePath: string, ReplaceId: number): void;

/**
 * 设置单位选择缩放
 * 设置${Unit}选择缩放${scale}
 * 修改单位选择时的缩放比例
 */
declare function DzSetUnitSelectScale(Unit: unit, scale: number): void;

/**
 * 设置单位命中忽略
 * 设置${Unit}命中忽略${ignore}
 * 控制单位是否忽略命中检测
 */
declare function DzSetUnitHitIgnore(Unit: unit, ignore: boolean): void;

/**
 * 特效绑定特效
 * 特效${Handle}在${AttachName}位置绑定特效${eff}
 * 将一个特效绑定到另一个对象的指定挂接点
 */
declare function DzEffectBindEffect(Handle: agent, AttachName: string, eff: effect): void;

// ============= 物品模型和UI函数 =============

/**
 * 设置道具模型
 * 设置${whichItem}模型为${file}
 * 更改道具使用的模型文件
 */
declare function DzItemSetModel(whichItem: item, file: string): void;

/**
 * 设置道具颜色
 * 设置${whichItem}颜色为${color}
 * 修改道具的顶点颜色
 */
declare function DzItemSetVertexColor(whichItem: item, color: number): void;

/**
 * 设置道具透明度
 * 设置${whichItem}透明度为${color}
 * 修改道具的透明度值
 */
declare function DzItemSetAlpha(whichItem: item, color: number): void;

/**
 * 设置道具头像
 * 设置${whichItem}头像为${modelPath}
 * 更改道具在UI中显示的头像模型
 */
declare function DzItemSetPortrait(whichItem: item, modelPath: string): void;

/**
 * 钩取血条事件
 * 钩取血条事件处理函数${func}
 * 注册血条相关事件的处理函数
 */
declare function DzFrameHookHpBar(func: () => void): void;

/**
 * 获取触发血条事件的单位
 * 获取触发血条事件的单位
 * 返回触发血条事件的单位对象
 */
declare function DzFrameGetTriggerHpBarUnit(): unit;

/**
 * 获取触发的血条
 * 获取触发的血条
 * 返回触发事件的血条Frame句柄
 */
declare function DzFrameGetTriggerHpBar(): number;

/**
 * 获取单位血条
 * 获取${whichUnit}的血条
 * 返回指定单位的血条Frame句柄
 */
declare function DzFrameGetUnitHpBar(whichUnit: unit): number;

/**
 * 获取光标Frame
 * 获取光标Frame
 * 返回当前光标的Frame句柄
 */
declare function DzGetCursorFrame(): number;

/**
 * 检查Frame锚点有效性
 * 检查${frame}锚点${anchor}是否有效
 * 检查Frame指定锚点是否有效设置
 */
declare function DzFrameGetPointValid(frame: number, anchor: number): boolean;

/**
 * 获取Frame相对锚点
 * 获取${frame}锚点${anchor}的相对Frame
 * 返回Frame锚点相对的目标Frame
 */
declare function DzFrameGetPointRelative(frame: number, anchor: number): number;

/**
 * 获取Frame相对锚点位置
 * 获取${frame}锚点${anchor}的相对锚点位置
 * 返回Frame锚点相对的目标锚点位置
 */
declare function DzFrameGetPointRelativePoint(frame: number, anchor: number): number;

/**
 * 获取Frame锚点X坐标
 * 获取${frame}锚点${anchor}的X坐标
 * 返回Frame锚点的X坐标值
 */
declare function DzFrameGetPointX(frame: number, anchor: number): number;

/**
 * 获取Frame锚点Y坐标
 * 获取${frame}锚点${anchor}的Y坐标
 * 返回Frame锚点的Y坐标值
 */
declare function DzFrameGetPointY(frame: number, anchor: number): number;

/**
 * 按键码转整数
 * 将按键码${i}转换为整数
 * 按键码到整数的转换函数
 */
declare function DzK2I(i: number): number;

/**
 * 整数转按键码
 * 将整数${i}转换为按键码
 * 整数到按键码的转换函数
 */
declare function DzI2K(i: number): number;

/**
 * 注册商城道具同步数据
 * 注册${trigger}的商城道具同步数据事件
 * 监听商城道具相关的同步数据事件
 */
declare function DzTriggerRegisterMallItemSyncData(trig: trigger): void;

/**
 * 注册商城道具消耗事件
 * 注册${trigger}的商城道具消耗事件
 * 监听玩家消耗/使用商城道具的事件
 */
declare function DzTriggerRegisterMallItemConsumeEvent(trig: trigger): void;

/**
 * 注册商城道具删除事件
 * 注册${trigger}的商城道具删除事件
 * 监听玩家删除商城道具的事件
 */
declare function DzTriggerRegisterMallItemRemoveEvent(trig: trigger): void;

/**
 * 获取触发商城道具的玩家
 * 获取触发商城道具事件的玩家
 * 在商城道具事件中获取触发事件的玩家
 */
declare function DzGetTriggerMallItemPlayer(): player;

/**
 * 获取触发的商城道具
 * 获取触发事件的商城道具
 * 在商城道具事件中获取相关的道具信息
 */
declare function DzGetTriggerMallItem(): string;
