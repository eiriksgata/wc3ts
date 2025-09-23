// Lua 全局变量类型声明
declare global {
  // 覆盖 print 函数类型以支持参数
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function print(...args: any[]): void;
}

export {};
