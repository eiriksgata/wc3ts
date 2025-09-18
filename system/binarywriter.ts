/**
 * Packs primitive types into a binary string.
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
export class BinaryWriter {
  private buffer: number[] = [];

  public toString() {
    return String.fromCharCode(...this.buffer);
  }

  public writeDouble(value: number) {
    // 64-bit double precision floating point (big-endian)
    const arrayBuffer = new ArrayBuffer(8);
    const view = new DataView(arrayBuffer);
    view.setFloat64(0, value, false); // false = big-endian
    for (let i = 0; i < 8; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeFloat(value: number) {
    // 32-bit single precision floating point (big-endian)
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    view.setFloat32(0, value, false); // false = big-endian
    for (let i = 0; i < 4; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeInt16(value: number) {
    // 16-bit signed integer (big-endian)
    const arrayBuffer = new ArrayBuffer(2);
    const view = new DataView(arrayBuffer);
    view.setInt16(0, value, false); // false = big-endian
    for (let i = 0; i < 2; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeInt32(value: number) {
    // 32-bit signed integer (big-endian)
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    view.setInt32(0, value, false); // false = big-endian
    for (let i = 0; i < 4; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeInt8(value: number) {
    // 8-bit signed integer
    const arrayBuffer = new ArrayBuffer(1);
    const view = new DataView(arrayBuffer);
    view.setInt8(0, value);
    this.buffer.push(view.getUint8(0));
  }

  public writeString(value: string) {
    // Null-terminated string
    for (let i = 0; i < value.length; i++) {
      this.buffer.push(value.charCodeAt(i));
    }
    this.buffer.push(0); // null terminator
  }

  public writeUInt16(value: number) {
    // 16-bit unsigned integer (big-endian)
    const arrayBuffer = new ArrayBuffer(2);
    const view = new DataView(arrayBuffer);
    view.setUint16(0, value, false); // false = big-endian
    for (let i = 0; i < 2; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeUInt32(value: number) {
    // 32-bit unsigned integer (big-endian)
    const arrayBuffer = new ArrayBuffer(4);
    const view = new DataView(arrayBuffer);
    view.setUint32(0, value, false); // false = big-endian
    for (let i = 0; i < 4; i++) {
      this.buffer.push(view.getUint8(i));
    }
  }

  public writeUInt8(value: number) {
    // 8-bit unsigned integer
    this.buffer.push(value & 0xff);
  }
}
