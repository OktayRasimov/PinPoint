import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import productimg from "../Images/productimg.jpg";

const ProductImg = styled.img`
  width: max(500px, 20%);
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding-top: 9rem;
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
