import { dateSuffix, monthText } from "../data/months";

export const CurrentDate = () => {
  const date = new Date();

  return (
    <div className="container">
      <p id="date">
        {dateSuffix(date.getDate())} {monthText(date.getMonth())}
      </p>
      <p id="xmasFactorHeading">XMAS Factor:</p>
      <p id="xmasFactor">100%</p>
    </div>
  );
};
