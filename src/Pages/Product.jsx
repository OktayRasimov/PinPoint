import PageNav from "../Components/PageNav";
import ProductComponent from "../Components/ProductComponent";
import { MainHomePageContainer } from "./Pricing";

function Product() {
  return (
    <MainHomePageContainer>
      <PageNav />
      <ProductComponent />
    </MainHomePageContainer>
  );
}

export default Product;
