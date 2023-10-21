import styled from "styled-components";

const ProductInfoContainer = styled.main`
  max-width: 45rem;
  color: var(--color-white-100);
  h2 {
    font-size: 4rem;
    padding-bottom: 1.4rem;
  }
  aside {
    font-size: 1.8rem;
  }
  @media (width<=1100px) {
    h2 {
      font-size: 3rem;
    }
    aside {
      font-size: 1.4rem;
    }
  }
  @media (width<=900px) {
    h2 {
      font-size: 2.4rem;
    }
  }
`;

function ProductInfo() {
  return (
    <ProductInfoContainer>
      <h2>PinPoint: Simplifying Your World Through Location</h2>

      <aside>
        Discover the power of PinPoint, your all-in-one location companion. This
        app redefines the way you interact with your surroundings. Share your
        location with friends, uncover nearby events, and plan your adventures
        with ease. With PinPoint, you're in control, ensuring privacy and
        convenience at your fingertips. Explore the world through a new lens and
        make every moment count with PinPoint.
      </aside>
    </ProductInfoContainer>
  );
}

export default ProductInfo;
