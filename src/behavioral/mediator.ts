//Mediator
export class ChatRoom {
  showMessage(user: User, message: string) {
    const time = new Date();
    const sender = user.getName();

    return `${time} [${sender}]: ${message}`;
  }
}

export class User {
  constructor(private name: string, private chatMediator: ChatRoom) {}

  getName() {
    return this.name;
  }

  send(message: string) {
    return this.chatMediator.showMessage(this, message);
  }
}
