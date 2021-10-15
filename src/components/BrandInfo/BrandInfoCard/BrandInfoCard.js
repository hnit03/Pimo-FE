import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/BrandInfoCard/brandInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';

export default function StyleCard({ model }) {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>
            <Grid container spacing={2} className={classes.pageLeft_Style}>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={3.5} >
                    <div>
                        <img className={classes.logoBrand} src={"https://localbrand.vn/wp-content/uploads/2021/04/logo-thuong-hieu-chanel-brand.jpg"} />
                    </div>
                </Grid>
                <Grid item xs={0.3} >
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.model_info_Style}>
                        <h1 className={classes.title}>CHANEL</h1>
                        <ul className={classes.ul}>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <WorkIcon className={classes.icon} /><span className={classes.text} >Fashion</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <MailIcon className={classes.icon} /><span className={classes.text} >thanhvi@chanel.com</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocalPhoneIcon className={classes.icon} /><span className={classes.text} >0623-456-789</span>
                            </li>
                            <li style={{ display: 'flex', }} className={classes.li}>
                                <LocationOn className={classes.icon} /><span className={classes.text} >Paris, French</span>
                            </li>
                        </ul>
                        <Divider className={classes.divider_Style} >Mô tả</Divider>
                    </div>
                </Grid>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={10} >
                    <div className={classes.textLocation}>
                        Chanel là tên thông dụng của một hãng thời trang Pháp, đóng tại thủ đô Paris được Coco Chanel (1883 - 1971) sáng lập. Theo Forbes, công ty Chanel thuộc sở hữu của Alain Wertheimer và Gerard Wertheimer, cả hai là cháu của đối tác ban đầu (1924) của Chanel Pierre Wertheimer.

                        Được thành lập từ những năm 1909-1910 do Gabrielle "Coco" Chanel sáng lập, cái tên Chanel được biết đến như một nhãn hiệu thời trang cao cấp đáng tự hào nhất của ngành công nghiệp thời trang nước Pháp.
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}