import { describe, expect, test } from "vitest";
import { Sort } from "./strategy";

describe("Strategy", () => {
  const sorter = new Sort();
  test("Should return sorted array with bubble sort", () => {
    expect(sorter.sort([11, 9, 13, 24, 5])).toStrictEqual(
      "Bubble sorted: 5,9,11,13,24"
    );
  });
  test("Should return sorted array with quick sort", () => {
    expect(sorter.sort([5, 9, 11, 24, 1, 44, 13])).toStrictEqual(
      "Quick sorted: 1,5,9,11,13,24,44"
    );
  });
});
