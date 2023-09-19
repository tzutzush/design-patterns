import { describe, expect, test } from "vitest";
import { Room } from "./command";

describe("Command", () => {
  const room = new Room();

  test("Should switch light on and off", () => {
    expect(room.switchLights()).toStrictEqual("Lights are on");
    expect(room.switchLights()).toStrictEqual("Lights are off");
  });
});
