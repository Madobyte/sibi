import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Projects = () => {
  const [contentList, setContentList] = useState([]);

  const addProjects = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Project Title", "Technologies Used", "Description"]}
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
    <div className="projects">
      <h3 className="header">Projects</h3>
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
