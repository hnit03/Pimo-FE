import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Card from "../Card/Card.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "../CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomInput from "../CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions/categories';
import { signupBrand } from '../../actions/brands';
import SnackbarContent from "../Snackbar/SnackbarContent.js";

import javascriptStyles from "../../assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="down" ref={ref} {...props} />;
});

function SignUpDialog(props) {
   const classes = useStyles();
   const [signupModal, setSignupModal] = React.useState(false);
   const [brandData, setBrandData] = React.useState({ name: '', email: '', phone: '', address: '', type: '' });

   const dispatch = useDispatch();
   const categories = useSelector((state) => state.categories);
   const brands = useSelector((state) => state.brands);

   useEffect(() => {
      dispatch(getCategories())
   }, [])

   useEffect(() => {
      if (props.loginFail.indexOf('@LoginFail:') !== -1) {
         setSignupModal(true)
         document.getElementById('loginFail').style.display = 'cover';
         setTimeout(
            () => document.getElementById('loginFail').style.display = 'none',
            3000
         );
      }
   }, [props.loginFail])

   const handleSubmit = async (e) => {
      e.preventDefault();
      var postData = {
         mail: brandData.email,
         name: brandData.name,
         description: 'Hello',
         brandCateId: brandData.type,
         phone: brandData.phone,
         address: brandData.address,
      };
      let axiosConfig = {
         headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
         }
      };
      dispatch(signupBrand(postData, axiosConfig));
      if (brands.success === false) {
         document.getElementById('signupFail').style.display = 'block';
         setTimeout(
            () => document.getElementById('signupFail').style.display = 'none',
            3000
         );
      } else {
         setSignupModal(false)
         document.getElementById('signupSuccess').style.display = 'block';
         setTimeout(
            () => document.getElementById('signupSuccess').style.display = 'none',
            3000
         );
         setBrandData({ name: '', lastName: '', email: '', phone: '', address: '', type: '' });
      }
      // setBrandData({ name: '', lastName: '', email: '', phone: '', address: '', type: '' });
   };

   return (
      <Dialog
         classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalSignup,
            container: classes.containerSignup,
         }}
         open={signupModal}
         TransitionComponent={Transition}
         keepMounted
         onClose={() => setSignupModal(false)}
         aria-labelledby="signup-modal-slide-title"
         aria-describedby="signup-modal-slide-description"
      >
         <Card plain className={classes.modalSignupCard}>
            <DialogTitle
               id="signup-modal-slide-title"
               disableTypography
               className={classes.modalHeader}
            >
               <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => setSignupModal(false)}
               >
                  {" "}
                  <Close className={classes.modalClose} />
               </Button>
               <h3
                  className={classes.cardTitle + " " + classes.modalTitle}
               >
                  Đăng ký
               </h3>
            </DialogTitle>
            <DialogContent
               id="signup-modal-slide-description"
               className={classes.modalBody}
            >
               <div id="signupFail" style={{
                  display: 'none',
               }}>
                  <SnackbarContent
                     message={
                        <span style={{ fontSize: '120%', textAlign: 'right' }}>
                           <b>Đăng ký thất bại: </b> Tài khoản đã tồn tại
                        </span>
                     }
                     close
                     color="danger"
                  />
               </div>
               <div id="loginFail" style={{
                  display: 'none',
               }}>
                  <SnackbarContent
                     message={
                        <span style={{ fontSize: '120%', textAlign: 'right' }}>
                           <b>Đăng nhập thất bại: </b> Tài khoản không tồn tại
                        </span>
                     }
                     close
                     color="danger"
                  />
               </div>
               <form className={classes.form} onSubmit={handleSubmit}>
                  <GridContainer>
                     <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mlAuto}
                     >
                        <CustomInput
                           formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                           }}
                           inputProps={{
                              startAdornment: (
                                 <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                 >
                                 </InputAdornment>
                              ),
                              placeholder: "Tên...",
                           }}
                           value={brandData.name}
                           onChange={(e) => { setBrandData({ ...brandData, name: e.target.value }) }}
                           required={true}
                        />
                        <CustomInput
                           formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                           }}
                           type='number'
                           inputProps={{
                              startAdornment: (
                                 <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                 >
                                 </InputAdornment>
                              ),
                              placeholder: "Số điện thoại...",
                           }}
                           value={brandData.phone}
                           onChange={(e) => { setBrandData({ ...brandData, phone: e.target.value }) }}
                           required={true}
                        />
                        <CustomInput
                           formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                           }}
                           inputProps={{
                              startAdornment: (
                                 <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                 >
                                 </InputAdornment>
                              ),
                              placeholder: "Địa chỉ...",
                           }}
                           value={brandData.address}
                           onChange={(e) => { setBrandData({ ...brandData, address: e.target.value }) }}
                           required={true}
                        />
                     </GridItem>
                     <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mrAuto}
                     >
                        <CustomInput
                           formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                           }}
                           inputProps={{
                              startAdornment: (
                                 <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                 >
                                 </InputAdornment>
                              ),
                              placeholder: "Email...",
                           }}
                           value={brandData.email}
                           onChange={(e) => { setBrandData({ ...brandData, email: e.target.value }) }}
                           required={true}
                        />
                        <div style={{ marginTop: '3.4%' }}>
                           <InputLabel
                              htmlFor="multiple-select"
                              className={classes.selectLabel}
                           >
                              Lĩnh vực
                           </InputLabel>
                           <Select
                              MenuProps={{
                                 className: classes.selectMenu,
                                 classes: { paper: classes.selectPaper },
                              }}
                              classes={{ select: classes.select }}
                              inputProps={{
                                 name: "multipleSelect",
                                 id: "multiple-select",
                              }}
                              style={{ width: '20.4rem' }}
                              required={true}
                           >
                              {
                                 (categories.brandCateList !== undefined) ? (
                                    (categories.brandCateList.length !== 0) ? (
                                       categories.brandCateList.map((category) => (
                                          <MenuItem
                                             onClick={(e) => { setBrandData({ ...brandData, type: category.id }) }}
                                             classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelectedMultiple,
                                             }}
                                             value={category.id}
                                          >
                                             {category.name}
                                          </MenuItem>
                                       ))
                                    ) : null
                                 ) : null
                              }
                           </Select>
                        </div>
                     </GridItem>
                  </GridContainer>
                  <div className={classes.textCenter}>
                     <Button round color="black" type="submit"
                        style={{
                           backgroundColor: 'black',
                           color: 'white',
                           borderRadius: '0.5rem',
                        }}
                     >
                        <p style={{
                           margin: 0,
                           fontSize: "14px",
                           fontWeight: "600"
                        }}>Đăng ký</p>
                     </Button>
                  </div>
               </form>
            </DialogContent>
         </Card>
      </Dialog>
   )
}

export default SignUpDialog
