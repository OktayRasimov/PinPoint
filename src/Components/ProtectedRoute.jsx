import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const { authUser } = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!authUser) navigate("/login");
    },
    [authUser, navigate]
  );

  return authUser ? children : null;
}

export default ProtectedRoute;
