import React from "react";
import Divider from '@mui/material/Divider';
import GridContainer from '../Grid/GridContainer';
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import SectionContent from "./SectionContent";
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionPillsStyle';

var listModelDetails =
  [{ name: "Experience", value: "Very Experienced" },
  { name: "Age", value: "27" },
  { name: "Date of birth", value: "10/2/1994" },
  { name: "Gifted", value: "Singing" }, 
  { name: "Compensation", value: "Depends on Assignment" },
  { name: "Adress", value: "No. 269 Lien Phuong Street, District 9, Ho Chi Minh City"}];

  var listBodyAttributes = 
  [{ name: "Height", value: "175 cm" },
  { name: "Weight", value: "49 kg" },
  { name: "Bust", value: "89 cm" },
  { name: "Waist", value: "58 cm" },
  { name: "Hips", value: "91 cm" },
  { name: "Cup", value: "B" }, 
  { name: "Dress", value: "42" },
  { name: "Shoe", value: "2.0"}];

  var listBodyMeasurements = 
  [{ name: "Ethnicity", value: "Eastern European" },
  { name: "Skin Color", value: "White" },
  { name: "Eye Color", value: "Brown" },
  { name: "Hair Length", value: "Very Long" },
  { name: "Hair Color", value: "Blonde" },
  { name: "Piercings", value: "None" }, 
  { name: "Tattoos", value: "None" },];
  
  var listModelStyles = [
    "Acting","Art","Bodypaint","Cosplay","Editorial","Erotic",
    "Fashion","Fetish","Fit Modeling","Fitness","Glamour","Hair/Makeup",
    "Lifestyle","Lingerie"];

export default function SectionPills() {

  const classes = useStyles();
  return (
    <div className={classes.tab_Style}>
      <Divider className={classes.divider_Style} >Model Infomation</Divider>
      <GridContainer>
        <GridItem>
          <NavPills
            color="rose"
            tabs={[
              {
                tabButton: "Profile details",
                tabContent: (
                  <span>
                    <SectionContent 
                    list1 = {listModelDetails} 
                    list2 = {listBodyAttributes}
                    list3 = {listBodyMeasurements}
                    list4 = {listModelStyles}/>
                  </span>
                ),
              },
              {
                tabButton: "Body attributes",
                tabContent: (
                  <span>
                  
                  </span>
                ),
              },
              {
                tabButton: "Body measurements",
                tabContent: (
                  <span>
                    <p></p>
                  </span>
                ),
              },
              {
                tabButton: "Model Styles",
                tabContent: (
                  <span>
                    <p></p>
                  </span>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
