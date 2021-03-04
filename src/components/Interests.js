import React, { useState } from "react";
import { Content } from "./Content";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uniqueId from "./uniqueIdGenerator";

export const Interests = () => {
  const [contentList, setContentList] = useState([]);

  const addInterests = () => {
    setContentList(
      contentList.concat(
        <Content
          placeholder={["Interest"]}
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
    <div className="interests">
      <h3 className="header">Interests</h3>
      {contentList}
      <Button
        variant="outlined"
        color="primary"
        className="add-btn"
        onClick={addInterests}
      >
        <AddIcon />
        Add
      </Button>
    </div>
  );
};
