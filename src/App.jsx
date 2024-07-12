import React, { useState } from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CustomizedSnackbars from "./components/CustomizedSnackbars";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Google from "./pages/Google";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "false" ? false : true;
  });
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "light" : "dark",
    },
  });

  React.useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/google" element={<Google />} />
          <Route
            path="/*"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
        </Routes>
      </Router>
      <CustomizedSnackbars />
    </ThemeProvider>
  );
};

export default App;
