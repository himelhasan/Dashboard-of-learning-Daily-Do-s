import React from "react";
import Questions from "../Questions/Questions";
import SingleActivity from "../SingleActivity/SingleActivity";

const Activities = ({ activities, time, setTime }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {activities.map((singleActivity) => (
          <SingleActivity
            singleActivity={singleActivity}
            key={singleActivity.id}
            time={time}
            setTime={setTime}
          ></SingleActivity>
        ))}
      </div>
      <Questions></Questions>
    </div>
  );
};

export default Activities;
