const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, quantity, img } = data;
  
    return (
      <div style={{ borderBottom: "thin solid gray" }}>
        <img class="card-img" src={img} />
        <p>{name}</p>
        <h5>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h5>
        <div>
        <button class="btn btn-secondary" onClick={() => delFromCart(id)}> Eliminar 1</button>
        <br />
        <br />
        <button class="btn btn-secondary" onClick={() => delFromCart(id, true)}>Borrar Todo</button>
        <br />
        </div>
      </div>
    );
  };
  
  export default CartItem;