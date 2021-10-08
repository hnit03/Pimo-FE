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
        marginTop:"36vh",
        //padding:'2rem',

    },
    img:{
        width:'100%',
        height:'58vh',
        borderRadius: '0.8rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginTop:'-5vh'
    },
    avatar_image_Style: {
        objectFit: 'cover',
        objectPosition: '50% 100%',
        width: '90%',
        float: 'left',
        height:'88vh',
        borderRadius: '0.5rem',
        //margin: '2.5%',
        marginBottom: '4%',
       marginTop:'-8vh',
        
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
}
));
export default useStyles;