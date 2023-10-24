import PricingInfo from "./PricingInfo";
import pricingimg from "../Images/pricingimg.jpg";
import styled from "styled-components";

export const PricingImg = styled.img`
  width: max(500px, 20%);
  @media (width<=1100px) {
    width: max(300px, 20%);
  }
  @media (width<=700px) {
    display: none;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

function PricingComponent() {
  return (
    <PricingContainer>
      <PricingInfo />
      <PricingImg src={pricingimg} />
    </PricingContainer>
  );
}

export default PricingComponent;
