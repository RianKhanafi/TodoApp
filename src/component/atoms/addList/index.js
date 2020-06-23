import React, { useState } from "react";
import { Input, Checkbox, Button } from "antd";

const AddCard = () => {
  const [list, setList] = useState([
    {
      checkBox: false,
      title: null,
    },
  ]);

  const handleAddList = (index) => {
    let concatList = [];
    if (list[list.length - 1].title !== null) {
      concatList = list.concat([
        {
          checkBox: false,
          title: null,
        },
      ]);
      setList(concatList);
    }
  };

  const handleChangeText = (text, index) => {
    const {
      target: { value, name },
    } = text;
    const inputRows = [...list];
    inputRows[index] = {
      ...inputRows[index],
      [name]: value,
    };
    setList(inputRows);
  };

  console.log(list);
  return (
    <div>
      {list.map((listType, index) => {
        return (
          <div className="flex items-center mb-2">
            <div className="mr-6">
              <Checkbox
                name="checkBox"
                value={true}
                onChange={(text) => handleChangeText(text, index)}
              />
            </div>
            <div className="w-full">
              <Input
                name="title"
                onChange={(text) => handleChangeText(text, index)}
              />
            </div>
          </div>
        );
      })}
      <Button type="default" onClick={handleAddList} className="ml-10">
        Add New
      </Button>
    </div>
  );
};

export default AddCard;
