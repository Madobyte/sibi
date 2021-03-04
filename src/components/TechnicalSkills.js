import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const TechnicalSkills = () => {
  const [contentList, setContentList] = useState([]);

  const addTechnicalSkills = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Section Title", "Technologies"]}
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
    <div className="technical-skills">
      <h3 className="header">Technical Skills</h3>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addTechnicalSkills}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
