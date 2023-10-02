import { useSelector } from "react-redux";
import styled from "styled-components";
import { AddCity } from "../Data/useSubmitCityData";
import { useNavigate } from "react-router";
import NotValidCity from "./NotValidCity";
import { useState } from "react";

const StyledForm = styled.form`
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* border: 0.5px solid #7b8185; */
  border-radius: 10px;
  padding: 1rem 2rem 2rem 2rem;
  width: 85%;
  height: max(45vh, 300px);
  margin-bottom: 2rem;

  box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.75);

  button {
    border-radius: 7px;
    border: none;
    width: 100%;
  }
`;

const StyledFormMain = styled.main`
  padding: 1.6rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  header {
    display: flex;
    justify-content: space-between;
    /* textarea {
      height: 100px;
    } */
  }
`;

const Test = styled.h2`
  border-bottom: 2px solid black;
  width: 100%;
  text-align: center;
  padding-bottom: 0.6rem;
`;

const StyledSelectedCity = styled.h3`
  color: #fff;
  font-size: 2.4rem;
`;

function Form() {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const test = useSelector((state) => state.cityData.selectedCityData);
  const navigate = useNavigate();
  const { addCityData } = AddCity();

  // console.log(test);

  function handleSubmit(e) {
    const testObj = { ...test, message: message, date: date };
    e.preventDefault();
    addCityData(testObj);
    navigate("/app/cities");
    console.log(testObj);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Test>Add City Visit</Test>
      {test.city ? (
        <StyledFormMain>
          <header>
            <h3>Selected City:</h3>
            <StyledSelectedCity>{test.city}</StyledSelectedCity>
          </header>
          <header>
            <h3>Comment about the trip:</h3>
            <textarea
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
          </header>
          <header>
            <h3>Date:</h3>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </header>
        </StyledFormMain>
      ) : (
        <NotValidCity />
      )}

      <button type="submit" disabled={!test.city}>
        Submit
      </button>
    </StyledForm>
  );
}

export default Form;
