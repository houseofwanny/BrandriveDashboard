import { Box } from "@material-ui/core";
import React from "react";
import { useStyle } from "./WalletButtons.style";
import { btns } from "./content";

const WalletButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      {btns.map((item) => (
        <button className={classes.btn}>{item.title}</button>
      ))}
    </Box>
  );
};

export default WalletButton;
