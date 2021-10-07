import React, { useEffect } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import { Button } from "@material-ui/core";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import Rose from "../Typography/Rose";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from "../CardImage/CardImage";
import { useDispatch } from 'react-redux';
import { getModels } from '../../actions/models';
import { useSelector } from 'react-redux';

import {
   searchBySexValue,
   searchByStyleValue,
   searchByStyleMoreValue,
   searchBySkinColorValue
} from "./CheckBoxData";
import {
   searchByTattooValue,
} from "./RadioData.js";
import { itemData } from './ImageData';

const useStyles = makeStyles(styles);

export default function StandardImageList() {
   const classes = useStyles();
   const [viewMore, setViewMore] = React.useState(false);
   const [checkSearchHeightMin, setCheckSearchHeightMin] = React.useState();
   const [checkSearchAgeMin, setCheckSearchAgeMin] = React.useState();
   const [checkSearchHeightMax, setCheckSearchHeightMax] = React.useState();
   const [checkSearchAgeMax, setCheckSearchAgeMax] = React.useState();
   const [checkHeight, setCheckHeight] = React.useState(false);
   const [checkAge, setCheckAge] = React.useState(false);
   const [pageNo, setPageNo] = React.useState(1);

   const models = useSelector((state) => state.models);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getModels(pageNo));
   }, [pageNo]);

   const handleChange = () => {
      setViewMore(!viewMore);
   };

   const handleChangePage = (event, value) => {
      setPageNo(value)
      window.scrollTo(0, 0)
   };

   const handleCheckHeight = () => {
      if (parseInt(checkSearchHeightMin) > parseInt(checkSearchHeightMax)) {
         setCheckHeight(true);
      } else if (parseInt(checkSearchAgeMin) > parseInt(checkSearchAgeMax)) {
         setCheckAge(true);
      } else if (parseInt(checkSearchAgeMin) < parseInt(checkSearchAgeMax)) {
         setCheckAge(false);
      } else {
         setCheckHeight(false);
      }
   };

   return (
      <div className={classes.containerFilterAndResult}>
         <div
            className={classes.container}
            style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
         >
            <GridContainer>
               <GridItem xs={12} sm={4} md={10}>
                  <div className={classes.containerTextAndIconSearch}>
                     <TextField
                        id="standard-basic"
                        label="Nhập để tìm kiếm"
                        variant="standard"
                        className={classes.searchTextField}
                     />

                     <SearchIcon
                        onClick={() => handleCheckHeight()}
                        className={classes.searchIcon}
                     />
                  </div>

                  <div className={classes.containerTextFilterAndDelete}>
                     <div className={classes.filterText}>
                        <span style={{ fontSize: "1.5rem" }}> Bộ lọc</span>
                        <span>
                           <FilterAltOutlinedIcon className={classes.filterIcon} />
                        </span>
                     </div>

                     <span s className={classes.deleteText}>
                        Xóa
                     </span>
                  </div>

                  <p className={classes.titleSearch}>Tìm kiếm theo giới tính</p>
                  <FormGroup className={classes.containerCheckBox}>
                     {searchBySexValue.map((value, index) => (
                        <FormControlLabel
                           control={
                              <Checkbox

                                 className={classes.checkBox}
                              />
                           }
                           label={
                              <p className={classes.customLabelCheckBox}>{value.name}</p>
                           }
                        />
                     ))}
                  </FormGroup>

                  <p className={classes.titleSearch}>Tìm kiếm theo phong cách</p>
                  <FormGroup className={classes.containerCheckBox} >
                     {searchByStyleValue.map((value, index) => (
                        <FormControlLabel
                           control={<Checkbox className={classes.checkBox} />}
                           label={
                              <p className={classes.customLabelCheckBox}>{value.name}</p>
                           }
                        />
                     ))}
                     {viewMore && (
                        <>
                           {searchByStyleMoreValue.map((value, index) => (
                              <FormControlLabel
                                 control={<Checkbox className={classes.checkBox} />}
                                 label={<p className={classes.customLabelCheckBox}>{value.name}</p>}
                              />
                           ))}
                        </>
                     )}
                  </FormGroup>

                  <ul className={classes.containerViewMore}>
                     <li style={{ display: "flex" }}>
                        {!viewMore ? (
                           <ArrowDropDownIcon
                              className={classes.btnViewMore}
                              onClick={() => handleChange()}
                           />
                        ) : (
                           <ArrowDropUpIcon
                              className={classes.btnViewMore}
                              onClick={() => handleChange()}
                           />
                        )}
                        {!viewMore ? (
                           <h4
                              style={{ margin: 0 }}
                              className={classes.btnViewMore}
                              onClick={() => handleChange()}
                           >
                              Xem thêm
                           </h4>
                        ) : (
                           <h4
                              style={{ margin: 0 }}
                              className={classes.btnViewMore}
                              onClick={() => handleChange()}
                           >
                              Xem ít hơn
                           </h4>
                        )}
                     </li>
                  </ul>


                  <p className={classes.titleSearch}>Tìm kiếm theo màu da</p>
                  <FormGroup className={classes.containerCheckBox}>
                     {searchBySkinColorValue.map((value, index) => (
                        <FormControlLabel
                           control={
                              <Checkbox className={classes.checkBox} />
                           }
                           label={<p className={classes.customLabelCheckBox}>{value.name}</p>}
                        />
                     ))}
                  </FormGroup>

                  <p className={classes.titleSearch}>Tìm kiếm theo hình xăm</p>
                  <FormControl className={classes.formControl}>
                     <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        className={classes.containerRadioGroup}
                     >
                        {searchByTattooValue.map((value, index) => (
                           <FormControlLabel
                              value="12"
                              control={
                                 <Radio
                                    sx={{
                                       "&.Mui-checked": {
                                          color: "#f64aa4a8",
                                       },
                                    }}
                                    style={{
                                       padding: 2,
                                       marginRight: "0.6rem",
                                    }}
                                 />
                              }
                              label={
                                 <p className={classes.customLabelRadio}>{value.name}</p>
                              }
                           />
                        ))}
                     </RadioGroup>
                  </FormControl>


                  <p className={classes.titleSearch}>Tìm kiếm theo chiều cao (cm)</p>
                  <div className={classes.containerSearchHeight_Age}>
                     <TextField
                        id="standard-basic"
                        label="Tối thiểu"
                        variant="outlined"
                        size="small"
                        className={classes.searchHeight}
                        type="number"
                        helperText={
                           checkHeight
                              ? "Chiều cao tối thiểu phải nhỏ hơn chiều cao tối đa"
                              : ""
                        }
                        onChange={(e) => setCheckSearchHeightMin(e.target.value)}
                     />
                     <div style={{ marginLeft: "1rem" }}>
                        <TextField
                           id="standard-basic"
                           label="Tối đa"
                           variant="outlined"
                           size="small"
                           className={classes.searchHeight}
                           type="number"
                           onChange={(e) => setCheckSearchHeightMax(e.target.value)}
                        />
                     </div>
                  </div>

                  <p className={classes.titleSearch}>Tìm kiếm theo tuổi</p>
                  <div className={classes.containerSearchHeight_Age}>
                     <TextField
                        id="standard-basic"
                        label="Tối thiểu"
                        variant="outlined"
                        size="small"
                        className={classes.searchHeight}
                        type="number"
                        helperText={
                           checkAge ? "Tuổi tối thiểu phải nhỏ hơn tuổi tối đa" : ""
                        }
                        onChange={(e) => setCheckSearchAgeMin(e.target.value)}
                     />
                     <div style={{ marginLeft: "1rem" }}>
                        <TextField
                           id="standard-basic"
                           label="Tối đa"
                           variant="outlined"
                           size="small"
                           className={classes.searchHeight}
                           type="number"
                           helperText=""
                           onChange={(e) => setCheckSearchAgeMax(e.target.value)}
                        />
                     </div>
                  </div>
               </GridItem>
            </GridContainer>
         </div>


         <div
            className={classes.container}
            style={{
               borderLeft: "1px solid #cfcfcf ",
               float: "left",
               width: "100%",
               margin: 0,
               marginLeft: "-5%",
            }}
         >
            <GridContainer spacing={1}>
               {
                  (models.modelList !== undefined) ? (
                     (models.modelList.length > 0) ? (
                        models.modelList.map((model) => (
                           <GridItem xs={12} sm={4} md={3}>
                              <CardImage model={model} />
                           </GridItem>
                        ))
                     ) : (null)) : null

               }
               {/* <GridItem xs={12} sm={4} md={3}>
                  <CardImage />
               </GridItem>
               <GridItem xs={12} sm={4} md={3}>
                  <CardImage />
               </GridItem>
               <GridItem xs={12} sm={4} md={3}>
                  <CardImage />
               </GridItem>
               <GridItem xs={12} sm={4} md={3}>
                  <CardImage />
               </GridItem>
               <GridItem xs={12} sm={4} md={3}>
                  <CardImage />
               </GridItem> */}
               {/* {itemData.map((image, index) => (
            <GridItem key={index} xs={12} sm={4} md={3}>
              <a style={{ textDecoration: "none" }} href="/how-it-works">
                <Card blog>
                  <CardHeader image>
                    <img src={image.img} alt="..." height="300vh" />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${image.img})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>

                  <CardBody className={classes.cardBody}>
                    <Rose>
                      <h className={classes.cardCategory}>Okìki</h>
                    </Rose>
                 <span style={{display:'flex',  marginTop: '0.3rem' }}>  
                      <FontAwesomeIcon style={{marginTop:'0.2rem'}} icon={faMapMarkerAlt} color='#4c4b4b'/>
                     <h4 className={classes.textAddress}>Quận 1</h4>             
                    </span>
                    <h4 className={classes.textMeasurements}>Số đo: 45-45-45</h4>
                  </CardBody>
                </Card>
              </a>
            </GridItem>
          ))} */}
            </GridContainer>
            <Stack spacing={2} style={{ alignItems: "center", marginBottom: "5%" }}>
               <Pagination onChange={handleChangePage} count={10} showFirstButton showLastButton />
            </Stack>
         </div>
      </div>
   );
}
