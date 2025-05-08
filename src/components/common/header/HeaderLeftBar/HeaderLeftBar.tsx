import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import CartIcon from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={headerLeftBar}>
      {/* <HeaderWishlist /> */}
      <HeaderCounter
        to="carrinho"
        title="Carrinho"
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartIcon title="carrinho" />}
      />
    </div>
  );
};

export default HeaderLeftBar;
