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
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(navbarsStyle);

function Navbar() {
   const history = useHistory();
   const classes = useStyles();
   const onClickHowItWork = useCallback(() => history.push('/how-it-work'), [history]);
   const onClickSearchModel = useCallback(() => history.push('/model-search'), [history]);
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
                        // href="#pablo"
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
                        onClick={(e) => e.preventDefault()}
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
