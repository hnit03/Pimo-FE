import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    margin: 'auto',
    width: '75rem',
    //height: '30rem',
    background: 'white !important',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    marginBottom: '3rem',
    marginTop:'2rem',
    paddingBottom: '5rem'

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
    marginBottom: 0
  }
  ,title: {
    margin: 0,
    marginBottom:'1rem',
    marginTop:'2rem',
    marginLeft: 0,
    textAlign: 'center',
    fontSize: '3.5rem',
    fontFamily: "Calibri, sans-serif",
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