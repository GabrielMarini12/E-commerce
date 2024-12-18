import { randomUUID } from "crypto";
import { User } from "./User";
import { comments } from "../database/comment";
import { Comment } from "./Comment";
import { AvaliacaoType, ProductType } from "../types";
import { Avaliacao } from "./Avaliacao";
import { avaliacoes } from "../database/avaliacao";
export class Product {
  private _id: string = randomUUID();
  private _avaliacao: AvaliacaoType;

  constructor(
    private _name: string,
    private _value: number,
    private _type: ProductType
  ) {
    this._avaliacao = this.avaliacao;
  }

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

  get avaliacao(): number {
    return this._avaliacao;
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

  addAvaliacoes(avaliacao: number, user: User) {
    const avaliacaoUser = new Avaliacao(avaliacao, user, this);
    avaliacoes.push(avaliacaoUser);
    console.log("Avaliação adicionada com sucesso!");
  }

  showAvaliacoes() {
    let mediaAvaliacoes = 0;
    let numUserAvaliacoes = 0;
    const produtosAvaliacoes = avaliacoes.filter(
      (avaliacao) => avaliacao.product === this
    );
    produtosAvaliacoes.forEach((avaliacao) => {
      mediaAvaliacoes += avaliacao.avaliacao;
      numUserAvaliacoes += 1;
      console.log(
        `Avaliação de ${avaliacao.from.userName} - ${avaliacao.avaliacao}`
      );
    });
    if (produtosAvaliacoes.length != 0) {
      console.log(
        `Media das avaliações: ${mediaAvaliacoes / numUserAvaliacoes}`
      );
    } else {
      console.log(`Media das avaliações: Sem avaliações para este produto`);
    }
  }

  show() {
    console.log(
      `Produto: ${this._name} de R$${this._value.toFixed(2)} do tipo ${
        this._type
      }`
    );
    this.showComments();
    this.showAvaliacoes();
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
