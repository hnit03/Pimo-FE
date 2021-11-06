
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SectionCarousel from '../SectionCarousel/SectionCarousel';
import QuiltedImageList from '../SectionCarousel/QuiltedImageList';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/tabsStyle';
// import {personalGalleryList} from '../Tabs/PersonalGalleryData';
function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`vertical-tabpanel-${index}`}
         aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
   };
}

export default function CenterTabs({ model }) {
   const [value, setValue] = React.useState(0);
   const [view, setView] = useState(true);
   const classes = useStyles();
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   const changeViewType = (e) => {
      setView(e);
   };
   var listName = []
   var listImage = []
   if (model.listCollectionBody !== undefined) {
      for (var i = 0; i < model.listCollectionBody.length; i++) {
         listName.push({
            name: model.listCollectionBody[i].collection.name,
            description: model.listCollectionBody[i].collection.description
         })
         var imgList = []
         for (var j = 0; j < model.listCollectionBody[i].imageList.length; j++) {
            imgList.push({
               name: model.listCollectionBody[i].imageList[j].fileName,
            })
         }
         listImage.push({
            image: imgList
         })
      }
   }


   return (
      <div className={classes.box}>
         <h1 className={classes.h1} >BỘ SƯU TẬP CÁ NHÂN</h1>

         {view == true ?
            (<div className={classes.button}>
               <ViewComfyIcon className={classes.iconViewCarouse} onClick={() => changeViewType(false)} />
               <ViewCarouselIcon className={classes.iconViewComfyIcon} onClick={() => changeViewType(true)} />
            </div>) :
            (<div className={classes.button}>
               <ViewComfyIcon className={classes.iconViewCarouseChange} onClick={() => changeViewType(false)} />
               <ViewCarouselIcon className={classes.iconViewComfyIconChange} onClick={() => changeViewType(true)} />
            </div>)
         }

         <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
            className={classes.innerTabs}>
            <Tabs
               className={classes.tabs}
               orientation="vertical"
               variant="scrollable"
               value={value}
               onChange={handleChange}
               aria-label="Vertical tabs example"
               sx={{ borderRight: 1, borderColor: 'divider' }}
            >
               {
                  listName.map((item, index) => (
                     <Tab className={classes.tab} label={item.name} {...a11yProps({ index })} />
                  )
                  )
               }
            </Tabs>
            {
               listImage.map((item, index) => (
                  <TabPanel value={value} index={index}>
                     {view == true ? <SectionCarousel listCal={item.image} bool={true} /> : <QuiltedImageList list={item.image} bool={true}/>}
                  </TabPanel>
               )
               )
            }
         </Box>
      </div>
   );
}