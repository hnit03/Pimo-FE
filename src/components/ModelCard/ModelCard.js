import React from "react";
import useStyles from "./style";
import Detail from "./InfoModel";
import { Button } from "@material-ui/core";
import image from "../../assets/img/Home-BG.png";
const detail = [
  {
    subDescription:
      "Create your own TOPModel with the TOPModel colouring books and become a fashion designer",
  },
  {
    subDescription:
      "Become a playground fashionista with the TOPModel collection.",
  },
  { subDescription: "Discover the entire TOPModel product world here!" },
];

export default function Carousel() {
  const classes = useStyles();

  return (
       <div className={classes.backgroundImage}>
        <div className={classes.container}>
          <div className={classes.containImage}>
            <img className={classes.image} src={image} alt="" />
          </div>
          {/* right */}
          <div className={classes.containDetail}>
            <div>
              <h1>Beauty is on the Outside</h1>
              {detail.map((element, index) => (
                <Detail key={index} SubDescription={element.subDescription} />
              ))}
              <div className={classes.containButton}>
                <Button className={classes.buttonProduct} variant="outlined">
                  product
                </Button>
              </div>
            </div>
          </div>
          {/* left */}
        </div>
      </div>
   );
}
