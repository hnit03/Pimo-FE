import React, { useEffect } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import logoBrand from "../../assets/img/android.png";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { useDispatch } from "react-redux";
import { getCastings } from "../../actions/castings";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EventCard from "../BrandInfo/EventCard/EventCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

const useStyles = makeStyles(styles);
export default function StandardImageList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [pageNo, setPageNo] = React.useState(props.pageOffset);
  // const [check, setCheck] = React.useState(false);

  // const castings = useSelector((state) => state.castings);
  // const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCastings(pageNo));
  }, [pageNo]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

 
  
 
  return (
    <div className={classes.containerFilterAndResult}>
      <div
        className={classes.container}
        style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={10}>
        
            <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          orientation="vertical"
         >
         <Tab label="Item One" {...a11yProps(0)} />
         <Tab label="Item Two" {...a11yProps(1)} />
         <Tab label="Item Three" {...a11yProps(2)} />
       
        </Tabs>
        
         
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
         <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5rem",
          }}
        >
           <GridContainer spacing={2} style={{ marginLeft: "1rem" }} xs={6}>
           <Grid item xs={7}>
             <div>
               <img className={classes.logoBrand} src={logoBrand} />
             </div>
           </Grid>    
         </GridContainer>

         <GridContainer spacing={2}>
           <Grid item xs={12}>
             <div style={{ display: "flex" }}>
               <h1 style={{ margin: 0 }}>THANH VI HUYNH</h1>
               <div>
                 <StarBorderOutlinedIcon />
               </div>
             </div>
             <h4 style={{ margin: 0 }}>Vi Khơ me,Viet nam</h4>
             <h4>iiiiiiiiiiiiiiiiiiiiiiiiii</h4>
           </Grid>
         </GridContainer>

         <GridContainer spacing={2} xs={4}>
           <Grid item xs={5}>
             <Button variant="outlined">Outlined</Button>
           </Grid>
         </GridContainer>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
 
    
      </div>
    </div>
  );
}
