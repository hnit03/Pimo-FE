import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: 'pink',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'10vh',
        marginBottom:"10vh",
        marginTop:"3rem",
        fontFamily: "Calibri, sans-serif",
    },
    h1:{
        fontSize: '3rem !important',
        textAlign: 'center',
        padding:'1rem',
        paddingBottom: 0,
        marginBottom: '1rem',
    },
    divider_Style: {
        marginLeft:'5% !important',
        width: '85%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem',
        marginBottom:'2rem !important',
        //paddingBottom:'10rem'
    },
}
));
export default useStyles;