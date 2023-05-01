
import { Box } from "@material-ui/core";
import React from "react";
import SideButton from "../SideButtons/SideButton";
import { business } from "./constent";
import { business2 } from "./constent";
import { useStyle } from "./SideBar.style";

const SideBar = () => {
  const classes = useStyle();
  // const [isExpanded, setExpandedState] = useState(false);
  return (
    <Box className={classes.root}>
    <Box className={classes.upperBtn}>
        {business.map((item) => (
          <SideButton image={item?.icon} />
        ))}
      </Box>
      <Box className={classes.lowerBtn}>
        {business2.map((item) => (
          <SideButton image={item?.icon} />
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
