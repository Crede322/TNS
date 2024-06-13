import classes from "./ProductPageDescription.module.css";

interface ProductPageDescriptionProps {
  title: string;
  parameters: string[];
  values: string[];
}

const ProductPageDescription: React.FC<ProductPageDescriptionProps> = ({
  title,
  parameters,
  values,
}) => {
  return (
    <div className={classes.product_table}>
      <h3>{title}</h3>
      {parameters.map((parameter, index) => (
        <div key={index}>
          <div className={classes.product_value}>
            <h4>{parameter}</h4>
            <h5>{values[index]}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPageDescription;
