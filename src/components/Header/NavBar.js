import React from 'react'
import Header from '../Header/Header';
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "../Button/Button";
import navbarsStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import image from '../../assets/img/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Navbar extends React.Component {


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
                  <List className={classes.list + " " + classes.mlAuto}>
                     <ListItem className={classes.listItem}>
                        <Button
                           href="#pablo"
                           className={classes.navLink + " " + classes.navLinkActive}
                           onClick={(e) => e.preventDefault()}
                           color="transparent"
                        >
                           <Link to="/how-it-work" className={classes.dropdownLink}>
                              Cách Pimo hoạt động
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
                           Người mẫu
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
}

export default withStyles(navbarsStyle, { withTheme: true })(Navbar)
