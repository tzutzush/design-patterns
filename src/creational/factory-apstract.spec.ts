import { describe, expect, test } from "vitest";
import { IronDeskFactory, WoodenDeskFactory } from "./factory-abstract";

describe("Abstract factory", () => {
  const ironDeskFactory = new IronDeskFactory();
  const woodenDeskFactory = new WoodenDeskFactory();

  test("Should create wooden desk with carpenter", () => {
    expect(woodenDeskFactory.makeDesk()).toEqual({ material: "wood" });
    expect(woodenDeskFactory.getExpert().expert()).toEqual("Carpenter");
  });

  test("Should create iron desk with welder", () => {
    expect(ironDeskFactory.makeDesk()).toEqual({ material: "iron" });
    expect(ironDeskFactory.getExpert().expert()).toEqual("Welder");
  });
});
