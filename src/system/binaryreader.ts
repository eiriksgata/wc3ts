/**
 * Reads primitive types from a packed binary string.
 *
 * @example
 * ```ts
 * // Write the values
 * const writer = new BinaryWriter();
 * writer.writeUInt8(5);
 * writer.writeUInt8(32);
 * writer.writeUInt8(78);
 * writer.writeUInt8(200);
 * writer.writeUInt32(12345678);
 * writer.writeString("hello");
 * writer.writeUInt16(45000);
 *
 * // Read the values
 * const binaryString = writer.toString();
 * const reader = new BinaryReader(binaryString);
 * const values: any[] = [];
 *
 * values[0] = reader.readUInt8(); // 5
 * values[1] = reader.readUInt8(); // 32
 * values[2] = reader.readUInt8(); // 78
 * values[3] = reader.readUInt8(); // 200
 * values[4] = reader.readUInt32(); // 12345678
 * values[5] = reader.readString(); // hello
 * values[6] = reader.readUInt16(); // 45000
 * ```
 */
export class BinaryReader {
  public readonly data: string;
  private pos = 0; // Changed to 0-based indexing

  constructor(binaryString: string) {
    this.data = binaryString;
  }

  private readBytes(size: number): number[] {
    const bytes: number[] = [];
    for (let i = 0; i < size; i++) {
      if (this.pos + i >= this.data.length) {
        bytes.push(0); // Pad with zeros if out of bounds
      } else {
        bytes.push(this.data.charCodeAt(this.pos + i));
      }
    }
    this.pos += size;
    return bytes;
  }

  public readDouble(): number {
    // 64-bit double precision floating point (big-endian)
    const bytes = this.readBytes(8);
    const arrayBuffer = new ArrayBuffer(8);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 8; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getFloat64(0, false); // false = big-endian
  }

  public readFloat(): number {
    // 32-bit single precision floating point (big-endian)
    const bytes = this.readBytes(4);
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 4; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getFloat32(0, false); // false = big-endian
  }

  public readInt16(): number {
    // 16-bit signed integer (big-endian)
    const bytes = this.readBytes(2);
    const arrayBuffer = new ArrayBuffer(2);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 2; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getInt16(0, false); // false = big-endian
  }

  public readInt32(): number {
    // 32-bit signed integer (big-endian)
    const bytes = this.readBytes(4);
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 4; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getInt32(0, false); // false = big-endian
  }

  public readInt8(): number {
    // 8-bit signed integer
    const bytes = this.readBytes(1);
    const arrayBuffer = new ArrayBuffer(1);
    const view = new DataView(arrayBuffer);
    view.setUint8(0, bytes[0]);
    return view.getInt8(0);
  }

  public readString(): string {
    // Null-terminated string
    let result = "";
    let charCode = this.data.charCodeAt(this.pos);
    while (charCode !== 0 && this.pos < this.data.length) {
      result += String.fromCharCode(charCode);
      this.pos++;
      charCode = this.data.charCodeAt(this.pos);
    }
    this.pos++; // Skip the null terminator
    return result;
  }

  public readUInt16(): number {
    // 16-bit unsigned integer (big-endian)
    const bytes = this.readBytes(2);
    const arrayBuffer = new ArrayBuffer(2);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 2; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getUint16(0, false); // false = big-endian
  }

  public readUInt32(): number {
    // 32-bit unsigned integer (big-endian)
    const bytes = this.readBytes(4);
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    for (let i = 0; i < 4; i++) {
      view.setUint8(i, bytes[i]);
    }
    return view.getUint32(0, false); // false = big-endian
  }

  public readUInt8(): number {
    // 8-bit unsigned integer
    const bytes = this.readBytes(1);
    return bytes[0];
  }
}
