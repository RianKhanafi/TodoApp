import React from "react";

const Daily = (props) => {
  return (
    <>
      <span className="text-2xl">Today’s Schedule</span>
      <br />
      <span className="text-2xl">Thursday 11</span>

      <div className="flex items-center">
        <div className="mr-6">=</div>
        <div className="w-full">
          <div className="w-full h-16 bg-gray-200 rounded-lg mt-6 mb-6 hover:bg-gray-500 flex items-center">
            <div class="w-1/6  h-12">Icn</div>
            <div class="w-4/6  h-12">
              <span className="text-xl">Wake up</span>
            </div>
            <div class="w-1/6  h-12">
              <span>8.00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;
