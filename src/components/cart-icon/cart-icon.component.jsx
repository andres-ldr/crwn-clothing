import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";


const CartIcon = (props) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleisCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
