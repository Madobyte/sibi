import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const WorkExperiences = () => {
  const [contentList, setContentList] = useState([]);

  const addWorkExperiences = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={[
            "Job Title",
            "Company",
            "Inclusive Date",
            "Description",
          ]}
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
    <div className="work-experiences">
      <h3 className="header">Work Experiences</h3>
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
