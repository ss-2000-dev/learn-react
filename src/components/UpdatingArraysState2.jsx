import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
  }

  function handleResetClick() {
    setProducts(initialProducts);
  }

  return (
    <>
      <Title>
        {"state 内の配列の更新（ショッピングカートから商品を削除）"}
      </Title>
      <ItemBox>
        <button onClick={handleResetClick}>Reset</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} (<b>{product.count}</b>)
              <button
                onClick={() => {
                  handleIncreaseClick(product.id);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  handleDecreaseClick(product.id);
                }}
              >
                –
              </button>
            </li>
          ))}
        </ul>
      </ItemBox>
    </>
  );
}
