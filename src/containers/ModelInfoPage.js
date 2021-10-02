import React from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelInfoPageStyle';
import Divider from '@mui/material/Divider';
import TravelNotices from "../components/modelInfoPage/TravelNotices/TravelNotices";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../assets/img/VioHo.jpeg';
import ModelProfile from "../components/modelInfoPage/ModelProfile/ModelProfile";
import SectionPills from '../components/modelInfoPage/SectionPills/SectionPills';

const aboutMe = (
    `My instagram page: EcemUzgor1

    I am a very patient, creative and hard-working person. My future goals are to participate in catwalks and photo shoots made by creative stylists and photographers. I am also very interested in singing, playing violin/guitar.
    
    Top Model of The World'16 - Miss Turkey
    
    Miss Asia Pacific World Beauty Contest'12 (Top 10) / Korea - Miss Turkey`
);
const name = (
    `Vio Hồ`
);
const modelType = (
    `Male Model`
);
const location = (
    `Ho Chi Minh City, Viet Nam`
);


export default function ModelInfoPage() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className={classes.cover_image_Style} src={image} alt="3NguoiMau" />
                </Grid>
                <Grid container spacing={2} className={classes.pageLeft_Style}>
                <Grid item xs={4} >
                    <div>
                    <img className={classes.avatar_image_Style} src="https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-dfe4a6.jpeg" alt="vioho" />
                    <div className={classes.travelNotices_div_Style}>
                        <Divider className={classes.divider_Style}>Travel Notices</Divider>
                        <TravelNotices />
                        <TravelNotices />
                    </div>
                    </div>
                </Grid>
                <Grid item xs={7.5}>
                    <div className={classes.model_info_Style}>
                        <ModelProfile
                            aboutMe={aboutMe}
                            name={name}
                            modelType={modelType}
                            location={location}
                        />
                        <SectionPills />
                    </div>
                </Grid>
                </Grid>
                <Grid item xs={8}>

                </Grid>
            </Grid>
        </Box>
    );
}