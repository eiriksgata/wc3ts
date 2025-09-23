# w3ts - TypeScript API for Warcraft III

A comprehensive TypeScript library for Warcraft III 1.27a custom map development, providing type-safe bindings to the Warcraft III API.

## Features

- ✅ **Complete API Coverage**: Full TypeScript bindings for Warcraft III native functions
- ✅ **Type Safety**: Strong typing for all game objects and functions
- ✅ **Modern JavaScript**: Support for ES6+ features and modern JavaScript APIs
- ✅ **Lua Compilation**: Built for use with [TypeScriptToLua](https://typescripttolua.github.io/)
- ✅ **Handle System**: Object-oriented wrappers for Warcraft III handles
- ✅ **Binary Operations**: Cross-platform binary data handling
- ✅ **Extended APIs**: Support for extended APIs (DzAPI, JAPI)

## Installation

```bash
npm install w3ts
```

## Quick Start

```typescript
import { Unit, tsGlobals } from "w3ts";

// Create a unit
const hero = Unit.create(tsGlobals.PLAYER_NEUTRAL_AGGRESSIVE, FourCC("Hpal"), 0, 0, 270);

// Use handle methods
hero.setName("My Custom Hero");
hero.setLevel(10, true);

// Access extended APIs
import { DzCreateFrame } from "w3ts";
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

- **Warcraft III**: Version 1.27a and later
- **TypeScript**: 4.0+
- **TypeScriptToLua**: 1.0+
- **Lua**: 5.3

## Examples

### Creating and Managing Units

```typescript
import { Unit, Player } from "w3ts";

const player = Player.fromIndex(0);
const unit = Unit.create(player, FourCC("hfoo"), 0, 0, 270);
unit.setName("Custom Footman");
unit.addAbility(FourCC("Amls"));
```

### UI Frame Management

```typescript
import { DzCreateFrame, DzFrameSetText } from "w3ts";

const frame = DzCreateFrame("MyTextFrame", DzGetGameUI(), 0, 0);
DzFrameSetText(frame, "Hello World!");
```

### Binary Data Operations

```typescript
import { BinaryWriter, BinaryReader } from "w3ts";

const writer = new BinaryWriter();
writer.writeInt32(42);
writer.writeString("test");

const data = writer.getBytes();
const reader = new BinaryReader(data);
const number = reader.readInt32(); // 42
const text = reader.readString(); // "test"
```

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details.

## Related Projects

- [TypeScriptToLua](https://typescripttolua.github.io/) - TypeScript to Lua transpiler
- [wc3-ts-template](https://github.com/cipherxof/wc3-ts-template) - Project template for Warcraft III TypeScript development
