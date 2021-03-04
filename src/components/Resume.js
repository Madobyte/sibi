import React from "react";

/* Material UI */
import { Paper, Box } from "@material-ui/core";

/* Components */
import { Achievements } from "./Achievements";
import { Education } from "./Education";
import { Interests } from "./Interests";
import { PersonalInformation } from "./PersonalInformation";
import { Projects } from "./Projects";
import { TechnicalSkills } from "./TechnicalSkills";
import { TrainingsAndCertificates } from "./TrainingsAndCertificates";
import { WorkExperiences } from "./WorkExperiences";

function Resume() {
  return (
    <Box m={1}>
      <Paper elevation={3}>
        <Box p={1}>
          <PersonalInformation />
          <Projects />
          <WorkExperiences />
          <Education />
          <TrainingsAndCertificates />
          <Achievements />
          <TechnicalSkills />
          <Interests />
        </Box>
      </Paper>
    </Box>
  );
}

export default Resume;
