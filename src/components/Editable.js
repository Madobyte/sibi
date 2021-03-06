import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";

const Editable = ({
  text,
  type,
  placeholder,
  children,
  childRef,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event, type) => {};

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <Grid item xs={props.xs} onClick={() => setEditing(true)}>
          {/* <span>{text || placeholder || "Editable content"}</span> */}
          <Typography
            variant={props.typography || "body1"}
            color={
              type === "content" || type === "subheader"
                ? "textSecondary"
                : "textPrimary"
            }
          >
            {text || placeholder || "Editable content"}
          </Typography>
        </Grid>
      )}
    </section>
  );
};

export default Editable;
