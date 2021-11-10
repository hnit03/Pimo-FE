import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: 'pink',
        //height: '30rem',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginBottom: '4rem',
        marginTop: '-2rem'
    },
    h1:{
        fontSize: '3rem !important',
        textAlign: 'center',
        paddingBottom: 0,
        marginBottom: '1rem',
        marginTop: '3rem',
        marginLeft:'-6.5rem',
        fontSize:"3.5rem",
    },
    divider_Style: {
        marginLeft:'5% !important',
        width: '85%',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1rem',
        marginBottom:'2rem !important',
    },
    media:{
        marginLeft:'20rem !important',
        background: 'pink !important',
    },
    vi:{
        width:'55rem !important',
       // backgroundColor:'pink'
    },
    cmt:{
        width:'55rem !important',
        marginTop:'-5rem !important',
        marginLeft:'6.5rem !important',
        marginBottom: '2rem !important',
        '& label.Mui-focused': {
            color: '#fc7198',
         },
         '& .MuiInput-underline:after': {
            borderBottomColor: '#fc7198',
         },
         '& .MuiOutlinedInput-root': {
            '& fieldset': {
               borderColor: 'red',
            },
            '&:hover fieldset': {
               borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
               borderColor: '#fc7198',
            },
         },
    },
    Name:{
        width:'55rem !important',
        marginTop:'5rem !important',
        marginLeft:'6.5rem !important',
        marginBottom: '2rem !important',
        fontWeight:'700',
    },
    button:{
        backgroundColor:'#fc7198 !important',
        fontFamily: "Calibri, sans-serif !important",
        fontSize: '1rem !important',
        padding: '8px 35px !important',
        float: 'right',
        fontWeight: 'bold',
        marginRight:'7rem',
        marginTop:'-0.5rem',
        marginBottom:'4rem',

    },
    noneText:{
      fontFamily: "Calibri, sans-serif",
      fontSize: '1.2rem',
      marginLeft:'19rem',
      marginTop:'1.5rem',
      marginBottom:'3rem',
    }
}
));
export default useStyles;