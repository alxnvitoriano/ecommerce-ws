import styles from "./styles.module.css";
import { Form, Button } from "react-bootstrap";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

const CartItem = () => {
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src="https://lojavivara.vtexassets.com/arquivos/ids/758184-1600-1600/Corrente-Calvin-Klein-Feminina-em-Aco-Prateado-35000338-79445_1_set.jpg?v=638437309945000000"
            alt="title"
          />
        </div>
        <div className={productInfo}>
          <h2>test</h2>
          <h3>R$ 20</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
          >
            Remover
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantidade</span>
        <Form.Select aria-label="Default select example">
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItem;
