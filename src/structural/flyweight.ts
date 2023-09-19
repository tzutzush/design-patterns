export class Book {
  constructor(
    private name: string,
    private price: number,
    private type: BookType
  ) {}
}

export class BookType {
  constructor(
    private type: string,
    private distributor: string,
    private otherData: string
  ) {}
}

export class BookFactory {
  private bookTypes: Map<string, BookType> = new Map();

  getBookType(type: string, distributor: string, otherData: string): BookType {
    const key = `${type}-${distributor}-${otherData}`;
    let bookType = this.bookTypes.get(key);

    if (!bookType) {
      bookType = new BookType(type, distributor, otherData);
      this.bookTypes.set(key, bookType);
    }

    return bookType;
  }
}

export class BookStore {
  books: Book[] = [];
  bookFactory = new BookFactory();

  storeBook(
    name: string,
    price: number,
    type: string,
    distributor: string,
    otherData: string
  ): void {
    const bookType = this.bookFactory.getBookType(type, distributor, otherData);
    this.books.push(new Book(name, price, bookType));
  }

  displayBooks(): Book[] {
    const result: Book[] = [];
    this.books.forEach((book) => result.push(book));
    return result;
  }
}

export class BookShop {
  store = new BookStore();

  BOOK_TYPES = 2;
  BOOKS_TO_INSERT = 10;

  createBooks() {
    for (let i = 0; i < this.BOOKS_TO_INSERT / this.BOOK_TYPES; i++) {
      this.store.storeBook("Cathedral", 10.99, "Action", "Follett", "Stuff");
      this.store.storeBook("Harry Potter", 9.99, "Fantasy", "Ingram", "Extra");
    }
  }
}
