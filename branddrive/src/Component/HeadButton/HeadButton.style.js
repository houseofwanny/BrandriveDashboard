import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
  btn: {
    textTransform: "capitalize",
    backgroundColor: "#B0F0B5",
    border: 0,
    color: "#000",
  },
  text: {
    margin: 0,
    color: "#011B60",
    fontWeight: "bold",
    fontSize: 14,
    padding: "0 5px",
  },
});
