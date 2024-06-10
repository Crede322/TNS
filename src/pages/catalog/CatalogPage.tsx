import React, { useState } from "react";
import Header from "../../components/global/header/Header";
import classes from "./CatalogPage.module.css";
import CatalogQueryButton from "./catalog query button/CatalogQueryButton";

const CatalogPage = () => {
  const handleButtonClick = (query: any) => {
    setQueries((prevQueries) => {
      const newQueries = prevQueries.filter((q) => q !== query);
      newQueries.unshift(query);
      return newQueries;
    });
  };

  const initialQueries = [
    "AM4",
    "2023 Год",
    "6 Ядер",
    "8 Ядер",
    "12 Потоков",
    "Свободный множитель",
    "Частота RAM: 3200МГц",
    "Встроенный видеочип",
  ];

  const [queries, setQueries] = useState(initialQueries);

  return (
    <div>
      <Header />
      <div className={classes.catalog_background}>
        <div className={classes.catalog_container}>
          <h1>Персональные компьютеры</h1>
          <div className={classes.catalog_query}>
            {queries.map((query, index) => (
              <CatalogQueryButton
                key={index}
                query={query}
                onClick={handleButtonClick}
                isQueryActive={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
