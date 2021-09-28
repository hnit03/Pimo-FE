import React from 'react';
import useStyles from './style';
import ModelInfo from './ModelInfo';
import Divider from '@mui/material/Divider';
import TravelNotices from "./TravelNotices";
import SectionPills from './SectionPills';

export default function ModelProfile() {
    const classes = useStyles();

    return (
        <>
            <img className={classes.cover_image_Style} src="https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-33ebfd.jpeg" alt="3NguoiMau" />
            <ModelInfo/>
            <SectionPills />
            <div className={classes.travelNotices_div_Style}>
            <Divider className={classes.divider_Style}>Travel Notices</Divider>
              <TravelNotices/>
              <TravelNotices/>
            </div>
        </>
    );
}