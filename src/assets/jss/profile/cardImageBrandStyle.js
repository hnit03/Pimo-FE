import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   hieuungbenngoai: {
      width: '100%',
      height: '40vh',
      padding: '1%',
      marginLeft: 0,
      marginTop: '0.5rem',
      
   },
   hieuung: {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      width: '95%',
      height: '95%',
      overflow: 'hidden',
      margin: '2%',
      borderRadius: '0.1rem',
      transition: '0.4s',
      '&:hover': {
         backgroundColor: 'rgb(255,192,203, 0.5)',
         '& img': {
            backgroundColor: 'rgb(255,192,203, 0.5)',
            opacity:'0.5'
         },
      },
   },
   img: {
    width: '40%',
    height: '40vh',
    objectFit: 'cover',
    objectPosition: '50% 20%',
    marginRight:'0.5rem !important'
 },

   thongtin: {
      width: '55%',
      float: 'right',
      marginTop: '-28vh',
      transform: 'translateY(-50%)',
      padding: '10px',
      textAlign: 'center',
      opacity: 1,
      transition: '0.5s',
      paddingLeft: '1rem',
   },
   h2: {
      textAlign: 'Left',
      color: 'black',
      margin: 0,
      fontSize: '1.6rem',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      padding: '4% 0 4% 0',
      borderRadius: '0.6rem',
      marginTop: '10vh',
      marginBottom: 0,
      color: 'black',
      transition: '0.1s',
      backgroundColor: 'rgb(255,192,203, 0)',
   },
   p: {
      textAlign: 'Left',
      color: '#fff',
      margin:'0',
      marginBottom: '0.2rem',
      padding: 0,
      opacity: 1,
      fontSize: '15px',
      opacity: '1',
      color: 'black',
   },
   p_Title: {
      textAlign: 'Left',
      color: '#ff93a6',
      fontWeight:'800',
      margin:'0',
      marginBottom: '0rem',
      padding: 0,
      opacity: 1,
      fontSize: '15px',
      opacity: '1',

   },
   button: {
      color: '#fff !important',
      borderColor: '#000 !important',
      marginTop: '20px !important',
      padding: '5px 15px !important',
      fontSize: '0.9rem !important',
      fontWeight: 'bold !important',
      backgroundColor: 'black !important',
      //       opacity: '1'
      opacity: 1,
      '&:hover': {
         paddingTop: '5px',
         backgroundColor: 'pink !important',
         borderColor: 'pink !important',

      }
   },
   divider_Style: {
      marginTop: '5rem',
      width: '95%',
      fontFamily: "Calibri, sans-serif",
      fontSize: '1rem',
      marginTop:'-0.2rem !important',
      marginBottom:'0.5rem !important'
   },
   icon: {
    marginTop: 0,
    color: 'gray',
    marginBottom:'0.2rem',
    fontSize: ''
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
    marginLeft: '3%',
   textAlign: 'left',
   color: 'gray',
   float: 'left',
   fontSize: '1rem',
   width: '100%',
   fontFamily: "Calibri, sans-serif",
 },
 hieuung1:{
   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
   width: '95%',
   height: '95%',
   overflow: 'hidden',
   margin: '2%',
   borderRadius: '0.1rem',
},
img1: {
   width: '43%',
   height: '40vh !important',
   objectFit: 'cover',
   objectPosition: '50% 20%',
},
thongtin1: {
   width: '50%',
   float: 'right',
   marginTop: '-21vh',
   transform: 'translateY(-50%)',
   padding: '20px',
   textAlign: 'center',
   opacity: 1,
   transition: '0.5s',
},
}
));
export default useStyles;