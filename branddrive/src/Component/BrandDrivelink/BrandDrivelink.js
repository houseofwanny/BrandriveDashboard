import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./BrandDrivelink.style";
import InsertLinkIcon from "@material-ui/icons/InsertLink";

const BrandDrivelink = () => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      <Typography variant="paragraph" className={classes.child}>
        branddrive/shop/<span className={classes.span}>mybusiness</span>
      </Typography>

      <Button
        variant="outlined"
        className={classes.btn}
        endIcon={<InsertLinkIcon className={classes.icon} />}
      >
        copy link
      </Button>
    </Box>
  );
};

export default BrandDrivelink;
