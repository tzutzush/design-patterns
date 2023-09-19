import { describe, expect, test } from "vitest";
import { BookShop } from "./flyweight";

describe("Flyweight", () => {
  const shop = new BookShop();

  test("Should return correct books when creating", () => {
    shop.createBooks();
    expect(shop.store.displayBooks()).toEqual([
      {
        name: "Cathedral",
        price: 10.99,
        type: {
          type: "Action",
          distributor: "Follett",
          otherData: "Stuff",
        },
      },
      {
        name: "Harry Potter",
        price: 9.99,
        type: {
          type: "Fantasy",
          distributor: "Ingram",
          otherData: "Extra",
        },
      },
      {
        name: "Cathedral",
        price: 10.99,
        type: {
          type: "Action",
          distributor: "Follett",
          otherData: "Stuff",
        },
      },
      {
        name: "Harry Potter",
        price: 9.99,
        type: {
          type: "Fantasy",
          distributor: "Ingram",
          otherData: "Extra",
        },
      },
      {
        name: "Cathedral",
        price: 10.99,
        type: {
          type: "Action",
          distributor: "Follett",
          otherData: "Stuff",
        },
      },
      {
        name: "Harry Potter",
        price: 9.99,
        type: {
          type: "Fantasy",
          distributor: "Ingram",
          otherData: "Extra",
        },
      },
      {
        name: "Cathedral",
        price: 10.99,
        type: {
          type: "Action",
          distributor: "Follett",
          otherData: "Stuff",
        },
      },
      {
        name: "Harry Potter",
        price: 9.99,
        type: {
          type: "Fantasy",
          distributor: "Ingram",
          otherData: "Extra",
        },
      },
      {
        name: "Cathedral",
        price: 10.99,
        type: {
          type: "Action",
          distributor: "Follett",
          otherData: "Stuff",
        },
      },
      {
        name: "Harry Potter",
        price: 9.99,
        type: {
          type: "Fantasy",
          distributor: "Ingram",
          otherData: "Extra",
        },
      },
    ]);
  });
});
