import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    Eng:{
        backgroundColor:'pink !important',
        color:'white',
        borderTopLeftRadius:'0.5rem !important',
        borderBottomLeftRadius:'0.5rem !important',
        padding: '0.5rem 1rem ',
        marginRight:0,
        border:'0.1rem solid pink',
        width:'7rem',
        textAlign:'center',
        '&::active':{
                color:'black',
        }

    },
    Vie:{
        backgroundColor:'white',
        color:'pink',
        borderTopRightRadius:'0.5rem !important',
        borderBottomRightRadius:'0.5rem !important',
        padding: '0.5rem 1rem ',
        //marginRight:0,
        border:'0.1rem solid pink',
        border:'0.1rem solid pink',
        width:'7rem',
        textAlign:'center'
    },
    a:{
       // backgroundColor:'pink',
       float:'right',
       marginTop:'7rem',
       marginRight:'3rem'
    },
    
}
));
export default useStyles;