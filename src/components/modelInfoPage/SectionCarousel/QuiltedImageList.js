
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useStyles from "../../../assets/jss/material-kit-pro-react/components/ModelInfoPage/sectionCarouselStyle";

export default function QuiltedImageList(props) {
  const classes = useStyles();
  return (
    <ImageList sx={{ width: 900, height: 450 }} cols={4} rowHeight={230}>
      {props.list.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.name}`}
            srcSet={`${item.name}`}
           // alt={item.title}
            loading="lazy"
            className = {classes.img}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/12/17/photo-8-16081906305841441657994.jpg',
    title: 'Bed',
  },
  {
    img: 'https://image.diemtin.vn/800/kenh14cdn.com/zoom/600_315/203336854389633024/2021/2/5/photo1612517899310-1612517899807181307603.jpg',
    title: 'Books',
  },
  {
    img: 'https://nguoinoitieng.tv/images/nnt/102/0/bf40.jpg',
    title: 'Sink',
  },
  {
    img: 'https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2018_10_01/d4_thumb.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/12/17/photo-8-16081906305841441657994.jpg',
    title: 'Bed',
  },
  {
    img: 'https://image.diemtin.vn/800/kenh14cdn.com/zoom/600_315/203336854389633024/2021/2/5/photo1612517899310-1612517899807181307603.jpg',
    title: 'Books',
  },
  {
    img: 'https://nguoinoitieng.tv/images/nnt/102/0/bf40.jpg',
    title: 'Sink',
  },
  {
    img: 'https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2018_10_01/d4_thumb.jpg',
    title: 'Kitchen',
  },

];
var items = [
  {
    name: "https://vcdn1-giaitri.vnecdn.net/2021/01/05/mongthuongava-1609841663-9213-1609841706.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=x7A9BK_19jrdvqQM93nAHg",
  },
  {
    name: "https://image.diemtin.vn/800/kenh14cdn.com/zoom/600_315/203336854389633024/2021/2/5/photo1612517899310-1612517899807181307603.jpg",
  },
  {
    name: "https://nguoinoitieng.tv/images/nnt/102/0/bf40.jpg",
  },
  {
    name: "https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2018_10_01/d4_thumb.jpg",
  }
]