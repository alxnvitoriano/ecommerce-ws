import useCart from "@hooks/useCart";
import { Heading } from "../components/common";
import { Loading } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/ecommerce";

const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler } =
    useCart();

  return (
    <>
      <Heading title="Seu Carrinho" />
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Seu carrinho está vazio"
        )}
      </Loading>
    </>
  );
};

export default Cart;
