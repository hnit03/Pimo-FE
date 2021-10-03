import React from "react";

import useStyles from "../../assets/jss/material-kit-pro-react/components/agendaListStyle";
const agendaTitle =
    [{ name: "Tổng quan", value: "#General" },
    { name: "Người mẫu", value: "#Model" },
    { name: "Nhãn hàng", value: "#Brand" }];
const agendaGeneral = [{ name: "Tổng quan về Pimo", value: "#Overview" },
{ name: "Bảo mật thông tin", value: "#Security" }];
const agendaModel = [{ name: "Làm việc với nhãn hàng", value: "#Working_with_Brands" },
{ name: "Ứng tuyển vào sự kiện của nhãn hàng", value: "#Apply_To_An_Event" },
{ name: "Tải xuống ứng dụng Pimo", value: "#Download_Pimo_App" },
{ name: "Thanh toán", value: "#Payments_model" }];
const agendaBrand = [{ name: "Làm việc với người mẫu", value: "#Working_with_Model" },
{ name: "Tạo sự kiện và casting", value: "#Booking_Model" },
{ name: "Thanh toán", value: "#Payments_brand" }];

export default function AgendaList(props) {
    const classes = useStyles();
    return (
        <div className={classes.agendaTree}>
            <a href={agendaTitle[0].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[0].name}</p>
            </a>
            <a href={agendaGeneral[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaGeneral[0].name}</p>
                </a>
            <a href={agendaGeneral[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaGeneral[1].name}</p>
                </a>
            <a href={agendaTitle[1].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[1].name}</p>
                </a>
            <a href={agendaModel[2].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[2].name}</p>
                </a>
            <a href={agendaModel[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[0].name}</p>
                </a>
            <a href={agendaModel[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaModel[1].name}</p>
                </a>
            <a href={agendaModel[3].value} className={classes.a} >
                <p className={classes.agendaTitleContent}>{agendaModel[3].name}</p>
                </a>
            <a href={agendaTitle[2].value} className={classes.a}>
                <p className={classes.agendaTitle}>{agendaTitle[2].name}</p>
                </a>
            <a href={agendaBrand[0].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[0].name}</p>
                </a>
            <a href={agendaBrand[1].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[1].name}</p>
                </a>
            <a href={agendaBrand[2].value} className={classes.a}>
                <p className={classes.agendaTitleContent}>{agendaBrand[2].name}</p>
                </a>
        </div>
    );

}