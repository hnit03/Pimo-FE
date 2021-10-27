import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    marginTop:'11rem',
    overflow: 'hidden',
    margin: '0',
    width: '76rem',
    borderRadius: '0.2rem',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    paddingBottom:'3rem'
  },
  img: {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    width: '100%',
    height: '25rem',
    marginBottom: '0',    
    marginRight: '0',
  },
  icon: {
    marginTop: 0,
    color: 'gray',
    fontSize:'1.4rem',
    marginBottom:'0.2rem',
    marginTop:'-0.5rem'
  },
  ul: {
    float: 'left',
    marginLeft: 0,
    padding: 0,
    width: '100%',
    marginTop: 0,
    marginBottom: 0
  },
  text: {
    marginLeft: '1%',
   textAlign: 'left',
   color: 'gray',
   float: 'left',
   fontSize: '1.1rem',
   width: '100%',
   fontFamily: "Calibri, sans-serif",
   marginTop:'-0.7rem',
   marginBottom:'0.2rem'
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
button:{
    marginTop:'1.5rem !important',
    backgroundColor:'pink !important',
    width:'100% !important',
    fontWeight:'700 !important',
    fontSize: '1.3rem !important'
}
  
}
));
export default useStyles;