import React from "react";
import Profile from "./components/profile/Profile.js";
import userData from "./data/user.json";
import Statistics from "./components/statistics/Statistics.js";
import statisticalData from "./data/statistical-data.json";

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <Statistics stats={statisticalData} title="Hello World!" />
    </>
  );
};

export default App;
