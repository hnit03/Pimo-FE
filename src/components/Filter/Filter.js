import React, { useEffect, useCallback } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
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
import CardImage from "../CardImage/CardImage";
import { useDispatch } from 'react-redux';
import { getModels, searchModels } from '../../actions/models';
import { getStyles } from '../../actions/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
import {
   listTop3Label
} from "./Top3StyleData";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles(styles);

export default function StandardImageList(props) {
   const classes = useStyles();
   const [viewMore, setViewMore] = React.useState(false);
   const [searchName, setSearchName] = React.useState('');
   const [checkSearchHeightMin, setCheckSearchHeightMin] = React.useState('');
   const [checkSearchAgeMin, setCheckSearchAgeMin] = React.useState('');
   const [checkSearchHeightMax, setCheckSearchHeightMax] = React.useState('');
   const [checkSearchAgeMax, setCheckSearchAgeMax] = React.useState('');
   const [checkHeight, setCheckHeight] = React.useState(false);
   const [checkAge, setCheckAge] = React.useState(false);
   const [pageNo, setPageNo] = React.useState(props.pageOffset);
   const [checkTattoo, setCheckTattoo] = React.useState(null);
   const [radioUnChecked, setRadioUnChecked] = React.useState("");
   var [checkBoxSex, setCheckBoxSex] = React.useState([]);
   var [checkBoxStyle, setCheckBoxStyle] = React.useState([]);
   var [checkBoxStyleMore, setCheckBoxStyleMore] = React.useState([]);
   var [checkBoxSkinColor, setCheckBoxSkinColor] = React.useState([]);
   var [valueChoose, setValueChoose] = React.useState([]);
   const history = useHistory();

   const models = useSelector((state) => state.models);
   const styles = useSelector((state) => state.styles);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getModels(pageNo));
      dispatch(getStyles());
   }, [pageNo]);

   const handleChange = () => {
      setViewMore(!viewMore);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setValueChoose([]);
      if (parseInt(checkSearchHeightMin) > parseInt(checkSearchHeightMax)) {
         setCheckHeight(true);
         return;
      } else if (parseInt(checkSearchAgeMin) > parseInt(checkSearchAgeMax)) {
         setCheckAge(true);
         return;
      } else if (parseInt(checkSearchAgeMin) < parseInt(checkSearchAgeMax)) {
         setCheckAge(false);
      } else {
         setCheckHeight(false);
      }
      if (parseInt(checkSearchHeightMin).toString() !== "NaN") {
         valueChoose.push(parseInt(checkSearchHeightMin));
      }
      if (parseInt(checkSearchHeightMax).toString() !== "NaN") {
         valueChoose.push(parseInt(checkSearchHeightMax));
      }
      if (parseInt(checkSearchAgeMin).toString() !== "NaN") {
         valueChoose.push(parseInt(checkSearchAgeMin));
      }
      if (parseInt(checkSearchAgeMax).toString() !== "NaN") {
         valueChoose.push(parseInt(checkSearchAgeMax));
      }
      if (searchName !== "") {
         valueChoose.push(searchName);
      }
      if (radioUnChecked !== "") {
         valueChoose.push(radioUnChecked);
      }
      const sexList = []
      checkBoxSex.map(item => {
         if (item.checked === true) sexList.push(item.id);
      })
      const styleList = []
      checkBoxStyle.map(item => {
         if (item.checked === true) styleList.push(item.id);
      })
      const data = {
         "name": searchName,
         "sex": sexList,
         "style": styleList,
         "skin": checkBoxSkinColor,
         "height": {
            "min_height": checkSearchHeightMin,
            "max_height": checkSearchHeightMax
         },
         "age": {
            "min_age": checkSearchAgeMin,
            "max_age": checkSearchAgeMax
         },
         "tattoo" : checkTattoo
      }
      // console.log(data);
      dispatch(searchModels(data, pageNo))
   };

   const handlerFilter = (e, value, item) => {
      switch (value) {
         case 1:
            if (e.target.value === radioUnChecked) {
               setRadioUnChecked("");
            } else {
               setRadioUnChecked(e.target.value);
               if('Không có hình xăm' === e.target.value) {
                  setCheckTattoo(false)
               } else {
                  setCheckTattoo(true)
               }
            }
            break;
         case 2:
            const updateSex = searchBySexValue.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
               return value;
            });
            setCheckBoxSex(updateSex);
            break;
         case 3:
            const updateStyle = styles.style.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
               
               return value;
            });
            setCheckBoxStyle(updateStyle);
            // console.log(checkBoxStyle);
            break;
         case 4:
            const updateStyleMore = searchByStyleMoreValue.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
               return value;
            });
            setCheckBoxStyleMore(updateStyleMore);
            break;
         case 5:
            const updateSkinColor = searchBySkinColorValue.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
               return value;
            });
            setCheckBoxSkinColor(updateSkinColor);
            break;
         case 6:
            const clearSex = checkBoxSex.map((value) => {
               value.checked = false;
               return value;
            });
            setCheckBoxSex(clearSex);

            const clearStyle = checkBoxStyle.map((value) => {
               value.checked = false;
               return value;
            });
            setCheckBoxStyle(clearStyle);

            const clearStyleMore = checkBoxStyleMore.map((value) => {
               value.checked = false;
               return value;
            });
            setCheckBoxStyleMore(clearStyleMore);
            const clearSkinColor = checkBoxSkinColor.map((value) => {
               value.checked = false;
               return value;
            });
            setCheckBoxSkinColor(clearSkinColor);
            setSearchName('');
            document.getElementById("searchName").focus();
            setCheckSearchHeightMin('');
            setCheckSearchHeightMax('');
            setCheckSearchAgeMin('')
            setCheckSearchAgeMax('')
            setRadioUnChecked("");
            setValueChoose([]);
            setCheckHeight(false);
            setCheckAge(false);
            setCheckTattoo(null)
            break;
         default:
      }
   };

   const handleChangePage = (event, value) => {
      setPageNo(value)
      window.scrollTo(0, 0)
      changeURL(value)
   };

   const changeURL = useCallback((data) => history.push(`/model-search/${data}`), [history]);

   return (
      <div className={classes.containerFilterAndResult}>
         <div
            className={classes.container}
            style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
         >
            <GridContainer>
               <GridItem xs={12} sm={4} md={10}>
                  <form onSubmit={handleSubmit}>
                     <div className={classes.containerTextAndIconSearch}>
                        <TextField
                           id="searchName"
                           label="Nhập để tìm kiếm"
                           variant="standard"
                           className={classes.searchTextField}
                           value={searchName}
                           onChange={(e) => setSearchName(e.target.value)}
                        />
                        <IconButton style={{ color: "black" }} type="submit">
                           {" "}
                           <SearchIcon
                              className={classes.searchIcon}
                           />{" "}
                        </IconButton>
                     </div>
                     <div className={classes.containerTextFilterAndDelete}>
                        <div className={classes.filterText}>
                           <span style={{ fontSize: "1.5rem" }}> Bộ lọc</span>
                           <span>
                              <FilterAltOutlinedIcon className={classes.filterIcon} />
                           </span>
                        </div>

                        <span
                           onClick={(e) => handlerFilter(e, 6)}
                           className={classes.deleteText}>
                           Xóa
                        </span>
                     </div>
                     <p className={classes.titleSearch}>Tìm kiếm theo giới tính</p>
                     <FormGroup className={classes.containerCheckBox}>
                        {searchBySexValue.map((value, index) => (
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={value.checked}
                                    value={value.id}
                                    onClick={(input) => handlerFilter(input, 2, value)}
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
                     <div className={classes.containerCheckBox} >
                        {
                           (styles.style !== undefined) ?
                              (
                                 (styles.style.length > 0) ? (
                                    styles.style.map(style => (
                                       <FormControlLabel
                                          control={
                                             <Checkbox
                                                className={classes.checkBox}
                                                checked={style.checked}
                                                onClick={(input) => handlerFilter(input, 3, style)}
                                             />
                                          }
                                          label={
                                             <p className={classes.customLabelCheckBox}>{style.name}</p>
                                          }
                                       />
                                    ))
                                 ) : null
                              ) : null
                        }
                        {/* {viewMore && (
                           <>
                              {searchByStyleMoreValue.map((value, index) => (
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          className={classes.checkBox}
                                          checked={value.checked}
                                          onClick={(input) =>
                                             handlerFilter(input, 4, value)
                                          }
                                       />
                                    }
                                    label={<p className={classes.customLabelCheckBox}>{value.name}</p>}
                                 />
                              ))}
                           </>
                        )} */}
                     </div>
                     {/* <ul className={classes.containerViewMore}>
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
                     </ul> */}
                     <p className={classes.titleSearch}>Tìm kiếm theo màu da</p>
                     <FormGroup className={classes.containerCheckBox}>
                        {searchBySkinColorValue.map((value, index) => (
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    className={classes.checkBox}
                                    checked={value.checked}
                                    onClick={(input) => handlerFilter(input, 5, value)}
                                 />
                              }
                              label={<p className={classes.customLabelCheckBox}>{value.name}</p>}
                           />
                        ))}
                     </FormGroup>
                     <p className={classes.titleSearch}>Tìm kiếm theo hình xăm</p>
                     <FormControl className={classes.formControl}>
                        <RadioGroup
                           aria-label="gender"
                           // defaultValue="female"
                           name="radio-buttons-group"
                           className={classes.containerRadioGroup}
                           value={radioUnChecked}
                        >
                           {searchByTattooValue.map((value, index) => (
                              <FormControlLabel
                                 value={value.name}
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
                                       name="radioButton"
                                       // onChange={(input) => handlerValueRadio(input)}
                                       onClick={(e) => handlerFilter(e, 1)}
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
                           InputAdornment
                           className={classes.searchHeight}
                           type="number"
                           value={checkSearchHeightMin}
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
                              value={checkSearchHeightMax}
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
                           value={checkSearchAgeMin}
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
                              value={checkSearchAgeMax}
                              type="number"
                              helperText=""
                              onChange={(e) => setCheckSearchAgeMax(e.target.value)}
                           />
                        </div>
                     </div>
                  </form>
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
                           <GridItem xs={12} sm={6} md={6}>
                              <CardImage model={model} />
                           </GridItem>
                        ))
                     ) : (null)) : null

               }
            </GridContainer>
            <Stack spacing={2} style={{ alignItems: "center", marginBottom: "5%" }}>
               <Pagination onChange={handleChangePage} defaultPage={parseInt(pageNo)} count={10} showFirstButton showLastButton />
            </Stack>
         </div>
      </div>
   );
}
