import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/tabsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSmile, faUser , faMale } from '@fortawesome/free-solid-svg-icons'
import SectionCarousel from '../SectionCarousel/SectionCarousel'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CenterTabs() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{flexGrow: 1 }} className = {classes.box}>
      <h1 className={classes.h1}>BÔ SƯU TẬP CÁ NHÂN</h1>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<FontAwesomeIcon icon={faSmile} />} label="Ảnh chân dung" />
        <Tab icon={<FontAwesomeIcon icon={faUser} />} label="Ảnh bán thân" />
        <Tab icon={<FontAwesomeIcon icon={faMale} />} label="Ảnh toàn thân" />
      </Tabs>
    </Box>
      <TabPanel value={value} index={0}>
        {/* <SectionCarousel/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}