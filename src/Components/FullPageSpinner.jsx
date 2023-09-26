import styled from "styled-components";
import Spinner from "./Spinner";

const FullPageLoaderStyled = styled.section`
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-color: var(--color-grey-100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullPageSpinner() {
  return (
    <FullPageLoaderStyled>
      <Spinner />
    </FullPageLoaderStyled>
  );
}

export default FullPageSpinner;
