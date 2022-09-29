import React from "react";
import user from "../../Media/himel-hasan.png";

const SideBar = () => {
  return (
    <div className="px-5">
      <div className="card card-side bg-base-100 flex">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={user} alt="himel hasan" />
          </div>
        </div>
        <div className="px-5 text-left">
          <h2 className="text-lg bold">Himel Hasan</h2>
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-lime-600 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-xs px-2">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row bg-base-300 py-5 my-10">
        <div class="basis-1/3">01</div>
        <div class="basis-1/3">02</div>
        <div class="basis-1/3">03</div>
      </div>
    </div>
  );
};

export default SideBar;
