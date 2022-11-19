import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/commons/primary-button";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const { logHandler, loggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/top-page";

  const handleLogin = () =>{
      logHandler()
      navigate(from, {replace: true})
  }
  console.log(loggedIn)
  return (
    <PrimaryButton title="Login" onClick={handleLogin} />
  )
};

export default Login;
