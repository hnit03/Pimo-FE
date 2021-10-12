import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: 'pink',
        height: '41rem',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        paddingBottom:'10vh',
        marginBottom:"2rem",
    },
    h1:{
        fontSize:'3rem',
        textAlign:'center',
        paddingTop:'3rem',
        paddingBottom:'0',
        marginBottom:'0.4rem'
    },
    innerTabs:{
        marginLeft:'3rem'
    },
    iconViewCarouse:{
        padding:'5px 35px',
        backgroundColor:'white',
        border:'2px solid pink',
        borderTopLeftRadius:'0.5rem',
        borderBottomLeftRadius:'0.5rem',
    },
    iconViewComfyIcon:{
        padding:'5px 35px',
        backgroundColor:'pink',
        border:'2px solid pink',
        borderTopRightRadius:'0.5rem',
        borderBottomRightRadius:'0.5rem',

    },
    iconViewCarouseChange:{
        padding:'5px 35px',
        backgroundColor:'pink',
        border:'2px solid pink',
        borderTopLeftRadius:'0.5rem',
        borderBottomLeftRadius:'0.5rem',
    },
    iconViewComfyIconChange:{
        padding:'5px 35px',
        backgroundColor:'white',
        border:'2px solid pink',
        borderTopRightRadius:'0.5rem',
        borderBottomRightRadius:'0.5rem',

    },
    button:{
        margin:'auto',
        display: 'flex',
        marginLeft:'42%',
        paddingTop:0
    }
 
}
));
export default useStyles;