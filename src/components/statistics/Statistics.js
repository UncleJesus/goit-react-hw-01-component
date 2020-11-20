import React from "react";
import "./Statistics.module.css";
import StatisticsItem from "./StatisticItem.js";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map((el) => {
          return (
            <StatisticsItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
