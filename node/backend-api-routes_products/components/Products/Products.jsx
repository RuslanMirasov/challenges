import Link from "next/link";

const Products = ({ products }) => {
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      <hr />
      <ul>
        {products.map(
          ({ id, name, description, price, currency, category }) => (
            <li key={id}>
              <Link href={`/products/${id}`}>
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
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Products;
