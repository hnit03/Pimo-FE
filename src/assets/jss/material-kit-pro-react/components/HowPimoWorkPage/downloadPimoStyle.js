import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    TitleAccordion:{
        fontSize:'1.2rem',
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
    button:{
        height:'60px',
        width:'200px'
    }

}
));
export default useStyles;