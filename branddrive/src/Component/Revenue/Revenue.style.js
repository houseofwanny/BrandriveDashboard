import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
 parent: {
    width: "40%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "5px 20px",
    border: "1px dotted #000",
    textTransform: "capitalize",
    fontWeight: "bold",
    alignItems: "center",
  },
  children: {
    color: "#011B60",
  },
  child1: {
    fontSize: 14,
    display: "block",
    marginBottom: 4,
  },
  child2: {
    fontSize: 25,
    margin: 0,
  },
  pieChart: {
    width: 50,
    height: 50,
  },
});
