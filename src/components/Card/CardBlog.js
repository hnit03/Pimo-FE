import React, { useCallback, useEffect, useState } from 'react'
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
import SignUpDialog from '../Dialog/SignUpDialog'
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



const useStyles = makeStyles(blogsStyle);

function CardBlog({ ...rest }) {
   const history = useHistory();
   const classes = useStyles();
   const onClickSearchModel = useCallback(() => history.push('/model-search/1'), [history]);
   const onClickSearchEvent = useCallback(() => history.push('/event-search/1'), [history]);
   const [count, setCount] = useState(0);
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
                              <h3 style={{ fontSize: '40px', margin: '0' }}>
                                 Ng?????i m???u
                              </h3>
                              <p className={classes.description1}>
                                 T??m ki???m v?? ???ng tuy???n c??c s??? ki???n c???a c??c th????ng hi???u ph?? h???p v???i b???n m???t c??ch nhanh ch??ng . C?? h???i l??m vi???c v???i c??c th????ng hi???u n???i ti???ng ngay trong t???m tay.
                              </p>
                              <Button
                                 href="#pablo"
                                 onClick={onClickSearchEvent}
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 // onClick={(e) => e.preventDefault()}
                                 color="transparent"
                              >
                                 <div style={{ fontWeight: '800' }}>
                                    ????ng tuy????n ngay
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
                                 <img width="15%" height="15%" src={phone} alt='' />
                                 <img width="85%" src={macbook} alt='' />
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
                              <h1 style={{ fontSize: '40px', margin: '0' }}>
                                 Nh??n h??ng
                              </h1>
                              <p className={classes.description1}>
                                 T??m ki???m v?? h???p t??c v???i nh???ng ng?????i m???u ph?? h???p v???i ti??u ch?? c???a b???n? ??i???u n??y ch??a bao gi??? d??? d??ng h??n th???.
                              </p>
                              <Button
                                 href="#pablo"
                                 onClick={onClickSearchModel}
                                 style={{ backgroundColor: '#f69cb8', color: 'white', padding: '0.7rem' }}
                                 color="transparent"
                              >
                                 <div style={{
                                    fontWeight: '800',
                                 }}>
                                    B????t ??????u ngay
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
                                 fontSize: '4vw',
                                 textTransform: 'uppercase',
                              }}>
                                 Ba??n co?? mu????n tr???? tha??nh ??????i ta??c cu??a chu??ng t??i?
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
                                    onClick={(e) => {
                                       e.preventDefault()
                                       setCount(count + 1)
                                       // ReactDOM.render(
                                       //    <Provider>
                                       //       <SignUpDialog />
                                       //    </Provider>
                                       //    , document.getElementById('root'))
                                    }}
                                    color="transparent"
                                 >
                                    <div style={{
                                       fontWeight: '800',
                                       fontSize: '2vw'
                                    }}>
                                       ????ng ky?? ngay
                                    </div>
                                 </Button>
                                 { Array(count).fill(<SignUpDialog loginFail={'signUp#@!'} />) }
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
