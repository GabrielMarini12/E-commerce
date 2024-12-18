import { Product } from "./models/Product";
import { User } from "./models/User";
import { ProductType } from "./types";

const user1 = new User("Gabriel Marini", "gabimarini", "gabriel@icloud.com");
const user2 = new User("Eduarda Garcez", "dudagarcez", "eduarda@icloud.com");

console.log(user1.toJson());

const produto1 = new Product("Geladeira", 2199, ProductType.Home);
const produto2 = new Product("Sofá", 3999, ProductType.Home);
user1.addToCart(produto1);
user1.addToCart(produto2);

console.log(user1);

produto1.addComment("Comentário do produto", user1);
produto1.showComments();
produto1.show();
user1.showProducts();
produto1.addAvaliacoes(5, user1);
produto1.addAvaliacoes(2, user2);
produto1.addAvaliacoes(5, user1);
produto1.addAvaliacoes(4, user2);
produto1.showAvaliacoes();
produto1.show();
