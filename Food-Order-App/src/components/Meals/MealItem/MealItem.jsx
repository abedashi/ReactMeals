import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealIteam = ({ id, name, description, price }) => {
  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  const prices = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{prices}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealIteam;
