import { describe, expect, test } from "vitest";
import { LabDoor, Security } from "./proxy";

describe("Proxy", () => {
  const securedDoor = new Security(new LabDoor());
  test("Should open door on correct password", () => {
    expect(securedDoor.open("ecr@t")).toBe(true);
  });

  test("Should not open door on incorrect password", () => {
    expect(securedDoor.open("incorrect_password")).toBe(false);
  });
});
