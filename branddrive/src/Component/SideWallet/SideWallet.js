import { Box } from "@material-ui/core";
import React from "react";
import WalletItem from "../WalletItem";
import Wallet from "../Wallet";
import { useStyle } from "./SideWallet.style";
import LinkOffIcon from "@material-ui/icons/LinkOff";

const SideWallet = () => {
  const classes = useStyle();
  return (
    <Box className={classes.parent}>
      <Wallet className={classes.child1} />
      <WalletItem
        className={classes.child2}
        description="your wallet & bank account"
        number="0123456789"
        bank="Sterling bank"
      />
      <LinkOffIcon className={classes.LinkOffIcon}/>
    </Box>
  );
};

export default SideWallet;
