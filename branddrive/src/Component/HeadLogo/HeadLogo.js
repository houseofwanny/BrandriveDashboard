import { Box } from '@material-ui/core'
import React from 'react'
import Logo from '../../brandDriveAssets/BRANDING-ASSETS/brand-drive logo-01.svg'
import { useStyle } from '../HeadLogo/HeadLogo.style'

const HeadLogo = () => {
    const classes = useStyle();
  return (
    <Box>
      <img className={classes.child} src={Logo} alt="Logo" />
    </Box>
  )
}

export default HeadLogo