import { beforeEach, describe, expect, test } from "vitest";
import { House } from "./facade";

describe("Facade", () => {
  let house: House;
  beforeEach(() => {
    house = new House();
    house.turnOnSystems();
  });

  test("Test plumbing on", () => {
    expect(house.plumbing.getPressure()).toStrictEqual(200);
    expect(house.plumbing.getStatus()).toStrictEqual(true);
  });

  test("Test electrics on", () => {
    expect(house.electrics.getVoltage()).toStrictEqual(200);
    expect(house.electrics.getStatus()).toStrictEqual(true);
  });

  test("Test plumbing off", () => {
    house.turnOffSystems();
    expect(house.plumbing.getPressure()).toStrictEqual(0);
    expect(house.plumbing.getStatus()).toStrictEqual(false);
  });

  test("Test electrics off", () => {
    house.turnOffSystems();
    expect(house.electrics.getVoltage()).toStrictEqual(0);
    expect(house.electrics.getStatus()).toStrictEqual(false);
  });
});
