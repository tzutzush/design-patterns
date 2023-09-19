import { describe, expect, test } from "vitest";
import { Dolphin, Lion, Monkey, Operation } from "./visitor";

describe("Visitor", () => {
  const monkey = new Monkey();
  const lion = new Lion();
  const dolphin = new Dolphin();
  const jump: Operation = {
    visitMonkey: function (): string {
      return "Monkey jumps";
    },
    visitLion: function (): string {
      return "Lion jumps";
    },
    visitDolphin: function (): string {
      return "Dolphin jumps";
    },
  };
  test("Should return correct sentence for monkey", () => {
    expect(monkey.accept(jump)).toStrictEqual("Monkey jumps");
  });
  test("Should return correct sentence for lion", () => {
    expect(lion.accept(jump)).toStrictEqual("Lion jumps");
  });
  test("Should return correct sentence for dolphin", () => {
    expect(dolphin.accept(jump)).toStrictEqual("Dolphin jumps");
  });
});
