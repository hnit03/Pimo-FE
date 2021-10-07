import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
  primaryColor,
  primaryBoxShadow,
} from "../../../material-kit-pro-react.js";

import modalStyle from "../../../material-kit-pro-react/modalStyle.js";
import tooltipsStyle from "../../../material-kit-pro-react/tooltipsStyle.js";
import popoverStyles from "../../../material-kit-pro-react/popoverStyles.js";
import customCheckboxRadioSwitch from "../../../material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

const javascriptStyles = (theme) => ({
  container,
  description,
  cardTitle,
  mlAuto,
  mrAuto,
  ...tooltipsStyle,
  ...popoverStyles,
  ...modalStyle(theme),
  ...customCheckboxRadioSwitch,
  section: {
    padding: "70px 0 0",
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  icon: {
    width: "24px",
    height: "24px",
    color: grayColor[13],
  },
  label: {
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
  },
  textCenter: {
    textAlign: "center",
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + "  !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  socialLineButton: {
    "&, &:hover": { color: whiteColor },
    marginLeft: "5px",
    marginRight: "5px",
  },
  cardLoginHeader: {
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px",
  },
  cardLoginBody: {
    paddingTop: "0",
    paddingBottom: "0",
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  infoArea: {
    padding: "0px 0px 20px !important",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  selectLabel: {
   fontSize: "12px",
   textTransform: "uppercase",
   color: grayColor[1] + " !important",
   top: "8px",
 },
 selectMenu: {
   "& > div > ul": {
     border: "0",
     padding: "5px 0",
     margin: "0",
     boxShadow: "none",
     minWidth: "100%",
     borderRadius: "4px",
     boxSizing: "border-box",
     display: "block",
     fontSize: "14px",
     textAlign: "left",
     listStyle: "none",
     backgroundColor: whiteColor,
     backgroundClip: "padding-box",
   },
   "& $selectPaper $selectMenuItemSelectedMultiple": {
     backgroundColor: "inherit",
   },
 },
 selectPaper: {
   boxSizing: "borderBox",
   borderRadius: "4px",
   padding: "0",
   minWidth: "100%",
   display: "block",
   border: "0",
   boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
   backgroundClip: "padding-box",
   margin: "2px 0 0",
   fontSize: "14px",
   textAlign: "left",
   listStyle: "none",
   backgroundColor: "transparent",
   maxHeight: "266px",
 },
 select: {
   padding: "12px 0 7px",
   fontSize: ".75rem",
   fontWeight: "400",
   lineHeight: "1.42857",
   textDecoration: "none",
   textTransform: "uppercase",
   color: grayColor[1],
   letterSpacing: "0",
   "&:focus": {
     backgroundColor: "transparent",
   },
   "&[aria-owns] + input + svg": {
     transform: "rotate(180deg)",
   },
   "& + input + svg": {
     transition: "all 300ms linear",
   },
 },
 selectMenuItem: {
   fontSize: "13px",
   padding: "10px 20px",
   margin: "0 5px",
   borderRadius: "2px",
   transition: "all 150ms linear",
   display: "block",
   clear: "both",
   fontWeight: "400",
   lineHeight: "2",
   whiteSpace: "nowrap",
   color: grayColor[8],
   paddingRight: "30px",
   "&:hover": {
     backgroundColor: primaryColor[0],
     color: whiteColor,
     ...primaryBoxShadow,
   },
 },
 selectMenuItemSelectedMultiple: {
   "&:hover": {
     backgroundColor: primaryColor[0] + "!important",
     color: whiteColor,
     ...primaryBoxShadow,
     "&:after": {
       color: whiteColor,
     },
   },
   "&:after": {
     top: "16px",
     right: "12px",
     width: "12px",
     height: "5px",
     borderLeft: "2px solid currentColor",
     transform: "rotate(-45deg)",
     opacity: "1",
     color: grayColor[1],
     position: "absolute",
     content: "''",
     borderBottom: "2px solid currentColor",
     transition: "opacity 90ms cubic-bezier(0,0,.2,.1)",
   },
 },
});

export default javascriptStyles;
