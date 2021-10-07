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
import InfoArea from "../InfoArea/InfoArea.js";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import CustomInput from "../CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import javascriptStyles from "../../assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="down" ref={ref} {...props} />;
});

function SignUpDialog(props) {
   const classes = useStyles();
   const [signupModal, setSignupModal] = React.useState(false);

   useEffect(() => {
      if(props.loginFail.indexOf('@LoginFail:') !== -1) {
         setSignupModal(true)
      }
   }, [props.loginFail])

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
                  Register
               </h3>
            </DialogTitle>
            <DialogContent
               id="signup-modal-slide-description"
               className={classes.modalBody}
            >
               <form className={classes.form}>
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
                                    <Face
                                       className={classes.inputAdornmentIcon}
                                    />
                                 </InputAdornment>
                              ),
                              placeholder: "First Name...",
                           }}
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
                                    <Email
                                       className={classes.inputAdornmentIcon}
                                    />
                                 </InputAdornment>
                              ),
                              placeholder: "Email...",
                           }}
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
                                    <Icon
                                       className={classes.inputAdornmentIcon}
                                    >
                                       lock_outline
                                    </Icon>
                                 </InputAdornment>
                              ),
                              placeholder: "Password...",
                           }}
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
                                    <Face
                                       className={classes.inputAdornmentIcon}
                                    />
                                 </InputAdornment>
                              ),
                              placeholder: "First Name...",
                           }}
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
                                    <Email
                                       className={classes.inputAdornmentIcon}
                                    />
                                 </InputAdornment>
                              ),
                              placeholder: "Email...",
                           }}
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
                                    <Icon
                                       className={classes.inputAdornmentIcon}
                                    >
                                       lock_outline
                                    </Icon>
                                 </InputAdornment>
                              ),
                              placeholder: "Password...",
                           }}
                        />
                     </GridItem>
                  </GridContainer>
                  <div className={classes.textCenter}>
                     <Button round color="primary">
                        Get started
                     </Button>
                  </div>
               </form>
            </DialogContent>
         </Card>
      </Dialog>
   )
}

export default SignUpDialog
