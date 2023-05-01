import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  parent: {
    wifth: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    padding: "3px 10px",
    textTransform: "capitalize",
    cursor: "pointer",
    color: "#293146",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#0A5FFF",
      color: "#FFFFFF",
    },
  },
});
