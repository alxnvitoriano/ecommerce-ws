import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { typeProduct } from "@customTypes/product";
const { product, productImg } = styles;

const Product = ({ title, price, img }: typeProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h2>R$ {price}</h2>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
