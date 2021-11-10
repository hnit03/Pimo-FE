import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        background: 'white !important',
        margin: 'auto',
        width: '75rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'2.5rem',
        marginBottom:'4rem',
        marginTop:"-1rem",
    },
    gallery:{
        margin: 'auto !important',
        width: '70rem !important',
    },
    galleryTitle:{
        fontSize:"3.5rem",
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:'1rem !important',
        marginTop:'3rem',
    },
    galleryDes:{
        fontSize:"1.2rem",
        fontWeight:"bold",
        textAlign:"center",
        color:"#a7a7ab",
        marginBottom:'2rem',
    },
    button:{
        margin:'auto !important',
        fontFamily: "Calibri, sans-serif",
        color: '#fff !important',
        borderWidth: '0.2rem !important',
        borderColor:'#fff !important',
        marginTop:'20px !important',
        padding:'5px 25px !important',
        fontSize:'1.2rem !important',
        fontWeight:'800 !important',
        '&:hover':{
            paddingTop:'5px',
            backgroundColor:'pink !important',
            borderColor:'pink !important',
        }
    },
    noneText:{
        fontFamily: "Calibri, sans-serif",
        fontSize: '1.2rem',
        marginLeft:'23rem',
        marginTop:'1.5rem !important',
        marginBottom:'2rem',
    }
}
));
export default useStyles;