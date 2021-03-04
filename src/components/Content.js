import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Editable from "./Editable";

export const Content = (props) => {
  const [content, setContent] = useState({});
  const { placeholder, deleteItem } = props;

  const handleChange = (e, data) => {
    setContent((prevState) => {
      return { ...prevState, [data]: e.target.value };
    });
  };

  return (
    <div className="content">
      {placeholder.map((data) => (
        <Editable text={content[data] || data} type="text" key={data}>
          <TextField
            variant="outlined"
            size="small"
            margin="dense"
            label={data}
            value={content[data] || ""}
            onChange={(e) => handleChange(e, data)}
            autoFocus
            fullWidth
          />
        </Editable>
      ))}
      <Button onClick={deleteItem} color="secondary">
        <DeleteIcon />
        Delete
      </Button>
    </div>
  );
};
