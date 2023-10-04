import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

const CitySelectedInfoBox = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  border-radius: 5px;
  width: 100%;
  height: max(50vh, 250px);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h4 {
    color: var(--color-grey-300);
  }
`;

const BackButton = styled.button`
  position: absolute;
  bottom: 3%;
  right: 4%;
  text-align: center;
  width: 70px;
`;

function SelectedAddedCityBox() {
  const { addedSelectedCityData } = useSelector((state) => state.cityData);
  const navigate = useNavigate();

  useEffect(
    function () {
      console.log(addedSelectedCityData);
    },
    [addedSelectedCityData]
  );

  return (
    <CitySelectedInfoBox>
      <header>
        <h4>City name:</h4>
        <h1>
          {addedSelectedCityData.city}&nbsp;&nbsp;&nbsp;
          <span>{addedSelectedCityData.countryCode}</span>
        </h1>
      </header>
      <header>
        <h4>Note about the trip</h4>
        <h1>{addedSelectedCityData.message}</h1>
      </header>
      <header>
        <h4>Time you went there</h4>
        <h1>{addedSelectedCityData.date}</h1>
      </header>
      {/* <aside>More information about city &rarr;</aside> */}
      <a
        href={`https://en.wikipedia.org/wiki/${addedSelectedCityData.city}`}
        target="_blank"
        rel="noreferrer"
      >
        Check out {addedSelectedCityData.city} on Wikipedia &rarr;
      </a>

      <BackButton onClick={() => navigate(-1)}>&larr; Back</BackButton>
    </CitySelectedInfoBox>
  );
}

export default SelectedAddedCityBox;
