import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Editable from "./Editable";

export const ContactInformation = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");

  return (
    <div className="contact-information">
      {/* Email Address */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Editable text={email || "enter_your@email.com"} type="text">
            <TextField
              variant="outlined"
              placeholder="enter_your@email.com"
              value={email}
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
      {/* Phone Number */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <PhoneAndroidIcon />
        </Grid>
        <Grid item>
          <Editable text={phoneNumber || "Phone number"} type="number">
            <TextField
              variant="outlined"
              placeholder="Phone number"
              value={phoneNumber}
              label="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
      {/* Residence */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item>
          <Editable text={residence || "Residence"} type="number">
            <TextField
              variant="outlined"
              placeholder="Residence"
              value={residence}
              label="Residence"
              onChange={(e) => setResidence(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
      {/* Website */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <LanguageIcon />
        </Grid>
        <Grid item>
          <Editable text={website || "Website / Portfolio"} type="number">
            <TextField
              variant="outlined"
              placeholder="Website / Portfolio"
              value={website}
              label="Website / Portfolio"
              onChange={(e) => setWebsite(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
      {/* LinkedIn */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <LinkedInIcon />
        </Grid>
        <Grid item>
          <Editable text={linkedIn || "LinkedIn"} type="number">
            <TextField
              variant="outlined"
              placeholder="LinkedIn"
              value={linkedIn}
              label="LinkedIn"
              onChange={(e) => setLinkedIn(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
      {/* GitHub */}
      <Grid container alignContent="center" spacing={1}>
        <Grid item>
          <GitHubIcon />
        </Grid>
        <Grid item>
          <Editable text={gitHub || "GitHub"} type="number">
            <TextField
              variant="outlined"
              placeholder="GitHub"
              value={gitHub}
              label="GitHub"
              onChange={(e) => setGitHub(e.target.value)}
              size="small"
              color="primary"
              autoFocus
              fullWidth
            ></TextField>
          </Editable>
        </Grid>
      </Grid>
    </div>
  );
};
