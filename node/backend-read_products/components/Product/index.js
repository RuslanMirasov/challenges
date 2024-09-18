import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data: productData, isLoading: isProductLoading } = useSWR(`/api/products/${id}`);
  const { data: reviewsData, isLoading: isReviewsLoading } = useSWR(`/api/reviews`);

  if (isProductLoading || isReviewsLoading) {
    return <h1>Loading...</h1>;
  }

  if (!productData || !reviewsData) {
    return;
  }

  const { name, description, price, currency, reviews } = productData;
  const reviewsList = reviewsData.filter((review) => reviews.includes(review._id));

  return (
    <>
      <ProductCard>
        <h2>{name}</h2>
        <p>Description: {description}</p>
        <p>
          Price: {price} {currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
      {reviewsList.length > 0 && <Comments reviews={reviewsList} />}
    </>
  );
}
