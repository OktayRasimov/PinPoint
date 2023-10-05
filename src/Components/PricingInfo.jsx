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
        PinPoint is a versatile app designed to help you streamline your
        location-based needs. Whether you're planning a road trip, organizing a
        group meet-up, or just want to stay informed about events in your area,
        PinPoint has you covered. With a user-friendly interface and a range of
        features, it's the perfect tool for individuals and groups alike.
      </aside>
    </PricingInfoContainer>
  );
}

export default PricingInfo;
