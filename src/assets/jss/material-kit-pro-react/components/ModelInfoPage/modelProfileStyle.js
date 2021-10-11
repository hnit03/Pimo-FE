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
        marginTop: '0rem !important',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem'
      },
      text: {
        textAlign: 'left',
        color: 'gray',
        float: 'left',
        fontSize: '1rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
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
}
));
export default useStyles;