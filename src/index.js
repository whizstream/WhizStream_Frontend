import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// style
import "./styles/index.scss";

import { Provider } from "react-redux";
import store from "./store/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, orange, red } from "@mui/material/colors";

// light theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: red[500],
    },
  },
});
// dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
