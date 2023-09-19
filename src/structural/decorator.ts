interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements Coffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return "Simple coffee";
  }
}

export class MilkCoffee implements Coffee {
  constructor(public coffee: Coffee) {}

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, milk`;
  }
}

export class WhipCoffee implements Coffee {
  constructor(public coffee: Coffee) {}

  getCost() {
    return this.coffee.getCost() + 5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, whip`;
  }
}

export class VanillaCoffee implements Coffee {
  constructor(public coffee: Coffee) {}

  getCost() {
    return this.coffee.getCost() + 3;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}
