import React from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelInfoPageStyle';
import Divider from '@mui/material/Divider';
import ListTravelNotices from "../components/modelInfoPage/TravelNotices/ListTravelNotices";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../assets/img/VioHo.jpeg';
import ModelProfile from "../components/modelInfoPage/ModelProfile/ModelProfile";
import SectionPills from '../components/modelInfoPage/SectionPills/SectionPills';
import ListCardGallery from '../components/modelInfoPage/ListCardGallery/ListCardGallery';
import SectionFooter from "../components/Footer/SectionFooter";
import AttributeCard from '../components/modelInfoPage/AttributeCard/AttributeCard';
import StyleCard from '../components/modelInfoPage/StyleCard/StyleCard';
import GalleryModal from '../components/modelInfoPage/GalleryModal/GalleryModal'

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
    `No. 269 Lien Phuong Street, District 9, Ho Chi Minh City`
);
var listLabel = [
    "Acting", "Unisex", "Bodypaint", "Cosplay", "Editorial", "Erotic",
    "Fashion", "Fetish", "Fit Modeling", "Fitness", "Glamour", "Hair/Makeup",
    "Lifestyle"];
    var listTop3Label = [
        "Acting", "Unisex", "Bodypaint"];

export default function ModelInfoPage() {
    const classes = useStyles();
    return (
        <>
        <Box sx={{ flexGrow: 1 }} className={classes.body}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <StyleCard  listLabel={listLabel}/> 
                </Grid>
                <Grid item xs={12} >
                    <GalleryModal/>
                </Grid>
                <Grid item xs={12}>
                    <AttributeCard listLabel={listLabel} list={listTop3Label}/>
                </Grid>
                <Grid item xs={12} >
                    <ListTravelNotices/>
                </Grid>
                <Grid item xs={12} >
                    <ListCardGallery />
                </Grid>
            </Grid>
        </Box>
        <SectionFooter />
        </>
    );
}