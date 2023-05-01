import { Box } from "@material-ui/core";
import React from "react";
import BrandDrivelink from "../BrandDrivelink";
import Revenue from "../Revenue";
import { useStyle } from "./RevenueLink.style";

const RevenueLink = () => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      <Revenue revenue="revenue goal" amount="$2,000,000.00" />
      <BrandDrivelink />
    </Box>
  );
};

export default RevenueLink;
