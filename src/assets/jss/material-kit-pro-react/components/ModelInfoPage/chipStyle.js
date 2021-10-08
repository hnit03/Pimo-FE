import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   chip:{
       border:'2px solid pink !important',
       margin:'0.2rem !important',
       fontSize: '1.1rem !important',
       fontFamily: "Calibri, sans-serif !important",
       color: 'gray !important',
   },
   stack:{
       width:'100% !important',
        marginBottom:'1rem'
   }
}
));
export default useStyles;