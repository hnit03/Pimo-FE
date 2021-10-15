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
    width: '45%',
    height: '40vh',
    objectFit: 'cover',
    objectPosition: '50% 20%',
 },

   thongtin: {
      width: '46%',
      float: 'right',
      marginTop: '-10.5rem',
      transform: 'translateY(-50%)',
      padding: '20px',
      textAlign: 'center',
      opacity: 1,
      transition: '0.5s',
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
      marginBottom: '0.2rem',
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
      marginTop:'0.5rem !important',
      marginBottom:'1rem !important'
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
}
));
export default useStyles;