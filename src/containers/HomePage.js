import React from "react";
import NavBar from "../components/Header/NavBar";
import CardBlog from "../components/Card/CardBlog";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import brandLogo from "../assets/img/logoBrand.png";
import android from "../assets/img/android.png"
import ios from "../assets/img/ios.jpg"
import SectionFooter from "../components/Footer/SectionFooter";

const useStyles = makeStyles((theme) => ({
   backgroundImage: {
      marginTop: "10%",
   },
   cardBlog: {
      margin: 'auto'
   },
   logo: {
      // marginTop: '37%',
      marginLeft: '21%'
   },
   slogan: {
      marginTop: '30%',
      fontSize: '1.5vw',
      maxWidth: '30%',
      textAlign: 'center',
      marginLeft: '22.6%'
   }
}));

export default function HomePage() {
   const classes = useStyles();
   return (
      <div>
         <div className={classes.slogan}>
            <p>Pimo - the largest platform to connect models and brands in Viet Nam</p>
         </div>
         <div className={classes.logo}>
            <a href="/#" onClick={(e) => e.preventDefault()}
               style={{ marginRight: '3%' }}>
               <img
                  width="20%"
                  src={android}
                  alt=''
               />
            </a>
            <a href="/#" onClick={(e) => e.preventDefault()}>
               <img
                  width="20%"
                  src={ios}
                  href="/#"
                  alt=''
               />
            </a>
         </div>
         <div className={classes.backgroundImage}>
            <GridContainer>
               <GridItem xs={12} sm={12} md={12}>
                  <NavBar />
               </GridItem>
            </GridContainer>
            <img width="100%" src={brandLogo} alt='' />
            <div className={classes.cardBlog}>
               <CardBlog />
            </div>
            {/* <ModelCard/> */}
            {/* <ListModel/> */}
            <SectionFooter />
         </div>
      </div>
   );
}
