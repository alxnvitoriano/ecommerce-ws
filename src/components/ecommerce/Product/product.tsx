import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { addToCart } from "@store/cart/cartSlice";
// import Like from "../../../assets/svg/like.svg?react";
// import LikeFill from "../../../assets/svg/like-fill.svg?react";
import { Button, Spinner } from "react-bootstrap";
import { typeProduct } from "@types";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(
  ({ id, title, price, img, max, quantity }: typeProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    const LikeToggleHandler = () => {
      if (isLoading) {
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      }
    };

    return (
      <div className={product}>
        <div className={wishlistBtn} onClick={LikeToggleHandler}></div>
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
