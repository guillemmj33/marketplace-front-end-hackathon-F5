const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data;
    return (
      <div style={{ border: "thin solid gray", padding: "1rem" }}>
        <h4>{name}</h4>
        {/* <p>{decription}</p> */}
        <h5>{price}.00 €</h5>
        <button onClick={() => addToCart(id)}>Añadir al Carrito</button>
      </div>
    );
  };
  
  export default ProductItem;