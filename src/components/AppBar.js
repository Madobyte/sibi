import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function TopBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" disabled>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            CV Generator
          </Typography>
          <Button color="inherit" disabled>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;
