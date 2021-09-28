import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Divider from '@mui/material/Divider';
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import pillsStyle from  "../../assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";
// import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";
import useStyles from './style';
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
                    tabButton: "Profile",
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.{" "}
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Settings",
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.{" "}
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Options",
                    tabContent: (
                      <span>
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.{" "}
                        </p>
                        <br />
                        <p>
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
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
