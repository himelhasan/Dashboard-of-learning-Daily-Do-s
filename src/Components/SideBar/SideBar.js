import React from "react";
import user from "../../Media/himel-hasan.png";

const SideBar = ({ time }) => {
  return (
    <div className="px-5 pt-5 md:pt-20">
      <div className="card card-side bg-base-100 flex">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={user} alt="himel hasan" />
          </div>
        </div>
        <div className="px-5 text-left normal-case">
          <h2 className="text-lg font-semibold">Himel Hasan</h2>
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
            <p className="text-sm px-2 normal-case">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row bg-gray-100 py-5 my-10 px-2 rounded-xl">
        <div class="basis-1/3">
          <p className="font-semibold leading-none	text-lg m-0">75kg</p>
          <p className="	m-0">Weight</p>
        </div>
        <div class="basis-1/3">
          <p className="font-semibold leading-none	text-lg m-0">5.9</p>
          <p className="	m-0">Height</p>
        </div>
        <div class="basis-1/3">
          <p className="font-semibold leading-none	text-lg m-0">27</p>
          <p className="	m-0">Years</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-left my-5 p-0">Add A Break</h2>
      <div class="flex flex-row bg-gray-100 py-5 mt-5 px-2 rounded-xl justify-center">
        <button className="btn btn-circle mx-1 bg-lime-400 border-none text-black hover:text-white lowercase ">
          <p>10m</p>
        </button>
        <button className="btn btn-circle mx-1 bg-lime-400 border-none text-black hover:text-white lowercase ">
          <p>20m</p>
        </button>
        <button className="btn btn-circle mx-1 bg-lime-400 border-none text-black hover:text-white lowercase ">
          <p>30m</p>
        </button>
        <button className="btn btn-circle mx-1 bg-lime-400 border-none text-black hover:text-white lowercase ">
          <p>40m</p>
        </button>
        <button className="btn btn-circle mx-1 bg-lime-400 border-none text-black hover:text-white lowercase ">
          <p>50m</p>
        </button>
      </div>
      <h2 className="text-xl font-semibold text-left my-5 p-0">Exercise Details</h2>
      <div>
        <div className="flex my-3 bg-gray-100 w-full rounded-lg justify-center">
          <p className="bg-gray-100 px-2 py-3">Exercise time</p>
          <p className="bg-gray-100 px-2 py-3">{time} Minutes</p>
        </div>
        <div className="flex my-3 bg-gray-100 w-full rounded-lg justify-center">
          <p className="bg-gray-100 px-2 py-3">Break time</p>
          <p className="bg-gray-100 px-2 py-3">{time} Minutes</p>
        </div>

        <button className="btn btn-block bg-lime-400 text-black border-none hover:text-white normal-case">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default SideBar;
