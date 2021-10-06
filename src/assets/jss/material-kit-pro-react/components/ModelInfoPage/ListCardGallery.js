import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        background: 'rgb(255, 192, 203, 0.3) !important',
        //marginLeft:"1.5%",
        width:"100.5%",
        boxShadow: '0 4px 8px 0 rgba(255, 192, 203, 0.3), 0 6px 20px 0 rgba(255, 192, 203, 0.19)',
        paddingBottom:'10vh',
        marginBottom:"20vh"
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
    }
}
));
export default useStyles;