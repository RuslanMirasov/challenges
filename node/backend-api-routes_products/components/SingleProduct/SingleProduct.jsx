const SingleProduct = ({ products, id }) => {
  const currentProduct = products.find((product) => product.id === id);
  const { name, description, price, currency, category } = currentProduct;

  return (
    <article>
      <h2>{name}</h2>
      <p>
        Description: <span>{description}</span>
      </p>
      <b>
        Price: {price}
        {currency}
      </b>
      <p>
        Category: <span>{category}</span>
      </p>
    </article>
  );
};

export default SingleProduct;
