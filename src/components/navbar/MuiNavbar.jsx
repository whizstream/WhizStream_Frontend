import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Tooltip from "@mui/material/Tooltip";

import { connect } from "react-redux";

const MuiNavbar = ({ auth }) => {
  const [username, setUsername] = React.useState("");

  const menuId = "primary-search-account-menu";

  React.useEffect(() => {
    setUsername(auth.userDetails?.username);
  }, [auth]);

  return (
    <Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <PlayCircleFilledIcon
              sx={{
                fontSize: 30,
              }}
            />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            WhizStream
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip title={<h1>{username}</h1>} arrow>
              <IconButton size="small" aria-controls={menuId} color="inherit">
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (auth) => {
  return {
    ...auth,
  };
};

export default connect(mapStateToProps)(MuiNavbar);
