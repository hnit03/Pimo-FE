import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    agendaTitle:{
        paddingleft:'1rem',
       // backgroundColor:'pink',
        fontWeight:'700',
        fontSize:'1.3rem',
        fontFamily: "Calibri, sans-serif",
        marginBottom:'0.5rem'

    },
    agendaTree:{
      marginTop:'2rem',
       paddingLeft:'3rem',
    },
    agendaTitleContent:{
        marginBottom:'0.3rem',
        marginTop:'0.3rem',
        paddingLeft:'2rem',
    },
    
}
));
export default useStyles;