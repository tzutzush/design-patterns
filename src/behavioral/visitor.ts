export interface Operation {
  visitMonkey(): string;
  visitLion(): string;
  visitDolphin(): string;
}

export class Monkey {
  accept(operation: Operation): string {
    return operation.visitMonkey();
  }
}

export class Lion {
  accept(operation: Operation): string {
    return operation.visitLion();
  }
}

export class Dolphin {
  accept(operation: Operation): string {
    return operation.visitDolphin();
  }
}
