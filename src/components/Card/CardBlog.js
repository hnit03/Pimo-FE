import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import blogsStyle from "../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import macbook from "../../assets/img/macbook.png";
import laptop from "../../assets/img/laptop.jpg"
import phone from "../../assets/img/phone.png"
import phone2 from "../../assets/img/phone.jpg"
import { Button } from '@material-ui/core';

const useStyles = makeStyles(blogsStyle);

function CardBlog({ ...rest }) {
   const classes = useStyles();
   return (
      <div {...rest}>
         {/* Blogs 1 START */}
         <div>
            <div>
               <GridContainer>
                  <GridItem
                     xs={12}
                     sm={11}
                     md={11}
                     className={classes.mlAuto + " " + classes.mrAuto}
                  >
                     <Card plain blog className={classes.card}>
                        <GridContainer>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                           <GridItem xs={12} sm={4} md={4} style={{ textAlign: "left" }}>
                              <div style={{
                                 borderTop: '3px solid #f69cb8',
                                 borderLeft: '3px solid #f69cb8',
                                 width: '40%',
                                 height: '1.5rem',
                              }}></div>
                              <h3 className={classes.cardTitle}>
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Model
                                 </a>
                              </h3>
                              <p className={classes.description1}>
                                 Search for and hire the best models that fit your requirements? This has never been easier.
                              </p>
                              {/* <p className={classes.author}>
                                 by{" "}
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <b>Mike Butcher</b>
                                 </a>{" "}
                                 , 2 days ago
                              </p> */}
                              <Button
                                 href="#pablo"
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 onClick={(e) => e.preventDefault()}
                                 color="transparent"
                              >
                                 <div style={{ fontWeight: '800' }}>
                                    Apply now
                                 </div>
                              </Button>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                 <div></div>
                                 <div style={{
                                    borderBottom: '3px solid #f69cb8',
                                    borderRight: '3px solid #f69cb8',
                                    width: '80%',
                                    height: '1.5rem',
                                 }}></div>
                              </div>
                           </GridItem>
                           <GridItem xs={12} sm={6} md={6}>
                           </GridItem>
                        </GridContainer>
                        <GridContainer>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                           <GridItem xs={12} sm={10} md={10} style={{ marginTop: '5%' }}>
                              <div
                                 style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                 }}
                              >
                                 <img width="85%" src={macbook} alt='' />
                                 <img width="15%" height="15%" src={phone} alt='' />
                              </div>
                              <div
                                 className={classes.coloredShadow}
                                 style={{
                                    opacity: "1",
                                 }}
                              />
                           </GridItem>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                        </GridContainer>
                     </Card>

                     <Card plain blog className={classes.card}>
                        <GridContainer>
                           <GridItem xs={12} sm={6} md={6}>
                           </GridItem>
                           <GridItem xs={12} sm={4} md={4} style={{ textAlign: "right" }}>
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                 <div></div>
                                 <div style={{
                                    borderTop: '3px solid #f69cb8',
                                    borderRight: '3px solid #f69cb8',
                                    width: '40%',
                                    height: '1.5rem',
                                 }}></div>
                              </div>
                              <h3 className={classes.cardTitle}>
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Brand
                                 </a>
                              </h3>
                              <p className={classes.description1}>
                                 Search for and hire the best models that fit your requirements? This has never been easier.
                              </p>
                              {/* <p className={classes.author}>
                                 by{" "}
                                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <b>Mike Butcher</b>
                                 </a>{" "}
                                 , 2 days ago
                              </p> */}
                              <Button
                                 href="#pablo"
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 onClick={(e) => e.preventDefault()}
                                 color="transparent"
                              >
                                 <div style={{
                                    fontWeight: '800',
                                 }}>
                                    Start now
                                 </div>
                              </Button>
                              <div style={{
                                 borderBottom: '3px solid #f69cb8',
                                 borderLeft: '3px solid #f69cb8',
                                 width: '80%',
                                 height: '1.5rem',
                              }}></div>
                           </GridItem>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                        </GridContainer>
                        <GridContainer>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                           <GridItem xs={12} sm={10} md={10} style={{ marginTop: '5%' }}>
                              <div
                                 style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                 }}
                              >
                                 <img src={laptop} alt="..." width="85%" />
                                 <img width="15%" height="15%" src={phone2} alt='' />
                              </div>
                              <div
                                 className={classes.coloredShadow}
                                 style={{
                                    opacity: "1",
                                 }}
                              />
                           </GridItem>
                           <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                        </GridContainer>
                        <GridContainer>
                           <GridItem xs={12} sm={12} md={12} style={{ marginTop: '15%', marginBottom: '10%' }}>
                              <div style={{
                                 borderBottom: '3px solid #f69cb8',
                                 width: '20%',
                                 margin: 'auto'
                              }}></div>
                              <h3 style={{
                                 textAlign: 'center',
                                 margin: '5%',
                                 minHeight: "auto",
                                 fontSize: '5vw',
                              }}>
                                 AN EASIER WAY TO BOOKING.
                              </h3>
                              <div style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}>
                                 <Button
                                    href="#pablo"
                                    style={{
                                       backgroundColor: '#f69cb8',
                                       color: 'white',
                                       padding: '0.5rem 1.4rem 0.5rem 1.4rem'
                                    }}
                                    onClick={(e) => e.preventDefault()}
                                    color="transparent"
                                 >
                                    <div style={{
                                       fontWeight: '800',
                                       fontSize: '3vw'
                                    }}>
                                       SIGN UP NOW
                                    </div>
                                 </Button>
                              </div>
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
