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
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
 import IconButton from "@mui/material/IconButton";
 import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
 import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const itemData = [
  {
    id: 1,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
    title: "Breakfast",
  },
  {
    id: 2,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
    title: "Burger",
  },
  {
    id: 3,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 4,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 5,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 6,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 7,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 8,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 9,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 10,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 11,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
  {
    id: 12,
    img: "https://photos.modelmayhem.com/avatars/3/5/5/1/7/2/1/5fbe3c66ecd00_m.jpg",
  },
];

const useStyles = makeStyles(styles);

export default function StandardImageList() {
  const classes = useStyles();
  const [viewMore, setViewMore] = React.useState(false);
  const [checkSearchHeightMin, setCheckSearchHeightMin] = React.useState();
  const [checkSearchAgeMin, setCheckSearchAgeMin] = React.useState();
  const [checkSearchHeightMax, setCheckSearchHeightMax] = React.useState();
  const [checkSearchAgetMax, setCheckSearchAgeMax] = React.useState();
  const [checkHeight, setCheckHeight] = React.useState(false);
  const [checkAge, setCheckAge] = React.useState(false);
 

  const handleChange = () => {
    setViewMore(!viewMore);
  };

  const handleCheckHeight = () => {
    if(parseInt(checkSearchHeightMin) > parseInt(checkSearchHeightMax)){
       setCheckHeight(true);
     }else if(parseInt(checkSearchAgeMin) > parseInt(checkSearchAgetMax)){
      setCheckAge(true)
     }else if(parseInt(checkSearchAgeMin) < parseInt(checkSearchAgetMax)){
      setCheckAge(false)
     }  else{
      setCheckHeight(false);
    }
   
  

      
  }
  
   
  return (
    <div className={classes.containerFilterAndResult}>
      <div
        className={classes.container}
        style={{ float: "left", width: "38%", margin: 0, marginLeft: "1.2%" }}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={10}>
            <div className={classes.containerTextAndIconSearch}>
              <TextField
                id="standard-basic"
                label="Nhập để tìm kiếm"
                variant="standard"
                className={classes.searchTextField}
               />
    
               <SearchIcon   onClick={()=>handleCheckHeight()}  className={classes.searchIcon} />
              
            </div>

            <div className={classes.containerTextFilterAndDelete}>
              <div className={classes.filterText}>
              <span style={{fontSize:'1.5rem'}}> Filter</span>
                <span>
                  <FilterAltOutlinedIcon className={classes.filterIcon} />
                </span>
              </div>
            <div style={{display:'flex'}}>
            <span className={classes.deleteText}>Xóa</span>
              <DeleteForeverOutlinedIcon
                className={classes.deleteButton}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
               
              </DeleteForeverOutlinedIcon>
            </div>
             
            </div>

            <p className={classes.titleSearch}>Tìm kiếm theo giới tính</p>

            <FormControl className={classes.formControl} component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                className={classes.containerRadioGroup}
               >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={
                    <p className={classes.customLabelRadio}>Nữ</p>
                  }
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Nam</p>}
                />
                <FormControlLabel
                  value="other"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Khác</p>}
                />
              </RadioGroup>
            </FormControl>

            <p className={classes.titleSearch}>Tìm kiếm theo phong cách</p>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                className={classes.containerRadioGroup}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Tóc</p>}
                />
                <FormControlLabel
                  value="girl"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Nghệ thuật</p>}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Hóa trang</p>}
                />
                <FormControlLabel
                  value="other"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Cách sống</p>}
                />
                {viewMore && (
                  <>
                    <FormControlLabel
                      value="hihih"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#f64aa4a8",
                            },
                          }}
                          style={{
                            padding: 2,
                            marginRight: "10%",
                          }}
                        />
                      }
                      label={
                        <p className={classes.customLabelRadio}>Nội y</p>
                      }
                    />
                    <FormControlLabel
                      value="hahaa"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#f64aa4a8",
                            },
                          }}
                          style={{
                            padding: 2,
                            marginRight: "10%",
                          }}
                        />
                      }
                      label={
                        <p className={classes.customLabelRadio}>
                         Nghệ sĩ trình diễn
                        </p>
                      }
                    />
                  </>
                )}
              </RadioGroup>
            </FormControl>
            <ul className={classes.containerViewMore}>
              <li style={{ display: "flex" }}>
                {!viewMore ? (
                  <ArrowDropDownIcon
                    className={classes.btnViewMore}
                    onClick={() => handleChange()}
                  />
                ) : (
                  <ArrowDropUpIcon
                    className={classes.btnViewMore}
                    onClick={() => handleChange()}
                  />
                )}
                {!viewMore ? (
                  <h4
                    style={{ margin: 0 }}
                    className={classes.btnViewMore}
                    onClick={() => handleChange()}
                  >
                  Xem thêm
                  </h4>
                ) : (
                  <h4
                    style={{ margin: 0 }}
                    className={classes.btnViewMore}
                    onClick={() => handleChange()}
                  >
                    Xem ít hơn
                  </h4>
                )}
              </li>
            </ul>

            <p className={classes.titleSearch}>Tìm kiếm theo hình xăm</p>
            <FormControl className={classes.formControl}>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                className={classes.containerRadioGroup}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Có hình xăm</p>}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Không có hình xăm</p>}
                />
              </RadioGroup>
            </FormControl>

            <p className={classes.titleSearch}>Tìm kiếm theo màu da</p>
            <FormControl className={classes.formControl}>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                className={classes.containerRadioGroup}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Da vàng</p>}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Da đen</p>}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#f64aa4a8",
                        },
                      }}
                      style={{
                        padding: 2,
                        marginRight: "10%",
                      }}
                    />
                  }
                  label={<p className={classes.customLabelRadio}>Da trắng</p>}
                />
              </RadioGroup>
            </FormControl>

            <p className={classes.titleSearch}>Tìm kiếm theo chiều cao</p>
           <div className={classes.containerSearchHeight_Age} >
           <TextField
              id="standard-basic"
              label="Chiều cao tối thiểu"
              variant="outlined"
              size='small'
              sx={{
                "& label": {
                  fontSize: "0.8em",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "pink",
                },
              }}
              className={classes.searchHeight}
              type='number'
              helperText={checkHeight ? "Chiều cao tối thiểu phải nhỏ hơn chiều cao tối đa" : ''}
              onChange={(e)=> setCheckSearchHeightMin(e.target.value)}
            />
          <div style={{marginLeft:'1rem'}}>
          <TextField
              id="standard-basic"
              label="Chiều cao tối đa"
              variant="outlined"
              size='small'
               sx={{
                "& label": {
                  fontSize: "0.8em",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "pink",
                },
              }}
              className={classes.searchHeight}
              type='number'
           
              onChange={(e)=>setCheckSearchHeightMax(e.target.value)}
             />
          </div>
           </div>

            <p className={classes.titleSearch}>Tìm kiếm theo tuổi</p>
            <div className={classes.containerSearchHeight_Age}>
           <TextField
              id="standard-basic"
              label="Tuổi tối thiểu"
              variant="outlined"
              size='small'
              sx={{
                "& label": {
                  fontSize: "0.8em",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "pink",
                },
              }}
              className={classes.searchHeight}
              type='number'
              helperText={checkAge ? "Tuổi tối thiểu phải nhỏ hơn tuổi tối đa" : ''}
              onChange={(e)=> setCheckSearchAgeMin(e.target.value)}
            />
          <div style={{marginLeft:'1rem'}}>
          <TextField
              id="standard-basic"
              label="Tuổi tối đa"
              variant="outlined"
              size='small'
               sx={{
                "& label": {
                  fontSize: "0.8em",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "pink",
                },
              }}
              className={classes.searchHeight}
              type='number'
              helperText=""
              onChange={(e)=>setCheckSearchAgeMax(e.target.value)}
             />
          </div>
           </div>
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
          marginRight: "2%",
        }}
      >
        <h2 className={classes.textSearchResult}>Kết quả tìm kiếm</h2>
        <GridContainer >
          {itemData.map((image, index) => (
            <GridItem  key={index} xs={12} sm={4} md={3}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={image.img} alt="..." height="300vh"/>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${image.img})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody className={classes.cardBody}>
                  <Rose>
                    <h className={classes.cardCategory}>Okìki</h>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <Button className={classes.buttonDetail} variant="outlined">
                      Xem chi tiết
                    </Button>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </GridContainer>

        <Stack spacing={2} style={{ alignItems: "center", marginBottom: '5%' }}>
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </div>
    </div>
  );
}
