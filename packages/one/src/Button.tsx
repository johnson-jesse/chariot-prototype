import React from "react";

import MuiButton from "@material-ui/core/Button";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  seed: 'one'
});

import {
  createTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

type One = { name: string } | null;
const INITIAL_ONE = { name: "foo" };
const OneContext = React.createContext<One>(null);

export function Button() {
  return (
    <StylesProvider generateClassName={generateClassName}>
    <ThemeProvider theme={theme} key="OneMfe">
      <OneContext.Provider value={INITIAL_ONE}>
        <div>
          <div>My Button</div>
          <MuiButton
            onClick={() => alert("hello world")}
            variant="contained"
            color="primary"
          >
            OneMfe Button
          </MuiButton>
        </div>
      </OneContext.Provider>
    </ThemeProvider>
    </StylesProvider>
  );
}
