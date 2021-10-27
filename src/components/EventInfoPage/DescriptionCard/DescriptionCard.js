import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/EventInfoPage/descriptionCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function DescriptionCard(props) {
   const classes = useStyles();
   const bool=true;
   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={1} className={classes.pageLeft_Style}>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
                <h1 className={classes.titleCard}>MÔ TẢ CÔNG VIỆC</h1>
                <div className={classes.valueReq}>{props.description}</div>
            </Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
                <Divider className={classes.divider_Style} ></Divider>
            </Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={0.5} ></Grid>
            <Grid item xs={11} >
                <h1 className={classes.title}>YÊU CẦU CHI TIẾT DÀNH CHO NGƯỜI MẪU ỨNG TUYỂN</h1>
                {/* <div className={classes.valueReq}>{props.request}</div> */}
                <div className={classes.valueReq}>vòng 1: 33,47<br/>Vòng 2: 20,38<br/>Vòng 3: 38,45<br/>Màu da: Đen<br/>Màu tóc: Nâu, Đỏ, Tím, Vàng</div>
            </Grid>
         </Grid>
      </Box>
   );
}