import { Box, Typography } from "@material-ui/core";
import { useStyle } from "./HeadDropdown.style";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SettingsCellOutlinedIcon from "@material-ui/icons/SettingsCellOutlined";





const HeadDropdown = () => {
    const classes = useStyle();
    return (
      <Box className={classes.root}>
        <SettingsCellOutlinedIcon/>
        <Typography variant="paragraph" className={classes.child}>
          {" "}
          Lagos Mainland <span>HQ</span>
        </Typography>
        <Typography variant="paragraph" className={classes.child2}>
          {" "}
          HQ
        </Typography>
        <ExpandMoreOutlinedIcon />
      </Box>
    );
}

export default HeadDropdown;