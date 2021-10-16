import React, { useEffect } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardImage from "../CardImage/CardImage";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { getModels } from "../../actions/models";
import { useSelector } from "react-redux";
import DateTime from "./DateTimePicker";
import { searchByAddressEvent } from "./AddressData.js";
import { searchByMonopolytimeValue } from "./RadioData.js";
// import { itemData } from "./ImageData";
import { listTop3Label } from "./Top3StyleData";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import {searchByStyleValue,searchBySexValue} from './CheckBoxData';
import FormGroup from "@mui/material/FormGroup";
 import Checkbox from "@mui/material/Checkbox";
 import { useHistory } from "react-router-dom";
 import EventCard from "../BrandInfo/EventCard/EventCard";
 import Grid from '@mui/material/Grid';

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
  const [searchName, setSearchName] = React.useState("");
  const [valueAddress, setValueAddress] = React.useState("");
  const [valueDateTimeStart, setValueDateTimeStart] = React.useState(null);
  const [valueDateTimeEnd, setValueDateTimeEnd] = React.useState(null);
  var [checkInputDate, setCheckInputDate] = React.useState(false);
  var [checkBoxStyle, setCheckBoxStyle] = React.useState([]);
  var [checkBoxSex, setCheckBoxSex] = React.useState([]);
  var [valueChoose, setValueChoose] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(props.pageOffset);

  const models = useSelector((state) => state.models);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModels(pageNo));
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
    let dateTimeStart =null;
    let dateTimeEnd =null;

    // if (searchName !== "") {
    //   valueChoose.push(searchName);
    // }
    // if (radioMonopolytime !== "") {
    //   valueChoose.push(radioMonopolytime);
    // }
    // if (JSON.stringify(valuePrice) !== JSON.stringify([0, 0])) {
    //   valueChoose.push(valuePrice[0]);
    //   valueChoose.push(valuePrice[1]);
    // }
    // if (valueAddress !== "") {
    //   valueChoose.push(valueAddress);
    // }
   
    if (valueDateTimeStart !== null) {
      dateTimeStart = formatDate(valueDateTimeStart);
      valueChoose.push(dateTimeStart);
    }
    if (valueDateTimeEnd !== null) {
      dateTimeEnd = formatDate(valueDateTimeEnd);
     valueChoose.push(dateTimeEnd);
   }

   if (valueDateTimeStart !== null && valueDateTimeEnd !== null) {
    if(valueDateTimeStart.getDate()> valueDateTimeEnd.getDate()) {
      setCheckInputDate(true);
      return;
     }else{
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
      "address": valueAddress,
      "dateTime": {
        'start' : dateTimeStart,
        'end' : dateTimeEnd,
      }
   }
   console.log('hihi ',data);
   };

  const handlerFilter = (e, value, item) => {
    switch (value) {
      case 1:
        
        break;
        case 2:
            const updateStyle = searchByStyleValue.map((value) => {
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={searchByAddressEvent}
                value={valueAddress}
                onChange={(e, value) => {
                  value === null
                    ? setValueAddress("")
                    : setValueAddress(value.label);
                }}
                sx={{   marginTop: "1rem" }}
                renderInput={(params) => (
                  <TextField
                    className={classes.searchHeight}
                    {...params}
                    label="Chọn"
                   
                  />
                )}
              />

              <p className={classes.titleSearch}>Thời gian</p>
              <DateTime value={valueDateTimeStart} setValue={setValueDateTimeStart} label='thời gian bắt đầu' checked={checkInputDate}/>
              <DateTime value={valueDateTimeEnd} setValue={setValueDateTimeEnd} label='thời gian kết thúc'  />

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
              <FormGroup sx={{marginBottom:'2.5rem'}} className={classes.containerCheckBox}>
                        {searchByStyleValue.map((value, index) => (
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
        <GridContainer spacing={2}>
        <Grid item xs={12} >
        </Grid> 
          {models.modelList !== undefined
            ? models.modelList.length > 0
              ? models.modelList.map((model) => (
                  // <GridItem xs={12} sm={6} md={6}>
                  //   <CardImage model={model} listTop3Label={listTop3Label} />
                  // </GridItem><Grid item xs={3.6} >
                <Grid item xs={4} >
                    <EventCard 
                    style = {false} //mặc định k đổi nha
                    bool={false} 
                    value="Quảng bá dòng nước hoa mới COCO CHANEL"
                    dayTime="10/10/2021 - 9:00"
                    location="Paris, French"
                    img = "https://a.ipricegroup.com/media/Ann/Chanel_Mademoiselle_Eau_Privee_50ml.jpeg"/>
                </Grid> 
              
                ))
              : null
            : null}
        </GridContainer>
        <Stack spacing={2} style={{ alignItems: "center", marginBottom: "5%" }}>
          <Pagination
            onChange={handleChangePage}
            defaultPage={parseInt(pageNo)}
            count={10}
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
    </div>
  );
}
