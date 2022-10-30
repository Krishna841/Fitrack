import Tracker from "../Tracker/Tracker";
const User = () => {
  const [username, points] = ["Krishna", 500];
  return (
    <div className="user">
      <div className="user_title">Welcome {username}</div>
      <div className="user_details">You have {points} points</div>
      <Tracker />
    </div>
  );
};

export default User;
