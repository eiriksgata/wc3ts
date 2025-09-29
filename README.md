# WC3TS - TypeScript API for Warcraft III

[![Build and Publish](https://github.com/eiriksgata/wc3ts/actions/workflows/publish.yml/badge.svg)](https://github.com/eiriksgata/wc3ts/actions/workflows/publish.yml)
[![Auto Build and Publish](https://github.com/eiriksgata/wc3ts/actions/workflows/auto-publish.yml/badge.svg)](https://github.com/eiriksgata/wc3ts/actions/workflows/auto-publish.yml)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/eiriksgata/wc3ts)](https://github.com/eiriksgata/wc3ts/packages)

A comprehensive TypeScript library for Warcraft III custom map development, providing type-safe bindings to the Warcraft III API.

## Features

- ✅ **Complete API Coverage**: Full TypeScript bindings for Warcraft III native functions
- ✅ **Type Safety**: Strong typing for all game objects and functions
- ✅ **Modern JavaScript**: Support for ES6+ features and modern JavaScript APIs
- ✅ **Lua Compilation**: Built for use with [TypeScriptToLua](https://typescripttolua.github.io/)
- ✅ **Handle System**: Object-oriented wrappers for Warcraft III handles
- ✅ **Binary Operations**: Cross-platform binary data handling
- ✅ **Extended APIs**: Support for extended APIs (DzAPI, JAPI)
- 🚀 **Auto Publishing**: Automated builds and releases via GitHub Actions

## Installation

### From GitHub Packages (Recommended)

```bash
# Configure npm to use GitHub Packages
echo "@eiriksgata:registry=https://npm.pkg.github.com" >> .npmrc

# Install the package
npm install @eiriksgata/wc3ts
```

### From NPM (if available)

```bash
npm install wc3ts
```

## Quick Start

```typescript
import { Unit, tsGlobals } from "wc3ts";

// Create a unit
const hero = Unit.create(tsGlobals.PLAYER_NEUTRAL_AGGRESSIVE, FourCC("Hpal"), 0, 0, 270);

// Use handle methods
hero.setName("My Custom Hero");
hero.setLevel(10, true);

// Access extended APIs
import { DzCreateFrame } from "wc3ts";
const frame = DzCreateFrame("MyFrame", DzGetGameUI(), 0, 0);
```

## Project Structure

- `handles/` - Object-oriented wrappers for Warcraft III handles
- `globals/` - Global constants and utility functions
- `system/` - System utilities (file I/O, binary operations, etc.)
- `types/` - TypeScript declaration files for native APIs
- `utils/` - Utility functions and helpers

## API Reference

### Core Handles

- `Unit` - Unit manipulation and control
- `Player` - Player objects and operations
- `Trigger` - Event handling and triggers
- `Timer` - Timer management
- `Effect` - Visual effects
- `Frame` - UI frame manipulation (DzAPI)
- `Item` - Item handling
- `Group` - Unit group operations

### System Utilities

- `BinaryReader/Writer` - Cross-platform binary data handling
- `Base64` - Base64 encoding/decoding
- `File` - File operations
- `Sync` - Multiplayer synchronization

### Extended APIs

- **DzAPI**: Enhanced UI and frame manipulation
- **JAPI**: Extended game functions
- **EX Functions**: Additional game extensions

## Usage with TypeScriptToLua

This library is designed to work seamlessly with TypeScriptToLua:

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext"],
    "moduleResolution": "Classic",
    "types": ["@typescript-to-lua/language-extensions", "lua-types/core/global"]
  },
  "tstl": {
    "luaTarget": "5.3",
    "buildMode": "library"
  }
}
```

## Compatibility

- **Warcraft III**: 1.27a versions
- **TypeScript**: 4.0+
- **TypeScriptToLua**: 1.0+
- **Lua**: 5.3

## Examples
```

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details.

## Related Projects

- [TypeScriptToLua](https://typescripttolua.github.io/) - TypeScript to Lua transpiler
- [wc3-ts-template](https://github.com/Eiriksgata/wc3-map-ts-template) - Project template for Warcraft III TypeScript development
