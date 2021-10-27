import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/EventInfoPage/eventInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import InfoDetails from '../components/EventInfoPage/InfoDetails/Infodetails';
import RequirementInfo from '../components/EventInfoPage/RequirementInfo/RequirementInfo';
import BrandCard from '../components/EventInfoPage/BrandCard/BrandCard';
import DescriptionCard from '../components/EventInfoPage/DescriptionCard/DescriptionCard';
export default function EventInfoPage(props) {

   const classes = useStyles();
   const req = 'vòng 1: 33,47<br/>Vòng 2: 20,38<br/>Vòng 3: 38,45<br/>Màu da: Đen<br/>Màu tóc: Nâu, Đỏ, Tím, Vàng'
   const listModels=[
      "Người mẫu nam",
      "Người mẫu nữ",
      "Khác",
   ]
   const listStyles=[
      "Nghệ thuật",
      "Nhẹ nhàng",
      "Phong cảnh",
   ]
   return (
      <>
         {
            <div>
               <Box sx={{ flexGrow: 1 }} className={classes.body}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} >
                        <InfoDetails
                           castingName="CALKWALK BỘ SƯU TẬP MÙA ĐÔNG - NHÀ THIẾT KẾ VI"
                           castingAddress="123 Võ Thị 6, Quận 1, TPHCM"
                           bool={true} //xét time
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.body1}>
                           <div><RequirementInfo 
                              startDate="15/11/2021"
                              endDate="20/11/2021"
                              salary="500$"
                              model={listModels}
                              style={listStyles}
                           /></div>
                           <div><BrandCard
                              img="https://cdn.elly.vn/uploads/2021/01/06205934/y-nghia-logo-thuong-hieu-chanel.png"
                              brandName="Chanel"
                              brandEmail="chanel@gmail.com"
                              brandPhone="0377793371"
                              brandAddress='USA'
                              brandWorks="fashion"
                           /></div>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <DescriptionCard 
                           description="hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel hello welcome to my chanel"
                           request={req}
                        />
                     </Grid>
                  </Grid>
               </Box>
               <SectionFooter />
            </div >
         }
      </>
   );
}
