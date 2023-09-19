//receiver that reacts on the command
class Light {
  state = false;

  switchLights(): string {
    this.state = !this.state;
    return `Lights are ${this.state ? "on" : "off"}`;
  }
}

interface Command {
  execute(): void;
}

//Command
class switchLightsCommand implements Command {
  constructor(private light: Light) {}
  execute(): string {
    return this.light.switchLights();
  }
}

// Invoker that passes on the command
class RemoteControl {
  submit(command: Command) {
    return command.execute();
  }
}

export class Room {
  private light = new Light();
  private remoteControl = new RemoteControl();
  private command = new switchLightsCommand(this.light);

  switchLights() {
    return this.remoteControl.submit(this.command);
  }
}
