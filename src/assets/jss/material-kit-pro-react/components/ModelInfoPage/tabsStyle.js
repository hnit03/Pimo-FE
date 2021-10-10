import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: 'pink',
        height: '68vh',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'10vh',
        marginBottom:"10vh",
       // marginTop:"36vh",
    },
    h1:{
        fontSize:'3rem',
        textAlign:'center',
        paddingTop:'3rem',
        paddingBottom:'0'
    }
 
}
));
export default useStyles;