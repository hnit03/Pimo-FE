import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop:'1.5rem !important',
        backgroundColor:'pink !important',
        width:'100% !important',
        fontWeight:'700 !important',
        fontSize: '1.3rem !important',
        color:'black !important',
        border:'pink !important',
        '&:hover': {
            boxShadow: '0 0 8px 0 pink, 0 6px 10px 0 pink',
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
    scroll:{
        marginTop:'1rem',
        width:'20rem',
        height:'37rem',
        overflowY: 'scroll !important',
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3) !important',
            backgroundColor: 'white !important',//#f9f9f9
            borderRadius: '0.2rem !important',
        },
        '&::-webkit-scrollbar': {
            width: '8px !important',
            backgroundColor: 'pink !important',
            marginRight: '0.7rem !important',
            borderRadius: '0.2rem !important',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'pink !important',
            borderRadius: '0.2rem !important',
        },
    }
}
));
export default useStyles;