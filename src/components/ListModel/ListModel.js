import React from "react";
  // import useStyles from "./style";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";

import { Button } from "@material-ui/core";
// import "./style.css";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import Rose from "../Typography/Rose";
 const itemData = [
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",
    title: "Breakfast",
  },
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",
    title: "Burger",
  },
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",    title: "Camera",
  },
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",    title: "Coffee",
  },
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",    title: "Hats",
  },
  {
    img : "https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-c2e089.jpeg",    title: "Honey",
  },
   
];

const useStyles = makeStyles(styles);

export default function StandardImageList() {
  const classes = useStyles();
  return (
    <div style={{width: '100%',backgroundColor:'#f9f9f9',marginTop:"0.1em"}}>
      <div className={classes.container} style={{width:'65%'}}>
      <div style={{ textAlign: "center",width:'40%',margin:'0 auto',padding:'2.5em' }} className={classes.title}>
        <h2>Our Models</h2>
        <h4>
        We have diverse range of models with great work ethics and communication skills.
        </h4>
        <br />
      </div>
      <GridContainer>
        {itemData.map((image, index) => (
          <GridItem key={index} xs={12} sm={4} md={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={image.img} alt="..."  />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${image.img})`,
                    opacity: "1",
                 
                  }}
                />
              </CardHeader>
              <CardBody>
                <Rose>
                  <h style={{ fontSize: 12 }} className={classes.cardCategory}>
                    DYNAMIC SHADOWS
                  </h>
                </Rose>
                <h4 className={classes.cardTitle}>
                  <a
                    style={{ fontSize: 19 }}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    The image from this card is getting a pink shadow 
                  </a>
                </h4>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

      <div className={classes.containerButton}>
        <Button variant="outlined">VIEW ALL PROFILES</Button>
      </div>
     
    </div>
    </div>
  );
}
