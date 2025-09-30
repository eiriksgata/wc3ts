# WC3TS - Warcraft III 的 TypeScript API

[![NPM 版本](https://img.shields.io/npm/v/@eiriksgata/wc3ts)](https://www.npmjs.com/package/@eiriksgata/wc3ts)
[![下载量](https://img.shields.io/npm/dm/@eiriksgata/wc3ts)](https://www.npmjs.com/package/@eiriksgata/wc3ts)
[![许可证](https://img.shields.io/npm/l/@eiriksgata/wc3ts)](https://github.com/eiriksgata/wc3ts/blob/main/LICENSE)

这是一个用于 Warcraft III 自定义地图开发的 TypeScript 库，提供对游戏原生 API 的类型安全绑定。设计为供 [TypeScriptToLua](https://typescripttolua.github.io/) 项目作为源码依赖使用。

该项目只是提供接口和类型，并且提供对象封装。具体实现和使用，请参考wc3-map-ts-template

## 如何使用

-使用[wc3-map-ts-template](https://github.com/eiriksgata/wc3-map-ts-template) 进行开发，该提供所有的环境集成。


## ✨ 功能

- 类型安全：为 Warcraft III API 提供完整的 TypeScript 定义
- 覆盖全面：包含原生函数、句柄和扩展 API
- 面向对象：现代化的类封装游戏对象
- TSTL 兼容：优化用于 TypeScriptToLua 编译
- 源码库：发布为纯 TypeScript 源码，方便二次编译
- 扩展 API：支持 DzAPI、JAPI 等扩展
- 系统工具：二进制 I/O、Base64、文件操作等

## 安装

```bash
npm install @eiriksgata/wc3ts
```

## 项目结构

```
src/
├── handles/        # 句柄封装（Unit、Player、Timer 等）
├── globals/        # 全局常量、FourCC、命令常量等
├── system/         # 系统工具（Base64、文件、二进制等）
├── types/          # 类型声明文件（d.ts）
├── utils/          # 工具函数（颜色等）
└── index.ts        # 主入口
```

## API 概览

提供核心游戏对象和系统工具的类与函数，例如 `Unit`、`Player`、`Timer`、`Trigger`，以及 DzAPI/JAPI 相关的 UI 接口。详情请查看 `src/` 源码。

## 贡献

欢迎贡献！请在 GitHub 上提交 issue 或 PR，保持代码风格和类型安全。

## 许可

MIT 许可 - 详情见 LICENSE 文件。
