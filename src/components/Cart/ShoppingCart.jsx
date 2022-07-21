import { useReducer } from "react";
import { TYPES } from "../../actions/shoppingActions";
import { shoppingInitialState } from "./shoppingInitialState";
import { shoppingReducer } from "./shoppingReducer";

import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { cart,  products } = state;

  const addToCart = (id) => {
     dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
       if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  return (
    <div>
     
      <h3>Productos</h3>
     
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>

      <h3>Carrito</h3>
      <article className="box">
        <button class="btn btn-danger" onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;