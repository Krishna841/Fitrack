import { useState } from "react";

const Tracker = () => {
  const list = [
    { name: "Jogging", period: 20, done: 15, credits: 30 },
    { name: "Streches", period: 10, done: 20, credits: 50 },
  ];
  const [add, setAdd] = useState(false);
  return (
    <div className="tracker">
      <div className="tracker_list">
        {list?.map((exercise) => (
          <div className="exercises">
            <div className="name">Name: {exercise.name} </div>
            <div className="time">Time Period:{exercise.period} days</div>
            <div className="done">Days done: {exercise.done}</div>
            <div className="credits">Credits earned: {exercise.credits}</div>
          </div>
        ))}
      </div>
      <div className="tracker_add">
        <input
          type="button"
          value="Add"
          onClick={() => {
            setAdd((prevAdd) => !prevAdd);
          }}
        />
        {add ? (
          <div className="add_exercise">
            <input className="name" placeholder="Name" />
            <input className="period" placeholder="Time Period" />
            <input className="credits" placeholder="Credits" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tracker;
