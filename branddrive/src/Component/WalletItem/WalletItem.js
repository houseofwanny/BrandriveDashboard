import React from "react"
import { Box, Typography } from '@material-ui/core'
import copyIcon from '../../brandDriveAssets/MENU ICONS/Payment Pages Icon.svg'

import { useStyle } from "./WalletItem.style"


const WalletItem = ({description, number,  bank} ) => {
     const classes =  useStyle();
    return (
      <Box className={classes.parent}>
        <Typography variant="paragraph" className={classes.child1}>
          {description}
        </Typography>
        <Typography variant="paragraph" className={classes.child2}>
          {number}

          <span className={classes.parentIcon}>
            <img className={classes.iconChild} src={copyIcon} alt="" />
          </span>
        </Typography>
        <Typography variant='paragraph' className={classes.child3}>
            {bank}
        </Typography>
      </Box>
    );
}

export default WalletItem;
