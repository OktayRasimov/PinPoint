import styled from "styled-components";
import LinkButton from "./LinkButton";

const HomePageContainer = styled.div`
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5rem;
  p {
    font-size: 2.6rem;
  }
`;

function HomepageHeader() {
  return (
    <HomePageContainer>
      <h1>Welcome to PinPoint: Your Location Companion</h1>
      <p>
        PinPoint is your go-to app for seamless location-based experiences.
        Whether you're exploring new places, connecting with friends, or
        discovering local events, we've got you covered. With real-time location
        sharing, event recommendations, and group planning tools, PinPoint makes
        navigating the world a breeze. Join us today and never lose your way
        again!
      </p>
      <LinkButton />
    </HomePageContainer>
  );
}

export default HomepageHeader;
