import { describe, expect, test } from "vitest";
import { Settings } from "./singleton";

describe("Singleton", () => {
  const settings = Settings.getInstance();
  const copy = Settings.getInstance();

  test("Should create instance correctly", () => {
    expect(settings).toEqual({ mode: "dark" });
  });

  test("Copy should point to the same reference as settings", () => {
    expect(copy).toStrictEqual(settings);
  });
});
