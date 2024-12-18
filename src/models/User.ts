import { randomUUID } from "crypto";
import { Product } from "./Product";

export class User {
  private _id: string = randomUUID();
  private _cart: Product[] = [];

  constructor(
    private _name: string,
    private _userName: string,
    private _email: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get userName(): string {
    return this._userName;
  }

  get email(): string {
    return this._email;
  }

  addToCart(product: Product) {
    this._cart.push(product);
    console.log("Produto adicionado com sucesso ao carrinho!");
  }

  removeFromCart(product: Product) {
    const indexProduct = this._cart.indexOf(product);

    if (indexProduct === -1) {
      console.log("Produto não cadastrado!");
    } else {
      this._cart.splice(indexProduct, 1);
      console.log("Produto removido com sucesso!");
    }
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      userName: this._userName,
      email: this._email,
    };
  }

  showProducts() {
    let total = 0;

    this._cart.forEach((product) => {
      console.log(product.show());
      total += product.value;
    });

    console.log(`Total: R$${total.toFixed(2)}`);
  }
}
