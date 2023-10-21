import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import productimg from "../Images/productimg.jpg";

const ProductImg = styled.img`
  width: max(500px, 20%);
  @media (width<=1155px) {
    width: max(350px, 20%);
  }
  @media (width<=855px) {
    width: max(250px, 20%);
  }
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

function ProductComponent() {
  return (
    <ProductContainer>
      <ProductInfo />
      <ProductImg src={productimg} />
    </ProductContainer>
  );
}

export default ProductComponent;
