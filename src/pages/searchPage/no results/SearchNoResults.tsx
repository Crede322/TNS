import { useNavigate, useLocation } from "react-router-dom";
import BlueButton from "../../../components/shared/BlueButton";

interface SearchNoResultsProps {
  searchResult: string;
  filteredData: any;
}

const SearchNoResults: React.FC<SearchNoResultsProps> = ({
  searchResult,
  filteredData,
}) => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const currentLocation = urlParams.get("q");
  const navigate = useNavigate();
  const mainPageRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>
        Странно, но по запросу "{searchResult ? searchResult : currentLocation}"
        ничего нет
      </h2>
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
