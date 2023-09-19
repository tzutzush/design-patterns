class EditorMemento {
  constructor(private content: string) {}

  getContent() {
    return this.content;
  }
}

export class Editor {
  private history: EditorMemento[] = [];
  constructor(private content = "") {}

  type(text: string) {
    this.content += ` ${text}`;
  }

  getContent() {
    return this.content;
  }

  save() {
    const contentToSave = new EditorMemento(this.content);
    this.history.push(contentToSave);
  }

  undo() {
    this.history.pop();
    this.content = this.history[this.history.length - 1].getContent();
  }
}
