import { describe, expect, test } from "vitest";
import { ButtonFactory } from "./factory-simple";

describe("Simple factory", () => {
  const buttonFactory = new ButtonFactory();
  test("Should create iOS button", () => {
    expect(buttonFactory.createButton("ios")).toEqual({
      text: "IOS-button",
    });
  });
  test("Should create Android button", () => {
    expect(buttonFactory.createButton("android")).toEqual({
      text: "Android-button",
    });
  });
});
