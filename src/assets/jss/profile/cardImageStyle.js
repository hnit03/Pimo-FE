import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   hieuungbenngoai: {
      width: '100%',
      height: '40vh',
      // overflow: 'hidden',
      // background: '#000',
      padding: '1%',
      marginLeft: 0,
      marginTop: '0.5rem',
      '&:hover':{
         
      }

   },
   hieuung: {
      // position: 'absolute',
      // top: '50%',
      // left: '50%',
      //transform: 'translate(-50%, -50%)',
      // background: 'pink',
      // border:'2px solid gray',
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

      //    background: 'pink',
      //    marginTop: '0px',
      //    marginBottom: '0px',
      //    marginRight: '0px',
      //    marginLeft: '0px',
      //    width: '98%',
      //    height: '98%',
      //    transition: '0.4s',
      //    '& img': {
      //       // transform: 'rotate(-10deg) scale(1.3)',
      //       opacity: '0.2',
      //    },
      //    '& h2': {
      //       // padding: '20px',
      //       marginTop: '10vh',
      //       paddingBottom: 0,
      //       color: 'black',
      //       transition: '0.4s',
      //       
      //    },
      //    '& button': {
      //       backgroundColor: 'black !important',
      //       opacity: '1'
      //    },
      //    '& thongtin': {
      //       marginTop: '-5vh',
      //       backgroundColor: 'pink'

      //    },
      //    '& p': {
      //       opacity: '1',
      //       color: 'black',
      //    }
      },

   },
   img: {
      width: '50%',
      height: '40vh',
      //transition: '0.5s',
      objectFit: 'cover',
      objectPosition: '50% 20%',
   },

   thongtin: {
     // backgroundColor: 'pink',
      width: '40%',
      float: 'right',
      marginTop: '-27vh',
      transform: 'translateY(-50%)',
      padding: '20px',
      textAlign: 'center',
      opacity: 1,
      transition: '0.5s',
      // marginRight:'5%'
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
}
));
export default useStyles;