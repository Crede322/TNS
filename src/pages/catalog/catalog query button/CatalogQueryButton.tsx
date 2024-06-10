import React from "react";
import classes from "./CatalogQueryButton.module.css";

interface CatalogQueryButtonProps {
  query: string;
  isQueryActive: boolean;
  onClick: (query: string) => void;
}

const CatalogQueryButton: React.FC<CatalogQueryButtonProps> = ({
  query,
  isQueryActive,
  onClick,
}) => {
  return (
    <div className={classes.query_button} onClick={() => onClick(query)}>
      <h3 style={{ fontWeight: isQueryActive ? 600 : 500 }}>{query}</h3>
      {isQueryActive ? <h4>&#x2715;</h4> : null}
    </div>
  );
};

export default CatalogQueryButton;
