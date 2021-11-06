import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    icon: {
        marginTop: 0,
        color: 'gray',
        marginBottom:'0.7rem',
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
        marginLeft: 0,
        textAlign: 'left',
        fontSize: '5.5rem',
        fontFamily: "Calibri, sans-serif",
      },
      divider_Style: {
        marginTop: '0.3rem !important',
        marginBottom: '-0.2rem !important',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem'
      },
      text: {
         marginLeft: '3%',
        textAlign: 'left',
        color: 'gray',
        float: 'left',
        fontSize: '1.1rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        textDecoration: "none",
      },
      textInDiv:{
        fontSize: '1.3rem',
        fontWeight:'700',
      },
      textLocation: {
        color: 'gray',
        float: 'left',
        fontSize: '1.2rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginTop: '0',
        marginBottom:'1rem',
    },
    ins:{
      '&:hover':{
        color:'#C7125E !important'
    },
  },
    twi:{
      '&:hover':{
        color:'#1C99E6 !important'
    },
  },
    fa:{
      '&:hover':{
        color:'#0775E8 !important'
    },
  },

}
));
export default useStyles;