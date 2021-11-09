import React, { useEffect } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { getCastings, searchCasting } from "../../actions/castings";
import { useSelector } from "react-redux";
import DateTime from "./DateTimePicker";
import { searchByAddressEvent } from "./AddressData.js";
import { searchByMonopolytimeValue } from "./RadioData.js";
// import { itemData } from "./ImageData";
import { listTop3Label } from "./Top3StyleData";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import { getStyles } from '../../actions/styles';
import { searchBySexValue } from './CheckBoxData';
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import EventCard from "../BrandInfo/EventCard/EventCard";
import Grid from '@mui/material/Grid';
import Notfound from '../NotFound/NotFound';

function formatDate(date) {
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var amPm = hours >= 12 ? "PM" : "AM";
   hours = hours % 12;
   hours = hours ? hours : 12;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   var strTime = hours + ":" + minutes + " " + amPm;
   return (
      date.getFullYear() +
      "-" +
      parseInt(date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      strTime
   );
}

const useStyles = makeStyles(styles);
export default function StandardImageList(props) {
   const classes = useStyles();
   const [checkSearch, setCheckSearch] = React.useState(true);
   const [searchName, setSearchName] = React.useState("");
   const [searchAddress, setSearchAddress] = React.useState("");
   const [valueAddress, setValueAddress] = React.useState("");
   const [valueDateTimeStart, setValueDateTimeStart] = React.useState(null);
   const [valueDateTimeEnd, setValueDateTimeEnd] = React.useState(null);
   var [checkInputDate, setCheckInputDate] = React.useState(false);
   var [checkBoxStyle, setCheckBoxStyle] = React.useState([]);
   var [checkBoxSex, setCheckBoxSex] = React.useState([]);
   var [valueChoose, setValueChoose] = React.useState([]);
   const [pageNo, setPageNo] = React.useState(props.pageOffset);
   const castings = useSelector((state) => state.castings);
   const styles = useSelector((state) => state.styles);

   const history = useHistory();
   const dispatch = useDispatch();

   useEffect(() => {
      if (checkSearch) {
         dispatch(getCastings(pageNo));
      }
      dispatch(getStyles());
   }, [pageNo]);

   const handleChangePage = (event, value) => {
      setPageNo(value);
      window.scrollTo(0, 0);
      changeURL(value);
   };
   const changeURL = React.useCallback(
      (data) => history.push(`/event-search/${data}`),
      [history],
   );

   const handleSubmit = (e) => {
      e.preventDefault();

      setValueChoose([]);
      let dateTimeStart = null;
      let dateTimeEnd = null;

      if (valueDateTimeStart !== null) {
         dateTimeStart = formatDate(valueDateTimeStart);
         valueChoose.push(dateTimeStart);
      }
      if (valueDateTimeEnd !== null) {
         dateTimeEnd = formatDate(valueDateTimeEnd);
         valueChoose.push(dateTimeEnd);
      }

      if (valueDateTimeStart !== null && valueDateTimeEnd !== null) {
         if (valueDateTimeStart.getDate() > valueDateTimeEnd.getDate()) {
            setCheckInputDate(true);
            return;
         } else {
            setCheckInputDate(false);
         }
      }

      const styleList = []
      checkBoxStyle.map(item => {
         if (item.checked === true) styleList.push(item.id);
      })
      const styleSex = []
      checkBoxSex.map(item => {
         if (item.checked === true) styleSex.push(item.id);
      })

      const data = {
         "name": searchName,
         "style": styleList,
         "sex": styleSex,
         "address": searchAddress,
         "dateTime": {
            'start': dateTimeStart ,
            'end': dateTimeEnd,
         }
      }
      if(searchName === '' &&
       styleList.length === 0 && 
       styleSex.length === 0 &&
       valueAddress === '' && 
       dateTimeStart === '' && 
       dateTimeEnd === ''
       ){
         setCheckSearch(true);
      } else {
         setCheckSearch(false)
      }
      {console.log("vihi")}
      dispatch(searchCasting(data, pageNo));
   };

   const handlerFilter = (e, value, item) => {
      switch (value) {
         case 1:

            break;
         case 2:
            const updateStyle = styles.style.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;

               return value;
            });
            setCheckBoxStyle(updateStyle);
            break;
         case 3:
            const updateSex = searchBySexValue.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
               return value;
            });
            setCheckBoxSex(updateSex);
            break;
         case 4:
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
            setSearchAddress("");
            setSearchName("");
            setValueAddress("");
            setValueDateTimeStart(null);
            setValueDateTimeEnd(null);
            setCheckInputDate(false);
            setValueChoose([]);

            break;
         default:
      }
   };

   return (
      // <h1>hellooo</h1>
      <div className={classes.containerFilterAndResult}>
         <div
            className={classes.container}
            style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
         >
            <GridContainer>
               <GridItem xs={12} sm={4} md={10}>
                  <form autoComplete="off" onSubmit={handleSubmit}>
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
                           <SearchIcon className={classes.searchIcon} />{" "}
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
                           onClick={(e) => handlerFilter(e, 4)}
                           className={classes.deleteText}
                        >
                           Xóa
                        </span>
                     </div>

                     <p className={classes.titleSearch}>Địa chỉ</p>
                     <TextField 
                     id="outlined-basic" 
                     label="Địa chỉ" 
                     variant="outlined" 
                     className={classes.searchHeight}
                     value={searchAddress}
                     onChange={(e) => setSearchAddress(e.target.value)}
                     sx={{ marginTop: "1rem" }}
                     style={{width:'45vh'}}
                     />
                     {/* <Autocomplete
                       
                       
                        options={searchByAddressEvent}
                        value={valueAddress}
                        onChange={(e, value) => {
                           value === null
                              ? setValueAddress("")
                              : setValueAddress(value.label);
                        }}
                        sx={{ marginTop: "1rem" }}
                        renderInput={(params) => (
                           <TextField
                              className={classes.searchHeight}
                              {...params}
                              label="Chọn"

                           />
                        )}
                     /> */}

                     <p className={classes.titleSearch}>Thời gian</p>
                     <DateTime value={valueDateTimeStart} setValue={setValueDateTimeStart} label='thời gian bắt đầu' checked={checkInputDate} />
                     <DateTime value={valueDateTimeEnd} setValue={setValueDateTimeEnd} label='thời gian kết thúc' />

                     <p className={classes.titleSearch}>Giới tính</p>
                     <FormGroup className={classes.containerCheckBox}>
                        {searchBySexValue.map((value, index) => (
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={value.checked}
                                    value={value.id}
                                    onClick={(input) => handlerFilter(input, 3, value)}
                                    className={classes.checkBox}
                                 />
                              }
                              label={
                                 <p className={classes.customLabelCheckBox}>{value.name}</p>
                              }
                           />
                        ))}
                     </FormGroup>
                     <p className={classes.titleSearch}>Phong cách</p>
                     <div className={classes.containerCheckBox} style={{ marginBottom: "2rem" }}>
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
                                                onClick={(input) => handlerFilter(input, 2, style)}
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

            <Grid container spacing={2.2} item xs={11.8} className={classes.vi}>
            <GridItem xs={12} sm={12} md={12}>
            </GridItem> 
               {
                  castings.castings !== undefined ?
                     castings.castings.length > 0
                        ? castings.castings.map((casting) => (
                           casting.casting.status?
                           <GridItem xs={3.8} sm={4} md={4}>
                             <EventCard
                                 loading={true}
                                 id={casting.casting.id}
                                 style={false} //mặc định k đổi nha
                                 date={casting.casting.closeTime}
                                 value={casting.casting.name}
                                 dayTime={(new Date(casting.casting.openTime).toLocaleDateString("vi-VN", {
                                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                 }))}
                                 endTime={(new Date(casting.casting.closeTime).toLocaleDateString("vi-VN", {
                                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                 }))}
                                 location={casting.casting.address}
                                 img={casting.casting.poster} /> 
                          </GridItem> :null
                      ))
                     : <Notfound/>
                     : null
                     }
                     
            </Grid>
            
            <Stack spacing={2} style={{ alignItems: "center", marginBottom: "2%" }}>
               <Pagination
                  onChange={handleChangePage}
                  defaultPage={parseInt(pageNo)}
                  count={castings.totalPage}
                  showFirstButton
                  showLastButton
               />
            </Stack>
            
         </div>
      </div>
   );
}
