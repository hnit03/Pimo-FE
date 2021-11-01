import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/BrandInfoCard/brandInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import BrandInfoCard from '../components/BrandInfo/BrandInfoCard/BrandInfoCard';
import ListEvent from '../components/BrandInfo/ListEvent/ListEvent';
import { getInfo } from '../actions/brands';
import { getInfoByBrandID } from '../actions/castings';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BrandInfo from "../components/BrandInfoPage/BrandInfo";
import YouTube from "../components/CardImage/vi";

export default function BrandInfoPage(props) {
   console.log('hihi ',props.match.params.id)
   window.scrollTo(0, 0);

   const brand = useSelector((state) => state.brands);
   const castings = useSelector((state) => state.castings);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getInfo(props.match.params.id));
   }, [])
   useEffect(() => {
      dispatch(getInfoByBrandID(props.match.params.id));
   }, [])
   const classes = useStyles();
   document.body.style.backgroundImage = 'none';
   return (
      <>
         {
            <div>
               <Box sx={{ flexGrow: 1 }} className={classes.body}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} >
                        {
                           (brand.brand !== undefined) ? (
                              <BrandInfoCard brand={brand} />
                           ) : null
                        }
                     </Grid>
                     <Grid item xs={12}>
                        <ListEvent castings={castings}/>
                     </Grid>
                  </Grid>
               </Box>
               <SectionFooter />
               <YouTube/>
            </div >
         }
      </>
   //    <div>
   //    <BrandInfo pageOffset={props.match.params.id}/>
   //    <SectionFooter />
   // </div>
   );
}
