import { describe, expect, test } from "vitest";
import { ChatRoom, User } from "./mediator";

describe("Mediator", () => {
  const chatRoom = new ChatRoom();
  const john = new User("John Doe", chatRoom);
  const jane = new User("Jane Doe", chatRoom);
  const date = new Date();

  test("Should return correct use with correct message", () => {
    expect(john.send("Message 1")).toStrictEqual(
      `${date} [John Doe]: Message 1`
    );
    expect(jane.send("Message 2")).toStrictEqual(
      `${date} [Jane Doe]: Message 2`
    );
  });
});
