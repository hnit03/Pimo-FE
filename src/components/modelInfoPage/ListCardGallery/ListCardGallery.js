import React from 'react';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/ListCardGallery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardImage1 from '../CardImage/CardImage';

var listGallery = [ 
{image:'https://i.vietgiaitri.com/2019/11/26/bo-3-gia-ky-vio-ho-va-mong-thuong-khang-dinh-ca-tinh-cua-the-he-nguoi-mau-unisex-qua-bo-anh-moi-1d752f.jpeg',
nameGallery: 'Mùa Xuân',},
{image:'https://znews-photo.zadn.vn/Uploaded/ryksdreyxq/2021_08_02/4.jpg',
nameGallery: 'Mùa Hạ',},
{image:'https://image.vietnamnews.vn/uploadvnnews/Article/2019/10/27/47286_fa2.jpg',
nameGallery: 'Mùa Thu',},
{image:'https://static2.yan.vn/YanNews/2167221/202012/the-best-street-style-2020-man-do-gout-voi-loat-bo-trang-phuc-doc-dao-1bf275b7.jpg',
nameGallery: 'Mùa Đông',},
{image:'https://static.dosi-in.com/images/news_content/22711/2020/09/16/nguoi-mau-phi-gioi-tinh_2020_09_16_4.jpg',
nameGallery: 'Mùa Thu',},
{image:'https://baomoi-photo-fbcrawler.zadn.vn/w600_r16x9/2021_06_02_119_39043923/ddc67e096f4b8615df5a.jpg',
nameGallery: 'Mùa Đông',},
];
export default function ListCardGallery(props) {
    const classes = useStyles();
    const list = listGallery.map((item) => {
        return (
            <Grid item xs={4}>
                <CardImage1 listGallery={item}/>
            </Grid>
        );
    })
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box}>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p className={classes.galleryTitle}>BỘ SƯU TẬP HÌNH ẢNH</p>
                    <p className={classes.galleryDes}>Đa dạng hình ảnh, đa dạng trong từng phong cách</p>

                </Grid>
                {list}
                

            </Grid>
        </Box>
    );
}