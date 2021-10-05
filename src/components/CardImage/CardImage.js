import React from "react";
import Button from '@mui/material/Button';
import useStyles from '../../assets/jss/profile/cardImageStyle';
export default function CardImage() {
    const classes = useStyles();
    return (
        <div className={classes.hieuungbenngoai}>
        <div className={classes.hieuung}>
            <div className={classes.noidung}>
                <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9A/production/_120424467_joy2.jpg?fbclid=IwAR2Qp0fX6VCdDBLUo2GvBC_bM3fk4N8RYucdqYZJ1TgfpLavb8YJTzI9kqA' className={classes.img}/>
                 <div className={classes.phude}>
                    <p className={classes.thongtin}>
                        
                        <h2 className={classes.h2}>HUỲNH HUỲNH </h2>
                        <p className={classes.p}>Ho Chi Minh City, Vietnam</p>
                        <p className={classes.p}>45-45-45</p>
                         <Button variant="outlined" className={classes.button}>XEM THÔNG TIN</Button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}