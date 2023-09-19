interface SheepInterface {
  setName(name: string): void;
  getName(): string;
}

export class Sheep implements SheepInterface {
  private name: string;
  public readonly category: string;

  constructor(name: string, category: string) {
    this.name = name;
    this.category = category;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export class SheepPrototype {
  private prototype: Sheep;
  constructor(prototype: Sheep) {
    this.prototype = prototype;
  }
  clone(): Sheep {
    return new Sheep(this.prototype.getName(), this.prototype.category);
  }
}
