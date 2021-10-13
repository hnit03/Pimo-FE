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
            backgroundColor: 'pink !important',
            borderColor: 'pink !important',
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
            color:'pink'
        }
    },
    h1:{
        fontSize:'2rem',
        marginTop:'3rem'
    },
    iconViewCarouse: {
        padding: '5px 35px',
        backgroundColor: 'white',
        border: '2px solid pink',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
    },
    iconViewComfyIcon: {
        padding: '5px 35px',
        backgroundColor: 'pink',
        border: '2px solid pink',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',

    },
    iconViewCarouseChange: {
        padding: '5px 35px',
        backgroundColor: 'pink',
        border: '2px solid pink',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
    },
    iconViewComfyIconChange: {
        padding: '5px 35px',
        backgroundColor: 'white',
        border: '2px solid pink',
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