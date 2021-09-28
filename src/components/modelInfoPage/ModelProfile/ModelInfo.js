import React from "react";
import useStyles from "./style";
import DividerLine from "./Divider";
import TravelNotices from "./TravelNotices";


export default function ModelInfo(){
  const aboutMe = (
    `My instagram page: EcemUzgor1

    I am a very patient, creative and hard-working person. My future goals are to participate in catwalks and photo shoots made by creative stylists and photographers. I am also very interested in singing, playing violin/guitar.
    
    Top Model of The World'16 - Miss Turkey
    
    Miss Asia Pacific World Beauty Contest'12 (Top 10) / Korea - Miss Turkey`
  );
  const name = (
    `Vio Hồ`
  );
  const modelType = (
    `Unisex Model`
  );
  const location = (
    `Ho Chi Minh City, Viet Nam`
  );
  const travel = [
    {travelName: 'Shooting proposes in Belgium',type: '18+'}
  ];
    const classes = useStyles();
    return(
        <>
            <img className={classes.avatar_image_Style} src="https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-dfe4a6.jpeg" alt="vioho" />
            <div className={classes.model_info_Style}>
                <DividerLine 
                  aboutMe = {aboutMe}
                  name = {name}
                  modelType = {modelType}
                  location = {location}
                />
            
            </div>
        </>
    );
} 