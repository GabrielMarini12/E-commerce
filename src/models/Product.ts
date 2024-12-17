import { randomUUID } from "crypto";
import { User } from "./User";
import { comments } from "../database/comment";
import { Comment } from "./Comment";
import { ProductType } from "../types";
export class Product {
  private _id: string = randomUUID();

  constructor(
    private _name: string,
    private _value: number,
    private _type: ProductType
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get value(): number {
    return this._value;
  }

  get type(): string {
    return this._type;
  }

  addComment(content: string, user: User) {
    const comment = new Comment(content, user, this);
    comments.push(comment);
    console.log("Comentário adicionado com sucesso!");
  }

  showComments() {
    const produtosComments = comments.filter(
      (comment) => comment.product === this
    );
    produtosComments.forEach((comment) => {
      console.log(`${comment.from.userName} : ${comment.content}`);
    });
  }

  show() {
    console.log(
      `Produto: ${this._name} de R$${this._value.toFixed(2)} do tipo ${
        this._type
      }`
    );
    this.showComments();
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      value: this._value,
      type: this._type,
    };
  }
}
