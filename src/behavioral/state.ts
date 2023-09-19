interface State {
  phone: Phone;
  onHome(): string;
  onOffOn(): string;
}

export class OffState implements State {
  phone: Phone;
  constructor(phone: Phone) {
    this.phone = phone;
  }
  onHome(): string {
    this.phone.setState(new LockedState(this.phone));
    return this.phone.turnOn();
  }
  onOffOn(): string {
    this.phone.setState(new LockedState(this.phone));
    return this.phone.turnOn();
  }
}

export class LockedState implements State {
  phone: Phone;
  constructor(phone: Phone) {
    this.phone = phone;
  }
  onHome(): string {
    this.phone.setState(new ReadyState(this.phone));
    return this.phone.unlock();
  }
  onOffOn(): string {
    this.phone.setState(new OffState(this.phone));
    return this.phone.lock();
  }
}

export class ReadyState implements State {
  phone: Phone;
  constructor(phone: Phone) {
    this.phone = phone;
  }
  onHome(): string {
    return this.phone.home();
  }
  onOffOn(): string {
    this.phone.setState(new OffState(this.phone));
    return this.phone.lock();
  }
}

export class Phone {
  state: State;
  constructor() {
    this.state = new OffState(this);
  }
  setState(state: State) {
    this.state = state;
  }
  lock() {
    return "Phone is locked, screen is turned off";
  }
  home() {
    return "Home screen is loaded";
  }
  unlock() {
    return "Phone is unlocked, home screen is loaded";
  }
  turnOn() {
    return "Screen turned on, device is locked";
  }
}
