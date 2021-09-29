import React from "react";
// import useStyles from "./style";
import Footer from "./Footer";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import classNames from "classnames";
import Button from "../Button/Button";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, } from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles(styles);

export default function FooterHome() {
   const classes = useStyles();
   return (
      <Footer
         theme="while"
         content={
            <div className={classNames(classes.pullCenter, classes.copyRight)}>
               Copyright &copy; {1900 + new Date().getYear()}{" "}
               <a
                  href="https://www.creative-tim.com?ref=mkpr-footer-components"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
               >
                  Creative Tim
               </a>{" "}
               All Rights Reserved.
            </div>
         }
      >
         <div className={classes.footer}>
            <GridContainer style={{ marginLeft: '10.5%' }}>
               <GridItem xs={12} sm={2} md={2}>
                  <h5>About Us</h5>
                  <ul className={classes.linksVertical}>
                     <li>
                        <a href="#pablo">Blog</a>
                     </li>
                     <li>
                        <a href="#pablo">About us</a>
                     </li>
                     <li>
                        <a href="#pablo">Presentation</a>
                     </li>
                     <li>
                        <a href="#pablo">Contact Us</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={2} md={2}>
                  <h5>Market</h5>
                  <ul className={classes.linksVertical}>
                     <li>
                        <a href="#pablo">Sales FAQ</a>
                     </li>
                     <li>
                        <a href="#pablo">How to register</a>
                     </li>
                     <li>
                        <a href="#pablo">Sell goods</a>
                     </li>
                     <li>
                        <a href="#pablo">Receive Payment</a>
                     </li>
                     <li>
                        <a href="#pablo">Transactions issues</a>
                     </li>
                     <li>
                        <a href="#pablo">Affiliates program</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={4} md={4}>
                  <h5>Social Feed</h5>
                  <div className={classes.socialFeed}>
                     <div>
                        <p>
                           How to handle ethical disagreements with your clients.
                        </p>
                     </div>

                     <div>
                        <p>
                           The tangible benefits of designing at 1x pixel density.
                        </p>
                     </div>
                     <div>
                        <p>
                           A collection of 25 stunning sites that you can use for
                           inspiration.
                        </p>
                     </div>
                  </div>
               </GridItem>
               <GridItem xs={12} sm={4} md={4} >
                  <h5>Follow Us</h5>
                  <ul className={classes.socialButtons}>
                     <li>
                        <Button justIcon simple href="#pablo" color="twitter">
                           <TwitterIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon simple href="#pablo" color="facebook">
                           <FacebookIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon simple href="#pablo" color="dribbble">
                           <FacebookIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon simple href="#pablo" color="google">
                           <FacebookIcon />
                        </Button>
                     </li>
                     <li>
                        <Button justIcon simple href="#pablo" color="instagram">
                           <GoogleIcon />
                           {/* <FontAwesomeIcon icon={faGooglePlusG}/> */}
                        </Button>
                     </li>
                  </ul>
                  <h5>Numbers Don{"'"}t Lie</h5>
                  <h4>
                     14.521 <small>Freelancers</small>
                  </h4>
                  <h4>
                     1.423.183 <small>Transactions</small>
                  </h4>
               </GridItem>
            </GridContainer>
         </div>
      </Footer>
   );
}