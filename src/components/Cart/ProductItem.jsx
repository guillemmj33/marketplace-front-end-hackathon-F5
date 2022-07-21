const ProductItem = ({ data, addToCart }) => {
  let { id, name, description, price, img } = data;
  return (
    <div class="card">
      <img src={img} />
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
