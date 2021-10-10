import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Media from "../Media/Media.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Paginations from "../Pagination/Pagination.js";
import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";
import avatar from "../../../assets/img/faces/avatar.jpg";
import kendall from "../../../assets/img/faces/kendall.jpg";
import marc from "../../../assets/img/faces/marc.jpg";
import placeholder from "../../../assets/img/placeholder.jpg";
// import product1 from "../../../assets/img/product1.jpg";
// import product2 from "../../../assets/img/product2.jpg";
// import product3 from "../../../assets/img/product3.jpg";

const useStyles = makeStyles(style);

export default function ReviewAreas() {
   
    const classes = useStyles();
   
    return (
        <div>
        <div className="cd-section" id="contentAreas">
            <h1></h1>
            <GridContainer>
                <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classes.mlAuto + " " + classes.mrAuto}
                >
                    <div>
                        <h3 className={classes.title + " " + classes.textCenter}>
                            10 Comments
                        </h3>
                        <Media
                            avatar={avatar}
                            title={
                                <span>
                                    Tina Andrew <small>· 7 minutes ago</small>
                                </span>
                            }
                            body={
                                <span>
                                    <p>
                                        Chance too good. God level bars. I{"'"}m so proud of
                                        @LifeOfDesiigner #1 song in the country. Panda! Don{"'"}t
                                        be scared of the truth because we need to restart the
                                        human foundation in truth I stand with the most humility.
                                        We are so blessed!
                                    </p>
                                    <p>
                                        All praises and blessings to the families of people who
                                        never gave up on dreams. Don{"'"}t forget, You{"'"}re
                                        Awesome!
                                    </p>
                                </span>
                            }
                        />
                        <Media
                            avatar={marc}
                            title={
                                <span>
                                    John Camber <small>· Yesterday</small>
                                </span>
                            }
                            body={
                                <span>
                                    <p>
                                        Hello guys, nice to have you on the platform! There will
                                        be a lot of great stuff coming soon. We will keep you
                                        posted for the latest news.
                                    </p>
                                    <p>
                                        Don{"'"}t forget, You{"'"}re Awesome!
                                    </p>
                                </span>
                            } 
                        />
                        <Media
                            key={Math.random() * Date.now()}
                            avatar={avatar}
                            title={
                                <span>
                                    Rosa Thompson <small>· 2 Days Ago</small>
                                </span>
                            }
                            body={
                                <span>
                                    <p>
                                        Hello guys, nice to have you on the platform! There will
                                        be a lot of great stuff coming soon. We will keep you
                                        posted for the latest news.
                                    </p>
                                    <p>
                                        Don{"'"}t forget, You{"'"}re Awesome!
                                    </p>
                                </span>
                            }
                        />
                        <div>
                            <Paginations
                                className={
                                    classes.textCenter + " " + classes.justifyContentCenter
                                }
                                pages={[
                                    { text: "«" },
                                    { text: 1 },
                                    { text: 2 },
                                    { active: true, text: 3 },
                                    { text: 4 },
                                    { text: 5 },
                                    { text: "»" },
                                ]}
                                color="primary"
                            />
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
        </div>
    );
}
