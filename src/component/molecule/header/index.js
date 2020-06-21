import React from "react";

const Header = (props) => {
  return (
    <div class="flex py-5">
      <div class="w-1/2"></div>
      <div class="w-1/2 flex justify-end">
        <div className="text-right mr-3">
          <div className="text-2xl">Rian Khanafi</div>
          <div>Setting</div>
        </div>
        <div className="bg-grey bg-gray-200 w-16 h-16 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
