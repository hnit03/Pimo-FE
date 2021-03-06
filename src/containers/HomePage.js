import React from "react";
import CardBlog from "../components/Card/CardBlog";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import brandLogo from "../assets/img/trustBy.png";
import android from "../assets/img/android.png"
import ios from "../assets/img/ios.jpg"
import SectionFooter from "../components/Footer/SectionFooter";
import background from '../assets/img/background1.jpg';
import Carousel1 from '../../src/components/modelInfoPage/SectionCarousel/SectionCarousel copy';




const useStyles = makeStyles((theme) => ({
   backgroundImage: {
      marginTop: "10%",
   },
   cardBlog: {
      margin: 'auto'
   },
   logo: {
      marginLeft: '21%'
   },
   slogan: {
      marginTop: '30%',
      fontSize: '2vw',
      maxWidth: '40%',
      textAlign: 'center',
      marginLeft: '17.7%'
   },
   carousel:{
      marginLeft:'38vh', 
      marginTop:'0rem',
   }
}));

export default function HomePage() {
   const classes = useStyles();
   document.body.style.backgroundImage = `url(${background})`;
   // var footer = document.querySelector('footer')
   // if(footer !== null) {footer.style = 'display: block'}
   
   return (
      <div>
         <div className={classes.slogan}>
            <p>Pimo - nền tảng kết nối người mẫu và nhãn hàng lớn nhất Việt Nam</p>
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
               </GridItem>
            </GridContainer>
            <div style={{textAlign: 'center'}}>
            <img width="60%" src={brandLogo} alt='' />
            </div>
            {/* <div className={classes.carousel}>
            <Carousel1 bool={true} />
            </div> */}
            <div className={classes.cardBlog}>
               <CardBlog />
            </div>
         </div>
         
         <SectionFooter />
      </div>
   );
}
