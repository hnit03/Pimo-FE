import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Header/Header';
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "../Button/Button";
import navbarsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import image from '../../assets/img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';
import { auth, provider } from './../../adapters/firebase.js';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../actions/auth';
import LineStyle from "@material-ui/icons/LineStyle";
import Layers from "@material-ui/icons/Layers";
import Icon from "@material-ui/core/Icon";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles(navbarsStyle);

function Navbar() {
   const dispatch = useDispatch();
   const history = useHistory();
   const classes = useStyles();
   const [name, setName] = useState('')
   const nameAuth = useSelector((state) => state.auth);

   useEffect(() => {
      if (Cookies.get('name') !== undefined) {
         setName(Cookies.get('name'));
      } else {
         setName(nameAuth)
      }
   }, [nameAuth])

   const onClickHowItWork = useCallback(() => history.push('/how-it-work'), [history]);
   const onClickSearchModel = useCallback(() => history.push('/model-search'), [history]);

   const handleLogin = () => {
      auth.signInWithPopup(provider)
         .then((result) => {
            var token = result.user.multiFactor.user.accessToken;
            var mail = result.user.email;
            var postData = {
               token: token,
               mail: mail,
            };
            let axiosConfig = {
               headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*",
               }
            };
            dispatch(login(postData, axiosConfig));
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   const handleLogout = () => {
      Cookies.remove('name');
      Cookies.remove('jwt');
      setName('');
      dispatch(logout());
   }

   return (
      <div >
         <Header
            brand={image}
            color="transparent"
            changeColorOnScroll={{
               height: 100,
            }}
            links={
               <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                     <Button
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={onClickHowItWork}
                        color="transparent"
                     >
                        <Link to="/how-it-work" className={classes.dropdownLink}>
                           Về Pimo
                        </Link>
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     <Button
                        href="#pablo"
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={onClickSearchModel}
                        color="transparent"
                     >
                        <Link to="/model-search" className={classes.dropdownLink}>
                           Người mẫu
                        </Link>
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     <Button
                        href="#pablo"
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={(e) => e.preventDefault()}
                        color="transparent"
                     >
                        Nhãn hàng
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     <Button color="transparent" className={classes.navLink + " " + classes.navLinkActive}>
                        <NotificationsIcon fontSize="small" />
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     {name === '' ? (
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={() => handleLogin()}
                           color="transparent"
                        >
                           <AccountCircleIcon /> Đăng nhập
                        </Button>
                     ) : (
                        <CustomDropdown
                           left
                           navDropdown
                           dropdownHeader="Dropdown Header"
                           buttonText={name}
                           buttonProps={{
                              className: classes.navLink,
                              color: "transparent",
                           }}
                           dropdownList={[
                              <Link to="/" className={classes.dropdownLink}>
                                 <LineStyle className={classes.dropdownIcons} /> Presentation Page
                              </Link>,
                              <Link to="/components" className={classes.dropdownLink}>
                                 <Layers className={classes.dropdownIcons} />
                                 All components
                              </Link>,
                              <a
                                 href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
                                 className={classes.dropdownLink}
                              >
                                 <Icon className={classes.dropdownIcons}>content_paste</Icon>
                                 Documentation
                              </a>,
                              <div onClick={handleLogout} className={classes.dropdownLink}
                              style={{ color: 'red' }}>
                                 <LogoutIcon className={classes.dropdownIcons} />
                                    Logout
                              </div>
                           ]}
                        />
                     )}

                  </ListItem>
                  <ListItem className={classes.listItem1} >
                     <Button
                        href="#pablo"
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={(e) => e.preventDefault()}
                        style={{
                           backgroundColor: 'black',
                           color: 'white',
                           borderRadius: '0.5rem',
                        }}
                     >
                        Tạo sự kiện
                     </Button>
                  </ListItem>
               </List>
            }
         />
      </div>
   )
}

export default Navbar
