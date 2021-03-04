import React from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TopBar from "./components/AppBar";
import Resume from "./components/Resume";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <TopBar />
      <Grid container>
        <Grid item xs={false} sm={1} md={2} lg={3} />
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Resume />
        </Grid>
        <Grid item xs={false} sm={1} md={2} lg={3} />
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
