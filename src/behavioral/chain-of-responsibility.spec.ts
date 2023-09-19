import { describe, expect, test } from "vitest";
import { WebPage } from "./chain-of-responsibility";

describe("COR", () => {
  const webPage = new WebPage();

  test("Should return true for admin", () => {
    expect(webPage.authService.logIn("admin_username", "admin_password")).toBe(
      true
    );
  });

  test("Should return true for user", () => {
    expect(webPage.authService.logIn("user_username", "user_password")).toBe(
      true
    );
  });

  test("Should fail with wrong admin password", () => {
    expect(
      webPage.authService.logIn("admin_username", "incorrect_password")
    ).toBe(false);
  });

  test("Should fail with wrong user password", () => {
    expect(
      webPage.authService.logIn("user_username", "incorrect_password")
    ).toBe(false);
  });
});
