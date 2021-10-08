import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        // backgroundColor: 'pink',
         margin: 'auto',
            width: '75rem',
            height:'27rem',
         background: 'white !important',
         boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
         marginBottom:'4rem',
 
     },

    avatar_image_Style: {
        objectFit: 'cover',
        objectPosition: '50% 100%',
        width: '90%',
        float: 'right',
        height:'30rem',
        borderRadius: '0.5rem',
        //margin: '2.5%',
        marginBottom: '4%',
       marginTop:'-2rem',
        marginRight:'0',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      divider_Style: {
        marginTop: '5rem',
        width: '100%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem'
      },
      h1: {
          textAlign: 'center',
        marginBottom: '0.5rem',
        fontSize: '3rem'
    },
    divider: {
         height: '100% !important',
        // width: '100%',
     }
 
}
));
export default useStyles;