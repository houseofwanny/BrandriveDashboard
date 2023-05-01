import { Box, Typography } from "@material-ui/core";
import React from "react";
import { content } from "./content";
import { useStyle } from "./SideBarItem.style";

function SideBarItem() {
  const classes = useStyle();
  return (
    <Box>
      <Box>
        <Typography variant="paragraph" className={classes.topHeader}>
          Amstrong Enterprise
        </Typography>
      </Box>
      <Box>
        {content.map((section, index) => (
          <Box className={classes.root} key={index}>
            {section.map((item, index) =>
              item.type === "link" ? (
                <Typography
                  variant="paragraph"
                  key={index}
                  className={classes.child}
                >
                  {item.icon}
                  {item.text}
                </Typography>
              ) : (
                <Typography
                  variant="paragraph"
                  className={classes.header}
                  key={index}
                >
                  {item.text}
                </Typography>
              )
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SideBarItem;
