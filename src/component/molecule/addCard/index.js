import React, { useState } from "react";
import { Input, Button } from "antd";
import { AddList, AddDescription } from "../../atoms";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const AddCard = () => {
  const [addType, setAddType] = useState(null);
  const [addNew, setAddNew] = useState(false);

  const handleAddType = (type) => {
    setAddType(type);
  };
  return (
    <div className="add-card">
      <div className="flex items-center mt-6">
        <div className="mr-8 flex items-center">
          <span>{/* <FontAwesomeIcon icon={faPlusSquare} /> */}</span>
        </div>
        <div className="w-full">
          <div className="w-full rounded-lg flex ">
            <div className="w-1/6 flex items-center primary">
              <button
                type="button"
                className="w-10 h-10 text-white bg-primary hover:bg-gray-200   bg-white mx-4 rounded-lg"
                onClick={() => setAddNew(!addNew)}
              >
                <FontAwesomeIcon icon={addNew ? faMinus : faPlus} />
              </button>
            </div>
            <div className="w-5/6 h-auto flex items-start">
              <div className="text-lg font-bold">Add New Card</div>
            </div>
          </div>
        </div>
      </div>

      {addNew && (
        <div className="flex items-center mt-6">
          <div className="mr-6 flex items-center">
            <span>
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </div>
          <div className="w-full">
            <div className="w-full h-16 bg-white rounded-lg flex">
              <div className="w-1/6" />
              <div className="w-full  h-auto flex-col items-center">
                <Input placeholder="Todo Title" className="input-style" />
                <div className="my-3">
                  <Button
                    type="default"
                    className="mr-1 add-new-card"
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
                  <Button type="link">
                    {addNew && (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-xl"
                        onClick={() => handleAddType(null)}
                      />
                    )}
                  </Button>
                </div>
                {addType === "addDescription" && <AddDescription />}
                {addType === "addList" && <AddList />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
