import TableProduct from "../table product/TableProduct";
import { TableProductType } from "../../../types/TableProductType";
import classes from "./ProductsTable.module.css";

interface ProductsTableProps {
  productList: TableProductType[];
}

export default function ProductsTable({ productList }: ProductsTableProps) {
  return (
    <ul className={classes.table}>
      {productList.map((product) => (
        <li key={product.id}>
          <TableProduct product={product} />
        </li>
      ))}
    </ul>
  );
}
