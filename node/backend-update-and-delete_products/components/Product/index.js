import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);

  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  const handleEditProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      setIsEditMode(false);
      mutate();
    }
  };

  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    console.log("I want to delete that joke");
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/");
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </button>
      <button type="button" onClick={handleDeleteProduct}>
        Delete
      </button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditMode={isEditMode}
          data={data}
        />
      )}
    </ProductCard>
  );
}
