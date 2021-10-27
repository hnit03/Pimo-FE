import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: '-1rem',
        overflow: 'hidden',
        margin: 'auto',
        width: '76rem',
        borderRadius: '0.2rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom: '3rem',
        marginBottom: '3rem',
    },
    titleCard: {
        fontSize: '2rem',
        fontWeight: '700',
        fontFamily: "Calibri, sans-serif",
        marginTop: '3rem',
        marginBottom: '1rem'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '700',
        fontFamily: "Calibri, sans-serif",
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    valueReq: {
        fontSize: '1.2rem',
        color: 'gray',
    },
    divider_Style: {
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '0.5rem',
        marginTop:'0.5rem !important',
        marginBottom:'-100rem !important'

     },
     icon: {
        marginTop: 0,
        color: 'black',
        fontSize:'2rem',
        marginBottom:'0.2rem',
        marginTop:'1.3rem',
        marginRight:'1rem'

      },
      iconDES:{
        marginTop: 0,
        color: 'black',
        fontSize:'2rem',
        marginBottom:'0.2rem',
        marginTop:'3.3rem',
        marginRight:'1rem'
      },
      ul: {
        float: 'left',
        marginLeft: 0,
        padding: 0,
        width: '100%',
        marginTop: 0,
        marginBottom: 0
      },
}
));
export default useStyles;