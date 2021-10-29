import React, { useEffect } from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/attributeCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicChips from "../Chip/Chip";
import SectionContent from "../SectionPills/SectionContent";
import Divider from '@mui/material/Divider';

export default function AttributeCard({ model }) {
   const classes = useStyles();
   const [modelStyle, setModelStyle] = React.useState([]);
   var name = 4.5;
   var value = 6.5;
   var name1 = 5;
   var value1 = 5;
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
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item xs={12}>
                     <SectionContent list1={model.listBodyPart} list2={model.listBodyAttr} name={name} value={value} />
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={4.5} >
               <div>
                  <img className={classes.avatar_image_Style} src={model.imageDetail.fileName} alt="vioho" />
               </div>
            </Grid>
         </Grid>
      </Box>
   );
}