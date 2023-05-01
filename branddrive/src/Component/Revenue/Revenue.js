import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./Revenue.style";
// pieCart
const Revenue = ({ revenue, amount }) => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      <Box className={classes.children}>
        <Typography variant="paragraph" className={classes.child1}>
          {revenue}
        </Typography>
        <Typography variant="paragraph" className={classes.child2}>
          {amount}
        </Typography>
      </Box>
      <Box>
      pieCart
      </Box>
    </Box>
  );
};

export default Revenue;
