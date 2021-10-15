import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/listEventStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EventCard from '../EventCard/EventCard';
export default function ListEvent({ model }) {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={3} className={classes.pageLeft_Style}>
                <Grid item xs={12} >
                    <h1 className={classes.title}>DANH SÁCH CHIẾN DỊCH</h1>
                </Grid> 
                <Grid item xs={0.6} >
                </Grid> 
                <Grid item xs={3.6} >
                    <EventCard 
                    bool={true} 
                    value="Catwalk: tuần lễ thời trang"
                    dayTime="10/10/2021 - 9:00"
                    location="Paris, French"
                    img = "https://image.bnews.vn/MediaUpload/Org/2019/03/02/143959_bieu-tuong-nganh-thoi-trang-the-gioi-karl-lagerfeld-qua-doi.jpg"
                    />
                </Grid> 
                <Grid item xs={3.6} >
                    <EventCard 
                    bool={false} 
                    value="Quảng bá dòng nước hoa mới COCO CHANEL"
                    dayTime="10/10/2021 - 9:00"
                    location="Paris, French"
                    img = "https://a.ipricegroup.com/media/Ann/Chanel_Mademoiselle_Eau_Privee_50ml.jpeg"/>
                </Grid> 
                <Grid item xs={3.6}>
                    <EventCard  
                    bool={true} 
                    value="Quảng bá dòng nước hoa mới N5' CHANEL"
                    dayTime="10/10/2021 - 9:00"
                    location="Paris, French"
                    img = "https://www.chanel.com/images//t_one//w_0.67,h_0.67,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1920/n-5-the-bath-tablets-factory-5-collection-limited-edition-10x0-60oz--packshot-default-105607-8840508309534.jpg"/>
                </Grid> 
                <Grid item xs={0.6} >
                </Grid> 
            </Grid>
        </Box>
    );
}