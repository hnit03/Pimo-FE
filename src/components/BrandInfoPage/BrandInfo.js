import React, { useEffect } from "react";
// import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import logoBrand from "../../assets/img/android.png";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
 
import { useDispatch } from "react-redux";
import { getCastings } from "../../actions/castings";
import { useSelector } from "react-redux";

 
import { useHistory } from "react-router-dom";
import EventCard from "../BrandInfo/EventCard/EventCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const useStyles = makeStyles(styles);
export default function StandardImageList(props) {
  const classes = useStyles();

  const [pageNo, setPageNo] = React.useState(props.pageOffset);
  // const [check, setCheck] = React.useState(false);

  // const castings = useSelector((state) => state.castings);
  // const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCastings(pageNo));
  }, [pageNo]);

  
 
  return (
    <div className={classes.containerFilterAndResult}>
      <div
        className={classes.container}
        style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={10}>
            <form autoComplete="off">
              <h2>My Profile</h2>
              <div>
                <h3>My Profile</h3>
              </div>
              <hr></hr>
              <h3 >Basic info</h3>
              <hr></hr>
              <h3>Basic info</h3>
            </form>
          </GridItem>
        </GridContainer>
      </div>
      <div
        className={classes.container}
        style={{
          borderLeft: "1px solid #cfcfcf ",
          float: "left",
          width: "100%",
          margin: 0,
          marginLeft: "-5%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5rem",
          }}
        >
         <GridContainer spacing={2} style={{ marginLeft: "1rem" }} xs={6}>
           <Grid item xs={7}>
             <div>
               <img className={classes.logoBrand} src={logoBrand} />
             </div>
           </Grid>    
         </GridContainer>

         <GridContainer spacing={2}>
           <Grid item xs={12}>
             <div style={{ display: "flex" }}>
               <h1 style={{ margin: 0 }}>THANH VI HUYNH</h1>
               <div>
                 <StarBorderOutlinedIcon />
               </div>
             </div>
             <h4 style={{ margin: 0 }}>Khơ me,Viet nam</h4>
             <h4>iiiiiiiiiiiiiiiiiiiiiiiiii</h4>
           </Grid>
         </GridContainer>

         <GridContainer spacing={2} xs={4}>
           <Grid item xs={5}>
             <Button variant="outlined">Outlined</Button>
           </Grid>
         </GridContainer>
 
        </div>
        {/* <Stack spacing={2} style={{ alignItems: "center", marginBottom: "5%" }}>
               <Pagination
                  onChange={handleChangePage}
                  defaultPage={parseInt(pageNo)}
                  count={castings.totalPage}
                  showFirstButton
                  showLastButton
               />
            </Stack> */}
      </div>
    </div>
  );
}
