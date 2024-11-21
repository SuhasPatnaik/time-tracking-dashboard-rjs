import "./App.css";

import profilepic from "./assets/images/image-jeremy.png";
import elipsisIcon from "./assets/images/icon-ellipsis.svg";
import { useState } from "react";

const activityStyles = {
  Work: {
    bgColor: "var(--clr-accent-work)",
    imgSrc: "./assets/images/icon-work.svg",
  },
  Play: {
    bgColor: "var(--clr-accent-play)",
    imgSrc: "./assets/images/icon-play.svg",
  },
  Study: {
    bgColor: "var(--clr-accent-study)",
    imgSrc: "./assets/images/icon-study.svg",
  },
  Exercise: {
    bgColor: "var(--clr-accent-exercise)",
    imgSrc: "./assets/images/icon-exercise.svg",
  },
  Social: {
    bgColor: "var(--clr-accent-social)",
    imgSrc: "./assets/images/icon-social.svg",
  },
  SelfCare: {
    bgColor: "var(--clr-accent-selfcare)",
    imgSrc: "./assets/images/icon-self-care.svg",
  },
};

export default function App() {
  const [timeframe, setTimeframe] = useState("daily");

  const handleTimeframeChange = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

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
            <button
              onClick={() => {
                handleTimeframeChange("daily");
              }}
            >
              Daily
            </button>
            <button
              onClick={() => {
                handleTimeframeChange("weekly");
              }}
            >
              Weekly
            </button>
            <button
              onClick={() => {
                handleTimeframeChange("monthly");
              }}
            >
              Monthly
            </button>
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
