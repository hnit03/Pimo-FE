import React, { useEffect } from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/attributeCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardImage1 from '../CardImage/CardImage';
import Button from '@mui/material/Button';
import BasicChips from "../Chip/Chip";
import SectionContent from "../SectionPills/SectionContent";
import Divider from '@mui/material/Divider';
var listBodyAttributes =
   [{ name: "Chiều cao", value: "185 cm" },
   { name: "Cân nặng", value: "49 kg" },
   { name: "Vòng Ngực", value: "89 cm" },
   { name: "Vòng Hông", value: "58 cm" },
   { name: "Vòng Mông", value: "91 cm" },
   { name: "Size giày", value: "38" }];

var listBodyMeasurements =
   [{ name: "Màu da", value: "Vàng" },
   { name: "Màu mắt", value: "Nâu" },
   { name: "Độ dài tóc", value: "Ngang vai" },
   { name: "Màu tóc", value: "Vàng sáng" },
   { name: "Hình xăm", value: "Không" },];

var listModelDetails =
   [{ name: "Age", value: "27" },
   { name: "Date of birth", value: "10/2/1994" },
   { name: "Gifted", value: "Singing" },
   { name: "Adress", value: "No. 269 Lien Phuong Street, District 9, Ho Chi Minh City" }];
export default function AttributeCard({ model}) {
   const classes = useStyles();

   const [modelStyle, setModelStyle] = React.useState([]);

   useEffect(() => {
      model.styleList.map((style) => {
         const styleName = style.name
         setModelStyle(state => [styleName, ...state])
      })
   }, [])

   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={1}>
            <Grid item xs={0.5}>
            </Grid>
            <Grid item xs={6.5}>
               <Grid container spacing={1}>
                  <Grid item xs={12}>
                     <h1 className={classes.h1}>THÔNG TIN CHI TIẾT</h1>
                     <Divider className={classes.divider_Style} >Phong cách</Divider>
                  </Grid>
                  <Grid item xs={12}>
                     <BasicChips label={modelStyle} />
                     <Divider className={classes.divider_Style} >Bảng số đo và thông tin chi tiết</Divider>
                  </Grid>
                  <Grid item xs={3.5}>
                     <SectionContent list1={listBodyMeasurements} />
                  </Grid>
                  <Grid item xs={3.5}>
                     <SectionContent list1={listBodyAttributes} />

                  </Grid>
                  <Grid item xs={5}>
                     <SectionContent list1={listModelDetails} />
                  </Grid>



               </Grid>

            </Grid>
            <Grid item xs={4.5} >
               <div>
                  <img className={classes.avatar_image_Style} src="https://image-us.eva.vn/upload/4-2020/images/2020-12-14/1-1607917452-189-width600height901.jpg" alt="vioho" />
               </div>
            </Grid>

         </Grid>
      </Box>
   );
}