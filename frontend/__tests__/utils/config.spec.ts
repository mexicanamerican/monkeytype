import { getDefaultConfig } from "../../src/ts/constants/default-config";
import { migrateConfig } from "../../src/ts/utils/config";
import { PartialConfig } from "@monkeytype/schemas/configs";

const defaultConfig = getDefaultConfig();

describe("config.ts", () => {
  describe("migrateConfig", () => {
    it("should carry over properties from the default config", () => {
      const partialConfig = {} as PartialConfig;

      const result = migrateConfig(partialConfig);
      expect(result).toEqual(expect.objectContaining(getDefaultConfig()));
      for (const [key, value] of Object.entries(getDefaultConfig())) {
        expect(result).toHaveProperty(key, value);
      }
    });
    it("should not merge properties which are not in the default config (legacy properties)", () => {
      const partialConfig = {
        legacy: true,
      } as PartialConfig;

      const result = migrateConfig(partialConfig);
      expect(result).toEqual(expect.objectContaining(getDefaultConfig()));
      expect(result).not.toHaveProperty("legacy");
    });
    it("should correctly merge properties of various types", () => {
      const partialConfig = {
        mode: "quote",
        hideExtraLetters: true,
        time: 120,
        accountChart: ["off", "off", "off", "off"],
      } as PartialConfig;

      const result = migrateConfig(partialConfig);
      expect(result.mode).toEqual("quote");
      expect(result.hideExtraLetters).toEqual(true);
      expect(result.time).toEqual(120);
      expect(result.accountChart).toEqual(["off", "off", "off", "off"]);
    });
    describe("should replace value with default config if invalid", () => {
      it.for([
        {
          given: { theme: "invalid" },
          expected: { theme: defaultConfig.theme },
        },
        {
          given: { minWpm: "invalid" },
          expected: { minWpm: defaultConfig.minWpm },
        },
        {
          given: { customThemeColors: ["#ffffff"] },
          expected: { customThemeColors: defaultConfig.customThemeColors },
        },
        {
          given: { accountChart: [true, false, false, true] },
          expected: { accountChart: defaultConfig.accountChart },
        },
        {
          given: {
            favThemes: ["nord", "invalid", "serika_dark", "invalid2", "8008"],
          },
          expected: { favThemes: ["nord", "serika_dark", "8008"] },
        },
      ])(`$given`, ({ given, expected }) => {
        const description = `given: ${JSON.stringify(
          given
        )}, expected: ${JSON.stringify(expected)} `;
        const result = migrateConfig(given);
        expect(result, description).toEqual(expect.objectContaining(expected));
      });
    });
    describe("should not convert legacy values if current values are already present", () => {
      it.for([
        {
          given: { showLiveAcc: true, timerStyle: "mini", liveAccStyle: "off" },
          expected: { liveAccStyle: "off" },
        },
        {
          given: {
            showLiveBurst: true,
            timerStyle: "mini",
            liveBurstStyle: "off",
          },
          expected: { liveBurstStyle: "off" },
        },
        {
          given: { quickTab: true, quickRestart: "enter" },
          expected: { quickRestart: "enter" },
        },
        {
          given: { swapEscAndTab: true, quickRestart: "enter" },
          expected: { quickRestart: "enter" },
        },
        {
          given: { alwaysShowCPM: true, typingSpeedUnit: "wpm" },
          expected: { typingSpeedUnit: "wpm" },
        },
        {
          given: { showTimerProgress: true, timerStyle: "mini" },
          expected: { timerStyle: "mini" },
        },
      ])(`$given`, ({ given, expected }) => {
        //WHEN

        const description = `given: ${JSON.stringify(
          given
        )}, expected: ${JSON.stringify(expected)} `;

        const result = migrateConfig(given);
        expect(result, description).toEqual(expect.objectContaining(expected));
      });
    });
    describe("should convert legacy values", () => {
      it.for([
        { given: { quickTab: true }, expected: { quickRestart: "tab" } },
        { given: { smoothCaret: true }, expected: { smoothCaret: "medium" } },
        { given: { smoothCaret: false }, expected: { smoothCaret: "off" } },
        { given: { swapEscAndTab: true }, expected: { quickRestart: "esc" } },
        {
          given: { alwaysShowCPM: true },
          expected: { typingSpeedUnit: "cpm" },
        },
        { given: { showAverage: "wpm" }, expected: { showAverage: "speed" } },
        {
          given: { playSoundOnError: true },
          expected: { playSoundOnError: "1" },
        },
        {
          given: { playSoundOnError: false },
          expected: { playSoundOnError: "off" },
        },
        {
          given: { showTimerProgress: false },
          expected: { timerStyle: "off" },
        },
        {
          given: { showLiveWpm: true, timerStyle: "text" },
          expected: { liveSpeedStyle: "text" },
        },
        {
          given: { showLiveWpm: true, timerStyle: "bar" },
          expected: { liveSpeedStyle: "mini" },
        },
        {
          given: { showLiveWpm: true, timerStyle: "off" },
          expected: { liveSpeedStyle: "mini" },
        },
        {
          given: { showLiveBurst: true, timerStyle: "text" },
          expected: { liveBurstStyle: "text" },
        },
        {
          given: { showLiveBurst: true, timerStyle: "bar" },
          expected: { liveBurstStyle: "mini" },
        },
        {
          given: { showLiveBurst: true, timerStyle: "off" },
          expected: { liveBurstStyle: "mini" },
        },
        {
          given: { showLiveAcc: true, timerStyle: "text" },
          expected: { liveAccStyle: "text" },
        },
        {
          given: { showLiveAcc: true, timerStyle: "bar" },
          expected: { liveAccStyle: "mini" },
        },
        {
          given: { showLiveAcc: true, timerStyle: "off" },
          expected: { liveAccStyle: "mini" },
        },
        { given: { soundVolume: "0.5" }, expected: { soundVolume: 0.5 } },
        { given: { funbox: "none" }, expected: { funbox: [] } },
        {
          given: { funbox: "58008#read_ahead" },
          expected: { funbox: ["58008", "read_ahead"] },
        },
        {
          given: { customLayoutfluid: "qwerty#qwertz" },
          expected: { customLayoutfluid: ["qwerty", "qwertz"] },
        },
        { given: { indicateTypos: false }, expected: { indicateTypos: "off" } },
        {
          given: { indicateTypos: true },
          expected: { indicateTypos: "replace" },
        },
        {
          given: {
            favThemes: ["purpurite", "80s_after_dark", "luna", "pulse"],
          },
          expected: {
            favThemes: ["80s_after_dark", "luna", "pulse"],
          },
        },
        {
          given: { fontSize: "2" },
          expected: { fontSize: 2 },
        },
        {
          given: { fontSize: "15" },
          expected: { fontSize: 1.5 },
        },
        {
          given: { fontSize: "125" },
          expected: { fontSize: 1.25 },
        },
        {
          given: { fontSize: 15 },
          expected: { fontSize: 15 },
        },
        {
          given: { fontSize: -0.5 },
          expected: { fontSize: 1 },
        },
        {
          given: { tapeMargin: 9.5 },
          expected: { tapeMargin: 10 },
        },
        {
          given: { tapeMargin: 25 },
          expected: { tapeMargin: 25 },
        },
        {
          given: { tapeMargin: 90.5 },
          expected: { tapeMargin: 90 },
        },
        {
          given: { maxLineWidth: 0 },
          expected: { maxLineWidth: 0 },
        },

        {
          given: { maxLineWidth: 19 },
          expected: { maxLineWidth: 20 },
        },
        {
          given: { maxLineWidth: 1001 },
          expected: { maxLineWidth: 1000 },
        },
      ])(`$given`, ({ given, expected }) => {
        const description = `given: ${JSON.stringify(
          given
        )}, expected: ${JSON.stringify(expected)} `;

        const result = migrateConfig(given);
        expect(result, description).toEqual(expect.objectContaining(expected));
      });
    });
  });
});
