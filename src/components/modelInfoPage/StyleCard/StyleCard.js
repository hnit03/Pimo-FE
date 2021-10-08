import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/styleCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicChips from "../Chip/Chip";
import Divider from '@mui/material/Divider';
import TravelNotices from "../../../components/modelInfoPage/TravelNotices/TravelNotices";
import image from '../../../assets/img/VioHo.jpeg';
import ModelProfile from '../../../components/modelInfoPage/ModelProfile/ModelProfile'
import SectionPills from '../../../components/modelInfoPage/SectionPills/SectionPills';
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
const dateOfBỉrth = (
    `10/2/1994`
);

export default function StyleCard(props) {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={2} className={classes.pageLeft_Style}>
                    <Grid item xs={0.5} >
            
                        </Grid>
                        <Grid item xs={4.5} >
                            <div>
                                <img className={classes.avatar_image_Style} src="https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-dfe4a6.jpeg" alt="vioho" />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.model_info_Style}>
                                <ModelProfile
                                    aboutMe={aboutMe}
                                    name={name}
                                    modelType={modelType}
                                    location={location}
                                    dateOfBỉrth={dateOfBỉrth}
                                />
                                {/* <SectionPills /> */}
                            </div>
                        </Grid>
                    </Grid>
        </Box>
    );
}