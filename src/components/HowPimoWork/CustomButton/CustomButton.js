import React, { useState } from "react";
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/customButtomStyle";
// import Button from '@mui/material/Button';
export default function CustomButton(props) {
    const classes = useStyles();
    const[language,setLanguage] = useState(true);
    const pStyle = {
        fontSize: '15px',
        textAlign: 'center'
      };
    

    return (
        <div className = {classes.a}>
            <button className = {classes.Eng}>EngLish</button>
            <button className = {classes.Vie}>VietNamese</button>  
        </div>
    );

}