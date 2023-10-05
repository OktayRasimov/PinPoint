import LoginForm from "../Components/LoginForm";
import PageNav from "../Components/PageNav";
import { MainHomePageContainer } from "./Pricing";

function Login() {
  return (
    <MainHomePageContainer>
      <PageNav />
      <LoginForm />
    </MainHomePageContainer>
  );
}

export default Login;
