import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    overflow: 'hidden',
    margin: '0',
    width: '100%',
    borderRadius: '0.2rem',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',

  },
  imgBrand: {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    width: '103%',
    height: '14rem',
    marginBottom: '0',    
    marginRight: '0',
  },
  imgBrandSmall:{
    objectFit: 'cover',
    objectPosition: '50% 50%',
    width: '103%',
    height: '11rem',
    marginBottom: '0',    
    marginRight: '0',
  },
  divider_Style: {
    marginTop: '5rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    fontSize: '1rem'
  },
  icon: {
    marginTop: 0,
    color: 'gray',
    fontSize:'1.4rem',
    marginBottom:'0.1rem',
  },
  iconSmall: {
    marginTop: 0,
    color: 'gray',
    fontSize:'1.3rem',
    marginBottom:'0.1rem',
  },
  ul: {
    float: 'left',
    marginLeft: 0,
    padding: 0,
    width: '100%',
    marginTop: 0,
    marginBottom: 0
  }
  ,title: {
    margin: 0,
    marginBottom:'0.5rem',
    marginTop:'0.1rem',
    marginLeft: 0,
    textAlign: 'left',
    fontSize: '1.3rem',
    fontFamily: "Calibri, sans-serif",
    wordBreak: 'break-all',
  },
  titleSmall:{
    margin: 0,
    marginBottom:'0.5rem',
    marginTop:'0.1rem',
    marginLeft: 0,
    textAlign: 'left',
    fontSize: '1.2rem',
    fontFamily: "Calibri, sans-serif",
    wordBreak: 'break-all',
  },
  chipTrueSmall:{
    color:'white !important',
    backgroundColor: 'green !important',
    fontSize: '0.9rem !important',
    fontWeight:'700',
    marginTop:'0.5rem',
  },
  chipFalseSmall:{
    marginTop:'0.5rem',
    color:'white !important',
    backgroundColor: 'red !important',
    fontSize: '0.9rem !important',
    fontWeight:'700'
},
  divider_Style: {
    marginTop: '0rem !important',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    fontSize: '1rem'
  },
  text: {
     marginLeft: '3%',
    textAlign: 'left',
    color: 'gray',
    float: 'left',
    fontSize: '0.9rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
  },

chipTrue:{
    color:'white !important',
    backgroundColor: 'green !important',
    fontSize: '1rem !important',
    fontWeight:'700',
    marginTop:'0.5rem',
},
chipFalse:{
    marginTop:'0.5rem',
    color:'white !important',
    backgroundColor: 'red !important',
    fontSize: '1rem !important',
    fontWeight:'700'
},
smallBox:{
  
    marginLeft: '1rem !important',
    marginRight: '1rem !important',
   marginBottom:'1rem !important'
},
name:{
    //backgroundColor:'pink !important',
    height: '3.7rem !important',
},
}
));
export default useStyles;