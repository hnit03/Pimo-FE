import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/requirementInfoStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import TodayIcon from '@mui/icons-material/Today';
import EventIcon from '@mui/icons-material/Event';

export default function RequirementInfo(props) {
    const classes = useStyles();
    const model = props.model.map((item) =>
        item.genderName == "Nam" ?
            <div className={classes.valueReqList}>Người mẫu nam</div> :
            item.genderName == "Nữ" ?
                <div className={classes.valueReqList}>Người mẫu nữ</div> :
                <div className={classes.valueReqList}>Khác</div>
    )
    const bool = true;
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={1} className={classes.pageLeft_Style}>
                <Grid item xs={0.5} >

                </Grid>
                <Grid item xs={11} >
                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <FontAwesomeIcon icon={faInfoCircle} className={classes.bigIcon} />
                            <h1 className={classes.titleCard}>THÔNG TIN CHI TIẾT</h1>
                        </li>
                    </ul>

                </Grid>
                <Grid item xs={0.5} ></Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={5.5} >
                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <TodayIcon className={classes.iconMUI} />
                            <div className={classes.titleReq}>Thời gian bắt đầu</div>
                        </li>
                        <div className={classes.valueReq}>{props.startDate}</div>
                    </ul>

                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <FontAwesomeIcon icon={faMoneyBill} className={classes.icon} />
                            <div className={classes.titleReq} >Tiền lương</div>
                        </li>
                        <div className={classes.valueReq}>{props.salary} Đồng</div>
                    </ul>

                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <FontAwesomeIcon icon={faTransgenderAlt} className={classes.icon} />
                            <div className={classes.titleReq}>Giới tính</div>
                        </li>
                        {model}
                    </ul>

                </Grid>
                <Grid item xs={5.5} >
                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <EventIcon className={classes.iconMUI} />
                            <div className={classes.titleReq}>Thời gian kết thúc</div>
                        </li>
                        <div className={classes.valueReq}>{props.endDate}</div>
                    </ul>

                    <ul className={classes.ul}>
                        <li style={{ display: 'flex', }} className={classes.li}>
                            <FontAwesomeIcon icon={faStar} className={classes.icon} />
                            <div className={classes.titleReq}>Phong cách</div>
                        </li>
                        {props.style.map((item) =>
                            <div className={classes.valueReqList}>{item.name}</div>
                        )
                        }
                    </ul>
                </Grid>
            </Grid>
        </Box>
    );
}