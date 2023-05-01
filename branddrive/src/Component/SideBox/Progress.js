// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function LinearProgressWithLabel(props) {
//   return (
//     <Box display="flex" alignItems="center">
//       <Box width="100%" mr={1}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box minWidth={35}>
//         <Typography variant="body2" color="warning.dark">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// LinearProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and buffer variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
// });

// export default function LinearWithValueLabel() {
//   const classes = useStyles();
//   const [progress, setProgress] = React.useState(10);

//   // React.useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//   //   }, 800);
//   //   return () => {
//   //     clearInterval(timer);
//   //   };
//   // }, []);

//   return (
//     <div className={classes.root}>
//       <LinearProgressWithLabel value={progress} />
//     </div>
//   );
// }
import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles} from "@material-ui/core";

const marks = [
  {
    value: 0,
    label: "100%",
  },
  
];

const useStyles = makeStyles({
  root: {
    color: "#3f51b5",
    height: 4,
    padding: "13px 0",
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  
  valueLabel: {
    top: -22,
    left: "calc(-50% + 4px)",
    fontSize: "0.8rem",
    backgroundColor: "#3f51b5",
    padding: 4,
    borderRadius: 4,
  },
  mark: {
    display: "none",
  },
  markLabel: {
    top: 26,
    fontSize: "0.8rem",
  },
});

function PercentageRangeSlider() {
  const [value, setValue] = useState();

  return (
    <div>
      <Slider
        value={value}
        onChange={(value, newValue) => {
          setValue(newValue);
        }}
        valueLabelDisplay="on"
        marks={marks}
      />
      
    </div>
  );
}

export default PercentageRangeSlider;
