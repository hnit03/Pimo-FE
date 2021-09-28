import React from "react";
import NavBar from "../components/Header/NavBar";
import ModelCard from "../components/ModelCard/ModelCard";
import ListModel from "../components/ListModel/ListModel";
import { makeStyles } from "@material-ui/core/styles";
import imageBackgroundHeader from "../assets/img/imageBackgroundHeader.jpg";
const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(${imageBackgroundHeader})`,
    width: "100%",
    height: "45.2em",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.backgroundImage}>
        <NavBar />
      </div>
      <ModelCard/>
      <ListModel/>
      </div>
  );
}
