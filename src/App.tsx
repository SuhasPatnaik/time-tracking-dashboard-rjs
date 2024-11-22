import "./App.css";
import { useState } from "react";

import profilepic from "./assets/images/image-jeremy.png";
import elipsisIcon from "./assets/images/icon-ellipsis.svg";

import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import socialIcon from "./assets/images/icon-social.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";

const activityStyles = {
  Work: {
    bgColor: "var(--clr-accent-work)",
    imgSrc: workIcon,
  },
  Play: {
    bgColor: "var(--clr-accent-play)",
    imgSrc: playIcon,
  },
  Study: {
    bgColor: "var(--clr-accent-study)",
    imgSrc: studyIcon,
  },
  Exercise: {
    bgColor: "var(--clr-accent-exercise)",
    imgSrc: exerciseIcon,
  },
  Social: {
    bgColor: "var(--clr-accent-social)",
    imgSrc: socialIcon,
  },
  SelfCare: {
    bgColor: "var(--clr-accent-selfcare)",
    imgSrc: selfCareIcon,
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
        <img
          src={activityStyles.Work.imgSrc}
          alt=""
          className="activity-img-rep"
        />
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
