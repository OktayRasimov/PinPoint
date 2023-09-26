import styled from "styled-components";
import PageNav from "../Components/PageNav";
import PricingComponent from "../Components/PricingComponent";

export const MainHomePageContainer = styled.main`
  height: calc(100vh - 5rem);
  background: var(--color-grey-100);
  margin: 2.5rem;
  padding: 2.5rem 5rem;
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
