import  './ProductItem.scss';

const ProductItem = ({ data, addToCart }) => {
  let { id, name, description, price, img } = data;
  return (
    <div class="card-products">
      <img class="img-top" src={img} alt=""/>
      <div class="card-body">
        <h5>{name}</h5>
        <p class="card-text">{description}</p>
        <h5>{price}.00 €</h5>
        <button  class="btn btn-secondary" onClick={() => addToCart(id)}>Añadir al Carrito</button>
        <button class="btn btn-primary">Detalle</button>
      </div>
    </div>
  );
};

export default ProductItem;
