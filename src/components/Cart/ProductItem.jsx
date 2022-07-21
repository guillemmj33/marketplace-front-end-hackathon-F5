const ProductItem = ({ data, addToCart }) => {
  let { id, name, description, price } = data;
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <h5>{price}.00 €</h5>
        <a  class="btn btn-primary">
          Go somewhere
        </a>
        <button onClick={() => addToCart(id)}>Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default ProductItem;
