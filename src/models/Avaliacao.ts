import { randomUUID } from "crypto";
import { Product } from "./Product";
import { User } from "./User";
import { AvaliacaoType } from "../types";

export class Avaliacao {
  private _id: string = randomUUID();

  constructor(
    private _avaliacao: AvaliacaoType,
    private _from: User,
    private _product: Product
  ) {}

  get id(): string {
    return this._id;
  }

  get avaliacao(): AvaliacaoType {
    return this._avaliacao;
  }

  get from(): User {
    return this._from;
  }

  get product(): Product {
    return this._product;
  }

  show() {
    console.log(`Avaliação de ${this.from.userName}: ${this.avaliacao}`);
  }

  toJson() {
    return {
      id: this._id,
      avaliacao: this._avaliacao,
      from: this._from.toJson(),
      product: this._product.toJson(),
    };
  }
}
