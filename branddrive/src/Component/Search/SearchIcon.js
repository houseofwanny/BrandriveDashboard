import React from "react";
import { useStyle } from "./SearchIcon.style";
import img from "../../brandDriveAssets/ALL LANDING PAGES/search icon.svg";
import { Box } from "@material-ui/core";

const SearchIcon = () => {
  const classes = useStyle();
  return (
    <Box>
      <img className={classes.child} src={img} alt="search icon" />
    </Box>
  );
};

export default SearchIcon;
