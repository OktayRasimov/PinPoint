import styled from "styled-components";

import { useEffect, useState } from "react";
import { supabase } from "../Data/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { addAuthUser } from "../Features/loginSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const StyledLoginForm = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13em;
`;

const StyledLoginBox = styled.form`
  background-color: var(--color-grey-200);
  border-radius: 5px;
  padding: 2rem;
  width: min(350px, 80%);
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #fff;
  }
  input {
    width: 100%;
  }
  button {
    color: var(--color-light-100);
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authUser } = useSelector((state) => state.login);

  function handleLogin(e) {
    e.preventDefault();
    async function login() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });
      if (data.user) {
        dispatch(addAuthUser(data.user));
        toast.success(`Login succesful`);
      }
      if (error) toast.error(`Wrong credentials,check your email or pass`);
    }
    login();
  }

  useEffect(
    function () {
      if (authUser) {
        console.log(`FIRST`, authUser);
        navigate("/app", { replace: true });
      }
      if (!authUser) {
        console.log(`SECOND`, authUser);
        // navigate("/app", { replace: true });
      }
    },
    [authUser, navigate]
  );

  return (
    <StyledLoginForm onSubmit={handleLogin}>
      <StyledLoginBox>
        <header>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Demo&nbsp;:&nbsp;popov@abv.bg</h5>
        </header>
        <header>
          <p>Password</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <h5>Demo&nbsp;:&nbsp;samolevski123</h5>
        </header>
        <button type="submit">Sign in</button>
      </StyledLoginBox>
    </StyledLoginForm>
  );
}

export default LoginForm;
