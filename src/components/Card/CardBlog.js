import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import Info from "../Typography/Info.js";
import blogsStyle from "../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import cardBlog4 from "../../assets/img/logo.png";
import brandLogo from "../../assets/img/brandLogo.jpg"
import macbook from "../../assets/img/macbook.png"
import { Button } from '@material-ui/core';

const useStyles = makeStyles(blogsStyle);

function CardBlog({ ...rest }) {
   const classes = useStyles();
   return (
      <div className="cd-section" {...rest}>
         {/* Blogs 1 START */}
         <div className={classes.blog}>
            <div className={classes.container}>
               <GridContainer>
                  <GridItem
                     xs={12}
                     sm={11}
                     md={11}
                     className={classes.mlAuto + " " + classes.mrAuto}
                  >
                     <br />
                     <Card plain blog className={classes.card}>
                        <GridContainer>
                           <GridItem xs={12} sm={6} md={6}>
                              <a href="#pablito" onClick={(e) => e.preventDefault()}>
                                 <img width="100%" src={macbook} 
                                 // style={{ marginTop: '10rem' }} 
                                 />
                              </a>
                              <div
                                 className={classes.coloredShadow}
                                 style={{
                                    // backgroundImage: `url(${cardBlog4})`,
                                    opacity: "1",
                                 }}
                              />
                           </GridItem>
                           <GridItem xs={12} sm={5} md={5} style={{ textAlign: "right" }}>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                 <div></div>
                                 <div style={{
                                    borderTop: '3px solid #f69cb8',
                                    borderRight: '3px solid #f69cb8',
                                    width: '23rem',
                                    height: '1.5rem',
                                 }}></div>
                              </div>
                              <h3 className={classes.cardTitle}>
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Model
                                 </a>
                              </h3>
                              <p className={classes.description1}>
                                 Like so many organizations these days, Autodesk is a
                                 company in transition. It was until recently a traditional
                                 boxed software company selling licenses. Today, it’s
                                 moving to a subscription model. Yet its own business model
                                 disruption is only part of the story
                              </p>
                              <p className={classes.author}>
                                 by{" "}
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <b>Mike Butcher</b>
                                 </a>{" "}
                                 , 2 days ago
                              </p>
                              <Button
                                 href="#pablo"
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 onClick={(e) => e.preventDefault()}
                                 color="transparent"
                              >
                                 <div style={{ fontWeight: '800' }}>
                                    Get Started
                                 </div>
                              </Button>
                              <div style={{
                                 borderBottom: '3px solid #f69cb8',
                                 borderLeft: '3px solid #f69cb8',
                                 width: '30rem',
                                 height: '1.5rem',
                              }}></div>
                           </GridItem>
                        </GridContainer>
                     </Card>
                     {/* <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                           <img style={{ height: '10rem' }} src={brandLogo} />
                        </GridItem>
                     </GridContainer> */}
                     <Card plain blog className={classes.card}>
                        <GridContainer>
                           <GridItem xs={12} sm={5} md={5}>
                              <div style={{
                                 borderTop: '3px solid #f69cb8',
                                 borderLeft: '3px solid #f69cb8',
                                 width: '23rem',
                                 height: '1.5rem',
                              }}></div>
                              <h3 className={classes.cardTitle}>
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Brand
                                 </a>
                              </h3>
                              <p className={classes.description1}>
                                 Like so many organizations these days, Autodesk is a
                                 company in transition. It was until recently a traditional
                                 boxed software company selling licenses. Today, it’s
                                 moving to a subscription model. Yet its own business model
                                 disruption is only part of the story
                              </p>
                              <p className={classes.author}>
                                 by{" "}
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <b>Mike Butcher</b>
                                 </a>{" "}
                                 , 2 days ago
                              </p>
                              <Button
                                 href="#pablo"
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 onClick={(e) => e.preventDefault()}
                                 color="transparent"
                              >
                                 <div style={{ fontWeight: '800' }}>
                                    Get Started
                                 </div>
                              </Button>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                 <div></div>
                                 <div style={{
                                    borderBottom: '3px solid #f69cb8',
                                    borderRight: '3px solid #f69cb8',
                                    width: '30rem',
                                    height: '1.5rem',
                                 }}></div>
                              </div>
                           </GridItem>
                           <GridItem xs={12} sm={6} md={6}>
                              <a href="#pablito" onClick={(e) => e.preventDefault()}>
                                 <img src='https://topmodeleurope.net/wp-content/uploads/2021/03/TOP-MODEL-EUROPE-INTERNATIONAL-MODEL-CONTEST-1.jpg' alt="..."
                                    // style={{ marginTop: '10rem' }} 
                                    width="100%"/>
                              </a>
                              <div
                                 className={classes.coloredShadow}
                                 style={{
                                    opacity: "1",
                                 }}
                              />
                           </GridItem>
                        </GridContainer>
                     </Card>
                  </GridItem>
               </GridContainer>
            </div>
         </div>
      </div>
   )
}

export default CardBlog
