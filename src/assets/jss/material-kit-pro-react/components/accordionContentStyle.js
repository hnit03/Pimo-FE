import {
   primaryColor,
   secondaryColor,
   warningColor,
   dangerColor,
   successColor,
   infoColor,
   roseColor,
   grayColor,
} from "../../material-kit-pro-react.js";

import { makeStyles } from "@material-ui/core/styles";
import img from '../../../img/download.png';

const useStyles = makeStyles((theme) => ({
   titleAccordion: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: 'pink',
      padding: 0,
      margin: 0,
      fontStyle: 'italic',

   },
   question: {
      fontSize: '1.6rem',
      fontWeight: '700',
      marginTop: 0,
      paddingLeft: '1rem',
   },
   answer: {
      fontSize: '1.2rem',
      marginBottom: 0,
      paddingLeft: '2.7rem',
      marginTop: '-1.5rem'
   },
   logo: {
      marginLeft: '15.3%'
   },
   slogan: {
      fontSize: '1.5vw',
      maxWidth: '40%',
      textAlign: 'center',
      marginLeft: '15.1%'
   },
   h1:{
      textAlign:'center',
      marginTop:'-1rem',
      fontSize:'3rem'
   },
   background: {
      backgroundImage: `url(${img})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '40vh',
      marginBottom: 0,
      paddingBottom: 0,
      paddingTop: '27%'
   },
   text: {
      position: 'absolute',
      marginTop: '27%',
      marginLeft: '10%',
      fontSize: '1.3rem',
      width: '50%',
      textAlign: 'center',
   },
   p:{
      marginTop:'1rem',
      fontSize:'1.5rem',
      marginLeft:'-1.5rem'
   },
   root: {
      flexGrow: 1,
      marginBottom: "20px",
   },
   accordion: {
      boxShadow: "none",
      "&:before": {
         display: "none !important",
      },
   },
   accordionExpanded: {
      margin: "0 !important",
   },
   accordionSummary: {
      minHeight: "auto !important",
      backgroundColor: "transparent",
      borderBottom: "1px solid " + grayColor[6],
      padding: "25px 10px 5px 0px",
      borderTopLeftRadius: "3px",
      borderTopRightRadius: "3px",
      color: grayColor[1],
   },
   primaryAccordionSummary: {
      "&:hover": {
         color: primaryColor[0],
      },
   },
   secondaryAccordionSummary: {
      "&:hover": {
         color: secondaryColor[0],
      },
   },
   warningAccordionSummary: {
      "&:hover": {
         color: warningColor[0],
      },
   },
   dangerAccordionSummary: {
      "&:hover": {
         color: dangerColor[0],
      },
   },
   successAccordionSummary: {
      "&:hover": {
         color: successColor[0],
      },
   },
   infoAccordionSummary: {
      "&:hover": {
         color: infoColor[0],
      },
   },
   roseAccordionSummary: {
      "&:hover": {
         color: roseColor[0],
      },
   },
   accordionSummaryExpaned: {
      "& $accordionSummaryExpandIcon": {
         [theme.breakpoints.up("md")]: {
            top: "auto !important",
         },
         transform: "rotate(180deg)",
         [theme.breakpoints.down("sm")]: {
            top: "10px !important",
         },
         // some jss/css to make the cards look a bit better on Internet Explorer
         "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
            display: "inline-block !important",
            top: "10px !important",
         },
      },
   },
   primaryAccordionSummaryExpaned: {
      color: primaryColor[0],
   },
   secondaryAccordionSummaryExpaned: {
      color: secondaryColor[0],
   },
   warningAccordionSummaryExpaned: {
      color: warningColor[0],
   },
   dangerAccordionSummaryExpaned: {
      color: dangerColor[0],
   },
   successAccordionSummaryExpaned: {
      color: successColor[0],
   },
   infoAccordionSummaryExpaned: {
      color: infoColor[0],
   },
   roseAccordionSummaryExpaned: {
      color: roseColor[0],
   },
   accordionSummaryContent: {
      margin: "0 !important",
   },
   accordionSummaryExpandIcon: {
      [theme.breakpoints.up("md")]: {
         top: "auto !important",
      },
      transform: "rotate(0deg)",
      color: "inherit",
      right: "10px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
         top: "10px !important",
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
         display: "inline-block !important",
      },
   },
   accordionSummaryExpandIconExpanded: {},
   title: {
      fontSize: "15px",
      fontWeight: "bolder",
      marginTop: "0",
      marginBottom: "0",
      color: "inherit",
   },
   accordionDetails: {
      display: "block",
      padding: "15px 0px 5px",
      fontSize: ".875rem",
   },
}));

export default useStyles;
