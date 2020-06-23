import React from "react";
import { Input } from "antd";

const { TextArea } = Input;
const AddCard = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-full">
          <TextArea rows={4} />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
