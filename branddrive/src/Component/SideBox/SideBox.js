import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { blue, red } from "@material-ui/core/colors";
import PercentageRangeSlider from "./Progress";
// import Button from '@mui/joy/Button';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    color: "success.main",
  },

}));

const message = ` `;

export default function SideBox() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      boxShadow={6}
      bgcolor="warning.main"
      style={{ width: "12rem", height: "3rem" }}
      p={1}
      m={1}
      marginLeft={1}
      marginRight={1}
    >
      <Paper className={classes.paper} bgcolor="warning.main">
        {/* <Grid item></Grid> */}
        <Grid item xs zeroMinWidth>
          <Typography noWrap bgcolor="warning.main" position="relative">
            {message}
            {/* <PercentageRangeSlider /> */}
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
}


