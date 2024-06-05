import React from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import CustomizedSnackbars from "./components/auth/CustomizedSnackbars";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="255, 46, 99"
        outerAlpha={0.4}
        innerScale={0.6}
        outerScale={0}
      />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <CustomizedSnackbars />
    </>
  );
};

export default App;
