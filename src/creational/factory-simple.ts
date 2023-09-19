export interface Door {
  getWidth(): number;
  getHeight(): number;
}

export class PlainDoor implements Door {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}
  getWidth(): number {
    return this.width;
  }
  getHeight(): number {
    return this.height;
  }
}

//OR

class AndroidButton {
  constructor(public text: string) {}
}
class IOSButton {
  constructor(public text: string) {}
}

export class ButtonFactory {
  createButton(os: string): AndroidButton | IOSButton {
    if (os === "ios") {
      return new IOSButton("IOS-button");
    } else if (os === "android") {
      return new AndroidButton("Android-button");
    } else throw new Error("OS is not supported");
  }
}
