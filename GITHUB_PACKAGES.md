# GitHub Packages 发布指南

## 自动发布设置

本项目配置了自动# 安装包
npm install @eiriksgata/wc3ts
```

或使用 yarn：

```bash
# 首先配置 yarn
yarn config set '@eiriksgata:registry' 'https://npm.pkg.github.com'

# 安装包
yarn add @eiriksgata/wc3tsackages。以下是工作流程：

### 🚀 自动发布触发条件

1. **推送到 main 分支** - 触发自动构建和发布
2. **创建 Release** - 触发正式发布
3. **版本管理** - 自动处理版本号升级

### 📦 版本升级规则

根据提交信息自动判断版本升级类型：

- `feat:` 或 `feature:` → 升级次版本号 (minor)
- `BREAKING CHANGE` 或 `major:` → 升级主版本号 (major)
- 其他提交 → 升级补丁版本号 (patch)

### 🔧 手动发布

如需手动发布：

```bash
# 1. 构建项目
npm run build

# 2. 升级版本（选择一个）
npm run version:patch  # 1.0.0 -> 1.0.1
npm run version:minor  # 1.0.0 -> 1.1.0
npm run version:major  # 1.0.0 -> 2.0.0

# 3. 发布到 GitHub Packages
npm run publish:github
```

### 📥 在其他项目中安装

```bash
# 配置 npm 以使用 GitHub Packages
echo "@eiriksgata:registry=https://npm.pkg.github.com" >> .npmrc

# 安装包
npm install @eiriksgata/wc3ts
```

或使用 yarn：

```bash
# 配置 yarn
yarn config set "@eiriksgata:registry" "https://npm.pkg.github.com"

# 安装包
yarn add @eiriksgata/wc3ts
```

### 🔐 认证设置

在其他项目中使用时，需要 GitHub Personal Access Token：

1. 创建 `.npmrc` 文件：
```
@eiriksgata:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. 或设置环境变量：
```bash
export NODE_AUTH_TOKEN=YOUR_GITHUB_TOKEN
```

### 📊 工作流状态

- [![Build and Publish](https://github.com/eiriksgata/wc3ts/actions/workflows/publish.yml/badge.svg)](https://github.com/eiriksgata/wc3ts/actions/workflows/publish.yml)
- [![Auto Build and Publish](https://github.com/eiriksgata/wc3ts/actions/workflows/auto-publish.yml/badge.svg)](https://github.com/eiriksgata/wc3ts/actions/workflows/auto-publish.yml)

### 📝 提交信息示例

```bash
# 补丁版本升级
git commit -m "fix: 修复了类型定义问题"

# 次版本升级
git commit -m "feat: 添加了新的 WC3 API 支持"

# 主版本升级
git commit -m "feat: 重构了整个 API 架构

BREAKING CHANGE: 移除了旧的 API 接口"
```

### 🛠️ 本地测试

```bash
# 构建项目
npm run build

# 检查构建产物
ls dist/

# 运行 linting
npm run lint

# 修复 linting 问题
npm run lint:fix
```