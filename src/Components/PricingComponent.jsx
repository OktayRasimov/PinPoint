import PricingInfo from "./PricingInfo";
import pricingimg from "../Images/pricingimg.jpg";
import styled from "styled-components";

export const PricingImg = styled.img`
  width: max(500px, 20%);
`;

export const PricingContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding-top: 9rem;
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
