import React from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../../../components/divided/BlueButton";

interface SearchNoResultsProps {
  searchResult: string;
  filteredData: any;
}

const SearchNoResults: React.FC<SearchNoResultsProps> = ({
  searchResult,
  filteredData,
}) => {
  const navigate = useNavigate();
  const mainPageRedirect = () => {
    navigate("/");
  };

  return (
    <div style={{ display: filteredData.length !== 0 ? "none" : "block" }}>
      <h2>Странно, но по запросу "{searchResult}" ничего нет</h2>
      <h3>Попробуйте изменить критерии поиска</h3>
      <div>
        <BlueButton
          width={105}
          height={44}
          text="В каталог"
          fontWeight={500}
          borderRadius={8}
          margin="0 10px 0 0"
          onClick={mainPageRedirect}
        />
        <BlueButton
          width={119}
          height={44}
          text="На главную"
          fontWeight={500}
          fontColor="#000"
          borderRadius={8}
          background="#F7F7F7"
          onClick={mainPageRedirect}
        />
      </div>
    </div>
  );
};

export default SearchNoResults;
