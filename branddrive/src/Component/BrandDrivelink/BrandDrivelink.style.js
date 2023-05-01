import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  parent: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 20px",
    border: "1px dotted #000",
    color: "#011B60",
    alignItems: "center",
  },
  child: {
    margin: 0,
    fontSize: 20,
    letterSpacing: 1,
  },
  span: {
    fontWeight: "bold",
  },
  btn: {
    textTransform: "capitalize",
    backgroundColor: "#FD6820",
    color: "#FFF",
    border: "none",
    fontSize: 12,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#011B60",
    },
  },
  icon: {
    transform: "rotate(120deg)",
  },
});
