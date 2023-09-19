interface iMacBook {
  useUSBcPort(): string;
}

interface iHeadSet {
  useUSBPort(): string;
}

export class MacBook implements iMacBook {
  useUSBcPort(): string {
    return "Using USB-C port.";
  }
}

export class HeadSet implements iHeadSet {
  useUSBPort(): string {
    return "Using USB port.";
  }
}

export class USBAdapter implements iMacBook {
  constructor(private device: iHeadSet) {}

  useUSBcPort(): string {
    return this.device.useUSBPort();
  }
}
