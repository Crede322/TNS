import classes from "./TableProduct.module.css";
import starImg from "../../../img/searchPage/star.svg";
import FavButton from "../Fav button/FavButton";
import { useNavigate } from "react-router-dom";
import CartButton from "../cart button/CartButton";

interface TableProductProps {
  product: Product;
}

interface Product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  cacheL2: number;
  cacheL3: number;
  img: string;
}

const TableProduct: React.FC<TableProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={classes.result}>
      <div
        className={classes.result__product_image}
        onClick={() => goToProduct(product.id)}
      >
        <img src={product.img} alt="product img" />
      </div>

      <div className={classes.result_description}>
        <h3
          className={classes.product_info}
          onClick={() => goToProduct(product.id)}
        >
          {product.cpuName} <br />[{product.socket}, {product.coresNumber} x{" "}
          {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
          {product.cacheL3} МБ]
        </h3>
        <div className={classes.purchase}>
          <h2>{product.price}</h2>
          <CartButton id={product.id} cartStyle="catalogpage" />
          <FavButton buttonStyle="mainpage" id={product.id} />
        </div>

        <div className={classes.product_subInfo}>
          <div className={classes.stars}>
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <h4>10</h4>
          </div>
          <div>
            <h4>В наличии</h4>
            <h3>Послезавтра</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
