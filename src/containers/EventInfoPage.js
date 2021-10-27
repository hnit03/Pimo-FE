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
   const req = 'vòng 1: 33,47<br/>Vòng 2: 20,38<br/>Vòng 3: 38,45<br/>Màu da: Đen<br/>Màu tóc: Nâu, Đỏ, Tím, Vàng'
   const listModels = [
      "Người mẫu nam",
      "Người mẫu nữ",
      "Khác",
   ]
   // function getParsedDate(date) {
   //    date = String(date).split('T');
   //    var days = String(date[0]).split('-');
   //    console.log("alll", days);
   //    var hours = String(date[1]).split(':');
   //    var currentdate = new Date();
   //    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
   //       + "/" + currentdate.getFullYear() + " @ "
   //       + currentdate.getHours() + ":"
   //       + currentdate.getMinutes() + ":" + currentdate.getSeconds();
   //       console.log("curent", datetime);
   //    return [parseInt(days[0]), parseInt(days[1]) - 1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
   // }
   // var date = new Date(...getParsedDate('2021-10-16T14:57:00.273'));
   // console.log(getParsedDate(date));
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
                                 img={casting.casting.casting.poster}
                                 castingName={casting.casting.casting.name}
                                 castingAddress={casting.casting.casting.address}
                                 bool={true} /> : null
                        }
                        {/* <InfoDetails
                           img={casting.casting.casting.poster}
                           castingName={casting.casting.casting.name}
                           castingAddress={casting.casting.casting.address}
                           bool={true} //xét time
                        /> */}
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.body1}>

                           <div>
                              {
                                 casting.casting !== undefined
                                    ?
                                    <RequirementInfo
                                       startDate={(new Date(casting.casting.casting.openTime).toLocaleDateString("vi-VN", {
                                          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                       }))}
                                       endDate={(new Date(casting.casting.casting.closeTime).toLocaleDateString("vi-VN", {
                                          year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                       }))}
                                       salary={casting.casting.casting.salary}
                                       model={casting.casting.gender.genderName}
                                       style={casting.casting.style.name}
                                    /> : null
                              }
                           </div>
                           <div className={classes.div}></div>
                           <div>
                              {
                                 casting.casting !== undefined
                                    ? <BrandCard
                                       img={casting.casting.brand.logo}
                                       brandName={casting.casting.brand.name}
                                       brandEmail={casting.casting.brand.mail}
                                       brandPhone={casting.casting.brand.phone}
                                       brandAddress={casting.casting.brand.address}
                                       brandWorks="fashion"
                                    /> : null
                              }</div>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        {
                           casting.casting !== undefined
                              ?
                              <DescriptionCard
                                 description={casting.casting.casting.description}
                                 request={casting.casting.casting.request}
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
