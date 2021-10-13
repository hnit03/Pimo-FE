import React from "react";
import Button from '@mui/material/Button';
import {personalGalleryList} from '../Tabs/PersonalGalleryData';
import GalleryModal from '../GalleryModal/GalleryModal';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/cardImageStyle';
export default function CardImage(props) {
    const classes = useStyles();
    return (
        <div className={classes.hieuungbenngoai}>
            <div className={classes.hieuung}>
                <div className={classes.noidung}>
                    <img src={props.listGallery.image} className={classes.img} />
                    <div className={classes.phude}>
                        <div className={classes.thongtin}>
                            <p className={classes.p}>Bộ sưu tập ảnh</p>
                            <h2 className={classes.h2}>{props.listGallery.nameGallery}</h2>
                            <p className={classes.p}>Hợp tác với</p>
                            <h2 className={classes.h2}>Victoria's Secret</h2>
                            <GalleryModal listImage = {props.listGallery} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}