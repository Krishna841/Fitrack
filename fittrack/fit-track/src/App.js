import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import "./App.css";
import Login from "./Components/Home/Login";
import Signup from "./Components/Home/Signup";
import User from "./Components/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
