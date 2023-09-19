import { describe, expect, test } from "vitest";
import { AboutInfo, Career, DarkTheme, LightTheme } from "./bridge";

describe("Bridge", () => {
  const aboutPage = new AboutInfo(new DarkTheme());
  const careerPage = new Career(new LightTheme());

  test("Should return correct mode", () => {
    expect(aboutPage.getContent()).toStrictEqual(`About page is in dark mode`);
    expect(careerPage.getContent()).toStrictEqual(
      `Career page is in light mode`
    );
  });
});
