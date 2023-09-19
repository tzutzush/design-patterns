import { describe, expect, test } from "vitest";
import { AndroidBuilder, IosBuilder } from "./template";

describe("Template", () => {
  const androidBuilder = new AndroidBuilder();
  const iosBuilder = new IosBuilder();

  test("Should build android", () => {
    expect(androidBuilder.build()).toEqual(
      "Testing Android Linting Android Assembling Android Deploying Android"
    );
  });

  test("Should build ios", () => {
    expect(iosBuilder.build()).toEqual(
      "Testing iOS Linting iOS Assembling iOS Deploying iOS"
    );
  });
});
