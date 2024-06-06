import React from "react";
import Box from "@mui/material/Box";
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
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";

import { logout } from "../../utils/logout";

const drawerWidth = 240;

const MuiSidebar = ({ theme, setTheme }) => {
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
          {["Home", "Upload", "Saved Videos", "Your Videos", "Profile"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeIcon fontSize="large" />}
                    {index === 1 && <UploadIcon fontSize="large" />}
                    {index === 2 && <VideoLibraryIcon fontSize="large" />}
                    {index === 3 && <CollectionsIcon fontSize="large" />}
                    {index === 4 && <LogoutIcon fontSize="large" />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
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
            <ListItem disablePadding>
              <ListItemButton onClick={() => setTheme(false)}>
                <ListItemIcon>
                  <DarkModeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Dark Mode" />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={() => setTheme(true)}>
                <ListItemIcon>
                  <LightModeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Light Mode" />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemButton onClick={() => logout()}>
              <ListItemIcon>
                <LogoutIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MuiSidebar;
