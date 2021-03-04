import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Achievements = () => {
  const [contentList, setContentList] = useState([]);

  const addAchievements = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Achievement", "Description"]}
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
    <div className="achievements">
      <h3 className="header">Achievements</h3>
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
