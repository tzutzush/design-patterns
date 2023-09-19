class Database {
  users: Map<string, string>;

  constructor() {
    this.users = new Map<string, string>();
    this.users.set("admin_username", "admin_password");
    this.users.set("user_username", "user_password");
  }

  isValidUser(username: string): boolean {
    return this.users.has(username);
  }

  isValidPassword(username: string, password: string): boolean {
    return this.users.get(username) === password;
  }
}

interface Validator {
  successor: Validator;
  setNext(successor: Validator): Validator;
  validate(username: string, password: string): boolean;
}

class UserExistsValidator implements Validator {
  successor!: Validator;
  constructor(private database: Database) {}
  setNext(successor: Validator): Validator {
    this.successor = successor;
    return successor;
  }
  validate(username: string, password: string): boolean {
    if (!this.database.isValidUser(username)) {
      return false;
    }
    if (!this.successor) return true;
    return this.successor.validate(username, password);
  }
}

class PasswordValidator implements Validator {
  successor!: Validator;
  constructor(private database: Database) {}
  setNext(successor: Validator): Validator {
    this.successor = successor;
    return successor;
  }
  validate(username: string, password: string): boolean {
    if (!this.database.isValidPassword(username, password)) {
      return false;
    }
    if (!this.successor) return true;
    return this.successor.validate(username, password);
  }
}
class RoleCheckValidator implements Validator {
  successor!: Validator;
  constructor(private database: Database) {}
  setNext(successor: Validator): Validator {
    this.successor = successor;
    return successor;
  }
  validate(username: string, password: string): boolean {
    if (username === "admin_username") {
      return true;
    }
    if (!this.successor) return true;
    return this.successor.validate(username, password);
  }
}

class AuthService {
  constructor(private validator: Validator) {}
  logIn(username: string, password: string): boolean {
    return this.validator.validate(username, password);
  }
}

export class WebPage {
  authService: AuthService;
  database = new Database();
  validatorEntry = new UserExistsValidator(this.database);
  passwordValidator = new PasswordValidator(this.database);
  roleValidator = new RoleCheckValidator(this.database);
  constructor() {
    this.validatorEntry.setNext(this.passwordValidator);
    this.passwordValidator.setNext(this.roleValidator);
    this.authService = new AuthService(this.validatorEntry);
  }
}
