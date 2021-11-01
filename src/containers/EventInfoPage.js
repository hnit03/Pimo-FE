import React, { useEffect } from 'react';
import useStyles from '../assets/jss/material-kit-pro-react/components/EventInfoPage/eventInfoCardStyle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionFooter from "../components/Footer/SectionFooter";
import InfoDetails from '../components/EventInfoPage/InfoDetails/Infodetails';
import RequirementInfo from '../components/EventInfoPage/RequirementInfo/RequirementInfo';
import BrandCard from '../components/EventInfoPage/BrandCard/BrandCard';
import DescriptionCard from '../components/EventInfoPage/DescriptionCard/DescriptionCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getInfo } from "../actions/castings";
export default function EventInfoPage(props) {

   const classes = useStyles();
   console.log('viiii ', props.match.params.id)
   window.scrollTo(0, 0);

   const casting = useSelector((state) => state.castings);
   console.log('thanhhviss', casting.casting);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getInfo(props.match.params.id));
   }, [])

   return (
      <>
         {
            <div>
               <Box sx={{ flexGrow: 1 }} className={classes.body}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} >
                        {
                           casting.casting !== undefined
                              ?
                              <InfoDetails
                                 img={casting.casting.poster}
                                 castingName={casting.casting.name}
                                 castingAddress={casting.casting.address}
                                 date={casting.casting.closeTime} /> : null
                        }
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.body1}>
                           <div>
                              {
                                 casting.casting !== undefined
                                    ?
                                    <RequirementInfo
                                       startDate={(new Date(casting.casting.openTime).toLocaleDateString("vi-VN", {
                                          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                       }))}
                                       endDate={(new Date(casting.casting.closeTime).toLocaleDateString("vi-VN", {
                                          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                       }))}
                                       salary={casting.casting.salary}
                                       model={casting.listGender}
                                       style={casting.listStyle}
                                    /> : null
                              }
                           </div>
                           <div className={classes.div}></div>
                           <div>
                              {
                                 casting.casting !== undefined
                                    ? <BrandCard
                                       id={casting.brand.brand.id}
                                       img={casting.brand.brand.logo}
                                       brandName={casting.brand.brand.name}
                                       brandEmail={casting.brand.brand.mail}
                                       brandPhone={casting.brand.brand.phone}
                                       brandAddress={casting.brand.brand.address}
                                       brandWorks={casting.brand.name}
                                    /> : null
                              }</div>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        {
                           casting.casting !== undefined
                              ?
                              <DescriptionCard
                                 description={casting.casting.description}
                                 request={casting.casting.request}
                              /> : null
                        }

                     </Grid>
                  </Grid>
               </Box>
               <SectionFooter />
            </div >
         }
      </>
   );
}
