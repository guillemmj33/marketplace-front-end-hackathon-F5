//import  './ProductItem.scss';

const ProductItem = ({ data, addToCart }) => {
  let { id, name, description, price, img } = data;
  return (
    <div class="card">
      <img class="card-img-top" src={img} alt=""/>
        <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <h5>{price}.00 €</h5>
        <button  class="btn btn-primary">
          Go somewhere
        </button>
        <button onClick={() => addToCart(id)}>Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default ProductItem;
