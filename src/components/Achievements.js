import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Achievements = () => {
  const [contentList, setContentList] = useState([]);

  const addAchievements = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          data={{ title: "Achievement", subheader: "Description" }}
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
    <div className="achievements">
      <Typography variant="h5">Achievements</Typography>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addAchievements}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
