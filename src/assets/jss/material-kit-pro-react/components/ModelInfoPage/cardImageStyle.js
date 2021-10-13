import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    hieuungbenngoai: {
        width: '100%',
        height: '31rem',
        marginRight: 0,
        marginRight: '1rem',

    },
    hieuung: {
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
        width: '91%',
        height: '91%',
        overflow: 'hidden',
        background: '#000',
        margin: '0',
        marginLeft: '1.2rem',
        borderRadius: '0.5rem',
        '&:hover': {
            boxShadow: '0 0 8px 0 rgb(255, 192, 203,03), 0 6px 20px 0 rgb(255, 192, 203,0.2)',
            background: 'pink',
            marginTop: '0px',
            marginBottom: '0px',
            marginRight: '0px',
            marginLeft: '0px',
            width: '98%',
            height: '98%',
            transition: '0.4s',
            '& img': {
                transform: 'rotate(-10deg) scale(1.3)',
                opacity: '0.3',
            },
            '& h2': {

                paddingBottom: 0,
            },
            '& phude': {
                '&::before': {
                    transform: 'scale(1,1)'
                },
                '&::after': {
                    transform: 'scale(1,1)'
                },
            },
        },

    },

    img: {
        width: '100%',
        transition: '0.5s',
        height: '80vh',
        transition: '0.5s',
        objectFit: 'cover',
        objectPosition: '50% 100%',
    },


    thongtin: {
        marginTop: '-200px',
        transform: 'translateY(-50%)',
        //zIndex: '1',
        padding: '20px',
        textAlign: 'center',
        opacity: 1,
        transition: '0.5s',
    },

    h2: {
        fontFamily: "Calibri, sans-serif",
        padding: '0.3rem',
        color: '#fff',
        margin: 0,
        padding: 0,
        fontSize: '2rem',
        textTransform: 'uppercase',
    },
    p: {
        fontFamily: "Calibri, sans-serif",
        color: '#fff',
        margin: '0',
        padding: 0,
        fontSize: '15px',
        fontWeight: '700',
    },
    button: {
        fontFamily: "Calibri, sans-serif",
        color: '#fff !important',
        borderWidth: '0.2rem !important',
        borderColor: '#fff !important',
        marginTop: '20px !important',
        padding: '5px 25px !important',
        fontSize: '1.2rem !important',
        fontWeight: '800 !important',
        '&:hover': {
            paddingTop: '5px',
            backgroundColor: 'pink !important',
            borderColor: 'pink !important',
        }
    }
}
));
export default useStyles;