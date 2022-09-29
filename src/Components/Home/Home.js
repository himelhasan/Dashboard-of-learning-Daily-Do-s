import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState(0);

  // load data from api / json
  useEffect(() => {
    fetch("activities-data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <div class="flex flex-col md:flex-row">
        <div class=" grow py-20  bg-gray-100 px-20">
          <h1 className="text-center text-2xl bold">
            Activities to do to become a Pro Football Player
          </h1>
          <Activities activities={activities} time={time} setTime={setTime}></Activities>
        </div>
        <div class="flex-none w-full sm:w-1/4 md:w-1/5 py-20  ">
          <SideBar time={time}></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
