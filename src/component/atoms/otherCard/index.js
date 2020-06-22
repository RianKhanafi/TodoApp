import React from "react";

const OtherCard = (props) => {
  return (
    <>
      <div className="flex items-center mt-6 h-16 bg-gray-200 rounded-lg hover:bg-gray-500">
        <div className="w-1/6 h-12 bg-white mx-6"></div>
        <div className="w-5/6 h-12 flex-col items-center">
          <div className="align-left text-lg font-bold">Idea</div>
          <div>
            <span className="text-xs text-xs text-gray-500">
              16 in this week
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherCard;
