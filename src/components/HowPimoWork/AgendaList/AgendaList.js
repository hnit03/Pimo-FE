import React from "react";

import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/agendaListStyle";
const agendaTitleEng = ["General", "Model", "Brand"];
const agendaTitleVie = ["T", "Model", "Brand"];
const agendaGeneral = ["Overview", "Referrals", "Security & Password"];
const agendaModel = ["", "Referrals", "Security & Password"];
export default function AgendaList(props) {
    const classes = useStyles();
    return (
        <div className={classes.agendaTree}>
            <a href="#General"><p className={classes.agendaTitle}>General</p></a>
            <a href="#Overview"><p className={classes.agendaTitleContent}>Overview</p></a>
            <a href="#Security"><p className={classes.agendaTitleContent}>Security</p></a>
            <a href="#Model"><p className={classes.agendaTitle}>Model</p></a>
            <a href="#Working_with_Brands"><p className={classes.agendaTitleContent}>Working with Brands</p></a>
            <a href="#Apply_To_An_Event"><p className={classes.agendaTitleContent}>Apply To An Event</p></a>
            <a href="#Download_Pimo_App"><p className={classes.agendaTitleContent}>Download Pimo App</p></a>
            <a href="#Payments_model"><p className={classes.agendaTitleContent}>Payments</p></a>
            <a href="#Brand"><p className={classes.agendaTitle}>Brand</p></a>
            <a href="#Working_with_Model"><p className={classes.agendaTitleContent}>Working with Model</p></a>
            <a href="#Booking_Model"><p className={classes.agendaTitleContent}>Booking Model</p></a>
            <a href="#Payments_brand"><p className={classes.agendaTitleContent}>Payments</p></a>
        </div>
    );

}