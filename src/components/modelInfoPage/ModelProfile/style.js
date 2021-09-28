import { makeStyles } from "@material-ui/core/styles";
// import {
//     title,
//   } from "../../assets/jss/material-kit-pro-react.js";
const useStyles = makeStyles((theme) => ({
  cover_image_Style: {
    width: '97%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '0.5rem',
    margin: '1rem',
    marginBottom: 0,
  },
  avatar_image_Style: {
    width: '30%',
    float: 'left',
    borderRadius: '0.5rem',
    margin: '1rem',
    marginLeft: '1.3rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  title: {
    margin: 0,
    marginLeft:0,
    textAlign: 'left',
    fontSize: '5.5rem',
    fontFamily: "Calibri, sans-serif",
    
  },
  text: {
    textAlign: 'left', 
    color: 'gray',
    float: 'left',
    fontSize: '1rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
  },
  textTime_Style:{
    color: 'rgb(24, 112, 243)',
    float: 'left',
    fontSize: '0.9rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    marginBottom:'0.2rem'
  },
  textLocation: {
    color: 'gray',
    float: 'left',
    fontSize: '1rem',
    textDecoration: "none",
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    marginBottom: '1rem',
    textAlign: 'left',
  },
  model_info_Style: {
    // backgroundColor:'pink',
    float: 'left',
    width: '62%',
    margin: '1rem',
    padding: '1rem',
    paddingBottom:0,
    marginBottom:'0',
  },
  location_icon_Style: {
    marginTop: '0.5rem',
    color: 'red',
    width: '5%',
  },
  location_Style: {
    float: 'left',
    fontSize: '1rem',
    textDecoration: "none",
    marginTop: '1rem',

  },
  divider_Style: {
    marginTop: '5rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    fontSize: '1rem'
  },
  div_text: {
    width: '100%',
  },
  travelNotices_out_Style:{
    margin:'auto',
    float:'left',
    width:'91%',
    height:'4.1rem',
    marginTop:'10px',
    marginBottom:'1rem',
    marginRight:0,
    paddingBottom: '2rem',
  },
  travelNotices_Style: {
    margin:'auto',
    float:'left',
    width:'100%',
    marginTop:'5px',
    padding:'1rem',
    textAlign:'left',
    marginRight:0,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '0.35rem',
    transition: '0.4s',
    //backgroundColor:'pink',
    "&:hover": {
      background: 'pink',
      marginTop: '0px',
      transition: '0.4s',
    },
    //backgroundColor:'pink'
  },
  travelName_Style:{
    float: 'left',
    fontSize: '1.1rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    fontWeight:'800',
    marginBottom:'0.2rem',
  },
  travelType_Style:{
    float: 'left',
    fontSize: '1.2rem',
    fontFamily: "Calibri, sans-serif",
    fontWeight:'800',
    color:'red',
    marginRight:'0.2rem'
  },
  location_icon_small_Style:{
    color: 'red',
    fontSize:'0.9rem',

  },
  travelNotices_div_Style:{
    float:'left',
    display:'inline-block',
    width:'30%',
    height:'1000px',
    marginLeft:'1.3rem',
  },
  textLocation_Style:{
    color: 'gray',
    float: 'left',
    fontSize: '0.9rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    marginTop:'0.1rem'
  },
  ul:{
    float:'left',
    marginLeft:0,
    padding:0,
    width:'100%',
  
  }
  ,
  icon:{
    marginTop:0,
    color:'red',
  },
  abc:{
    marginTop:'2px',
  },
  li:{
    marginBottom: '0.5rem',
  },
  tab_Style:{
    width: '62%',
    float:'left',
    //backgroundColor:'pink',
    marginLeft:'2rem',
  }
}
));
export default useStyles;