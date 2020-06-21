import React from "react";

const Header = (props) => {
  return (
    <div class="flex py-3">
      <div class="w-1/2"></div>
      <div class="w-1/2 flex justify-end">
        <div className="text-right mr-3">
          <div className="text-xl">Rian Khanafi</div>
          <div className="text-xs">Setting</div>
        </div>
        <div className="bg-grey bg-gray-200 w-12 h-12 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
