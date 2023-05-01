import { Box } from "@material-ui/core";
import React from "react";
import BarChartSection from "../BarChartSection/BarChartSection";
import PriceBreakdown from "../PriceBreakdown";
import { useStyle } from "./DashboardExpenseBreakdown.style";

const ExpenseBreakdown = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <BarChartSection
        header="expense breakdown"
        amount="#3,500,00.00"
        more="view more"
      />
      <PriceBreakdown />
    </Box>
  );
};

export default ExpenseBreakdown;
