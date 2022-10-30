import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Landing = () => {
  return (
    <div className="home">
      <div className="home_title"> FitTrack </div>
      <div className="home_redirects">
        <Link className="home_redirects_login" to="/login" element={<Login />}>
          Login
        </Link>
        <div></div>
        <Link
          to="/signup"
          className="home_redirects_signup"
          element={<Signup />}
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Landing;
