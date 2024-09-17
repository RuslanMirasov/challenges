import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { useRouter } from "next/router";

const SingleProductPage = ({ products }) => {
  const router = useRouter();
  const { id } = router.query;

  return <SingleProduct products={products} id={id} />;
};

export default SingleProductPage;
