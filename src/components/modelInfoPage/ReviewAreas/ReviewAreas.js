import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
// core components
import Divider from '@mui/material/Divider';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Media from "../Media/Media.js";
import Paginations from "../Pagination/Pagination.js";
import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";
import avatar from "../../../assets/img/faces/avatar.jpg";
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/reviewAreasStyle';

import marc from "../../../assets/img/faces/marc.jpg";


const useStylesOfTemplate = makeStyles(style);

export default function ReviewAreas({ reviewList }) {

   const classes = useStylesOfTemplate();
   const classesRreview = useStyles();

   console.log(reviewList);

   return (
      <div className={classesRreview.box}>
         <div className="cd-section" id="contentAreas">

            <GridContainer>
               <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={classes.mlAuto + " " + classes.mrAuto}
               >
                  <div>
                     <h1 className={classesRreview.h1}>
                        ĐÁNH GIÁ CỦA CÁC NHÃN HÀNG
                     </h1>
                     <Divider className={classesRreview.divider_Style} ></Divider>
                     {
                        (reviewList.reviewList !== undefined) ? (
                           (reviewList.reviewList.length > 0) ? (
                              (reviewList.reviewList.map(review => (
                                 <Media
                                    avatar={review.brand.logo}
                                    title={
                                       <span>
                                          <large>{review.brand.name}</large> <small style={{ color: '#b0b3b8' }}>- {
                                             new Date(review.review.timeOfReview).toLocaleDateString("vi-VN", { year: 'numeric', month: 'long', day: 'numeric' })
                                             + " lúc "
                                             + new Date(review.review.timeOfReview).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })
                                          }</small>
                                       </span>
                                    }
                                    body={
                                       <span>
                                          <p style={{ wordBreak: 'break-all' }}>
                                             {review.review.review1}
                                          </p>
                                       </span>
                                    }
                                 />
                              )))
                           ) : null
                        ) : null
                     }
                     <div>
                        <Paginations
                           className={
                              classes.textCenter + " " + classes.justifyContentCenter
                           }
                           pages={[
                              { text: "«" },
                              { text: 1 },
                              { text: 2 },
                              { active: true, text: 3 },
                              { text: 4 },
                              { text: 5 },
                              { text: "»" },
                           ]}
                           color="primary"
                        />
                     </div>
                  </div>
               </GridItem>
            </GridContainer>
         </div>
      </div>
   );
}
