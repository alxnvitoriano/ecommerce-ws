import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductRecords,
} from "../store/products/productsSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "../components/ecommerce";
import { Loading } from "@components/feedback";
import { typeProduct } from "@customTypes/product";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(cleanUpProductRecords());
    };
  }, [dispatch, params]);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: wishlistItemsId.includes(el.id),
  }));

  return (
    <>
      <Heading>{params.prefix?.toUpperCase()} </Heading>
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
