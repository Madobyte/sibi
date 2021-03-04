import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Interests = () => {
  const [contentList, setContentList] = useState([]);

  const addInterests = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Interest"]}
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
    <div className="interests">
      <Typography variant="h5">Interests</Typography>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addInterests}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
