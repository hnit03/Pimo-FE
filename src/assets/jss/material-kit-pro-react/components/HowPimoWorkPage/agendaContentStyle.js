import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  agendaContentTree: {
    width: '99%',
    float: 'left',
    fontFamily: "Calibri, sans-serif",
    height: '72.5vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
      backgroundColor: '#F5F5F5',
      borderRadius: '0.2rem',
    },
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: 'pink',
      marginRight: '0.7rem',
      borderRadius: '0.2rem',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'pink',
      borderRadius: '0.2rem',
    },
  },

  generalQuestion: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '4rem',
    fontWeight: '800',
  },
  generalLine: {
    height: '0.3rem',
    marginTop: 0,
    backgroundColor: 'pink',
    width: '97%',
    float: 'left',
    borderRightRadius: '0.1rem',
  },
  divider_Style: {
    paddingTop: '2rem',
    width: '100%',
    marginLeft: '3rem',
    fontFamily: "Calibri, sans-serif",
    fontSize: '1rem',

  },
  forceOverflow: {
    minHeight: '450px',
  },
  EndTitle: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 0,
  },
  icon: {
    margin: 0,
    color: 'gray',
    margin: '0',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'gray',
    float: 'left',
    fontSize: '1rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
  },
  ul: {
    margin: 0,
    padding: 0,
    width: '100%',
    textAlign: 'center',

  }, li: {
    margin: 'auto',
    width: '20%',
  }

}
));
export default useStyles;