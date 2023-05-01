import { Box } from "@material-ui/core";
import React from "react";
import MenuLeft from "../MenuLeft/MenuLeft";
import MenuRight from "../MenuRight/MenuRight";
import { useStyle } from "./Menu.style";

const Menu = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <MenuLeft />
      <MenuRight />
    </Box>
  );
};

export default Menu;
