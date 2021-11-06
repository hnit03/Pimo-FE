import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/styleCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ModelProfile from '../../../components/modelInfoPage/ModelProfile/ModelProfile'
import SectionPills from '../../../components/modelInfoPage/SectionPills/SectionPills';

export default function StyleCard({ model }) {
   const classes = useStyles();
   var birthDay = new Date(model.model[0].model.dateOfBirth)

   return (
      <Box sx={{ flexGrow: 1 }} className={classes.box}>
         <Grid container spacing={2} className={classes.pageLeft_Style}>
            <Grid item xs={0.5} >
            </Grid>
            <Grid item xs={4.5} >
               <div>
                  <img className={classes.avatar_image_Style} src={model.model[0].model.avatar} alt="vioho" />
               </div>
            </Grid>
            <Grid item xs={6.5}>
               <div className={classes.model_info_Style}>
                  <ModelProfile
                     aboutMe={model.model[0].model.description}
                     name={model.model[0].model.name}
                     instagram={model.model[0].model.instagram}
                     twitter={model.model[0].model.twitter}
                     facebook={model.model[0].model.facebook}
                     modelType={`Người mẫu ${model.model[0].genderName} `}
                     location={`${model.model[0].model.district}, ${model.model[0].model.country}`}
                     dateOfBỉrth={birthDay.toLocaleDateString("vi-VN")}
                  />
               </div>
            </Grid>
         </Grid>
      </Box>
   );
}