import { randomUUID } from "crypto";
import { Product } from "./Product";
import { User } from "./User";

export class Comment {
  private _id: string = randomUUID();

  constructor(
    private _content: string,
    private _from: User,
    private _product: Product
  ) {}

  get id(): string {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get from(): User {
    return this._from;
  }

  get product(): Product {
    return this._product;
  }

  show() {
    console.log(`Comentário de ${this.from.userName}: ${this.content}`);
  }

  toJson() {
    return {
      id: this._id,
      content: this._content,
      from: this._from.toJson(),
      product: this._product.toJson(),
    };
  }
}
