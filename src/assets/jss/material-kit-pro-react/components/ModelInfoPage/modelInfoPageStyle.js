import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar_image_Style: {
    width: '100%',
    float: 'left',
    borderRadius: '0.5rem',
    margin: '2.5%',
    marginBottom: '4%',
    marginTop:'-20vh',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  innerBox: {
   // background: 'white !important',
        margin: 'auto',
        width: '75rem',
        //boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        //paddingBottom:'10vh',
        marginTop:'-2rem'
  },
  
  model_info_Style: {
    // backgroundColor:'pink',
    float: 'left',
    width: '100%',
    margin: '1rem',
    padding: '1rem',
    paddingBottom: 0,
    marginBottom: '0',
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
 
  
  abc: {
    marginTop: '2px',
  },
  li: {
    marginBottom: '0.5rem',
  },
  tab_Style: {
    width: '62%',
    float: 'left',
    //backgroundColor:'pink',
    marginLeft: '2rem',
  },
  travelNotices_div_Style: {
    float: 'left',
    display: 'inline-block',
    width: '100%',
    marginLeft: '3%',
},
  pageLeft_Style:{
    margin:'0',
    paddingLeft: '0.5%',
    //backgroundColor:'pink',
    width:'100%',
  },
  textLocation_Style: {
    color: 'gray',
    float: 'left',
    fontSize: '0.9rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    marginTop: '0.1rem'
},
listCardImage:{
  width: '100%',
  backgroundColor: 'pink'
},
body:{
  //backgroundColor: '#fbedf2',
  backgroundColor:'white',
   marginLeft:'2%'},
}
));
export default useStyles;