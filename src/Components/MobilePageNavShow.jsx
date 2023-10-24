import styled from "styled-components";

import PageNavUlMobileComponent from "./PageNavUlMobile";

const StyledMobilePageNavShow = styled.div`
  min-height: calc(100vh - 5rem);
  display: ${(props) => (props.$display ? "inline-block" : "none")};

  width: 27rem;
  position: absolute;

  margin: 2.5rem;
  top: 0;
  right: 0;

  background-color: var(--color-grey-200);
  @media (width>800px) {
    display: none;
  }
  @media (width<450px) {
    margin: 1rem;
  }
`;

function MobilePageNavShow({ display }) {
  return (
    <StyledMobilePageNavShow $display={display}>
      <PageNavUlMobileComponent />
    </StyledMobilePageNavShow>
  );
}

export default MobilePageNavShow;
