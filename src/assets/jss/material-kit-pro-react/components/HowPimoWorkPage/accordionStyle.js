import { makeStyles } from "@material-ui/core/styles";
import img from '../../../../img/download.png';
const useStyles = makeStyles((theme) => ({
    TitleAccordion:{
        fontSize:'1.3rem',
        fontWeight:'bold',
        color:'pink',
        padding:0,
        margin:0,
        fontStyle: 'italic',

    },
    question:{
        fontSize:'1.6rem',
        fontWeight: '700',
        marginTop:0,
        paddingLeft:'1rem',
    },
    answer:{
        fontSize:'1.2rem',
        marginBottom:0,
        paddingLeft:'2.7rem',
    },
    buttonGoogle:{
        marginTop:'21rem',
        height:'60px',
        width:'200px',
        marginRight:'1%',
        marginLeft:'13%',
    },
    buttonAppStore:{
        marginTop:'21rem',
        height:'60px',
        width:'200px',
        marginRight:'1%',
    },
    background:{
        backgroundImage:`url(${img})` ,
        backgroundSize: 'contain',
        backgroundRepeat:'no-repeat',
        height:'78vh',
        marginBottom:0,
        paddingBottom:0,
        //backgroundColor:'pink',
    },
    text:{
        position: 'absolute',
        marginTop:'16.5rem',
        marginLeft:'10%',
        fontSize:'1.3rem',
        width:'50%',
        textAlign:'center',
    },

}
));
export default useStyles;