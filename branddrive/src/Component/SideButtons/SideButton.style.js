import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  allBtns: {
    borderRadius: "100px",
    width: 25,
    height: 25,
    margin: "15px 7px",
    border: ".5px solid grey",
  },
  lowerBtn: {
    marginBottom: 50,
    border: "none",
  },
  images: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
