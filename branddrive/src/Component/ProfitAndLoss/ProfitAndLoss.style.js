import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  parent: {
    background: "#FFFFFF",
    width: "100%",
    // height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "20px 10px",
    border: "1px dotted #000",
    color: "#011B60",
  },
  chart: {
    width: 50,
    height: 50,
  },
  child1: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 14,
    color: "#011B60",
    marginBottom: 5,
  },
  child2: {
    fontSize: 12,
    marginBottom: 5,
  },
  subChild2: {
    display: "inline-block",
  },
  child3: {
    fontWeight: "bold",
    fontSize: 22,
  },
  child4: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#FD6820",
    fontWeight: "bold",
    textDecoration: "underline",
  },
});
