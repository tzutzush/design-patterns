import { describe, expect, test } from "vitest";
import { Editor } from "./memento";

describe("Memento", () => {
  const editor = new Editor();

  test("Should return correct text after typing", () => {
    editor.type("First sentence.");
    editor.save();
    editor.type("Second sentence.");
    editor.save();

    expect(editor.getContent()).toStrictEqual(
      " First sentence. Second sentence."
    );
  });

  test("Should undo last saved text input", () => {
    editor.undo();
    expect(editor.getContent()).toStrictEqual(" First sentence.");
  });
});
