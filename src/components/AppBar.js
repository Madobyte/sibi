import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";
import { useAuth0 } from "@auth0/auth0-react";

const TopBar = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

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
        {isAuthenticated ? (
          <>
            <Box m={1}>
              <Button
                color="inherit"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </Button>
            </Box>
            <Avatar src={user.picture} />
          </>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <Button color="inherit" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
