import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const TrainingsAndCertificates = () => {
  const [contentList, setContentList] = useState([]);

  const addTrainingsAndCertificates = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Training/Certificate Title", "Giving Body"]}
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
    <div className="training-and-certificates">
      <h3 className="header">Training and Certificates</h3>
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
