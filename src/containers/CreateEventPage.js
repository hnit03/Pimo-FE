import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';

import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';

import workStyle from "../assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

function valuetext(value) {
   return `${value}°C`;
 }

export default function CreateEventPage() {
   const dispatch = useDispatch();
   const classes = useStyles();
   useEffect(() => {
   }, [])

   const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   return (
      <div className={classes.section}>
         <GridContainer>
            <GridItem cs={12} sm={5} md={5} style={{ margin: 'auto', marginTop: '10vh' }}>
               <h1 className={classes.title}>CREATE NEW EVENT</h1>
               <h2 className={classes.title}>FILTERS</h2>
               <form >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5vh' }}>
                     <div>
                        <h3 style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>Hair color</h3>
                     </div>
                     <div>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Black"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Gray"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Red"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Brown"
                           className={classes.formControl}
                        />
                        <br />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blond"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Chestnut"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blue"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Yellow"
                           className={classes.formControl}
                        />
                     </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5vh' }}>
                     <div>
                        <h3 style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>Skin color</h3>
                     </div>
                     <div>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Black"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Gray"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Red"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Brown"
                           className={classes.formControl}
                        />
                        <br />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blond"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Chestnut"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blue"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Yellow"
                           className={classes.formControl}
                        />
                     </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5vh' }}>
                     <div>
                        <h3 style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>Style</h3>
                     </div>
                     <div>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Black"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Gray"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Red"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Brown"
                           className={classes.formControl}
                        />
                        <br />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blond"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Chestnut"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Blue"
                           className={classes.formControl}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox
                                 tabIndex={-1}
                                 // onClick={() => handleToggle(21)}
                                 checkedIcon={<Check className={classes.checkedIcon} />}
                                 icon={<Check className={classes.uncheckedIcon} />}
                                 classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                 }}
                              />
                           }
                           classes={{ label: classes.label, root: classes.labelRoot }}
                           label="Yellow"
                           className={classes.formControl}
                        />
                     </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '5vh' }}>
                     <div>
                        <h3 style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>Height</h3>
                     </div>
                     <div style={{display: 'flex', alignItems: 'center'}}>
                        0
                     <Box sx={{ width: 350 }} style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Slider
                           getAriaLabel={() => 'Temperature range'}
                           value={value}
                           onChange={handleChange}
                           valueLabelDisplay="auto"
                           getAriaValueText={valuetext}
                           color="secondary"
                        />
                        </Box>
                        10
                     </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '5vh' }}>
                     <div>
                        <h3 style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>Bust</h3>
                     </div>
                     <div style={{display: 'flex', alignItems: 'center'}}>
                        0
                     <Box sx={{ width: 350 }} style={{paddingLeft: '7%', paddingRight: '7%'}}>
                        <Slider
                           getAriaLabel={() => 'Temperature range'}
                           value={value}
                           onChange={handleChange}
                           valueLabelDisplay="auto"
                           getAriaValueText={valuetext}
                           color="secondary"
                        />
                        </Box>
                        10
                     </div>
                  </div>
               </form>
            </GridItem>
         </GridContainer>
      </div>
   );
}
