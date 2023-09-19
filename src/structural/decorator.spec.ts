import { describe, expect, test } from "vitest";
import {
  MilkCoffee,
  SimpleCoffee,
  VanillaCoffee,
  WhipCoffee,
} from "./decorator";

describe("Decorator", () => {
  let coffee = new SimpleCoffee();

  test("Should create a MilkCoffee", () => {
    coffee = new MilkCoffee(coffee);
    expect(coffee.getCost()).toStrictEqual(12);
    expect(coffee.getDescription()).toStrictEqual("Simple coffee, milk");
  });

  test("Should create a WhipCoffee", () => {
    coffee = new WhipCoffee(coffee);
    expect(coffee.getCost()).toStrictEqual(17);
    expect(coffee.getDescription()).toStrictEqual("Simple coffee, milk, whip");
  });

  test("Should create a VanillaCoffee", () => {
    coffee = new VanillaCoffee(coffee);
    expect(coffee.getCost()).toStrictEqual(20);
    expect(coffee.getDescription()).toStrictEqual(
      "Simple coffee, milk, whip, vanilla"
    );
  });
});
