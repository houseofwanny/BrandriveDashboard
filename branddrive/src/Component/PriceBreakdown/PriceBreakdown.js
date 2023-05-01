import { Box, Typography } from "@material-ui/core";
import React from "react";
import { prices } from "./content";
import { items } from "./content.js";
import { useStyle } from "./PriceBreakdown.style";
import { dot } from "./content";

const PricesBreakdown = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box>
        {prices.map((prices) => (
          <Typography variant="body1" className={classes.child1}>
            {prices.prices}
          </Typography>
        ))}
      </Box>
      <Box>
        {dot.map((dot) => (
          <Typography variant="body1" className={classes.child3}>
            {dot.dot}
          </Typography>
        ))}
      </Box>
      <Box>
        {items.map((item) => (
          <Typography variant="body1" className={classes.child2}>
            {item.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PricesBreakdown;
