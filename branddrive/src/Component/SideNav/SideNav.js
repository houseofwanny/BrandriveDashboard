import React from "react";
import { useStyle } from "../SideNav/SideNav.style";
import SideBar from "../SideBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SideBarItem from "../SideBarItem/SideBarItem";
import SideBox from '../SideBox/SideBox'
import { Box } from "@material-ui/core";

const SideNav = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <SideBar />
      <SideBarItem />
      <ChevronLeftIcon className={classes.icon} />
    </Box>
  );
};

export default SideNav;
