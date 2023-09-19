class ElectricalSystem {
  private voltage = 0;
  private online = false;

  getVoltage(): number {
    return this.voltage;
  }
  setVoltage(value: number): void {
    this.voltage = value;
  }
  turnOn(): void {
    this.online = true;
  }
  turnOff(): void {
    this.online = false;
  }
  getStatus(): boolean {
    return this.online;
  }
}

class PlumbingSystem {
  private pressure = 0;
  private online = false;

  getPressure(): number {
    return this.pressure;
  }
  setPressure(value: number): void {
    this.pressure = value;
  }
  turnOn(): void {
    this.online = true;
  }
  turnOff(): void {
    this.online = false;
  }
  getStatus(): boolean {
    return this.online;
  }
}

export class House {
  public plumbing = new PlumbingSystem();
  public electrics = new ElectricalSystem();

  turnOnSystems() {
    this.plumbing.turnOn();
    this.plumbing.setPressure(200);
    this.electrics.turnOn();
    this.electrics.setVoltage(200);
  }

  turnOffSystems() {
    this.plumbing.turnOff();
    this.plumbing.setPressure(0);
    this.electrics.turnOff();
    this.electrics.setVoltage(0);
  }
}
