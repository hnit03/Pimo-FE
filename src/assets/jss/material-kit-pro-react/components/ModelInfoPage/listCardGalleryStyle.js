import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        background: 'white !important',
        margin: 'auto',
        width: '75rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'10vh',
       // marginBottom:'2rem',
     //   marginTop:"2rem",
        //padding:'2rem',
    },
    gallery:{
        margin: 'auto !important',
        width: '70rem !important',
        //backgroundColor: 'pink'
    },
    galleryTitle:{
        fontSize:"3.5rem",
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:0,
        marginTop:'10vh',
    },
    galleryDes:{
        fontSize:"1.2rem",
        fontWeight:"bold",
        textAlign:"center",
        color:"#a7a7ab",
        marginBottom:'8vh',
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
            //color:'#fff !important'
            borderColor:'pink !important',
        }
    }
}
));
export default useStyles;