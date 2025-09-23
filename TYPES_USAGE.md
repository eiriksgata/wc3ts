# WC3TS-1.27a 类型定义使用指南

本包提供了 Warcraft III 1.27a 的 TypeScript 类型定义，包含 JASS 函数和 WC3 特有的接口定义。

## 安装

```bash
yarn add wc3ts-1.27a
# 或
npm install wc3ts-1.27a
```

## 在其他项目中使用类型定义

### 方法 1：自动导入全局类型（推荐）

在你的项目的主 TypeScript 文件（如 `src/index.ts` 或入口文件）中添加：

```typescript
// 导入 WC3 类型定义（这会自动应用全局类型）
import 'wc3ts-1.27a/global';

// 现在你可以使用 WC3 的类型和函数了
import { Unit, Player } from 'wc3ts-1.27a';

// 全局类型现在可用（如 print 函数）
print("Hello WC3!");

// 使用封装的类
const player = Player.fromIndex(0);
const unit = Unit.create(player, FourCC('hfoo'), 0, 0, 270);
```

### 方法 2：在 tsconfig.json 中引用类型

在你的项目的 `tsconfig.json` 中添加类型引用：

```json
{
  "compilerOptions": {
    "types": [
      "wc3ts-1.27a/types",
      "@typescript-to-lua/language-extensions",
      "lua-types/5.3"
    ],
    // ... 其他配置
  },
  "include": [
    // 或者直接在这里引用
    "node_modules/wc3ts-1.27a/dist/types/index.d.ts"
  ]
}
```

### 方法 3：三斜杠指令引用

在你的 TypeScript 文件顶部添加：

```typescript
/// <reference types="wc3ts-1.27a/types" />

// 现在 WC3 类型可用
const unit = CreateUnit(Player(0), FourCC('hfoo'), 0, 0, 270);
```

## 可用的类型定义

该包包含以下类型定义：

- **base.d.ts** - 基础类型定义
- **common.d.ts** - 通用 JASS 函数
- **console.d.ts** - 控制台相关接口
- **debug.d.ts** - 调试相关接口
- **japi.d.ts** - JAPI 扩展函数
- **runtime.d.ts** - 运行时接口
- **globals.d.ts** - 全局变量和函数

## 示例项目配置

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext"],
    "moduleResolution": "node",
    "types": [
      "@typescript-to-lua/language-extensions",
      "lua-types/5.3",
      "wc3ts-1.27a/types"
    ],
    "strict": true
  },
  "tstl": {
    "luaTarget": "5.3",
    "noImplicitSelf": true,
    "noHeader": true
  }
}
```

### package.json
```json
{
  "dependencies": {
    "wc3ts-1.27a": "^1.0.0"
  },
  "devDependencies": {
    "@typescript-to-lua/language-extensions": "^1.19.0",
    "lua-types": "^2.13.1",
    "typescript-to-lua": "^1.32.0"
  }
}
```

## 注意事项

1. 确保你的项目已经配置了 TypeScript-to-Lua (TSTL)
2. 该包主要提供类型定义，实际的运行时功能依赖于 WC3 环境
3. 建议同时安装 `lua-types` 以获得完整的 Lua 类型支持
4. 某些功能可能需要 JAPI 插件支持

## 故障排除

如果类型定义没有生效：

1. 检查 `tsconfig.json` 中的 `types` 配置
2. 确保导入了正确的类型文件
3. 重启 TypeScript 语言服务器
4. 清理并重新构建项目