import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import { motion } from "framer-motion";

// redux
import { connect } from "react-redux";

const Profile = ({ auth }) => {
  console.log(auth);
  const [profilePic, setProfilePic] = React.useState(
    "https://picsum.photos/id/1/200/300"
  );
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setName(auth.userDetails?.username);
    setEmail(auth.userDetails?.email);
    if (auth.userDetails?.profilePic) {
      setProfilePic(auth.userDetails?.profilePic);
    }
  }, [auth]);
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "calc(100%)",
        gap: "20px",
      }}
    >
      <Box>
        <motion.img
          src={profilePic}
          alt="Profile"
          style={{
            borderRadius: "20px",
            width: "350px",
            height: "350px",
            objectFit: "cover",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3">
          <Typography
            variant="h3"
            component="span"
            sx={{
              width: "20px",
            }}
          >
            Username
          </Typography>
          : {name}
        </Typography>
        <Typography variant="h3">
          <Typography variant="h3" component="span">
            Email
          </Typography>
          : {email}
        </Typography>
      </Box>
    </Stack>
  );
};

const mapStateToProps = (auth) => {
  return {
    ...auth,
  };
};

export default connect(mapStateToProps)(Profile);
