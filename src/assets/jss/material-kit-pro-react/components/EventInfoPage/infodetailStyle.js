import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    marginTop:'11rem',
    overflow: 'hidden',
    margin: 'auto',
    width: '76rem',
    borderRadius: '0.2rem',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    paddingBottom:'3rem'
  },
  img: {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    width: '100.7%',
    height: '30rem',
    marginBottom: '0',    
    marginRight: '0',
  },
  icon: {
    marginTop: 0,
    color: 'gray',
    fontSize:'1.6rem',
    marginBottom:'0.2rem',
    marginTop:'-0.5rem'
  },
  ul: {
    float: 'left',
    marginLeft: 0,
    padding: 0,
    width: '100%',
    marginTop: '-0.5rem',
    marginBottom: "0.5rem"
  },
  text: {
    marginLeft: '1%',
   textAlign: 'left',
   color: 'gray',
   float: 'left',
   fontSize: '1.3rem',
   width: '100%',
   fontFamily: "Calibri, sans-serif",
   marginTop:'-0.5rem',
   marginBottom:'0.2rem'
 },
 chipTrue:{
    color:'white !important',
    //backgroundColor: '#ff93a6 !important',#fc7198
    backgroundColor: '#fc7198 !important',
    fontSize: '1.1rem !important',
    fontWeight:'700',
    marginTop:'0.5rem',
},
chipFalse:{
    marginTop:'0.5rem',
    color:'white !important',
    backgroundColor: '#b7b3b3e0 !important',
    fontSize: '1.1rem !important',
    fontWeight:'700'
},
button:{
    marginTop:'1.5rem !important',
    backgroundColor:'pink !important',
    width:'100% !important',
    fontWeight:'700 !important',
    fontSize: '1.3rem !important'
},
h1:{
  fontSize:'2.8rem !important',
  marginTop:'0.9rem',
}
  
}
));
export default useStyles;