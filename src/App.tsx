import "./App.css";

import profilepic from "./assets/images/image-jeremy.png";

export default function App() {
  return (
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
      <div className="interval-options">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
}
