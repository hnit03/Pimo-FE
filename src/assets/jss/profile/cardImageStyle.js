import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    hieuungbenngoai:{
        width: '100%',
        height: '50vh',
       // overflow: 'hidden',
       // background: '#000',
        padding: '1%',
        marginLeft:0,
        
    },
    hieuung: {
       // position: 'absolute',
        // top: '50%',
        // left: '50%',
        //transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        width: '91%',
        height: '91%',
        overflow: 'hidden',
        background: '#000',
        margin: '3%',
        borderRadius:'0.5rem',
        '&:hover': {
            background: 'pink',
            marginTop: '0px',
            marginBottom:'0px',
            marginRight:'0px',
            marginLeft:'0px',
            width: '98%',
            height: '98%',
            transition: '0.4s',
            '& img': {
               // transform: 'rotate(-10deg) scale(1.3)',
                opacity: '0.2',
            },
            '& h2':{
               // padding: '20px',
               marginTop: '10vh',
                paddingBottom:0,
                color: 'black',
                transition: '0.4s',
            },
            '& button':{
                backgroundColor:'black !important',
                opacity: '1'
            },
            '& phude': {
                '&::before': {
                    transform: 'scale(1,1)'
                },
                '&::after': {
                    transform: 'scale(1,1)'
                },
            },
            '& thongtin':{
                marginTop: '-5vh',
                backgroundColor: 'pink'

            }, 
            '& p':{
                opacity: '1',
                color: 'black',
            }
        },

    },
    // noidung: {
    //     width: '100%',
    //     height: '100%',
    //     //   backgroundColor:'pink',
    // },
    img: {
        width: '100%',
        height: '50vh',
        transition: '0.5s',
        objectFit: 'cover',
        objectPosition: '50% 100%',
    },
    //    hieu_ung:hover img :{
    //         transform: 'rotate(-10deg) scale(1.3)',
    //         opacity:'0.5',
    //     },
    phude: {
        //position: 'absolute',
      //  backgroundColor:'pink',
        // top: '40px',
        // left: '40px',
        // right: '40px',
        // bottom: '40px',
        '&::before': {
            content: "''",
          //  position: 'absolute',
            left: 0,
            top: 0,
            width: '1rem',
            height: '1rem',
             borderTop: '1px solid #fff',
             borderBottom: '1px solid #fff',
            boxSizing: 'border-box',
            transition: '0.5s',
            transform: 'scale(1,1)',
        },
        '&::after': {
            content: "''",
           // position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            borderLeft: '1px solid #fff',
            borderRight: '1px solid #fff',
            boxSizing: 'border-box',
            transition: '0.5s',
            transform: 'scale(1,1)',
        },
    },
    //    phu_de
    //    .hieu_ung:hover .phu_de:before{
    //         transform: scale(1,1)
    //     },

    //    .hieu_ung:hover .phu_de:after{
    //         transform: scale(1,1)
    //     },
    thongtin: {
        marginTop: '-30vh',
        transform: 'translateY(-50%)',
        //zIndex: '1',
        padding: '20px',
        textAlign: 'center',
        opacity: 1,
        transition: '0.5s',
    },
    // // .hieu_ung:hover .thong_tin{
    // //     opacity: 1;
    // // },
    h2: {
        marginTop: '50vh',
        color: '#fff',
        margin: 0,
        padding: 0,
        fontSize: '24px',
        textTransform: 'uppercase',
        marginBottom:'1rem'
    },
    p: {
        color: '#fff',
        margin: '0',
        padding: 0,
       opacity: 0,
        fontSize: '15px',
    },
    button:{
        color: '#fff !important',
        borderColor:'#000 !important',
        marginTop:'20px !important',
        padding:'5px 15px !important',
        fontSize:'0.9rem !important',
        fontWeight:'bold !important',
        opacity: 0,
        '&:hover':{
            paddingTop:'5px',
            backgroundColor:'pink !important',
            //color:'#fff !important'
            borderColor:'pink !important',
        }
    }
}
));
export default useStyles;