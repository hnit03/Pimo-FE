import {
  title,
  mrAuto,
  mlAuto,
  grayColor,
} from "../../../material-kit-pro-react.js";

const workStyle = {
  mrAuto,
  mlAuto,
  section: {
    padding: "14% 0 8% 0",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: grayColor[0],
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  formControl: {
   border: '1px dotted black', 
   width: '8rem',
   marginBottom: '1%'
  }
};

export default workStyle;
