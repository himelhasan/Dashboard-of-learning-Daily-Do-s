import React from "react";

const SingleActivity = ({ singleActivity }) => {
  const { activity, addedInList, description, duration, id, image } = singleActivity;

  return (
    <div className="block p-4 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-300 shadow-indigo-100">
      <img alt="Home" src={image} class="object-cover w-full h-56 rounded-md" />

      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Address</dt>

            <dd class="font-medium">{activity}</dd>
          </div>
          <div>
            <dt class="sr-only">Price</dt>

            <dd class="text-sm text-gray-500">{description}</dd>
          </div>
        </dl>

        <dl class="flex items-center gap-8 mt-6 text-xs">
          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-lime-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0 text-left ">
              <dt class="text-gray-500">Duration</dt>

              <dd class="font-medium">{duration} Minutes</dd>
            </div>
          </div>

          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-lime-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0 text-left">
              <dt class="text-gray-500">Age</dt>

              <dd class="font-medium">12-16</dd>
            </div>
          </div>

          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-lime-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0 text-left">
              <dt class="text-gray-500">Rest</dt>

              <dd class="font-medium">10 Minutes</dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SingleActivity;
