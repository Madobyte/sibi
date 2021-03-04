import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Projects = () => {
  const [contentList, setContentList] = useState([]);

  const addProjects = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Project Title", "Technologies Used", "Description"]}
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
    <div className="projects">
      <Typography variant="h5">Projects</Typography>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addProjects}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
