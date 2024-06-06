import React, { useState } from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import CustomizedSnackbars from "./components/auth/CustomizedSnackbars";
import AnimatedCursor from "react-animated-cursor";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const [theme, setTheme] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "light" : "dark",
    },
  });

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/*"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="/video" element={<Video />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <CustomizedSnackbars />
    </ThemeProvider>
  );
};

export default App;
