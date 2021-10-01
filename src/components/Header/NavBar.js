import React from 'react'
import Header from '../Header/Header';
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "../Button/Button";
import UIButton from "@material-ui/core/Button";
import navbarsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import LineStyle from "@material-ui/icons/LineStyle";
import Layers from "@material-ui/icons/Layers";
import Icon from "@material-ui/core/Icon";
import style from './style.css'
import image from '../../assets/img/logo.png';
import avatar from '../../assets/img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
class Toggle extends React.Component {
   render() {
      return <div>
         <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {this.props.hidden ? null : <div className="toggle-base">{this.props.children}</div>}
         </ReactCSSTransitionGroup>
      </div>
   }
}

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.state = { hidden: true, show: true };
   }

   onClick() {
      this.setState((prevState, props) => ({
         hidden: !(prevState.hidden),
         show: !(prevState.show)
      }));
   }
   render() {
      const { classes } = this.props;
      return (
         <div >
            <Header
               brand={image}
               color="transparent"
               changeColorOnScroll={{
                  height: 100,
               }}
               links={
                  // <div>
                  //    <div className="navbar_left">
                  //       <img id="logo_image" alt="" src={image} style={{ paddingTop: '0.3rem' }} />
                  //    </div>
                  //    <div>
                  <List className={classes.list + " " + classes.mlAuto}>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           How it work
                        </Button>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           Model
                        </Button>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           Brand
                        </Button>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <Button color="transparent" className={classes.navLink + " " + classes.navLinkActive}>
                           <NotificationsIcon fontSize="small" />
                        </Button>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           <SearchIcon />
                        </Button>
                     </ListItem>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           <AccountCircleIcon /> Login
                        </Button>
                     </ListItem>
                  </List>
                  //    </div>
                  // </div>
               }
            // links={
            //    <div className="navbar">
            //       <div className="navbar_left">
            //          <img id="logo_image" alt="" src={image} style={{ paddingTop: '0.3rem' }} />
            //       </div>
            //       <div className="navbar_right">
            //          <div className="navbar_inside">
            //             <Toggle hidden={this.state.hidden}>
            //                <Input placeholder="Enter to search" disableUnderline="false" className="searchInput_Style" />
            //             </Toggle>
            //             <Toggle hidden={!this.state.show}>
            //                <List className={classes.list + " " + classes.mlAuto}>
            //                   <ListItem className={classes.listItem}>
            //                      <Button
            //                         href="#pablo"
            //                         className={classes.navLink + " " + classes.navLinkActive}
            //                         onClick={(e) => e.preventDefault()}
            //                         color="transparent"
            //                      >
            //                         How Pimo work
            //                      </Button>
            //                   </ListItem>
            //                   <ListItem className={classes.listItem}>
            //                      <Button
            //                         href="#pablo"
            //                         className={classes.navLink + " " + classes.navLinkActive}
            //                         onClick={(e) => e.preventDefault()}
            //                         color="transparent"
            //                      >
            //                         Model
            //                      </Button>
            //                   </ListItem>
            //                   {/* <ListItem className={classes.listItem}>
            //                      <Button
            //                         href="#pablo"
            //                         className={classes.navLink + " " + classes.navLinkActive}
            //                         onClick={(e) => e.preventDefault()}
            //                         color="transparent"
            //                      >
            //                         Brand
            //                      </Button>
            //                   </ListItem> */}



            //                   <ListItem className={classes.listItem}>
            //                      <CustomDropdown
            //                         left
            //                         noLiPadding
            //                         navDropdown
            //                         dropdownHeader="Dropdown Header"
            //                         buttonText="Brand"
            //                         buttonProps={{
            //                            className: classes.navLink,
            //                            color: "transparent",
            //                         }}
            //                         dropdownList={[
            //                            <Link to="/" className={classes.dropdownLink}>
            //                               <LineStyle className={classes.dropdownIcons} /> Presentation Page
            //                            </Link>,
            //                            <Link to="/components" className={classes.dropdownLink}>
            //                               <Layers className={classes.dropdownIcons} />
            //                               All components
            //                            </Link>,
            //                            <a
            //                               href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
            //                               className={classes.dropdownLink}
            //                            >
            //                               <Icon className={classes.dropdownIcons}>content_paste</Icon>
            //                               Documentation
            //                            </a>,
            //                         ]}
            //                      />
            //                   </ListItem>
            //                   <ListItem className={classes.listItem}>
            //                      <Button color="transparent" className={classes.navLink + " " + classes.navLinkActive}>
            //                         <NotificationsIcon fontSize="small" />
            //                      </Button>
            //                   </ListItem>
            //                   <ListItem className={classes.listItem}>
            //                      <Button
            //                         href="#pablo"
            //                         className={classes.navLink + " " + classes.navLinkActive}
            //                         onClick={(e) => e.preventDefault()}
            //                         color="transparent"
            //                      >
            //                         <AccountCircleIcon /> Login
            //                      </Button>
            //                   </ListItem>
            //                </List>
            //             </Toggle>
            //          </div>
            //          <IconButton
            //             size="large"
            //             aria-label="account of current user"
            //             aria-controls='primary-search-account-menu'
            //             aria-haspopup="true"
            //             color="inherit"
            //             onClick={this.onClick}
            //             style={{ height: '4rem' }}
            //          >
            //             {this.state.hidden === true ?
            //                (<SearchIcon className={classes.navLink + " " + classes.navLinkActive} />)
            //                :
            //                (<CloseIcon className={classes.navLink + " " + classes.navLinkActive} />)}
            //          </IconButton>
            //          {/* <List>
            //             <ListItem
            //                style={{
            //                   float: "left",
            //                   color: "inherit",
            //                   position: "relative",
            //                   display: "block",
            //                   width: "auto",
            //                   margin: "0",
            //                   padding: "0",
            //                   marginLeft: '10%'
            //                }}
            //             >
            //                <Button
            //                   href="#pablo"
            //                   className={classes.navLink + " " + classes.navLinkActive}
            //                   onClick={(e) => e.preventDefault()}
            //                   style={{
            //                      backgroundColor: 'black',
            //                      color: 'white',
            //                   }}
            //                >
            //                   Create an event
            //                </Button>
            //             </ListItem>
            //          </List> */}
            //       </div>
            //    </div>
            // }
            />
         </div>
      )
   }
}

export default withStyles(navbarsStyle, { withTheme: true })(Navbar)
