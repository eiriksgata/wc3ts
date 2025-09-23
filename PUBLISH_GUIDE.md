# 发布 w3ts 包到 npm 的完整指南

## 准备工作

### 1. 检查包内容

运行以下命令检查将要发布的文件：

```bash
npm pack --dry-run
```

### 2. 测试构建

确保构建过程正常：

```bash
npm run build
```

### 3. 验证包信息

检查 package.json 中的信息是否正确：

- 包名：`w3ts`
- 版本号：`1.0.0`
- 描述、作者、许可证等

## 发布到 npm

### 方法 1：发布到 npm 公共仓库

1. **注册/登录 npm 账户**

```bash
npm login
```

2. **发布包**

```bash
npm publish
```

3. **验证发布**

```bash
npm info w3ts
```

### 方法 2：发布到私有仓库

如果需要发布到私有仓库：

```bash
npm publish --registry https://your-private-registry.com
```

### 方法 3：发布到 GitHub Packages

1. **配置 .npmrc 文件**

```
@your-username:registry=https://npm.pkg.github.com
```

2. **更新 package.json**

```json
{
  "name": "@your-username/w3ts",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

3. **发布**

```bash
npm publish
```

## 版本管理

### 更新版本号

```bash
# 补丁版本（1.0.0 -> 1.0.1）
npm version patch

# 次要版本（1.0.0 -> 1.1.0）
npm version minor

# 主要版本（1.0.0 -> 2.0.0）
npm version major
```

### 发布预发布版本

```bash
# 发布 beta 版本
npm version prerelease --preid=beta
npm publish --tag beta

# 发布 alpha 版本
npm version prerelease --preid=alpha
npm publish --tag alpha
```

## 在其他项目中使用

### 安装包

```bash
npm install w3ts
```

### 在 TypeScript 项目中使用

```typescript
import { Unit, Player, tsGlobals } from "w3ts";

// 使用类型安全的 API
const hero = Unit.create(Player.fromIndex(0), FourCC("Hpal"), 0, 0, 270);
hero.setName("My Hero");
```

### 在 TypeScriptToLua 项目中使用

1. **安装依赖**

```bash
npm install w3ts typescript-to-lua
```

2. **配置 tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext"],
    "moduleResolution": "Classic"
  },
  "tstl": {
    "luaTarget": "5.3",
    "buildMode": "library"
  }
}
```

3. **编译项目**

```bash
npx tstl
```

## 维护和更新

### 更新包

1. 修改代码
2. 运行测试：`npm test`
3. 更新版本：`npm version patch/minor/major`
4. 重新发布：`npm publish`

### 撤销发布（72小时内）

```bash
npm unpublish w3ts@1.0.0
```

### 废弃版本

```bash
npm deprecate w3ts@1.0.0 "This version has critical bugs"
```

## 注意事项

1. **包名唯一性**：确保包名在 npm 上是唯一的
2. **语义化版本**：遵循 SemVer 规范
3. **文档完整性**：保持 README.md 和 API 文档更新
4. **测试覆盖**：确保代码质量
5. **许可证**：明确开源许可证
6. **安全性**：定期更新依赖，修复安全漏洞

## 故障排除

### 发布失败

- 检查网络连接
- 验证 npm 账户权限
- 确认包名没有冲突
- 检查 package.json 格式

### 包无法导入

- 检查 main 和 types 字段
- 确认 dist 目录包含正确文件
- 验证 TypeScript 声明文件

### 版本问题

- 使用 `npm ls` 检查依赖树
- 清理 node_modules：`rm -rf node_modules && npm install`
- 检查 peer dependencies

## 最佳实践

1. **自动化发布**：使用 GitHub Actions 或其他 CI/CD
2. **变更日志**：维护 CHANGELOG.md
3. **语义化提交**：使用标准化的提交信息
4. **代码质量**：配置 ESLint、Prettier
5. **安全扫描**：定期运行 `npm audit`
