import * as React from 'react';
import { styled } from '@mui/material/styles';
import useStyles from '../../assets/jss/material-kit-pro-react/components/accordionContentStyle';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import android from "../../assets/img/android.png"
import ios from "../../assets/img/ios.jpg";

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
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.5rem' }, { color: 'pink' }} />}
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
   color: 'black',
}));

export default function DownloadPimo(props) {
   const classes = useStyles();
   const [expanded, setExpanded] = React.useState('panel1');

   const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
   };
   return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <h1 className={classes.h1}>Tải xuống Pimo App</h1>
         <AccordionDetails>
            <p className={classes.answer}>Hiện tại chúng tôi chỉ hỗ trợ người mẫu xem thông tin về sự kiện của các nhãn hàng trên website. Vì vậy, nếu bạn
               là người mẫu và muốn ứng tuyển vào công việc phù hợp. Vui lòng tải xuống <b>Pimo</b> - ứng dụng điện thoại chúng tôi xây dựng
               dành riêng cho người mẫu trên <b>GooglePlay</b> hoặc <b>AppStore</b>. Chúng tôi sẽ cố gắng cập nhập sớm nhất các tính năng dành cho người mẫu trên
               website, xin lỗi bạn vì sự bất tiện này.
            </p>
            <div className={classes.background}>
               <div className={classes.slogan}>
                  <p className={classes.p}>Pimo - nền tảng kết nối người mẫu và nhãn hàng lớn nhất Việt Nam</p>
               </div>
               <div className={classes.logo}>
                  <a href="/#" onClick={(e) => e.preventDefault()}
                     style={{ marginRight: '3%' }}>
                     <img
                        width="20%"
                        src={android}
                        alt=''
                     />
                  </a>
                  <a href="/#" onClick={(e) => e.preventDefault()}>
                     <img
                        width="20%"
                        src={ios}
                        href="/#"
                        alt=''
                     />
                  </a>
               </div>
            </div>
         </AccordionDetails>
      </Accordion>
   );
}