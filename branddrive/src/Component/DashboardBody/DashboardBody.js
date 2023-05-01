import { Box } from "@material-ui/core";
import React from "react";
import AppBar from "../AppBar";
import Menu from "../Menu";
import { useStyle } from "./DashboardBody.style";

const DashboardBody = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <AppBar />
      <Menu />
    </Box>
  );
};

export default DashboardBody;
