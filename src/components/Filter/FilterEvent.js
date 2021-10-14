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
import {searchByStyleValue} from './CheckBoxData';
import FormGroup from "@mui/material/FormGroup";
 import Checkbox from "@mui/material/Checkbox";
 import { useHistory } from "react-router-dom";

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
  const [radioMonopolytime, setRadioMonopolytime] = React.useState("");
  const [checkMonopolytime, setCheckMonopolytime] = React.useState(null);
   const [valueAddress, setValueAddress] = React.useState("");
  const [valueDateTime, setValueDateTime] = React.useState(null);
  var [checkBoxStyle, setCheckBoxStyle] = React.useState([]);
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
    let dateTime =null;

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
    if (valueDateTime !== null) {
       dateTime = formatDate(valueDateTime);
      valueChoose.push(dateTime);
    }
    const styleList = []
    checkBoxStyle.map(item => {
       if (item.checked === true) styleList.push(item.id);
    })
     console.log('valueChoose ',valueChoose);
     console.log('sexList ',styleList);

     const data = {
      "name": searchName,
      "style": styleList,
      "radioMonopolytime": checkMonopolytime,
      "address": valueAddress,
      "dateTime": dateTime,

   }
   console.log('data ',data);

  };

  const handlerFilter = (e, value, item) => {
    switch (value) {
      case 1:
        if (e.target.value === radioMonopolytime) {
          setRadioMonopolytime("");
        } else {
          setRadioMonopolytime(e.target.value);
          if('Không có thời gian độc quyền' === e.target.value) {
            setCheckMonopolytime(false)
         } else {
          setCheckMonopolytime(true)
         }
        }
        break;
        case 2:
            const updateSex = searchByStyleValue.map((value) => {
               value.checked = value.id === item.id ? !value.checked : value.checked;
                return value;
            });
            setCheckBoxStyle(updateSex);
            break;
      case 3:
        const clearStyle = checkBoxStyle.map((value) => {
            value.checked = false;
            return value;
         });
         setCheckBoxStyle(clearStyle);

        setRadioMonopolytime("");
        setCheckMonopolytime(null)
         setSearchName("");
        setValueAddress("");
        setValueDateTime(null);

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
                  label="Nhập để tìm kiếmAAAAAA"
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
                  onClick={(e) => handlerFilter(e, 3)}
                  className={classes.deleteText}
                >
                  Xóa
                </span>
              </div>

              <p className={classes.titleSearch}>
                Tìm kiếm theo thời gian độc quyền
              </p>
              <FormControl className={classes.formControl}>
                <RadioGroup
                  aria-label="gender"
                  // defaultValue="female"
                  name="radio-buttons-group"
                  className={classes.containerRadioGroup}
                  value={radioMonopolytime}
                >
                  {searchByMonopolytimeValue.map((value, index) => (
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

              <p className={classes.titleSearch}>Tìm kiếm theo phong cách</p>
              <FormGroup className={classes.containerCheckBox}>
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
          

              <p className={classes.titleSearch}>Tìm kiếm theo địa chỉ</p>
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
                sx={{ width: 300, marginTop: "1rem" }}
                renderInput={(params) => (
                  <TextField
                    className={classes.searchHeight}
                    {...params}
                    label="Chọn"
                   
                  />
                )}
              />

              <p className={classes.titleSearch}>Tìm kiếm theo thời gian</p>
              <DateTime value={valueDateTime} setValue={setValueDateTime} />
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
          {models.modelList !== undefined
            ? models.modelList.length > 0
              ? models.modelList.map((model) => (
                  <GridItem xs={12} sm={6} md={6}>
                    <CardImage model={model} listTop3Label={listTop3Label} />
                  </GridItem>
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
