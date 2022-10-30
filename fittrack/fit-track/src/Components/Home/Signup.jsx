import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState("");
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [confirm, setConfirm] = useState("");
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };
  const [phone, setPhone] = useState("");
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const [height, setHeight] = useState("");
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const [weight, setWeight] = useState("");
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const [age, setAge] = useState("");
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="signup">
      <form>
        <input
          className="signup_email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          className="signup_username"
          placeholder="Username"
          value={user}
          onChange={handleUser}
        />

        <input
          className="signup_password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />

        <input
          className="signup_confirm"
          placeholder="Confirm Password"
          hidden="true"
          value={confirm}
          onChange={handleConfirm}
        />

        <input
          className="signup_phone"
          placeholder="Phone"
          value={phone}
          onChange={handlePhone}
        />

        <input
          className="signup_height"
          placeholder="Height"
          value={height}
          onChange={handleHeight}
        />

        <input
          className="signup_weight"
          placeholder="Weight"
          value={weight}
          onChange={handleWeight}
        />

        <input
          className="signup_age"
          placeholder="Age"
          value={age}
          onChange={handleAge}
        />
        <input type="button" value="Submit" />
        <input type="button" value="Cancel" />
      </form>
    </div>
  );
};

export default Signup;
