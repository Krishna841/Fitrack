import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="login_title">Login</div>
      <div className="login_inputs">
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password"></input>
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
