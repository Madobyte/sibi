import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" disabled>
          <MenuIcon />
        </IconButton>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <WorkIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ flex: 1 }}>
              SibiApp
            </Typography>
          </Grid>
        </Grid>
        <Button color="inherit" disabled>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
