import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Education = () => {
  const [contentList, setContentList] = useState([]);

  const addEducation = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Institution", "Degree", "Date"]}
          deleteItem={() => deleteItem(index)}
          key={index}
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
      <Typography variant="h5">Education</Typography>
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
