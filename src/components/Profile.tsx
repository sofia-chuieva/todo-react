import { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = ({ name }): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          marginBottom: "16px",
          bgcolor: "primary.main",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name.charAt(0).toUpperCase()}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="#979797">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};
