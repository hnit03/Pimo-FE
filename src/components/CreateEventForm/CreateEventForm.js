import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Slider from "@mui/material/Slider";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import ImageUpload from "../CustomUpload/ImageUpload";
import CustomInput from "../CustomInput/CustomInput";
import SectionFooter from "../Footer/SectionFooter";
import { searchByAddressBrand, searchByMajor } from "../Filter/AddressData";
import MyFormControlLabel from "../FormControl/MyFormControlLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Button from "../Button/Button";
import { getStyles } from "../../actions/styles";
import { useSelector } from "react-redux";

import workStyle from "../../assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

function valuetext(value) {
  return `${value}°C`;
}

function CreateEventForm() {
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();

  const classes = useStyles();
  useEffect(() => {
    dispatch(getStyles());
  }, []);

  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState([160, 250]);
  const [value5, setValue5] = React.useState([18, 100]);
  const [bust, setBust] = React.useState([20, 47]);
  const [waist, setWaist] = React.useState([20, 45]);
  const [hips, setHips] = React.useState([31, 50]);
  const [name, setName] = React.useState("");
  const [valueAddress, setValueAddress] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  var [checkBoxStyle, setCheckBoxStyle] = React.useState([]);
  var [checkColor1, setCheckColor1] = React.useState([]);
  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  const handleChange4 = (event, newValue) => {
    setValue4(newValue);
  };

  const handleChange5 = (event, newValue) => {
    setValue5(newValue);
  };

  const handleBust = (event, newValue) => {
    setBust(newValue);
  };
  const handleWaist = (event, newValue) => {
    setWaist(newValue);
  };
  const handleHips = (event, newValue) => {
    setHips(newValue);
  };

  const onClickCreateEvent = (event) => {
    event.preventDefault();
    console.log({
      name: name,
      district: valueAddress,
      startDate: new Date(value1).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      endDate: new Date(value2).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      salary: value3,
      height: value4,
      age: value5,
      bust: bust,
      waist: waist,
      hips: hips,
      image: image,
      description: description,
    });
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const hairColors1 = ["Đen", "Xám", "Trắng", "Đỏ"];
  const abc = [
    {
      name: "Đen",
      checked: false,
    },
    {
      name: "Xám",
      checked: false,
    },
    {
      name: "Trắng",
      checked: false,
    },
    {
      name: "Đỏ",
      checked: false,
    },
  ];
  const hairColors2 = ["Hồng", "Tím", "Nâu", "Vàng"];
  
  const skinColors1 = [
    {  id: 1,name: "Trắng", checked: false },
    { id: 2,name: "Vàng",  checked: false },
    {id: 3, name: "Đen",  checked: false },
    { id: 4,name: "Khác",  checked: false },
    {  id: 5, name: "Đỏ",checked: false },
  ];

  const styleList1 = [];
  const styleList2 = [];
  const sex = ["Nam", "Nữ", "Khác"];

  if (
    styles.style !== undefined &&
    styles.style !== null &&
    styles.style.length > 0
  ) {
    for (let index = 0; index < 4; index++) {
      styleList1.push(styles.style[index].name);
    }
    for (let index = 4; index < styles.style.length; index++) {
      console.log("hihi ", styles.style);
      styleList2.push(styles.style[index].name);
    }
  }
  console.log("checkBoxStyle ", checkBoxStyle);
  console.log("styles.style ", styles.style);
  console.log("checkColor1 ", checkColor1);
  return (
    <div>
      <GridContainer className={classes.section}>
        <GridItem
          cs={12}
          sm={8}
          md={8}
          style={{
            margin: "auto",
            padding: "5%",
            boxShadow:
              "0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1 className={classes.title} style={{ fontSize: "280%" }}>
            TẠO CHIẾN DỊCH MỚI
          </h1>
          <h2 className={classes.title}>BỘ LỌC</h2>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Tên chiến dịch
                </h3>
              </div>
              <div style={{ width: "67%" }}>
                <TextField
                  style={{ width: "70%", marginLeft: "10%" }}
                  required
                  id="outlined-required"
                  label="Nhập tên chiến dịch..."
                  inputProps={{ maxLength: 30 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "1vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Địa điểm
                </h3>
              </div>
              <div style={{ width: "67%" }}>
                <Autocomplete
                  style={{ width: "70%", marginLeft: "10%" }}
                  disablePortal
                  id="combo-box-demo"
                  options={searchByAddressBrand}
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
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Thời gian
                </h3>
              </div>
              <div style={{ width: "67%" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField
                        style={{ width: "70%", marginLeft: "10%" }}
                        {...props}
                      />
                    )}
                    label="Thời gian bắt đầu"
                    value={value1}
                    onChange={(newValue) => {
                      setValue1(newValue);
                    }}
                  />
                </LocalizationProvider>
                <br />
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField
                        style={{ width: "70%", marginLeft: "10%" }}
                        {...props}
                      />
                    )}
                    label="Thời gian kết thúc"
                    value={value2}
                    onChange={(newValue) => {
                      setValue2(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Mức lương
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value3}
                    onChange={handleChange3}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={1000}
                    step={500}
                    max={10000}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
                textAlign: "right",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Màu tóc
                </h3>
              </div>
              <div>
                {/* <MyFormControlLabel label={hairColors1} /> */}
                {/* <MyFormControlLabel label={hairColors2} /> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
                textAlign: "right",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Màu da
                </h3>
              </div>
              <div>
                {/* <MyFormControlLabel label={skinColors1} /> */}
                {skinColors1 !== undefined ? (
                  <MyFormControlLabel
                    listStyle={skinColors1}
                    checkedStyle={checkColor1}
                    setCheckedStyle={setCheckColor1}
                  />
                ) : null}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
                textAlign: "right",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Phong cách
                </h3>
              </div>
              <div>
                {styles.style !== undefined ? (
                  <MyFormControlLabel
                    listStyle={styles.style}
                    checkedStyle={checkBoxStyle}
                    setCheckedStyle={setCheckBoxStyle}
                  />
                ) : null}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
                textAlign: "right",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Giới tính
                </h3>
              </div>
              <div>{/* <MyFormControlLabel label={sex} /> */}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Chiều cao
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value4}
                    onChange={handleChange4}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={160}
                    step={1}
                    max={250}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Tuổi
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value5}
                    onChange={handleChange5}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={18}
                    step={1}
                    max={100}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Vòng 1
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={bust}
                    onChange={handleBust}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={20}
                    step={1}
                    max={47}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Vòng 2
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={waist}
                    onChange={handleWaist}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={20}
                    step={1}
                    max={45}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: "3vh",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Vòng 3
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: 350 }}
                  style={{ paddingLeft: "7%", paddingRight: "7%" }}
                >
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={hips}
                    onChange={handleHips}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                    min={31}
                    step={1}
                    max={50}
                  />
                </Box>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3vh",
              }}
            >
              <div style={{ width: "45%" }}>
                <CustomInput
                  labelText="You can write description here..."
                  id="textarea-input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 10,
                  }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", width: "45%" }}
              >
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                  onChange={(value) => {
                    getBase64(value).then((data) => setImage(data));
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Button
                className={classes.navLink + " " + classes.navLinkActive}
                onClick={onClickCreateEvent}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "0.5rem",
                  marginTop: "7%",
                  fontSize: "150%",
                }}
              >
                Tạo Chiến dịch
              </Button>
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default CreateEventForm;
