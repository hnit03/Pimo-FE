import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
// core components
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Media from "../Media/Media.js";
import Paginations from "../Pagination/Pagination.js";
import Reply from "@material-ui/icons/Reply";
import Button from "../CustomButtons/Button";
import CustomInput from "../CustomInput/CustomInput.js";
import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/reviewAreasStyle';
import avatar from "../../../assets/img/faces/avatar.jpg";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { checkOwner } from '../../../actions/castings';
import { postReviews, getReviews } from '../../../actions/reviews';
import Pagination from "@mui/material/Pagination";

const useStylesOfTemplate = makeStyles(style);

export default function ReviewAreas({ modelId }) {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const classes = useStylesOfTemplate();
   const classesRreview = useStyles();
   const [photo, setPhoto] = useState('')
   const isOwned = useSelector((state) => state.castings);
   const [check, setCheck] = useState(false);
   const [review, setReview] = useState('');
   const reviews = useSelector((state) => state.reviews);
   const [reviewsList, setReviewsList] = useState([]);
   const [pageNo, setPageNo] = useState(1);

   useEffect(() => {
      if (Cookies.get('name') !== undefined) {
         setName(Cookies.get('name'));
         setPhoto(Cookies.get('logo'))
      }
   }, [name])

   useEffect(() => {
      dispatch(getReviews(modelId, pageNo))
      dispatch(checkOwner(Cookies.get('jwt'), modelId));
   }, [])

   useEffect(() => {
      setCheck(isOwned);
   }, [isOwned])

   useEffect(() => {
      setReviewsList(reviews);
   }, [reviews])

   const handleSubmit = async (e) => {
      e.preventDefault();
      const jwt = Cookies.get('jwt')
      const axiosConfig = {
         headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'authorization': 'Bearer ' + jwt
         }
      };
      const postData = {
         review: review,
         modelId: modelId
      }
      await dispatch(postReviews(postData, axiosConfig));
      dispatch(getReviews(modelId, pageNo))
      setReview('')
   }

   const handleChange = (event, value) => {
      setPageNo(value)
      dispatch(getReviews(modelId, value))
   }

   const CssTextField = styled(TextField)({
      '& label.Mui-focused': {
         color: '#fc7198',
      },
      '& .MuiInput-underline:after': {
         borderBottomColor: '#fc7198',
      },
      '& .MuiOutlinedInput-root': {
         '& fieldset': {
            borderColor: 'red',
         },
         '&:hover fieldset': {
            borderColor: 'yellow',
         },
         '&.Mui-focused fieldset': {
            borderColor: '#fc7198',
         },
      },
   });

   return (
      <div className={classesRreview.box}>
         <div className="cd-section" id="contentAreas">

            <GridContainer>
               <GridItem
                  xs={1}

               />
               <GridItem
                  xs={11}
                  sm={11}
                  md={11}
                  className={classes.mlAuto + " " + classes.mrAuto}
               >
                  <div>
                     <h1 className={classesRreview.h1}>
                        NHẬN XÉT NGƯỜI MẪU
                     </h1>
                     <Divider className={classesRreview.divider_Style} ></Divider>
                     {
                        (reviewsList.reviewList !== undefined) ? (
                           (reviewsList.reviewList.length > 0) ? (
                              (reviewsList.reviewList.map(review => (
                                 <Media
                                    className={classesRreview.media}
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
                        <Pagination
                           className={
                              classes.textCenter + " " + classes.justifyContentCenter
                           }
                           onChange={handleChange}
                           defaultPage={parseInt(pageNo)}
                           count={reviewsList.totalPage}
                           showFirstButton
                           showLastButton />
                        {/* <Paginations
                           className={
                              classes.textCenter + " " + classes.justifyContentCenter
                           }
                           pages={[
                              { text: "«" },
                              { active: true, text: 1 },
                              { text: 2 },
                              // { text: 3 },
                              // { text: 4 },
                              // { text: 5 },
                              { text: "»" },
                           ]}
                           color="primary"
                        /> */}
                     </div>
                     {check === true ? (
                        name === '' ?
                           null
                           :
                           (<>
                              <span className={classesRreview.Name}>{name}</span>
                              <Media
                                 avatar={photo}
                              />
                              <div className={classesRreview.vi}>

                                 <TextField
                                    className={classesRreview.cmt}
                                    id="standard-multiline-static"
                                    label=""
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    placeholder="Chia sẻ suy nghĩ của bạn......"
                                    onChange={(e) => setReview(e.target.value)}
                                    value={review}
                                 />
                              </div>
                              <Button variant="outlined" onClick={handleSubmit}>Chia sẻ</Button>
                           </>
                           )) : null
                     }

                     {/* <Media
               
              avatar={avatar}
              body={
                <CustomInput
                  id="logged"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 6,
                    placeholder: " Write some nice stuff or nothing...",
                  }}
                />
              }
              footer={
                <Button color="primary" className={classes.floatRight}>
                  <Reply /> Reply
                </Button>
              }
            /> */}



                  </div>
               </GridItem>
            </GridContainer>
         </div>
      </div>
   );
}
