import styled from "styled-components";
import PageNav from "../Components/PageNav";
import PricingComponent from "../Components/PricingComponent";

export const MainHomePageContainer = styled.main`
  min-height: calc(100vh - 5rem);
  max-height: calc(100vh - 5rem);
  background: var(--color-grey-100);
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  @media (width<=450px) {
    min-height: calc(100vh - 2rem);
    margin: 1rem;
    gap: 1rem;
  }
`;

function Pricing() {
  return (
    <MainHomePageContainer>
      <PageNav />
      <PricingComponent />
    </MainHomePageContainer>
  );
}

export default Pricing;
