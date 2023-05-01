import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  root: {
    width: "100%",
    color: "#011B60",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    textTransform: "uppercase",
  },
  h1: {
    fontSize: 14,
    fontWeight: "500",
    wordSpacing: 5,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4F5F9",
    padding: "30px 20px 20px 20px",
  },
  figure: {
    fontSize: 30,
    fontWeight: "bolder",
    letterSpacing: 1.2,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  walletMarge: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
    textDecoration: "underline",
    color: "#FD6820",
    paddingBottom: 20,
  },
  figureIconShow: {
    display: "flex",
  },

  figureIconHide: {
    display: "none",
    textAlign: "center"
  },
});