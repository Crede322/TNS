import React from "react";
import classes from "./ProductTable.module.css";

interface ProductTableProps {
  title: string;
  parameters: string[];
  values: string[];
}

const ProductTable: React.FC<ProductTableProps> = ({
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

export default ProductTable;
