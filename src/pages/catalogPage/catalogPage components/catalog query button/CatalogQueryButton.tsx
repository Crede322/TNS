import classes from "./CatalogQueryButton.module.css";

interface CatalogQueryButtonProps {
  query: string;
  onClick: (query: string) => void;
}

const CatalogQueryButton: React.FC<CatalogQueryButtonProps> = ({
  query,
  onClick,
}) => {
  const handleClick = () => {
    onClick(query);
  };

  return (
    <button className={classes.query_button} onClick={handleClick}>
      <h2>{query}</h2>
    </button>
  );
};

export default CatalogQueryButton;
