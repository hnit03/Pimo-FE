import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/requirementInfoStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function RequirementInfo() {
    const classes = useStyles();
    const bool = true;
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={1} className={classes.pageLeft_Style}>
                <Grid item xs={0.5} ></Grid>
                <Grid item xs={11} >
                    <h1 className={classes.titleCard}>THÔNG TIN CHI TIẾT</h1>
                </Grid>
                <Grid item xs={0.5} ></Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={5.5} >
                    <div className={classes.titleReq}>Thời gian bắt đầu</div>
                    <div className={classes.valueReq}>10/10/2021</div>
                    <div className={classes.titleReq}>Tiền lương</div>
                    <div className={classes.valueReq}>5000$</div>
                    <div className={classes.titleReq}>Giới tính</div>
                    <div className={classes.valueReqList}>Người mẫu nam</div>
                    <div className={classes.valueReqList}>Người mẫu nữ</div>
                    <div className={classes.valueReqList}>Khác</div>
                </Grid>
                <Grid item xs={5.5} >
                    <div className={classes.titleReq}>Thời gian kết thúc</div>
                    <div className={classes.valueReq}>12/10/2021</div>
                    <div className={classes.titleReq}>Phong cách</div>
                    <div className={classes.valueReqList}>Artist</div>
                    <div className={classes.valueReqList}>Nhẹ nhàng</div>
                </Grid>
            </Grid>
        </Box>
    );
}