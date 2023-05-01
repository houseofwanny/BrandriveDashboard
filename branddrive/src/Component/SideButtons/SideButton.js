import { Box } from "@material-ui/core";
import React from "react";
import { useStyle } from "./SideButton.style";

const SideButton = ({ image }) => {
  const classes = useStyle();
  return (
    <Box className={classes.allBtns}>
      <img className={classes.images} src={image} alt="images" />
    </Box>
  );
};

export default SideButton;
