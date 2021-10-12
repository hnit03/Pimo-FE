import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'pink',
        height: '41rem',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom: '10vh',
        marginTop:'0',
        marginBottom: "4rem",
        fontFamily: "Calibri, sans-serif",
    },
    h1: {
        fontSize: '3rem',
        textAlign: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '0',
        marginBottom: '0.6rem',

    },
    innerTabs: {
        marginLeft: '1.5rem'
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
    button: {
        margin: 'auto',
        display: 'flex',
        marginLeft: '42%',
        paddingTop: 0
    },
    tabs: {
        marginLeft:'0',
        //backgroundColor: 'pink !important',
        marginTop:'1rem !important',
        borderRight: '1px solid pink',
        fontFamily: "Calibri, sans-serif",
        '& .MuiTabs-indicator': {
            backgroundColor: 'pink',
        },
    },
    tab: {
        textTransform: 'none',
        fontSize: '1.1rem !important',
        minWidth: 0,
       // marginRight: theme.spacing(1),
        color: 'black',
        //fontWeight:'bold',
        fontFamily: [
            "Calibri, sans-serif",
        ].join(','),
        '&:hover': {
            color: 'pink',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: 'pink !important',
            fontWeight: 'bold',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'pink',
        },
    }
}
));
export default useStyles;