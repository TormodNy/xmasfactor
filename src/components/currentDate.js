import "./currentDate.css";
import { dateSuffix, monthText } from "../data/months";
import { useState } from "react";

export const CurrentDate = () => {
  const date = new Date();
  const [opened, setOpened] = useState(false);

  return (
    <div className="container">
      <p id="todaysDoor">Today's door:</p>
      {!opened && (
        <div className="door" id="closedDoor" onClick={() => setOpened(true)}>
          <p id="date">{dateSuffix(date.getDate())}</p>
          <p id="month">{monthText(date.getMonth())}</p>
        </div>
      )}
      {opened && (
        <div className="door" id="openedDoor">
          <p id="xmasFactor">100%</p>
          <p id="xmasFactorHeading">Christmas</p>
        </div>
      )}
    </div>
  );
};
