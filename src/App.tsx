import "./App.css";

import profilepic from "./assets/images/image-jeremy.png";
import workIcon from "./assets/images/icon-work.svg";
import elipsisIcon from "./assets/images/icon-ellipsis.svg";

export default function App() {
  return (
    <>
      <div className="main-section">
        <div className="name-card">
          <div className="user-card">
            <img
              src={profilepic}
              alt="Headshot of Jeremy Robson"
              className="profile-pic"
            />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="timeframe-options">
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
          </div>
        </div>
        <ActivityTimeCard />
      </div>
    </>
  );
}

function ActivityTimeCard() {
  return (
    <div className="activity-time-card">
      <div className="timecard-top">
        <img src={workIcon} alt="" className="activity-img-rep" />
      </div>
      <div className="info-card">
        <h2 className="title">Work</h2>
        <img src={elipsisIcon} alt="" />
        <p className="current-total-time">32hrs</p>
        <p className="previous-total-time">Last Week - 36hrs</p>
      </div>
    </div>
  );
}
