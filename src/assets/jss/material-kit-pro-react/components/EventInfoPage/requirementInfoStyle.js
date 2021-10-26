import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop:'2rem',
        overflow: 'hidden',
        margin: '0',
        width: '37rem',
        height: '16.5rem',
        borderRadius: '0.2rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'3rem',
        marginBottom:'3rem',
        marginRight:'1rem',
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
      },
      valueReqList:{
        marginBottom: '0',
        fontSize: '1.1rem',
      },
      titleCard:{
            fontSize:'2rem',
            fontWeight:'700',
            marginLeft:'2rem',
            fontFamily: "Calibri, sans-serif",
            marginTop:'2rem',
            marginBottom: '0.5rem'
      }

    
}
));
export default useStyles;