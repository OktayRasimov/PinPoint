import styled from "styled-components";
import { supabase } from "../Data/supabaseClient";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAuthUser } from "../Features/loginSlice";

const StyledUserAbsolute = styled.div`
  width: 200px;
  height: 100px;
  z-index: 1000;
  background-color: red;
  position: absolute;
  top: 2%;
  right: 2%;
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

  useEffect(
    function () {
      console.log(authUser);
    },
    [authUser]
  );

  return (
    <StyledUserAbsolute>
      <button onClick={handleLogout}>LOGOUT</button>
    </StyledUserAbsolute>
  );
}

export default UserAbsolute;
