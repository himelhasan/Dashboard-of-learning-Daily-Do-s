import React from "react";
import SingleActivity from "../SingleActivity/SingleActivity";

const Activities = ({ activities }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 p-5">
        {activities.map((singleActivity) => (
          <SingleActivity
            singleActivity={singleActivity}
            key={singleActivity.id}
          ></SingleActivity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
