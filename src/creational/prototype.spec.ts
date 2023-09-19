import { describe, expect, test } from "vitest";
import { Sheep, SheepPrototype } from "./prototype";

describe("Prototype", () => {
  const originalSheep = new Sheep("Juanita", "Merino");
  const prototype = new SheepPrototype(originalSheep);

  test("Should create prototype with same data", () => {
    expect(originalSheep.getName()).toEqual(prototype.clone().getName());
    expect(originalSheep.category).toEqual(prototype.clone().category);
  });

  test("Should only modify cloned object", () => {
    const clonedSheep = prototype.clone();
    clonedSheep.setName("Maria");
    expect(originalSheep.getName()).toEqual("Juanita");
    expect(clonedSheep.getName()).toEqual("Maria");
  });
});
