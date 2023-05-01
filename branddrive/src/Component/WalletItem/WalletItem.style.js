import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  parent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textTransform: "capitalize",
    color: "#011B60",
    fontSize: 20,
  },
  child2: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 0,
    display: "flex",
    gap: 50,
  },
  child3: {
    margin: 0,
  },
  parentIcon: {
    backgroundColor: "#FD6820",
    borderRadius: 90,
    display: "flex",
    // transform: "rotate(120deg)",
    fontSize: 10,
    cursor: "pointer",
  },
  iconChild: {
    width: 30,
  },
});
