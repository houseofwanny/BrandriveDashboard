import { Box } from "@material-ui/core";
import React from "react";
import LocationButton from "../LocationButton";
import RevenueLink from "../RevenueLink/RevenueLink";
import Wallet from "../Wallet";
// import RevenueGraph from "../RevenueGraph";
import { useStyle } from "./MenuLeft.style";

const MenuLeft = () => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      <Wallet />
      <LocationButton />
      <RevenueLink />
      {/* <RevenueGraph /> */}
    </Box>
  );
};

export default MenuLeft;
