import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="py- md:py-20 flex flex-col items-center text-left">
        <div
          tabIndex={0}
          className="w-full md:w-1/2 my-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">How Does React Work?</div>
          <div className="collapse-content">
            <p>
              React is a javascript library. It divides the UI into isolated reusable
              pieces of code known as components. React components work similarly to
              JavaScript functions as they accept arbitrary inputs called properties or
              props. It's possible to have as many components as necessary without
              cluttering code. React allows us to effectively re-construct our DOM in
              JavaScript and push only those changes to the DOM which have actually
              occurred.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="w-full md:w-1/2 my-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the Difference Between Props And State?
          </div>
          <div className="collapse-content">
            <p>
              State is the local state of the component which cannot be accessed and
              modified outside of the component. It's equivalent to local variables in a
              function. Props, on the other hand, make components reusable by giving
              components the ability to receive data from their parent component in the
              form of props.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="w-full md:w-1/2 my-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the Usage of UseEffect Without Data Loading?
          </div>
          <div className="collapse-content">
            <p>
              By using UseEffect hook, we tell React that our component needs to do
              something after render. React will remember the function we passed, and call
              it later after performing the DOM updates. We can use use useEffect to:
              <ul className="list-disc p-5 text-left">
                <li>Running once on mount: fetch API data</li>
                <li>Running on state change: validating input field</li>
                <li>Running on state change: live filtering</li>
                <li>Running on state change: trigger animation on new array value</li>
                <li>
                  Running on props change: update paragraph list on fetched API data
                  update
                </li>
                <li>
                  Running on props change: updating fetched API data to get BTC updated
                  price
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
