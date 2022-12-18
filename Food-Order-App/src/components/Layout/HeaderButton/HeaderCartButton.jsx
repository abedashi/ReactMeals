import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";

import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(CartContext);

  const numberOfCartItems = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
