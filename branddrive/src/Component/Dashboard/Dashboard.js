import { Box } from "@material-ui/core";
import React from "react";
import SideNav from "./components/SideNav";
import DashboardBody from "./components/DashboardBody";
import { useStyle } from "../Dashboard/Dashboard.style";

const Dashboard = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <SideNav />
      <DashboardBody />
    </Box>
  );
};

export default Dashboard;
