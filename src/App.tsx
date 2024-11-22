import "./App.css";
import { useState } from "react";
import data from "./assets/data/data.json";

import profilepic from "./assets/images/image-jeremy.png";
import elipsisIcon from "./assets/images/icon-ellipsis.svg";

import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import socialIcon from "./assets/images/icon-social.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";

interface Timeframe {
  current: number;
  previous: number;
}

interface Activity {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

interface ActivityStyle {
  bgColor: string;
  imgSrc: string;
}

const activityStyles: Record<string, ActivityStyle> = {
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
  "Self Care": {
    bgColor: "var(--clr-accent-selfcare)",
    imgSrc: selfCareIcon,
  },
};

export default function App() {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  const handleTimeframeChange = (
    selectedTimeframe: "daily" | "weekly" | "monthly"
  ) => {
    console.log(`state value changed to: ${selectedTimeframe}`);
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
            <button autoFocus onClick={() => handleTimeframeChange("daily")}>
              Daily
            </button>
            <button onClick={() => handleTimeframeChange("weekly")}>
              Weekly
            </button>
            <button onClick={() => handleTimeframeChange("monthly")}>
              Monthly
            </button>
          </div>
        </div>
        {data.map((activity: Activity) => {
          console.log(`activity::: ${activity.title}`);
          const { title, timeframes } = activity;

          return (
            <ActivityTimeCard
              key={title}
              title={title}
              timeframe={timeframes[timeframe]}
              backgroundColor={activityStyles[title]?.bgColor}
              imgSource={activityStyles[title]?.imgSrc}
            />
          );
        })}
      </div>
    </>
  );
}

interface ActivityTimeCardProps {
  title: string;
  timeframe: Timeframe;
  backgroundColor?: string;
  imgSource?: string;
}

function ActivityTimeCard({
  title,
  timeframe,
  backgroundColor,
  imgSource,
}: ActivityTimeCardProps) {
  return (
    <div className="activity-time-card" style={{ backgroundColor }}>
      <div className="timecard-top">
        <img
          src={imgSource}
          alt={`${title} icon`}
          className="activity-img-rep"
        />
      </div>
      <div className="info-card">
        <h2 className="title">{title}</h2>
        <img src={elipsisIcon} alt="Options menu icon" />
        <p className="current-total-time">{`${timeframe.current}hrs`}</p>
        <p className="previous-total-time">{`Last Week - ${timeframe.previous}hrs`}</p>
      </div>
    </div>
  );
}
