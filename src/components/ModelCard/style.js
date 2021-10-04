import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    // backgroundImage: "url(" + "https://top-model.biz/wp-content/uploads/2019/12/topmodel_startseite_bg.jpg" + ")",
    width: "100%",
    height: "35em",
    backgroundSize: "cover",
    backgroundColor: " #ffffff",
    backgroundPosition: "55%",
    // marginTop: "3em",
   },

  //detail
  container: {
    display: "flex",
  },
  // left
  containImage: {
    // marginTop: "9em",
  },
  image: {
    width: "21.5em",
    marginRight: "-10em",
    position: "relative",
    right: "6em",
    left: "13em",
  },
  //right
  containDetail: {
    width: "30em",
    marginLeft: "35em",
    marginTop: "7.5em",
  },
  subDescription: {
    color: "#1a1919",
    fontWeight: "600",
    fontSize: 15,
  },
  containButton: {
    marginTop: "6em",
  },
  buttonProduct: {
    color: "black",
    fontWeight: "600 !important",
    backgroundColor: "#fff",
    padding: "0.8em !important",
    borderColor:'rgba(0,0,0,1)',
    "&:hover": {
      transform: "scale(1.127,1.127) ",
      color: "#fff",
      backgroundImage: "linear-gradient(to right, transparent -50%, #000000 90%)",
      transition: "all 0.6s linear",
      },
  },
}));
export default useStyles;
