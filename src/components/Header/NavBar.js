import React, { useCallback } from 'react'
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
import { login } from '../../actions/auth';

const useStyles = makeStyles(navbarsStyle);

function Navbar() {
   const dispatch = useDispatch();
   const history = useHistory();
   const classes = useStyles();
   const onClickHowItWork = useCallback(() => history.push('/how-it-work'), [history]);
   const onClickSearchModel = useCallback(() => history.push('/model-search'), [history]);
   const handleLogin = () => {
      auth.signInWithPopup(provider)
         .then((result) => {
            var token = result.user.multiFactor.user.accessToken;
            var mail = result.user.email;
            // console.log(token);
            // console.log(mail);
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
                     <Button
                        href="#pablo"
                        className={classes.navLink + " " + classes.navLinkActive}
                        onClick={() => handleLogin()}
                        color="transparent"
                     >
                        <AccountCircleIcon /> Đăng nhập
                     </Button>
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
