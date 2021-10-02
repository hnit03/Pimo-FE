import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    location_icon_small_Style: {
        color: 'red',
        fontSize: '0.9rem',

    },
    travelNotices_out_Style: {
        margin: 'auto',
        float: 'left',
        width: '91%',
        height: '4.1rem',
        marginTop: '10px',
        marginBottom: '1rem',
        marginRight: 0,
        paddingBottom: '2rem',
    },
    travelNotices_Style: {
        margin: 'auto',
        float: 'left',
        width: '100%',
        marginTop: '5px',
        padding: '1rem',
        textAlign: 'left',
        marginRight: 0,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '0.35rem',
        transition: '0.4s',
        //backgroundColor:'pink',
        "&:hover": {
            background: 'pink',
            marginTop: '0px',
            transition: '0.4s',
        },
        //backgroundColor:'pink'
    },
    travelName_Style: {
        float: 'left',
        fontSize: '1.1rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontWeight: '800',
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
        fontSize: '0.9rem',
    },
    textLocation_Style: {
        color: 'gray',
        float: 'left',
        fontSize: '0.9rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginTop: '0.1rem'
    },
    textTime_Style: {
        color: 'rgb(24, 112, 243)',
        float: 'left',
        fontSize: '0.9rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        marginBottom: '0.2rem'
    },

}
));
export default useStyles;