import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const WorkExperiences = () => {
  const [contentList, setContentList] = useState([]);

  const addWorkExperiences = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          data={{
            title: "Job Title",
            subheader: "Company",
            subheader2: "Inclusive Date",
            content: "Description",
          }}
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
    <div className="work-experiences">
      <Typography variant="h5">Work Experiences</Typography>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addWorkExperiences}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
