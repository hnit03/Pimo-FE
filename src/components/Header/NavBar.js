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
import SignUpDialog from '../Dialog/SignUpDialog'

const useStyles = makeStyles(navbarsStyle);

function Navbar() {
   const dispatch = useDispatch();
   const history = useHistory();
   const classes = useStyles();
   const [name, setName] = useState('')
   const nameAuth = useSelector((state) => state.auth);
   const [loginFail, setLoginFail] = useState('')

   useEffect(() => {
      if (Cookies.get('name') !== undefined) {
         setName(Cookies.get('name'));
      } else if (nameAuth.indexOf('@LoginFail:') !== -1) {
         setLoginFail(nameAuth);
      } else if (nameAuth !== undefined) {
         setName(nameAuth)
      }
   }, [nameAuth])

   const onClickHowItWork = useCallback(() => history.push('/how-it-work'), [history]);
   const onClickSearchModel = useCallback(() => history.push('/model-search/1'), [history]);
   const onClickSearchBrand = useCallback(() => history.push('/brand-search/1'), [history]);
   const onClickSearchEvent = useCallback(() => history.push('/event-search/1'), [history]);
   const onClickCreateEvent = useCallback(() => history.push('/event-create'), [history]);

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
         <SignUpDialog loginFail={loginFail} />
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
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={onClickSearchEvent}
                        color="transparent"
                     >
                        <Link to="/event-search" className={classes.dropdownLink}>
                           Chiến dịch
                        </Link>
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     <Button
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={onClickSearchBrand}
                        color="transparent"
                     >
                        <Link to="/brand-search" className={classes.dropdownLink}>
                           Nhãn hàng
                        </Link>
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     <Button color="transparent" className={classes.navLink + " " + classes.navLinkActive}>
                        <NotificationsIcon fontSize="small" />
                     </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                     {name === '' ?
                        (<Button
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={() => handleLogin()}
                           color="transparent"
                        >
                           <AccountCircleIcon /> Đăng nhập
                        </Button>)
                        :
                        (<CustomDropdown
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
                        />)
                     }
                  </ListItem>
                  <ListItem className={classes.listItem1} >
                     {name === '' ?
                        null
                        :
                        (<Button
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={onClickCreateEvent}
                           style={{
                              backgroundColor: 'black',
                              color: 'white',
                              borderRadius: '0.5rem',
                           }}
                        >
                           Tạo Chiến dịch
                        </Button>)
                     }
                  </ListItem>
               </List>
            }
         />
      </div>
   )
}

export default Navbar
