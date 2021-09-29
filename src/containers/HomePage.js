import React from "react";
import NavBar from "../components/Header/NavBar";
import ModelCard from "../components/ModelCard/ModelCard";
import ListModel from "../components/ListModel/ListModel";
import CardBlog from "../components/Card/CardBlog";
import { makeStyles } from "@material-ui/core/styles";
import imageBackgroundHeader from "../assets/img/imageBackgroundHeader.jpg";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import brandLogo from "../assets/img/brandLogo.jpg";
import SectionFooter from "../components/Footer/SectionFooter";

const useStyles = makeStyles((theme) => ({
   backgroundImage: {
      backgroundImage: `url(${imageBackgroundHeader})`,
      height: "53.7em",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      position: "center top",
   },
   cardBlog: {
      // width: "90%",
      margin: 'auto'
   }
}));

export default function HomePage() {
   const classes = useStyles();
   return (
      <div>
         <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.backgroundImage}>
               <NavBar />
            </GridItem>
         </GridContainer>
         <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
               <img style={{ width: '100%' }} src={brandLogo} />
            </GridItem>
         </GridContainer>
         <div className={classes.cardBlog}>
            <CardBlog />
         </div>
         {/* <ModelCard/> */}
         {/* <ListModel/> */}
         <SectionFooter />
      </div>
   );
}
