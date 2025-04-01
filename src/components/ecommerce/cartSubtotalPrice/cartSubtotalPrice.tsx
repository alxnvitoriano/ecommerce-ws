import style from "./styles.module.css";

const CartSubtotalPrice = () => {
  return (
    <div className={style.container}>
      <span>Subtotal:</span>
      <span>R$ 200,00</span>
    </div>
  );
};

export default CartSubtotalPrice;
