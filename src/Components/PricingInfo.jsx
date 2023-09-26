import styled from "styled-components";

const PricingInfoContainer = styled.main`
  max-width: 45rem;
  color: var(--color-white-100);
  h2 {
    font-size: 4rem;
    padding-bottom: 1.4rem;
  }
  aside {
    font-size: 1.8rem;
  }
`;

function PricingInfo() {
  return (
    <PricingInfoContainer>
      <h2>
        Simple pricing.<br></br>Just $9/Month.
      </h2>

      <aside>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam, error aut, magnam voluptatum nostrum nihil reiciendis fuga
        recusandae enim impedit, laborum a aperiam libero eligendi optio
        provident ratione nemo!
      </aside>
    </PricingInfoContainer>
  );
}

export default PricingInfo;
