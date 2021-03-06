import React, { useState } from "react";
import { Content } from "./Content";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const TrainingsAndCertificates = () => {
  const [contentList, setContentList] = useState([]);

  const addTrainingsAndCertificates = () => {
    const index = uniqueId();
    setContentList(
      contentList.concat(
        <Content
          data={{
            title: "Training/Certificate Title",
            subheader: "Giving Body",
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
    <div className="training-and-certificates">
      <Typography variant="h5">Trainings and Certificates</Typography>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addTrainingsAndCertificates}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
