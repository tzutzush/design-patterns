import { beforeEach, describe, expect, test } from "vitest";
import { LockedState, OffState, Phone, ReadyState } from "./state";

describe("Phone class", () => {
  let phone: Phone;

  beforeEach(() => {
    phone = new Phone();
  });

  test("Should be in OffState initially", () => {
    expect(phone.state instanceof OffState).toBe(true);
  });

  test("Should lock the phone and turn on the screen in OffState when calling onHome", () => {
    const result = phone.state.onHome();
    expect(result).toBe("Screen turned on, device is locked");
    expect(phone.state instanceof LockedState).toBe(true);
  });

  test("Should lock the phone and turn on the screen in OffState when calling onOffOn", () => {
    const result = phone.state.onOffOn();
    expect(result).toBe("Screen turned on, device is locked");
    expect(phone.state instanceof LockedState).toBe(true);
  });

  test("Should unlock the phone in LockedState when calling onHome", () => {
    phone.setState(new LockedState(phone));
    const result = phone.state.onHome();
    expect(result).toBe("Phone is unlocked, home screen is loaded");
    expect(phone.state instanceof ReadyState).toBe(true);
  });

  test("Should go back to OffState and lock the phone in LockedState when calling onOffOn", () => {
    phone.setState(new LockedState(phone));
    const result = phone.state.onOffOn();
    expect(result).toBe("Phone is locked, screen is turned off");
    expect(phone.state instanceof OffState).toBe(true);
  });

  test("Should go to ReadyState when calling onHome in ReadyState", () => {
    phone.setState(new ReadyState(phone));
    const result = phone.state.onHome();
    expect(result).toBe("Home screen is loaded");
    expect(phone.state instanceof ReadyState).toBe(true);
  });

  test("Should go to OffState and lock the phone when calling onOffOn in ReadyState", () => {
    phone.setState(new ReadyState(phone));
    const result = phone.state.onOffOn();
    expect(result).toBe("Phone is locked, screen is turned off");
    expect(phone.state instanceof OffState).toBe(true);
  });
});
