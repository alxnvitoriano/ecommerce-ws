import { typeProduct } from "@customTypes/product";
import style from "./styles.module.css";

type CartSubtotalPriceProps = { products: typeProduct[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className={style.container}>
      <span>Subtotal:</span>
      <span>R$ {subtotal.toFixed(2)}</span>
    </div>
  );
};

export default CartSubtotalPrice;
