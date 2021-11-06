import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: "Calibri, sans-serif",
        color: '#fff !important',
        borderWidth: '0.2rem !important',
        borderColor: 'white !important',
        marginTop: '20px !important',
        padding: '5px 25px !important',
        fontSize: '1.2rem !important',
        fontWeight: '800 !important',
        '&:hover': {
            paddingTop: '5px',
            transition:"0.5s",
            backgroundColor: '#FC84A6 !important',
            borderColor: 'white !important',
        }
    },
    divider_Style: {
        marginTop: '0rem !important',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem'
    },
    close:{
        float:'right',
        '&:hover':{
            color:'#FC84A6'
        }
    },
    h1:{
        fontSize:'2rem',
        marginTop:'3rem'
    },
    iconViewCarouse: {
        padding: '5px 35px',
        backgroundColor: 'white',
        border: '2px solid #FC84A6',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
    },
    iconViewComfyIcon: {
        padding: '5px 35px',
        backgroundColor: '#FC84A6',
        border: '2px solid #FC84A6',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',

    },
    iconViewCarouseChange: {
        padding: '5px 35px',
        backgroundColor: '#FC84A6',
        border: '2px solid #FC84A6',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
    },
    iconViewComfyIconChange: {
        padding: '5px 35px',
        backgroundColor: 'white',
        border: '2px solid #FC84A6',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',

    },
    buttonIcon: {
        margin: 'auto',
        display: 'flex',
        marginLeft: '28.5%',
        marginTop: '-0.5rem'
    },
}
));
export default useStyles;