import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop:'2rem',
        overflow: 'hidden',
        width: '42rem',
        height: '17rem',
        borderRadius: '0.2rem',
        paddingBottom:'3rem',
        marginBottom:'3rem',
        marginLeft:'35.5rem',
      },
      titleReq:{
          color: '#ff93a6',
          fontSize: '1.2rem',
          fontWeight:'700',
          width: '100%',
          //backgroundColor: 'pink'
      },
      valueReq:{
          marginBottom: '0.7rem',
          fontSize: '1.1rem',
          color: 'gray',
      },
      valueReqList:{
        marginBottom: '0',
        fontSize: '1.1rem',
        color: 'gray',
      },
      titleCard:{
            fontSize:'2rem',
            fontWeight:'700',
            marginLeft:'1.5rem',
            fontFamily: "Calibri, sans-serif",
            marginTop:'2rem',
            marginBottom: '1rem',
      },
      icon: {
        marginTop: 0,
        color: '#ff93a6',
        fontSize:'1.2rem',
        marginBottom:'0.2rem',
        marginTop:'0.1rem',
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
      iconMUI:{
        marginTop: 0,
        color: '#ff93a6',
        fontSize:'1.4rem',
        marginBottom:'0.2rem',
        marginTop:'0rem',
        marginRight:'0.5rem'
      },
      bigIcon:{
        marginTop: 0,
        color: 'black',
        fontSize:'2rem',
        marginBottom:'0.2rem',
        marginTop:'2.3rem',
        marginRight:'-0.5rem',
        marginLeft:'1.6rem'
      }
      
   
}
));
export default useStyles;