// Lua 全局变量类型声明
declare global {
  // 覆盖 print 函数类型以支持参数
  function print(...args: any[]): void;
}

export {};
