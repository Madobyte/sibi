import React from "react";

/* Material UI */
import { Paper, Box, Grid } from "@material-ui/core";

/* Components */
import { Achievements } from "./Achievements";
import { ContactInformation } from "./ContactInformation";
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
        <Box px={1} py={2}>
          <Grid container direction="column">
            {/* PERSONAL INFORMATION */}
            <Grid item xs={12}>
              <Box p={1}>
                <PersonalInformation />
              </Box>
            </Grid>
            <Grid item container xs={12}>
              <Grid item sm={12} md={6} lg={4}>
                <Box px={1}>
                  <Grid container>
                    <Grid item xs={12}>
                      {/* CONTACT INFORMATION */}
                      <ContactInformation />
                    </Grid>
                    <Grid item xs={12}>
                      {/* TECHNICAL SKILLS */}
                      <TechnicalSkills />
                    </Grid>
                    <Grid item xs={12}>
                      {/* INTERESTS*/}
                      <Interests />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={8}>
                <Box px={1}>
                  <Grid container>
                    <Grid item xs={12}>
                      {/* PROJECTS */}
                      <Projects />
                    </Grid>
                    <Grid item xs={12}>
                      {/* WORK EXPERIENCES */}
                      <WorkExperiences />
                    </Grid>
                    <Grid item xs={12}>
                      {/* EDUCATION */}
                      <Education />
                    </Grid>
                    <Grid item xs={12}>
                      {/* TRAININGS AND CERTIFICATES */}
                      <TrainingsAndCertificates />
                    </Grid>
                    <Grid item xs={12}>
                      {/* ACHIEVEMENTS */}
                      <Achievements />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}

export default Resume;
