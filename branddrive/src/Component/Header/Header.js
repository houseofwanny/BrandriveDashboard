import React from 'react';
// import HeadLogo from '../HeadLogo';
import HeadButton from '../HeadButton';
// import HeadDropdown from '../HeadDropdown';
import { Box } from "@material-ui/core";
import {useStyle} from './Header.style'


 const Header = () => {
    const classes = useStyle();
    return (
        <Box className={classes.parent}>
            <HeadButton/>
        </Box >
    )
 }
export default Header