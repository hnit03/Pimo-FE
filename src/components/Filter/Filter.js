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
import { getModels } from '../../actions/models';
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
   const [pageNo, setPageNo] = React.useState(props.pageOffset);
   // const [searchData, setSearchData] = React.useState({ name: '', sex: [], style: [], skinColor: [], tattoo: false });
   const [searchName, setSearchName] = React.useState('')
   const [searchSex, setSearchSex] = React.useState([])
   const [searchStyle, setSearchStyle] = React.useState([])
   const [searchSkinColor, setSearchSkinColor] = React.useState([])
   const [searchTattoo, setSearchTattoo] = React.useState(0)
   const history = useHistory();

   const models = useSelector((state) => state.models);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getModels(pageNo));
   }, [pageNo]);

   const handleChangePage = (event, value) => {
      setPageNo(value)
      window.scrollTo(0, 0)
      changeURL(value)
   };

   const clear = () => {
      setSearchName('');
      setSearchSex([]);
      setSearchStyle([]);
      setSearchSkinColor([]);
      setSearchTattoo(0);
   };

   const handleSubmit = async (e) => {
      // e.preventDefault();
      console.log(searchName);
      console.log(searchSex);
      console.log(searchStyle);
      console.log(searchSkinColor);
      console.log(searchTattoo);
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
                  <div className={classes.containerTextAndIconSearch}>
                     <TextField
                        id="searchName"
                        label="Nhập để tìm kiếm"
                        variant="standard"
                        className={classes.searchTextField}
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                     />
                     <IconButton style={{ color: "black" }} onClick={handleSubmit}>
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
                        onClick={clear}
                        className={classes.deleteText}>
                        Xóa
                     </span>
                  </div>
                  <p className={classes.titleSearch}>Tìm kiếm theo giới tính</p>
                  <div className={classes.containerCheckBox}>
                     <FormControlLabel
                        control={
                           <Checkbox
                              className={classes.checkBox}
                              onClick={setSearchSex(searchSex => [...searchSex, 1])}
                           />
                        }
                        label={
                           <p className={classes.customLabelCheckBox}>abc</p>
                        }
                     />
                     ))
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
