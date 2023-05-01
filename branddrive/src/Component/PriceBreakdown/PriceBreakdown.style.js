import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 50,
    textTransform: "capitalize",
    justifyContent: "space-between",
  },
  child1: {
    fontWeight: "bold",
    fontSize: 11,
    paddingBottom: 12,
  },
  child2: {
    textAlign: "right",
    fontSize: 11,
    paddingBottom: 12,
  },
  child3: {
    color: "f4f4f9",
    letterSpacing: 2,
  },
});
