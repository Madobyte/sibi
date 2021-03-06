import React, { useState } from "react";
import { Card, CardHeader, IconButton, Box } from "@material-ui/core";
import FeedbackIcon from "@material-ui/icons/Feedback";
import CancelIcon from "@material-ui/icons/Cancel";

const Intructions = () => {
  const [instructions, setInstructions] = useState(true);

  const undisplayInstructions = () => {
    setInstructions(false);
  };

  return (
    instructions && (
      <Box m={1}>
        <Card>
          <CardHeader
            avatar={<FeedbackIcon />}
            action={
              <IconButton onClick={undisplayInstructions}>
                <CancelIcon color="secondary" />
              </IconButton>
            }
            title="Click on the text you wish to edit."
          />
        </Card>
      </Box>
    )
  );
};

export default Intructions;
