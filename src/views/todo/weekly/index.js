import React from "react";
import { OtherCard } from "../../../component";
const Weekly = (props) => {
  return (
    <>
      <div className="flex content-center align-center items-center">
        <div className="w-1/2">
          <span className="text-xl">Weekly Plan</span>
        </div>
        <div className="w-1/2 flex justify-end">
          <span>View All</span>
        </div>
      </div>

      <div className="w-full h-32 bg-gray-200 rounded-lg mt-6 mb-6 hover:bg-gray-500"></div>

      <div className="flex ">
        <div className="w-1/6 h-12 bg-gray-200 rounded-lg hover:bg-gray-500"></div>
        <div className="w-5/6 h-12 flex items-center">
          <span className="text-lg mx-6 block">Add New Week Plan</span>
        </div>
      </div>

      <OtherCard />
      <OtherCard />
      {/* <OtherCard /> */}
    </>
  );
};
export default Weekly;
