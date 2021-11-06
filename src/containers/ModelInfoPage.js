import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/ModelInfoPage/modelInfoPageStyle';
import Divider from '@mui/material/Divider';
import ListTravelNotices from "../components/modelInfoPage/TravelNotices/ListTravelNotices";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CenterTabs from '../components/modelInfoPage/Tabs/tabs'
import ListCardGallery from '../components/modelInfoPage/ListCardGallery/ListCardGallery';
import SectionFooter from "../components/Footer/SectionFooter";
import AttributeCard from '../components/modelInfoPage/AttributeCard/AttributeCard';
import StyleCard from '../components/modelInfoPage/StyleCard/StyleCard';
import ReviewAreas from '../components/modelInfoPage/ReviewAreas/ReviewAreas'
import { withRouter } from "react-router";
import { getInfo } from '../actions/models';
import { getReviews } from '../actions/reviews';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function ModelInfoPage(props) {
   const model = useSelector((state) => state.models);
   const reviews = useSelector((state) => state.reviews);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getInfo(props.match.params.id));
      dispatch(getReviews(props.match.params.id, 1));
   }, [])

   const classes = useStyles();
   return (
      <>
         {
            (model.model !== undefined) ? (
               <div>
                  <Box sx={{ flexGrow: 1 }} className={classes.body}>
                     <Grid container spacing={2}>
                        <Grid item xs={12} >
                           <StyleCard model={model} />
                        </Grid>
                        <Grid item xs={12}>
                           <AttributeCard model={model} />
                        </Grid>
                        <Grid item xs={12} >
                           <ListTravelNotices model={model} />
                        </Grid>
                        <Grid item xs={12} >
                           <CenterTabs model={model} />
                        </Grid>
                        <Grid item xs={12} >
                           <ListCardGallery model={model} />
                        </Grid>
                        <Grid item xs={12} >
                           <ReviewAreas reviewList={reviews} />
                        </Grid>


                     </Grid>
                  </Box>
                  <SectionFooter />
               </div >
            ) : null
         }
      </>
   );
}
