import React from "react";

/* Material UI */
import { Paper } from "@material-ui/core";

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
    <Paper elevation={3} m={2}>
      <PersonalInformation />
      <Projects />
      <WorkExperiences />
      <Education />
      <TrainingsAndCertificates />
      <Achievements />
      <TechnicalSkills />
      <Interests />
    </Paper>
  );
}

export default Resume;
