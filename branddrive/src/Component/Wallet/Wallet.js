import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./Wallet.style";
import EyeIconShow from "../../brandDriveAssets/MOBILE APP/eye-password-show.svg";
import EyeIconHide from "../../brandDriveAssets/MOBILE APP/eye-password-hide.svg";
import WalletButtons from "../WalletButtons";

const Wallet = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="body1" className={classes.h1}>
          NGN wallet
        </Typography>
        <span>|</span>
        <Typography variant="body1" className={classes.h1}>
          USD wallet
        </Typography>
      </Box>
      <Box className={classes.main}>
        <Typography variant="paragraph" className={classes.figure}>
          $23,000,00
          <span className={classes.figureIconShow}>
            <img src={EyeIconShow} alt="" />
          </span>
          <span className={classes.figureIconHide}>
            <img src={EyeIconHide} alt="" />
          </span>
        </Typography>
        <Typography variant="paragraph" className={classes.walletMarge}>
          Manage Wallet
        </Typography>
        <WalletButtons/>
      </Box>
    </Box>
  );
};

export default Wallet;
