import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    agendaTitle: {
        paddingleft: '1rem',
        fontWeight: '700',
        fontSize: '1.3rem',
        fontFamily: "Calibri, sans-serif",
        marginBottom: '0.5rem',
        color: 'black',
        '&:hover': {
            color: 'pink',
            fontWeight: '800',
        }

    },
    agendaTree: {
        marginTop: '2rem',
        paddingLeft: '3rem',
        textDecoration: "none",

    },
    agendaTitleContent: {
        marginBottom: '0.3rem',
        marginTop: '0.3rem',
        paddingLeft: '2rem',
        color: 'black',
        '&:hover': {
            color: 'pink',
            fontWeight: '500',
        }
    },
    a: {
        textDecoration: "none",
    }

}
));
export default useStyles;