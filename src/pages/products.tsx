import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "../store/products/productsSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "../components/ecommerce";
import { Loading } from "@components/feedback";
import { typeProduct } from "@customTypes/product";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <>
      <Heading>{params.prefix?.toUpperCase()} </Heading>
      <Loading status={loading} error={error}>
        <GridList<typeProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
