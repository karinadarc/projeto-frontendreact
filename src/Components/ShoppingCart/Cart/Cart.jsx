import React from "react";
import Items from "../Items/Items";
import { CartaoStyle, TituloCart, ValorStyle } from "./CartStyle";

function Cart({ amount, setAmount, cart, setCart }) {
  const valorTotal = (carrinho) => {
    const amount = carrinho.reduce((total, mercadoria) => {
      const valorParcial = mercadoria.value * mercadoria.quantity;
      return total + valorParcial;
    }, 0);

    setAmount(amount);
  };

  const removeProduto = (produto) => {
    //console.log(produto);
    let carrinho = [...cart];

    if (produto.quantity > 1) {
        produto.quantity--;
    } else {
        carrinho = carrinho.filter((mercadoria) => {
        return produto.id !== mercadoria.id;
      });
    }

    setCart(carrinho);
    valorTotal(carrinho);
  };

  return (
    <CartaoStyle>
      <TituloCart>CART</TituloCart>
      <Items cart={cart} callbackClick={removeProduto} />
      <ValorStyle>Valor total: R$ {amount.toFixed(2)} </ValorStyle>
    </CartaoStyle>
  );
}

export default Cart;
