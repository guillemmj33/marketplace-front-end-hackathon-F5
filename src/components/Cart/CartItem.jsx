const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, quantity } = data;
  
    return (
      <div class="card" >
        <h4 >{name}</h4>
        <h5>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h5>
        <button onClick={() => delFromCart(id)}>-1</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Borrar Todo</button>
        <br />
        <br />
      </div>
    );
  };
  
  export default CartItem;