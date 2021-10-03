import * as React from 'react';
import { styled } from '@mui/material/styles';
import useStyles from '../../../assets/jss/material-kit-pro-react/components/HowPimoWorkPage/accordionStyle';
import googleplay from '../../../assets/img/googleplay.jpg';
import appstore from "../../../assets/img/appstore.jpg";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.5rem' },{color:'pink'}} />}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    //borderTop: '1px solid rgba(0, 0, 0, .125)',
    color:'black',
  }));
  
  export default function DownloadPimoApp(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p className = {classes.TitleAccordion}>Download Pimo App</p>
        </AccordionSummary>
    <AccordionDetails>
    <p className = {classes.question}>LÀM THẾ NÀO ĐỂ TẢI ỨNG DỤNG PIMO?</p>
        <p className = {classes.answer}>Hiện tại chúng tôi chỉ hỗ trợ người mẫu xem thông tin về sự kiện của các nhãn hàng trên website. Vì vậy, nếu bạn 
          là người mẫu và bạn muốn ứng tuyển vào công việc phù hợp. Vui lòng tải xuống Pimo - ứng dụng điện thoại chúng tôi xây dựng
          dành riêng cho người mẫu trên GooglePlay hoặc AppStore. Chúng tôi sẽ cố gắng cập nhập sớm nhất các tính năng dành cho người mẫu trên
           website, xin lỗi bạn vì sự bất tiện này.
      </p>
        <div className = {classes.background}>
        <span className = {classes.text}>Pimo - nền tảng kết nối người mẫu và thương hiệu lớn nhất Việt Nam</span>
            <img src={googleplay} alt="Google Button" className = {classes.buttonGoogle}></img>
            <img src={appstore}  alt = "App Store Button" className = {classes.buttonAppStore}></img>
      </div>
    </AccordionDetails>
  </Accordion>

  );
}