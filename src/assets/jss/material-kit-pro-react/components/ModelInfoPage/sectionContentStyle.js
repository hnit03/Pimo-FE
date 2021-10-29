import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    name_attribute:{
        fontWeight:'700',
        fontFamily: "Calibri, sans-serif",
        fontSize: '1.2rem',
        color:'#FF93A6',
        marginTop:'0.2rem',
    },
    value_attribute:{
        fontFamily: "Calibri, sans-serif",
        color: 'gray',
        fontSize: '1.1rem',
        marginLeft: '0.5rem',
        marginTop:'0.26rem',
    },
    icon: {
        marginTop: 0,
        color: '#ff93a6',
        fontSize:'1.2rem',
        marginBottom:'0.2rem',
        marginTop:'0.3rem',
        marginRight:'0.5rem'

      },
      ul: {
        float: 'left',
        marginLeft: 0,
        padding: 0,
        width: '100%',
        marginTop: 0,
        marginBottom: 0
      },
      iconIMG:{
          height:'1.8rem',
          width:'1.8rem',
          marginLeft:'-0.2rem',
          marginRight:'0.2rem',
      }
}
));
export default useStyles;