import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
// core components
import Divider from '@mui/material/Divider';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Media from "../Media/Media.js";
import Paginations from "../Pagination/Pagination.js";
import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";
import avatar from "../../../assets/img/faces/avatar.jpg";
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/reviewAreasStyle';

import marc from "../../../assets/img/faces/marc.jpg";


const useStylesOfTemplate = makeStyles(style);

export default function ReviewAreas() {

    const classes = useStylesOfTemplate();
    const classesRreview = useStyles();
    return (
        <div className={classesRreview.box}>
            <div className="cd-section" id="contentAreas">

                <GridContainer>
                    <GridItem
                        xs={12}
                        sm={8}
                        md={8}
                        className={classes.mlAuto + " " + classes.mrAuto}
                    >
                        <div>
                            <h1 className={classesRreview.h1}>
                                ĐÁNH GIÁ CỦA CÁC NHÃN HÀNG
                            </h1>
                            <Divider className={classesRreview.divider_Style} ></Divider>
                            <Media
                                avatar={avatar}
                                title={
                                    <span>
                                        Victoria's Secret <small>· 10/10/2021</small>
                                    </span>
                                }
                                body={
                                    <span>
                                        <p>
                                            Thái độ làm việc của Vio rất tốt và chuyên nghiệp, hi vọng sẽ tiếp tục đc hợp tác với bạn 
                                            trong thời gian tới.
                                        </p>
                                        <p>
                                            Thanks & best regards!!!
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
