import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        margin: 'auto',
        width: '35rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginBottom: "3rem",
        marginTop: "-1rem",
        paddingLeft:'2rem',
        paddingBottom:'0.8rem',
        minHeight:'31rem',
        float:'left'
    },
    h1:{
        fontSize: '3rem !important',
        textAlign: 'center',
        paddingBottom: 0,
        marginBottom: '1rem',
        marginTop: '3rem',
        marginLeft:'-2rem',
    },
    divider_Style: {
        marginLeft:'5% !important',
        width: '85%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem',
        marginBottom:'2rem !important',
    },
    media:{
        marginLeft:'20rem !important',
        background: 'pink !important',
    }
}
));
export default useStyles;