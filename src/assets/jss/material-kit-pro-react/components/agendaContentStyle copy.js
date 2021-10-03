import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    agendaContentTree: {
        width: '99%',
        float: 'left',
        //backgroundColor: 'pink',
        fontFamily: "Calibri, sans-serif",
        height: '28rem',
       // background: '#F5F5F5',
        overflowY: 'scroll',
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#F5F5F5',
            borderRadius:'3px',
          },
          '&::-webkit-scrollbar': {
            width: '10px',
            backgroundColor: 'pink',
            marginRight:'10px',
            borderRadius:'3px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'pink',
            borderRadius:'3px',
          },
    },
    
    generalQuestion:{
        marginTop:0,
        marginBottom:0,
        fontSize:'4rem',
        fontWeight:'800',
    }, 
    genaralLine:{
        height:'0.3rem',
        marginTop:0,
        //borderBottom:'0.4rem solid pink',
        backgroundColor:'pink',
        width:'97%',
        float:'left',
        borderRightRadius:'0.1rem',
    },

    forceOverflow: {
        minHeight: '450px',
      }

}
));
export default useStyles;