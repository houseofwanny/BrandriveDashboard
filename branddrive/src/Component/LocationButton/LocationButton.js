import { Box } from "@material-ui/core";
import React from "react";
import DataButton from "../DataButton";
import HeadDropdown from "../HeadDropdown";
import { useStyle } from "./LocationButton.style";

const LocationButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <HeadDropdown />
      <DataButton />
    </Box>
  );
};

export default LocationButton;
