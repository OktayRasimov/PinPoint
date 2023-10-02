import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddCity } from "../Data/useSubmitCityData";
import { useNavigate } from "react-router";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Form() {
  const test = useSelector((state) => state.cityData.selectedCityData);
  const navigate = useNavigate();
  const { addCityData } = AddCity();

  function handleSubmit(e) {
    e.preventDefault();
    addCityData(test);
    navigate("/app/cities");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <header>{test.city}</header>
      <input type="text" />

      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default Form;
