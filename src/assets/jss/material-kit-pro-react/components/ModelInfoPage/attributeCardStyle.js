import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    margin: 'auto',
    width: '75rem',
    height: '30rem',
    background: 'white !important',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    marginBottom: '1rem'
  },
  avatar_image_Style: {
    objectFit: 'cover',
    objectPosition: '50% 10%',
    width: '92%',
    float: 'right',
    height: '33rem',
    borderRadius: '0.5rem',
    marginBottom: '4%',
    marginTop: '-2.5rem',
    marginRight: '0',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  divider_Style: {
    marginTop: '5rem',
    width: '100%',
    fontFamily: "Calibri, sans-serif",
    fontSize: '1rem'
  },
  h1: {
    textAlign: 'center',
    marginBottom: '0.5rem',
    fontSize: '3rem'
  },
  divider: {
    height: '100% !important',
  }

}
));
export default useStyles;