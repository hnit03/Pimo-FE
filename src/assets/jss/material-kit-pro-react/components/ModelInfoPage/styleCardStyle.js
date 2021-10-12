import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'pink',
        height: '30rem',
        margin: 'auto',
        width: '75rem',
        background: 'white !important',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginBottom: '4rem',
        marginTop: '13rem'
    },
    img: {
        width: '100%',
        height: '58vh',
        borderRadius: '0.8rem',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
        marginTop: '-5vh'
    },
    avatar_image_Style: {
        objectFit: 'cover',
        objectPosition: '50% 100%',
        width: '92%',
        float: 'left',
        height: '33rem',
        borderRadius: '0.5rem',
        marginBottom: '4%',
        marginTop: '-2.5rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
}
));
export default useStyles;