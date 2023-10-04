import { useSelector } from "react-redux";

function SelectedAddedCityBox() {
  const { addedSelectedCityData } = useSelector((state) => state.cityData);

  return <div>{addedSelectedCityData?.city}</div>;
}

export default SelectedAddedCityBox;
