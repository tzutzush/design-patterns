interface WebPage {
  theme: Theme;
  getContent(): string;
}

export class AboutInfo implements WebPage {
  constructor(public theme: Theme) {}

  getContent() {
    return `About page is in ${this.theme.getColor()}`;
  }
}

export class Career {
  constructor(public theme: Theme) {}

  getContent() {
    return `Career page is in ${this.theme.getColor()}`;
  }
}

interface Theme {
  getColor(): string;
}

export class DarkTheme implements Theme {
  getColor(): string {
    return "dark mode";
  }
}

export class LightTheme implements Theme {
  getColor(): string {
    return "light mode";
  }
}
