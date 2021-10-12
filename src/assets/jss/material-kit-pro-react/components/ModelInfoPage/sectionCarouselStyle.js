import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    image: {
        width: 'auto',
        maxWidth: '100%',
        height: '30rem',
        margin: 'auto', /* Magic! */
        maxWidth: '100%',
        maxHeight: '100%',
        boxShadow: '10px 10px white',
    },
    paper: {
        width: '60rem ',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'inline-block',
        verticaLAlign: 'middle',
        margin: 'auto',
        display: 'flex',
        height: '80%',
        width: '80%',boxShadow: '10px 10px white',
    },
    carousel: {
        width: '60rem ',
        verticalAlign: 'middle',
        boxShadow: '10px 10px white',
    },
    button:{
        marginTop: '15rem',
    },
    img:{
        width: '13.5rem !important',
        height: '13.5rem !important',
    }

}
));
export default useStyles;