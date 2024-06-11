import Header from "../../components/global/header/Header";
import classes from "./CatalogPage.module.css";
import CatalogQueryButton from "./catalog query button/CatalogQueryButton";
import {
  queryButtonClick,
  clearQueriesClick,
  selectCurrentQuery,
  selectSelectedQuery,
} from "../../features/catalogSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CatalogPage = () => {
  const queries = useSelector(selectCurrentQuery);
  const selectedQuery = useSelector(selectSelectedQuery);
  const dispatch = useDispatch();

  const handleQueryClick = (query: string) => {
    dispatch(queryButtonClick(query));
  };

  const handleCurrentQueryButton = () => {
    dispatch(clearQueriesClick());
  };

  return (
    <div>
      <Header />
      <div className={classes.catalog_background}>
        <div className={classes.catalog_container}>
          {selectedQuery !== "null" ? (
            <h1>Фильтр : {selectedQuery}</h1>
          ) : (
            <h1>Все процессоры</h1>
          )}
          <div className={classes.catalog_query}>
            <button
              className={classes.query_button}
              onClick={handleCurrentQueryButton}
              style={{
                display: selectedQuery === "null" ? "none" : "inline-flex",
              }}
            >
              {selectedQuery}
              <h4>&#x2715;</h4>
            </button>
            {queries.map((query, index) => (
              <CatalogQueryButton
                key={index}
                query={query}
                onClick={handleQueryClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
