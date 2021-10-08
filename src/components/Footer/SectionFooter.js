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
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const useStyles = makeStyles(styles);

export default function FooterHome() {
   const classes = useStyles();
   return (
      <Footer
         theme="while"
         content={

            <div style={{ fontSize: '20px' }} className={classNames(classes.pullCenter, classes.copyRight)}>
               421 Sư Vạn Hạnh, phường 12, quận 10, thành phố Hồ Chí Minh, 700000<br />
               Copyright &copy; {1900 + new Date().getYear()}{" "}
               <a
                  href="https://www.creative-tim.com?ref=mkpr-footer-components"
                  style={{ textDecoration: 'none' }}
               >
                  Pimo
               </a>{" "}
               All Rights Reserved.<br />
               <ul style={{marginTop: 0, textAlign: 'center'}}>
                  <li style={{ display: 'flex', justifyContent: 'center'}}>
                     <MailIcon /><span style={{marginRight: "10%"}}>: pimo.studio@gmail.com</span>
                     <CallIcon /><span >: 091.3333.999</span>
                  </li>
               </ul>
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
               {/* Email: pimo.studio@gmail.com - Đường dây nóng: 091.3333.999 */}
            </div>
         }
      >
         <div className={classes.footer}>
            <GridContainer >
               <GridItem xs={12} sm={3} md={3} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}  >
                  <img src={image} width='200vw' alt='' />
               </GridItem>
               <GridItem xs={12} sm={2} md={2} style={{ fontSize: '30px' }}>
                  <h5 >Về chúng tôi</h5>
                  <ul style={{ marginTop: 0}} className={classes.linksVertical}>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Giới thiệu</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Tuyển dụng</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Truyền thông</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Blog</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={3} md={3} style={{ fontSize: '30px' }}>
                  <h5>Hỗ trợ khách hàng</h5>
                  <ul style={{ marginTop: 0}} className={classes.linksVertical}>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Trung tâm trợ giúp</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Giao dịch an toàn</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Quy định cần biết</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Quy chế quyền riêng tư</a>
                     </li>
                     <li>
                        <a style={{ fontSize: '15px' }} href="#pablo">Liên hệ hỗ trợ</a>
                     </li>
                  </ul>
               </GridItem>
               <GridItem xs={12} sm={4} md={4} style={{ fontSize: '30px' }} >
                  <h5>Download</h5>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '8%' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={qr} alt='' width='35%' />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                           <a href="/#" onClick={(e) => e.preventDefault()}
                              style={{ marginTop: '5%' }}>
                              <img src={android} alt='' width='65%' />
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