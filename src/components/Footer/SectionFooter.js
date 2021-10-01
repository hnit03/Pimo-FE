import React from "react";
// import useStyles from "./style";
import Footer from "./Footer";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import classNames from "classnames";
import Button from "../Button/Button";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import image from '../../assets/img/logo.png';
import qr from '../../assets/img/qr3.png'
import android from "../../assets/img/android.png"
import ios from "../../assets/img/ios.png"

const useStyles = makeStyles(styles);

export default function FooterHome() {
   const classes = useStyles();
   return (
      <Footer
         theme="while"
         content={

            <div style={{ fontSize: '20px' }} className={classNames(classes.pullCenter, classes.copyRight)}>
               421 Su Van Hanh, 12 Ward, 10 District, Ho Chi Minh City, 700000<br />
               Copyright &copy; {1900 + new Date().getYear()}{" "}
               <a
                  href="https://www.creative-tim.com?ref=mkpr-footer-components"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
               >
                  Pimo
               </a>{" "}
               All Rights Reserved.<br />
               Email: pimo.studio@gmail.com - Hotline: 091.3333.999
            </div>
         }
      >
         <div className={classes.footer}>
            <GridContainer >
               <GridItem xs={12} sm={2} md={2} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}  >
                  <img src={image} width='200vw' alt='' />
               </GridItem>
               <GridItem xs={12} sm={2} md={2} style={{ fontSize: '30px' }}>
                  <h5>About Us</h5>
                  <ul className={classes.linksVertical}>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Blog</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">About us</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Presentation</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Contact Us</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={2} md={2} style={{ fontSize: '30px' }}>
                  <h5>Market</h5>
                  <ul className={classes.linksVertical}>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Sales FAQ</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">How to register</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Sell goods</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Receive Payment</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Transactions issues</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Affiliates program</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={2} md={2} style={{ fontSize: '30px' }}>
                  <h5>Follow Us</h5>
                  <ul className={classes.socialButtons}>
                     <li>
                        <Button justIcon href="#pablo" color="twitter">
                           <TwitterIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon href="#pablo" color="facebook">
                           <FacebookIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon href="#pablo" color="youtube">
                           <YoutubeIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon href="#pablo" color="instagram">
                           <InstagramIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon href="#pablo" color="pinterest">
                           <PinterestIcon />
                        </Button>
                     </li>
                  </ul>
                  <h5 style={{ fontSize: '15px' }}>Numbers Don{"'"}t Lie</h5>
                  <h4 style={{ fontSize: '15px' }}>
                     721 <medium>Models</medium>
                  </h4>
                  <h4 style={{ fontSize: '15px' }}>
                     1.183 <medium>Brands</medium>
                  </h4>
               </GridItem>
               <GridItem xs={12} sm={4} md={4} style={{ fontSize: '30px' }} >
                  <h5>Download</h5>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '8%' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={qr} alt='' width='35%' />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%'  }}>
                           <a href="/#" onClick={(e) => e.preventDefault()}
                              style={{ marginTop: '5%'}}>
                              <img src={android} alt='' width='65%'/>
                           </a>
                           <a href="/#" onClick={(e) => e.preventDefault()} >
                              <img src={ios} alt='' width='65%' />
                           </a>
                        </div>
                     </div>
                  </div>
               </GridItem>
            </GridContainer>
         </div>
      </Footer>
   );
}