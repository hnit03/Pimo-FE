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
import CardImage from "../CardImage/CardImageBrand";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { getBrands, searchBrands } from "../../actions/brands";
import { useSelector } from "react-redux";
import DateTime from "./DateTimePicker";
import { searchByAddressBrand, searchByMajor } from "./AddressData.js";
import { searchByMonopolytimeValue } from "./RadioData.js";
// import { itemData } from "./ImageData";
import { listTop3Label } from "./Top3StyleData";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import { useHistory } from "react-router-dom";
import { getStyles } from "../../actions/styles";

const useStyles = makeStyles(styles);
export default function StandardImageList(props) {
   const classes = useStyles();
   const [searchName, setSearchName] = React.useState("");
   const [valueAddress, setValueAddress] = React.useState("");
   const [valueMajor, setValueMajor] = React.useState(null);
   var [valueChoose, setValueChoose] = React.useState([]);
   const [pageNo, setPageNo] = React.useState(props.pageOffset);

   const brands = useSelector((state) => state.brands);
   const styles = useSelector((state) => state.styles);
   const history = useHistory();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getBrands(pageNo));
      dispatch(getStyles());
   }, [pageNo]);

   const data = {
      address: valueAddress,
      category: valueMajor,
   };

   const handleChangePage = (event, value) => {
      setPageNo(value);
      window.scrollTo(0, 0);
      changeURL(value);
   };
   const changeURL = React.useCallback(
      (data) => history.push(`/brand-search/${data}`),
      [history],
   );

   const handleSubmit = (e) => {
      e.preventDefault();
      setValueChoose([]);
      const data = {
         name: searchName,
         address: valueAddress,
         category: valueMajor,
      };
      dispatch(searchBrands(data, pageNo));
   };

   const handlerFilter = (e, value, item) => {
      switch (value) {
         case 1:
            break;

         case 2:
            setSearchName("");
            setValueAddress("");
            setValueMajor("");
            setValueChoose([]);

            break;
         default:
      }
   };
   var categoryList = [];
   if (styles.style !== undefined) {
      styles.style.map((item) => {
         categoryList.push(item.name);
      });
   }

   return (
      <div>
         <div
            className={classes.container}
            style={{
               float: "left",
               width: "100%",
               margin: 0,
               marginLeft: "10%",
               marginTop: '10rem'
            }}
         >
            {/* <GridContainer> */}
            <form style={{ display: "flex" }} autoComplete="off" onSubmit={handleSubmit}>

               <GridItem xs={12} sm={4} md={10}>
                  <p className={classes.titleSearch}>Tìm kiếm theo địa chỉ</p>
                  <Autocomplete
                     disablePortal
                     id="combo-box-demo"
                     options={searchByAddressBrand}
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
                  />
               </GridItem>
               <GridItem xs={12} sm={4} md={10}>
                  <p className={classes.titleSearch}>Tìm kiếm theo lĩnh vực</p>
                  <Autocomplete
                     disablePortal
                     id="combo-box-demo"
                     style={{ marginBottom: "2.5rem" }}
                     options={categoryList}
                     value={valueMajor}
                     onChange={(e, value) => {
                        value === null ? setValueMajor("") : setValueMajor(value);
                     }}
                     sx={{ marginTop: "1rem" }}
                     renderInput={(params) => (
                        <TextField
                           className={classes.searchHeight}
                           {...params}
                           label="Chọn"
                        />
                     )}
                  />
               </GridItem>
               <GridItem xs={12} sm={4} md={5}>
                  <div style={{ marginTop: '2.5rem' }} className={classes.containerTextAndIconSearch}>
                     <IconButton style={{ color: "black" }} type="submit">
                        {" "}
                        <SearchIcon className={classes.searchIcon} />{" "}
                     </IconButton>
                  </div>
               </GridItem>
            </form>
            {/* </GridContainer> */}
         </div>

         <div className={classes.containerFilterAndResult}>
            <div
               className={classes.container}
               style={{
                  // borderLeft: "1px solid #cfcfcf ",
                  float: "left",
                  width: "100%",
                  margin: '0 auto',

               }}
            >
               <GridContainer spacing={1}>
                  {brands.brandList !== undefined
                     ? brands.brandList.length > 0
                        ? brands.brandList.map((brand) => (
                           <GridItem xs={12} sm={6} md={6}>
                              <CardImage brand={brand}/>
                           </GridItem>
                        ))
                        : null
                     : null}
               </GridContainer>
               <Stack
                  spacing={2}
                  style={{ alignItems: "center", marginBottom: "5%" }}
               >
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
      </div>
   );
}
