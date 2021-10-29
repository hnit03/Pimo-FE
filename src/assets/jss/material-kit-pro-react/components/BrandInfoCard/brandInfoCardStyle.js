import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    margin: 'auto',
    width: '75rem',
    //height: '30rem',
    background: 'white !important',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    marginBottom: '1.5rem',
    marginTop:'14rem',
    paddingBottom: '2.5rem'
  },
  logoBrand: {
    objectFit: 'cover',
    objectPosition: '50% 10%',
    width: '100%',
    float: 'right',
    height: '20rem',
    borderRadius: '50%',
    marginBottom: '4%',
    marginTop: '-2.5rem',
    marginRight: '0',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
    marginBottom:'0.7rem',
  },
  ul: {
    float: 'left',
    marginLeft: 0,
    padding: 0,
    width: '100%',
    marginTop: 0,
    marginTop: '-1rem',
    marginBottom: '1rem'
  }
  ,title: {
    margin: 0,
    marginBottom:'2rem',
    marginTop:'0.3rem',
    marginLeft: 0,
    textAlign: 'left',
    fontSize: '5.5rem',
    fontFamily: "Calibri, sans-serif",
  },
  divider_Style: {
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