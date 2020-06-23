import React, { useState } from "react";
import { Input, Button } from "antd";
import { AddList, AddDescription } from "../../atoms";

const AddCard = () => {
  const [addType, setAddType] = useState(null);

  const handleAddType = (type) => {
    setAddType(type);
  };
  return (
    <div>
      <Input placeholder="Basic usage" style={{ borderRadius: 6 }} />
      <div className="my-1">
        <Button
          type="default"
          className="mr-1"
          onClick={() => handleAddType("addList")}
        >
          Add List
        </Button>
        <Button
          type="primary"
          ghost
          onClick={() => handleAddType("addDescription")}
        >
          Add Description
        </Button>
      </div>
      {addType === "addDescription" && <AddDescription />}
      {addType === "addList" && <AddList />}
    </div>
  );
};

export default AddCard;
