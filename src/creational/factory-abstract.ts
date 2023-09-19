interface Desk {
  material: string;
}

interface DeskFactory {
  makeDesk(): Desk;
  getExpert(): DeskExpert;
}

interface DeskExpert {
  expert(): string;
}

class WoodenDesk implements Desk {
  constructor(public material: string) {}
}

class IronDesk implements Desk {
  constructor(public material: string) {}
}

class Welder implements DeskExpert {
  expert(): string {
    return "Welder";
  }
}

class Carpenter implements DeskExpert {
  expert(): string {
    return "Carpenter";
  }
}

export class WoodenDeskFactory implements DeskFactory {
  makeDesk(): Desk {
    return new WoodenDesk("wood");
  }
  getExpert(): DeskExpert {
    return new Carpenter();
  }
}

export class IronDeskFactory implements DeskFactory {
  makeDesk(): Desk {
    return new IronDesk("iron");
  }
  getExpert(): DeskExpert {
    return new Welder();
  }
}
