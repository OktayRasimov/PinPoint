import { useState } from "react";
import styled from "styled-components";
import { supabase } from "../Data/supabaseClient";

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

  function handleLogin(e) {
    e.preventDefault();
    async function login() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });
      console.log(data, error);
    }
    login();
  }

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
        </header>
        <header>
          <p>Password</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </header>
        <button type="submit">Sign in</button>
      </StyledLoginBox>
    </StyledLoginForm>
  );
}

export default LoginForm;
