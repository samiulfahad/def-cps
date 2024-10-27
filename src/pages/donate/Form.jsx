/** @format */

import React from "react";

const Form = (props) => {
  return (
    <section>
      <div className="px-10 bg-gray-200 shadow-lg rounded-md">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              src="https://i.postimg.cc/kMKhrC4n/Whats-App-Image-2024-10-17-at-19-02-30-673f0fc4.jpg"
              alt="image 1"
              className="w-80 h-auto mt-10"
            />
          </div>
          <div className="flex flex-col justify-start items-start pb-10 bt-6">
            <p className="text-left">
              Account Holder Name: <span className="font-bold ">Durgapur Educational Foundation</span>{" "}
            </p>
            <p>
              Bank Name: <span className="font-bold">Punjab & Sind Bank</span>{" "}
            </p>
            <p>
              Branch: <span className="font-bold">Durgapur</span>{" "}
            </p>
            <p>
              Account Number: <span className="font-bold">09421100000184</span>{" "}
            </p>
            <p>
              IFSC Code: <span className="font-bold">PSIB0020942</span>{" "}
            </p>
            <button
              onClick={props.formVisibility}
              className="px-6 mx-auto py-2 text-md font-bold bg-blue-gray-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
