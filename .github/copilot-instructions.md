# WC3TS Copilot Instructions

This is a TypeScript API library for Warcraft III custom map development, designed for use with [TypeScriptToLua](https://typescripttolua.github.io/). It provides type-safe bindings for Warcraft III's native API and serves as a source dependency.

## Architecture Overview

### Handle-Based Object System
- All game objects inherit from `Handle<T>` base class in `src/handles/handle.ts`
- Uses WeakMap pattern for object tracking and memory management
- Implements static `getObject()` method for handle-to-object mapping
- Constructor pattern: deprecated direct construction, prefer static factory methods

Example pattern:
```typescript
export class Unit extends Widget {
  declare public readonly handle: unit;

  // Static factory method (preferred)
  public static create(owner: MapPlayer, unitId: number, x: number, y: number): Unit

  // Deprecated constructor pattern
  constructor(owner: MapPlayer, unitId: number, x: number, y: number, face?: number)
}
```

### Module Structure
- `handles/` - Object-oriented wrappers for Warcraft III handles (Unit, Player, Timer, etc.)
- `types/` - TypeScript declaration files (.d.ts) for native Warcraft III API
- `globals/` - Constants, FourCC definitions, and global values (e.g., `bj_UNIT_FACING = 270.0`)
- `system/` - Utility classes (Base64, BinaryReader/Writer, File operations)
- `utils/` - Helper functions (Color utilities, etc.)

### Key Files
- `src/index.ts` - Main entry point, exports `Players: MapPlayer[]` array
- `src/types/common.d.ts` - Core Warcraft III API declarations (6600+ lines)
- `src/types/japi.d.ts` - Extended API declarations for DzAPI/JAPI
- `src/handles/handle.ts` - Base class implementing handle management pattern

## Development Conventions

### TypeScript Configuration
- Target: ESNext with Classic module resolution
- Strict mode enabled with comprehensive type checking
- Source-only publishing (no compilation) - ships TypeScript source

### Code Style (ESLint + Prettier)
- Uses Airbnb base config with TypeScript extensions
- Special naming exceptions: `bj_`, `JASS_`, `wd_` prefixes allowed
- Triple-slash references allowed in .d.ts files
- `@noSelfInFile` directive for TSTL compatibility

### Handle Management Pattern
```typescript
// Standard pattern for new handle classes:
class MyHandle extends Handle<myhandle> {
  private constructor() {
    if (Handle.initFromHandle()) {
      super();
      return;
    }
    // Handle creation logic
  }

  public static create(): MyHandle | undefined {
    // Factory method implementation
  }
}
```

### Declaration File Conventions
- All native API functions declared with Chinese comments (original documentation)
- Use `declare function` for global API functions
- Include parameter types matching Warcraft III native types
- Handle types use lowercase (unit, player, timer, etc.)

## Development Workflow

### Build and Linting
```bash
npm run lint          # ESLint check
npm run lint:fix      # Auto-fix linting issues
npm run prepublishOnly # Lint before publish
```

### Version Management
```bash
npm run version:patch  # Patch version + push tags
npm run version:minor  # Minor version + push tags
npm run version:major  # Major version + push tags
```

## Integration Notes

### TypeScriptToLua Compatibility
- Uses `@noSelfInFile` directive to prevent 'self' parameter injection
- Classic module resolution for TSTL compatibility
- Source-only distribution (no transpiled output)
- **CRITICAL**: Use explicit comparisons (`!== undefined`) instead of implicit truthiness checks (`if (handle)`) to avoid TSTL warnings

### Warcraft III API Coverage
- Comprehensive native API coverage via declaration files
- Extended APIs: DzAPI, JAPI for enhanced functionality
- Game object lifecycle management through handle system

### Usage Context
- Intended as dependency in [wc3-map-ts-template](https://github.com/eiriksgata/wc3-map-ts-template)
- Not standalone - requires TSTL compilation environment
- Provides type safety layer over Lua-transpiled code

## Common Patterns

### Handle Null Checking
```typescript
// CORRECT: Explicit comparison for TSTL compatibility
const handle = CreateUnit(owner.handle, unitId, x, y, face);
if (handle !== undefined) {
  // Handle is valid
}

// INCORRECT: Implicit truthiness check causes TSTL warnings
if (handle) { // Warning: Only false and nil evaluate to 'false' in Lua
  // Handle is valid
}
```

### Creating Game Objects
```typescript
// Preferred factory pattern
const unit = Unit.create(player, unitId, x, y);

// Handle property access
const unitId = unit.id; // Uses GetHandleId internally
```

### Global Constants Usage
```typescript
import { bj_UNIT_FACING, bj_PI } from "../globals/define";
// Use predefined constants rather than magic numbers
```

### Type Declaration Extensions
When adding new API functions, follow the pattern in `types/common.d.ts`:
```typescript
declare function NewAPIFunction(param1: type1, param2: type2): returnType;
```