import React from "react";
import { useLocation } from "react-router-dom";

import { Box, styled } from "@mui/material";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/Upload";
import CollectionsIcon from "@mui/icons-material/Collections";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { logout } from "../../utils/logout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

const MuiSidebar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const CustomListItem = styled(ListItem)({
    width: "95%",
    margin: "5px",
    borderRadius: "10px",
    "&:hover": {
      borderRadius: "10px",
      backgroundColor: (theme) => theme.palette.primary.light,
    },
  });

  // upload backdrop

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Home", "Upload", "Your Videos", "Profile"].map((text, index) => (
            <CustomListItem
              key={text}
              disablePadding
              sx={{
                backgroundColor:
                  location.pathname === "/" && index === 0
                    ? (theme) => theme.palette.primary.main
                    : location.pathname === "/upload" && index === 1
                    ? (theme) => theme.palette.primary.main
                    : location.pathname === "/yourvideos" && index === 2
                    ? (theme) => theme.palette.primary.main
                    : location.pathname === "/profile" && index === 3
                    ? (theme) => theme.palette.primary.main
                    : "transparent",
                "&:hover": {
                  borderRadius: "10px",
                  backgroundColor: (theme) => theme.palette.primary.light,
                },
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (index === 0) {
                    navigate("/");
                  } else if (index === 1) {
                    navigate("/upload");
                  } else if (index === 2) {
                    navigate("/yourvideos");
                  } else if (index === 3) {
                    navigate("/profile");
                  }
                }}
              >
                <ListItemIcon>
                  {index === 0 && <HomeIcon fontSize="large" />}
                  {index === 1 && <UploadIcon fontSize="large" />}
                  {index === 2 && <CollectionsIcon fontSize="large" />}
                  {index === 3 && <AccountCircleIcon fontSize="large" />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </CustomListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Typography variant="h6" style={{ marginLeft: "10px" }}>
            Subscriptions
          </Typography>
        </List>
        <Divider />
        <List>
          {theme ? (
            <CustomListItem disablePadding>
              <ListItemButton onClick={() => setTheme(false)}>
                <ListItemIcon>
                  <DarkModeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Dark Mode" />
              </ListItemButton>
            </CustomListItem>
          ) : (
            <CustomListItem disablePadding>
              <ListItemButton onClick={() => setTheme(true)}>
                <ListItemIcon>
                  <LightModeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Light Mode" />
              </ListItemButton>
            </CustomListItem>
          )}
          <CustomListItem disablePadding>
            <ListItemButton onClick={() => logout()}>
              <ListItemIcon>
                <LogoutIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </CustomListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MuiSidebar;
