import {
   container,
   coloredShadow,
   title,
   cardTitle,
   description,
   mlAuto,
   infoColor,
   whiteColor,
   roseColor,
   grayColor,
   hexToRgb,
 } from "../../../material-kit-pro-react.js";
 
 import imageStyles from "../../../material-kit-pro-react/imagesStyles";
 
 import rotatingCards from "../../../material-kit-pro-react/rotatingCards";
 
 const styles = {
   container,
   coloredShadow,
   title,
   mlAuto,
   cardTitle,
   ...imageStyles,
   ...rotatingCards,
   sectionGray: {
     background: grayColor[14],
   },
   vi:{
      marginTop:'-0.3rem !important',
      marginLeft:'0.2rem !important',
      marginBottom:'1rem !important'
   },
   sectionWhite: {
     background: whiteColor,
   },
   cardTitleAbsolute: {
     ...cardTitle,
     position: "absolute !important",
     bottom: "15px !important",
     left: "15px !important",
     color: whiteColor + " !important",
     fontSize: "1.125rem !important",
     textShadow:
       "0 2px 5px rgba(" + hexToRgb(grayColor[9]) + ", 0.5) !important",
   },
   cardTitleWhite: {
     "&, & a": {
       ...title,
       marginTop: ".625rem",
       marginBottom: "0",
       minHeight: "auto",
       color: whiteColor + " !important",
     },
   },
   cardCategory: {
      "& svg": {
       position: "relative",
       top: "8px",
     },
     //bonus
     fontSize: 22,
     fontWeight: "bold",
     color: "black",
   },
   cardCategorySocial: {
     marginTop: "10px",
     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
       fontSize: "22px",
       position: "relative",
       marginTop: "-4px",
       top: "2px",
       marginRight: "5px",
     },
     "& svg": {
       position: "relative",
       top: "5px",
     },
   },
   cardCategorySocialWhite: {
     marginTop: "10px",
     color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
       fontSize: "22px",
       position: "relative",
       marginTop: "-4px",
       top: "2px",
       marginRight: "5px",
     },
     "& svg": {
       position: "relative",
       top: "5px",
     },
   },
   cardCategoryWhite: {
     marginTop: "10px",
     color: "rgba(" + hexToRgb(whiteColor) + ", 0.7)",
   },
   cardCategoryFullWhite: {
     marginTop: "10px",
     color: whiteColor,
   },
   cardDescription: {
     ...description,
   },
   cardDescriptionWhite: {
     color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
   },
   author: {
     display: "inline-flex",
     "& a": {
       color: grayColor[1],
     },
   },
   authorWhite: {
     display: "inline-flex",
     "& a": {
       color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
     },
   },
   avatar: {
     width: "30px",
     height: "30px",
     overflow: "hidden",
     borderRadius: "50%",
     marginRight: "5px",
   },
   statsWhite: {
     color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
     display: "inline-flex",
     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
       position: "relative",
       top: "3px",
       marginRight: "3px",
       marginLeft: "3px",
       fontSize: "18px",
       lineHeight: "18px",
     },
     "& svg": {
       position: "relative",
       top: "3px",
       marginRight: "3px",
       marginLeft: "3px",
       width: "18px",
       height: "18px",
     },
   },
   stats: {
     color: grayColor[0],
     display: "flex",
     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
       position: "relative",
       top: "3px",
       marginRight: "3px",
       marginLeft: "3px",
       fontSize: "18px",
       lineHeight: "18px",
     },
     "& svg": {
       position: "relative",
       top: "3px",
       marginRight: "3px",
       marginLeft: "3px",
       width: "18px",
       height: "18px",
     },
   },
   justifyContentCenter: {
     WebkitBoxPack: "center !important",
     MsFlexPack: "center !important",
     justifyContent: "center !important",
   },
   iconWrapper: {
     color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
     margin: "10px auto 0",
     width: "130px",
     height: "130px",
     border: "1px solid " + grayColor[14],
     borderRadius: "50%",
     lineHeight: "174px",
     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
       fontSize: "55px",
       lineHeight: "55px",
     },
     "& svg": {
       width: "55px",
       height: "55px",
     },
   },
   iconWrapperColor: {
     borderColor: "rgba(" + hexToRgb(whiteColor) + ", 0.25)",
   },
   iconWhite: {
     color: whiteColor,
   },
   iconRose: {
     color: roseColor[0],
   },
   iconInfo: {
     color: infoColor[0],
   },
   marginTop30: {
     marginTop: "30px",
   },
   textCenter: {
     textAlign: "center",
   },
   marginBottom20: {
     marginBottom: "20px",
   },
   containerButton: {
     textAlign: "center",
     paddingBottom: "3em",
   },
   //custom
   //left
   containerFilterAndResult: {
     display: "flex",
     width: "100%",
     marginTop: "10em",
     borderTop: "2px solid #cfcfcf",
     
   },
   containerTextAndIconSearch: {
     display: "flex",
     justifyContent: "space-between",
     marginTop: "1rem"
   },
   searchIcon: {
     marginTop: "1rem",
     cursor: "pointer",
     fontSize:'2.2rem !important',
     '&:hover':{
       color:'#f64aa4a8'
     }
   },
   filterIcon:{
     fontSize:'2rem !important'
   },
   searchTextField: {
     width: "100%",
     "& label": {
       fontSize: "1.2em",
       color: "#cfcfcf",
     },
     
     //  "&:hover .MuiInput-input": {
     //   color: "pink"
     // },
     // "& .MuiInput-input": {
     //   color: "pink"
     // },
    
     "&:hover .MuiFormLabel-root": {
       color: "#f64aa4a8",
       
     },
     "&& .MuiInput-underline:hover:before": {
       borderBottomColor: "#f64aa4a8",
     },
     "& label.Mui-focused": {
       color: "white",
     },
     "& .MuiInput-underline:before": {
       borderBottomColor: "#cfcfcf",
     },
 
     "& .MuiInput-underline:after": {
       borderBottomColor: "#f64aa4a8",
     },
     
   },
   searchHeight:{
     "& label": {
       fontSize: "0.8em",
       color: "black",
     },
     "& label.Mui-focused": {
       color: "#f64aa4a8",
     },
     "&:hover .MuiFormLabel-root": {
       
       color: "#f64aa4a8",
       
     },
     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
       borderColor: "#cfcfcf"
     },
     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
       borderColor: "#f64aa4a8"
     },
     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
       borderColor: "#f64aa4a8"
     },
     // "& .MuiOutlinedInput-input": {
     //   color: "green"
     // },
     // "& .MuiInputLabel-outlined": {
     //   color: "green"
     // },
     "&:hover .MuiInputLabel-outlined": {
       color: "#f64aa4a8"
     },
     "& .MuiInputLabel-outlined.Mui-focused": {
       color: "#f64aa4a8"
     },
     '& input[type=number]::-webkit-inner-spin-button,& input[type=number]::-webkit-outer-spin-button ': {
         WebkitAppearance: 'none'
     }
   },
   
   containerTextFilterAndDelete: {
     display: "flex",
     justifyContent: "space-between",
     marginTop: "1rem"
   },
   filterText: {
     display: "flex",
     fontWeight: "500",
   },
   deleteButton: {
     marginTop: "-0.3rem",
     color: "#f64aa4a8",
     marginRight: "1.3rem",
     fontSize:'2.15rem !important',
     fontWeight: "bold",
     cursor: "pointer",
   },
   deleteText:{
     fontWeight:'bold',
     color:'#f64aa4a8',
     fontSize:'1.2rem !important',
     cursor: "pointer",
     marginRight:'1rem',
     marginTop:'0.13rem'

   },
   titleSearch: {
     margin: 0,
     fontSize: "1.25rem",
     marginTop: "0.7em",
     fontWeight: "500",
    
    },
   formControl: {
     marginLeft: "1em !important",
     marginTop: "0.3em !important",
   },
   containerRadioGroup:{
     marginTop:'0.5rem'
   },
   checkBox:{
    padding: '0 !important',
    marginBottom:'0.3rem !important',
    "&.Mui-checked": {
      color: "#f64aa4a8 !important",
    },
    },
   containerCheckBox:{
    marginLeft: "1.2rem" ,
    marginTop:'0.5rem'
   },
   customLabelCheckBox: {
     fontSize: "1rem",
     width: "10em",
     margin: 0,
     marginLeft:'0.6rem',
     color: '#4c4b4b'
   },
   customLabelRadio: {
    fontSize: "1rem",
    width: "10em",
    margin: 0,
    marginLeft: "0.6rem",
    color: "#4c4b4b",
  },
  customLabelRadio: {
    fontSize: "1rem",
    width: "13em",
    margin: 0,
    marginLeft: "0.1rem",
    color: "#4c4b4b",
  },
  containerViewMore: {
    listStyleType: "none",
    padding: 0,
    margin: "0.2em",
  },
  btnViewMore: {
    cursor: "pointer",
    color: "#f64aa4a8",
  },
  containerSearchHeight_Age: {
    display: "flex",
    marginTop: "1rem",
    marginBottom: "2.5rem",
  },
  dateTime:{
    
   
  },
  searchDateTime:{
    
    "& label": {
      fontSize: "0.8em",
      color: "black",
    },
    "& label.Mui-focused": {
      color: "#f64aa4a8",
    },
    "&:hover .MuiFormLabel-root": {
      color: "#f64aa4a8",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#cfcfcf",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f64aa4a8",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f64aa4a8",
    },
    // "& .MuiOutlinedInput-input": {
    //   color: "green"
    // },
    // "& .MuiInputLabel-outlined": {
    //   color: "green"
    // },
    "&:hover .MuiInputLabel-outlined": {
      color: "#f64aa4a8",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#f64aa4a8",
    },
   },
  customSlider:{
    '& .MuiSlider-track': {
     color:'pink'
    },
    '& .MuiSlider-thumb': {  
      backgroundColor: 'pink',
    },
    '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
    },
  },
  //right
  textSearchResult: {
    margin: 0,
    marginLeft: "1.5%",
    marginTop: "1.5%",
    color: "#f64aa4a8",
  },
  cardBody: {
    //  textAlign: "center",
      width: "80%",
    paddingBottom:0
   },
   textAddress:{
    marginTop: 0,
     marginBottom: 0 ,
     color: '#4c4b4b',
     fontSize:'1rem',
     marginLeft:'0.3rem'
   },
   textMeasurements:{
    marginTop: '0.3rem',
    color: '#4c4b4b',
    fontSize:'1rem',
    marginBottom:'0.7rem'

   },
   //Brnad-info
   logoBrand:{
    objectFit: 'cover',
    objectPosition: '50% 10%',
    width: '10rem',
    float: 'right',
    height: '10rem',
    borderRadius: '50%',
    marginBottom: '4%',
    marginTop: '-2.5rem',
    marginRight: '0',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
   },
   
  
  };
 
 export default styles;
 