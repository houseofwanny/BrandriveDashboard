import { Box } from "@material-ui/core";
import React from "react";
import ProfitAndLoss from "../ProfitAndLoss";
// import DashboardImage from "../DashboardImage";
// import DashboardPieChartSection from '../DashboardPieChartSection';
import { useStyle } from "./MenuRight.style";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";

const MenuRight = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      {/* <DashboardImage /> */}
      <ProfitAndLoss
        Description="profit & loss"
        amount="#2,000,000.00"
        more="view more"
      />
      <PriceBreakdown />
    </Box>
  );
};

export default MenuRight;
