import React, { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import Editable from "./Editable";

export const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("Jose");
  const [lastName, setLastName] = useState("Rizal");
  const [profession, setProfession] = useState("Ophthalmologist");
  const [blurb, setBlurb] = useState(
    "A Filipino nationalist and polymath during the tail end of the Spanish colonial period of the Philippines."
  );
  const inputRef = useRef();

  return (
    <div className="personal-information">
      <Editable
        text={firstName || "Jose"}
        childRef={inputRef}
        type="text"
        typography="h2"
        xs={6}
      >
        <TextField
          variant="outlined"
          ref={inputRef}
          placeholder="e.g. Jose"
          value={firstName}
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          size="small"
          color="primary"
          autoFocus
        />
      </Editable>
      <Editable
        text={lastName || "Rizal"}
        childRef={inputRef}
        type="text"
        typography="h2"
        xs={6}
      >
        <TextField
          variant="outlined"
          ref={inputRef}
          placeholder="e.g. Rizal"
          value={lastName}
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          size="small"
          color="primary"
          autoFocus
        />
      </Editable>
      <Editable
        text={profession || "Ophthalmologist"}
        childRef={inputRef}
        type="text"
      >
        <TextField
          variant="outlined"
          ref={inputRef}
          placeholder="e.g. Ophthalmologist"
          value={profession}
          label="Profession"
          onChange={(e) => setProfession(e.target.value)}
          size="small"
          color="primary"
          autoFocus
        />
      </Editable>
      <Editable
        text={
          blurb ||
          "A Filipino nationalist and polymath during the tail end of the Spanish colonial period of the Philippines."
        }
        childRef={inputRef}
        type="text"
      >
        <TextField
          variant="outlined"
          ref={inputRef}
          placeholder="Write a sentence or two describing your career objectives."
          value={blurb}
          multiline
          label="Career Objective"
          onChange={(e) => setBlurb(e.target.value)}
          size="small"
          color="primary"
          autoFocus
        />
      </Editable>
    </div>
  );
};
