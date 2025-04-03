import CartItem from "../cartItem/cartItem";
import { typeProduct } from "@customTypes/product";

type cartItemListProps = { products: typeProduct[] };

const CartItemList = ({ products }: cartItemListProps) => {
  const renderList = products.map((el) => <CartItem key={el.id} {...el} />);
  return <div>{renderList}</div>;
};

export default CartItemList;
