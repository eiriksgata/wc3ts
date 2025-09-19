export interface AppConfig {
  /** 是否启用调试模式 */
  debug: boolean;
  /** 是否启用控制台 */
  console: boolean;
  /** 运行时配置 */
  runtime: RuntimeConfig;
  /** 地图配置 */
  map: MapConfig;
}

/**
 * 运行时配置
 */
export interface RuntimeConfig {
  /** 调试器端口 */
  debuggerPort: number;
  /** 是否启用睡眠模式 */
  sleep: boolean;
  /** 是否捕获崩溃 */
  catchCrash: boolean;
}

/**
 * 地图配置
 */
export interface MapConfig {
  /** 地图名称 */
  name: string;
  /** 地图版本 */
  version: string;
  /** 地图描述 */
  description: string;
}

/**
 * 默认应用配置
 */
const DEFAULT_CONFIG: AppConfig = {
  debug: true,
  console: true,
  runtime: {
    debuggerPort: 4279,
    sleep: false,
    catchCrash: true,
  },
  map: {
    name: "WC3 TypeScript Map",
    version: "1.0.0",
    description: "A Warcraft III map built with TypeScript",
  },
};

/**
 * 配置管理器
 * 提供应用程序配置的统一管理
 */
export class ConfigManager {
  private static instance: ConfigManager;
  private config: AppConfig;

  private constructor() {
    this.config = { ...DEFAULT_CONFIG };
  }

  /**
   * 获取配置管理器实例
   */
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  /**
   * 获取完整配置
   */
  public getConfig(): AppConfig {
    return { ...this.config };
  }

  /**
   * 获取调试配置
   */
  public isDebugMode(): boolean {
    return this.config.debug;
  }

  /**
   * 获取控制台配置
   */
  public isConsoleEnabled(): boolean {
    return this.config.console;
  }

  /**
   * 获取运行时配置
   */
  public getRuntimeConfig() {
    return { ...this.config.runtime };
  }

  /**
   * 获取地图配置
   */
  public getMapConfig() {
    return { ...this.config.map };
  }

  /**
   * 更新配置
   */
  public updateConfig(updates: Partial<AppConfig>): void {
    this.config = {
      ...this.config,
      ...updates,
    };
  }

  /**
   * 重置为默认配置
   */
  public resetToDefault(): void {
    this.config = { ...DEFAULT_CONFIG };
  }
}
