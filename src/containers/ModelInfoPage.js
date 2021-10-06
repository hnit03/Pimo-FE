import React from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelInfoPageStyle';
import Divider from '@mui/material/Divider';
import TravelNotices from "../components/modelInfoPage/TravelNotices/TravelNotices";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../assets/img/VioHo.jpeg';
import ModelProfile from "../components/modelInfoPage/ModelProfile/ModelProfile";
import SectionPills from '../components/modelInfoPage/SectionPills/SectionPills';
import ListCardGallery from '../components/modelInfoPage/ListCardGallery/ListCardGallery';
import SectionFooter from "../components/Footer/SectionFooter";

const aboutMe = (
    `Tôi là một người rất kiên nhẫn, sáng tạo và làm việc chăm chỉ. Mục tiêu trong tương lai của tôi là tham gia các sàn diễn thời trang và các buổi chụp hình do các nhà tạo mẫu và nhiếp ảnh gia sáng tạo. Tôi cũng rất thích ca hát, chơi violin / guitar.`
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
var listLabel = [
    "Acting", "Art", "Bodypaint", "Cosplay", "Editorial", "Erotic",
    "Fashion", "Fetish", "Fit Modeling", "Fitness", "Glamour", "Hair/Makeup",
    "Lifestyle", "Lingerie"];


export default function ModelInfoPage() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className={classes.cover_image_Style} src={image} alt="3NguoiMau" />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} className={classes.pageLeft_Style}>
                    <Grid item xs={0.5} >
            
                        </Grid>
                        <Grid item xs={4.5} >
                            <div>
                                <img className={classes.avatar_image_Style} src="https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-dfe4a6.jpeg" alt="vioho" />
                                <div className={classes.travelNotices_div_Style}>
                                    <Divider className={classes.divider_Style}>Travel Notices</Divider>
                                    <TravelNotices />
                                    <TravelNotices />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.model_info_Style}>
                                <ModelProfile
                                    aboutMe={aboutMe}
                                    name={name}
                                    modelType={modelType}
                                    location={location}
                                    listLabel={listLabel}
                                />
                                <SectionPills />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <ListCardGallery/>
                </Grid>
            </Grid>
            <SectionFooter />
        </Box>
    );
}