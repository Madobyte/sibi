import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Education = () => {
  const [contentList, setContentList] = useState([]);

  const addEducation = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Institution", "Degree", "Date"]}
          deleteItem={() => deleteItem(uniqueId())}
          key={uniqueId()}
        />
      )
    );
  };

  const deleteItem = (index) => {
    setContentList((prevState) => {
      const newArray = [...prevState];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  return (
    <div className="education">
      <h3 className="header">Education</h3>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addEducation}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
