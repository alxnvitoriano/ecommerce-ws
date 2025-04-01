import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { typeProduct } from "@customTypes/product";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice } = styles;

const Product = memo(
  ({ id, title, price, img, max, quantity }: typeProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };
    return (
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <h2>R$ {price.toFixed(2)}</h2>
        <p className={maximumNotice}>
          {quantityReachedToMax
            ? "Você atinge o limite."
            : `Você pode adicionar ${currentRemainingQuantity} item(s)`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
