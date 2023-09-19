import { describe, expect, test } from "vitest";
import { Developer, Organization } from "./composite";

describe("Composite", () => {
  const organization = new Organization();

  test("Should add employees to organization", () => {
    organization.addEmployee(new Developer("John", 500));
    organization.addEmployee(new Developer("Jane", 600));
    expect(organization.getEmployees()).toEqual([
      {
        name: "John",
        salary: 500,
      },
      {
        name: "Jane",
        salary: 600,
      },
    ]);
  });

  test("Should return salaries correctly", () => {
    expect(organization.getNetSalaries()).toStrictEqual(1100);
  });
});
