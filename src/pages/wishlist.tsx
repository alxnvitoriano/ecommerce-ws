import useWishlist from "@hooks/useWishlist";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { typeProduct } from "@types";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();
  return (
    <>
      <Heading title="Sua lista de desejos" />
      <Loading status={loading} error={error}>
        <GridList<typeProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
