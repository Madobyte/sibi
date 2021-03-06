import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const TechnicalSkills = () => {
  const [contentList, setContentList] = useState([]);

  const addTechnicalSkills = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          data={{ title: "Section Title", subheader: "Technologies" }}
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
    <div className="technical-skills">
      <Typography variant="h5">Technical Skills</Typography>
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
