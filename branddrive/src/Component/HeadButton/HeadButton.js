import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./HeadButton.style";
import AirplanemodeActiveOutlinedIcon from "@material-ui/icons/AirplanemodeActiveOutlined";
import SearchIcon from "../Search";
import FlareIcon from "@material-ui/icons/Flare";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import HeadLogo from "../HeadLogo";

const HeadButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Button
        variant="contained"
        size="small"
        className={classes.btn}
        endIcon={<AirplanemodeActiveOutlinedIcon color="primary" />}
      >
        <Typography variant="paragraph" className={classes.text}>
          upgrade plan
        </Typography>
      </Button>
      <SearchIcon />
      <FlareIcon />
      <ToggleOffIcon />
      <HeadLogo />
    </Box>
  );
};

export default HeadButton;
