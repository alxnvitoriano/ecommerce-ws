import useProducts from "@hooks/useProducts";
import { GridList, Heading } from "@components/common";
import { Product } from "../components/ecommerce";
import { Loading } from "@components/feedback";
import { typeProduct } from "@customTypes/product";

const Products = () => {
  const { loading, error, productPrefix, productsFullInfo } = useProducts();

  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} `} />
      <Loading status={loading} error={error}>
        <GridList<typeProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
