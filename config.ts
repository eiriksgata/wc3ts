/**
 * 配置管理器
 */
export class ConfigManager {
  private static instance: ConfigManager;

  private constructor() {}

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public isConsoleEnabled(): boolean {
    return true; // 默认启用控制台
  }

  public getConfig() {
    return {
      console: true,
      runtime: {
        sleep: true,
        debuggerPort: 4279,
        catchCrash: true,
      },
    };
  }
}
