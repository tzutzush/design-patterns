interface Door {
  open(): boolean;
  close(): boolean;
}

export class LabDoor implements Door {
  open() {
    return true;
  }

  close() {
    return true;
  }
}

export class Security {
  constructor(private door: Door) {}

  open(password: string): boolean {
    if (this.authenticate(password)) {
      this.door.open();
      return true;
    } else {
      return false;
    }
  }

  private authenticate(password: string) {
    return password === "ecr@t";
  }

  close() {
    this.door.close();
  }
}
