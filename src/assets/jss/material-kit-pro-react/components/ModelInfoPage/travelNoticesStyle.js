import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'pink',
        //height: '30rem',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginBottom: '1rem',
        marginTop: '3rem',
        paddingBottom:'3rem',
    },
    location_icon_small_Style: {
        color: 'red',
        fontSize: '1.2rem',
    },
    travelNotices_out_Style: {
        float: 'right',
        width: '90%',
        marginTop: '0rem',
        marginBottom: 0,
        marginRight: 0,
    },
    travelNotices_Style: {
        margin: 'auto',
        float: 'left',
        width: '100%',
        marginTop: '5px',
        paddingTop: '2.5vh',
        textAlign: 'left',
        marginRight: 0,
        borderRadius: '0.35rem',
        transition: '0.4s',
    },
    travelName_Style: {
        paddingTop: '1.5vh',
        float: 'left',
        fontSize: '1.2rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginBottom: '0.2rem',
    },
    travelType_Style: {
        float: 'left',
        fontSize: '1.2rem',
        fontFamily: "Calibri, sans-serif",
        fontWeight: '800',
        color: 'red',
        marginRight: '0.2rem'
    },
    location_icon_small_Style: {
        color: 'red',
        fontSize: '1.2rem',
    },
    textLocation_Style: {
        color: 'gray',
        float: 'left',
        fontSize: '1.2rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginTop: '-1rem'
    },
    textTime_Style: {
        textAlign: 'center',
        color: 'rgb(24, 112, 243)',
        float: 'left',
        fontSize: '1.1rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginBottom: '0.2rem',
        fontWeight: 'bold',
        color: '#fc7198',
    },
    textTimeDate_Style: {
        textAlign: 'center',
        color: '#fc7198',
        float: 'left',
        fontSize: '2.5rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginBottom: '0.2rem',
        fontWeight: 'bold',
    },
    img: {
        marginLeft: '15%',
        marginTop: '6vh',

    },
    boxLeft: {
        textAlign: 'center',
        marginLeft: '0%',
        marginTop: '6vh',
    },
    h1:{
        fontSize: '3rem !important',
        textAlign: 'center',
        //padding:'0.8rem',
        paddingBottom: 0,
        marginBottom: '1rem',
        marginTop: '-1rem'
    },
    divider_Style: {
        marginLeft:'5% !important',
        width: '90%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem',
        marginBottom:'1.2rem !important',
        //paddingBottom:'10rem'
    },
    imgDay: {
        width: '15%',
        height: '15vh',
        float: 'left',
    },
    divider: {
       marginTop: '5%',
        height: '100% !important',
    },
    noneText:{
        fontFamily: "Calibri, sans-serif",
        fontSize: '1.2rem',
        marginLeft:'19rem',
        marginTop:'1.5rem',
        marginBottom:'1rem',
    }

}
));
export default useStyles;