import styled from "styled-components";
import { supabase } from "../Data/supabaseClient";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAuthUser } from "../Features/loginSlice";
import { toast } from "react-toastify";

const StyledUserAbsolute = styled.div`
  width: fit-content;
  font-size: 1.4rem;
  z-index: 9999;
  position: absolute;
  top: 5%;
  right: 5%;
  @media (width<=450px) {
    top: 2.4%;
  }
`;

const StyledLogoutButton = styled.button`
  width: 100px;
  height: 35px;
  /* background-color: var(--color-grey-0); */
  border-radius: 3px;
  border: none;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.08);
  }
`;

function UserAbsolute() {
  const { authUser } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    async function logout() {
      const { data, error } = await supabase.auth.signOut();
      dispatch(addAuthUser(data));
    }
    logout();
  }

  return (
    <StyledUserAbsolute>
      <StyledLogoutButton onClick={handleLogout}>LOGOUT</StyledLogoutButton>
    </StyledUserAbsolute>
  );
}

export default UserAbsolute;
