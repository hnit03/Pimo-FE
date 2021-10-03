import React from "react";
import Accordions from "../Accordion/Accordion";
import useStyles from '../../assets/jss/material-kit-pro-react/components/agendaContentStyle';
import Divider from '@mui/material/Divider';
import DownloadPimoApp from "../Accordion/DownloadPimo";
import MailIcon from '@mui/icons-material/Mail';
var listOverview =
  [{ name: "PIMO LÀ GÌ?", value: "Pimo là một nền tảng kết nối giữa người mẫu và các nhãn hàng dành riêng cho thị trường Việt Nam. Chúng tôi có thể giúp nhãn hàng thuê nhiều người mẫu với các phong cách đa dạng bằng cách hỗ trợ nền tảng để các nhãn hàng tạo ra các sự kiện hấp dẫn, các chiến dịch thu hút người mẫu đăng ký tham gia. Đối với người mẫu, chúng tôi luôn cố gắng đưa đến những cơ hội làm việc phù hợp với khả năng, phong cách của họ. Ở Pimo,  cơ hội tìm kiếm việc làm trong lĩnh vực thời trang chưa bao giờ dễ dàng đến thế." },
  { name: "HIỆN TẠI TÔI ĐANG Ở TRONG DANH SÁCH CHỜ, LÀM THẾ NÀO ĐỂ TÔI CÓ THỂ BẮT ĐẦU ĐƯỢC DUYỆT?", value: "Pimo đang có nhu cầu rất cao! Chúng tôi đang cố gắng đưa bạn lên nền tảng sớm nhất có thể. Tuy nhiên, để quá trình xét duyệt thông tin diễn ra nhanh chóng, bạn nên đảm bảo cập nhật tiểu sử và hình ảnh của mình với thông tin mới nhất và chính xác nhất. Khi chúng tôi biết càng nhiều thông tin về bạn, thì càng dễ dàng được đưa ra khỏi danh sách chờ đợi." },
  { name: "NHỮNG ĐỐI TƯỢNG NÀO ĐƯỢC THAM GIA PIMO?", value: "Pimo ưu tiên cho các thương hiệu trong lĩnh vực thời trang tại Việt Nam. Chúng tôi cũng đang tích cực tìm kiếm người mẫu phù hợp cho từng hạng mục của chúng tôi, cho dù đó là những người mẫu gương mặt mới đang nổi bật hay những người mẫu đã làm lâu năm trong nghề. Chúng tôi luôn cố gắng xác minh và cung cấp cho các thương hiệu và mô hình những thông tin phù hợp và đáng tin cậy nhất trước khi họ tham gia vào nền tảng pimo." },
  { name: "MỤC TIÊU CỦA PIMO??", value: "Mục tiêu của Pimo là trở thành nền tảng ưu việt, nơi các thương hiệu thời trang và người mẫu được giao tiếp và tìm kiếm thêm nhiều cơ hội mới tại thị trường thời trang Việt Nam." },];

var listSecurity =
  [{ name: "PIMO CUNG CẤP CÁC BIỆN PHÁP BẢO MẬT CẤP HỆ THỐNG NÀO?", value: "Pimo có nhiều lớp công nghệ hiện đại để bảo vệ thông tin nhạy cảm. Từ mã hóa SSL đến mã thông báo ủy quyền trong các yêu cầu HTTP, chúng tôi luôn luôn đảm bảo rằng quyền riêng tư của bạn được bảo vệ khi tham gia vào nền tảng pimo. Các giao dịch thanh toán tuân thủ các tiêu chuẩn bảo mật cấp cao nhất nhờ Stripe." },
  { name: "TÔI PHẢI LÀM GÌ TRONG TRƯỜNG HỢP KHẨN CẤP?", value: "Nếu bạn đang bị đe dọa, ngay lập tức gọi 113. Nếu không, hãy liên hệ với chúng tôi theo địa chỉ studio@pimo.com hoặc 091.3333.999." },
  { name: "LÀM CÁCH NÀO ĐỂ BẢO MẬT TÀI KHOẢN PIMO CỦA TÔI?", value: "Cách tối ưu nhất là không bao giờ chia sẻ tài khoản google của bạn và đề phòng lừa đảo mạng. Nếu bạn đăng nhập từ thiết bị của bạn bè, hãy nhớ đăng xuất sau khi sử dụng." },
  { name: "BÁO CÁO Ở ĐÂU KHI GẶP CÁC VẤN ĐỀ TRONG QUÁ TRÌNH SỬ DỤNG PIMO?", value: "Nếu bạn có thắc mắc hoặc cần giải quyết các vấn đề liên quan đến Pimo, vui lòng gửi mail đến địa chỉ support@pimo.com. Chúng tôi sẽ cố gắng giải đáp các vấn đề sớm nhất có thể." },
  { name: "TÔI CÓ THỂ CHẶN NGƯỜI DÙNG KHÁC KHÔNG?", value: "Tạm thời nền tảng Pimo chưa cho phép bạn chặn các người dùng khác. Tuy nhiên bạn có thể báo cáo với chúng tôi thông qua việc gửi mail đến địa chỉ report@pimo.com.Điều này sẽ cảnh báo chúng tôi về các hoạt động không phù hợp. Sau đó, chúng tôi sẽ xem xét các thông tin liên lạc và hỗ trợ hoặc xóa tài khoản của người dùng nếu thấy phù hợp." },
  ];

var listWorkingWithBrands =
  [{ name: "LÀM THẾ NÀO ĐỂ XEM THÔNG TIN CỦA CÁC NHÃN HÀNG TRÊN PIMO?", value: "Bạn có thể tìm thấy các nhãn hàng trên website của chúng tôi. Bạn có thể chọn loại nhãn hiệu cụ thể mà bạn muốn hợp tác trên trang tìm kiếm nhãn hiệu hoặc chúng tôi có thể đề xuất một vài nhãn hiệu phù hợp với phong cách của bạn." },
  { name: "LÀM THẾ NÀO ĐỂ KẾT NỐI VỚI NHÃN HÀNG?", value: "Để kết nối với một nhãn hàng, bạn cần gửi cho họ một yêu cầu ứng tuyển vào sự kiện bạn mong muốn. Nếu nhãn hàng chấp thuận yêu cầu của bạn, chúng tôi sẽ gửi cho bạn thông báo và bạn có thể biết chi tiết về lịch trình casting ngay sau đó. Để gửi cho nhãn hàng một yêu cầu ứng tuyển , vui lòng tải xuống ứng dụng của chúng tôi từ GooglePlay hoặc AppStore (vui lòng xem thêm về cách tải ứng dụng ở mục Tải xuống ứng dụng Pimo ), sau đó bạn có thể truy cập thông tin sự kiện của nhãn hàng và nhấp vào nút ứng tuyển." },
  { name: "TỶ GIÁ VÀ ĐIỀU KHOẢN LÀ GÌ?", value: "Các tin tuyển dụng có tỷ lệ theo giờ hoặc theo ngày. Chúng tôi khuyến khích bạn chấp nhận những công việc phù hợp với tỷ lệ của bạn." },
  { name: "TÔI PHẢI LÀM GÌ NẾU NHÃN HÀNG HỦY BỎ HỢP TÁC Ở PHÚT CUỐI CÙNG?", value: "Nếu bạn không thể liên hệ vớI nhãn hàng bạn đang hợp tác, vui lòng liên hệ với chúng tôi theo địa chỉ support@pimo.com hoặc 091.3333.999." },
  { name: "NẾU CÓ TRANH CHẤP VỚI NHÃN HÀNG THÌ TÔI NÊN LÀM GÌ?  ", value: "Nếu có tranh chấp với nhãn hàng, vui lòng liên hệ với chúng tôi theo địa chỉ support@pimo.com. Chúng tôi sẽ làm việc trực tiếp với tất cả các bên để giải quyết tranh chấp. Trong những trường hợp cực đoan, nếu chúng tôi tin rằng nhãn hàng này đã làm sai thỏa thuận về casting hoặc các vấn đề khác, chúng tôi sẽ đóng vai trò là người biện hộ cho bạn để đảm bảo rằng việc sử dụng tuân thủ những gì đã được thỏa thuận giữa bạn và nhãn hàng cũng như các Điều khoản và Điều kiện của chúng tôi." },];

var listApplyToAnEvent =
  [{ name: "LÀM THẾ NÀO ĐỂ XEM ĐƯỢC NHỮNG CÔNG VIỆC CÓ SẴN?", value: "Bằng cách truy cập trang sự kiện của chúng tôi." },
  { name: "LÀM THẾ NÀO ĐỂ TÔI ĐƯỢC ỨNG TUYỂN VÀO CÁC SỰ KIỆN?", value: "Đăng hồ sơ của bạn trên Pimo và cho nhãn hàng biết một chút về bản thân bạn. Nếu bạn là một người mẫu, bạn đã từng bước qua những chương trình đường băng nào ?, Phong cách của bạn là gì? Là một người mẫu, bạn nên chia sẻ các thông tin cụ thể về các số đo, kinh nghiệm đã có để các nhãn hàng có thể thấy bạn phù hợp với tiêu chí của họ." },
  { name: "TÔI PHẢI LÀM GÌ KHI CÔNG VIỆC HOÀN THÀNH?", value: "Xin chúc mừng! Không có thêm công việc nào được yêu cầu. Với Pimo, khoản thanh toán sẽ tự động được gửi vào tài khoản của bạn sau 3 ngày làm việc. Đừng quên chia sẻ trải nghiệm của bạn với bạn bè trên Instagram với #CastMePimo." },
  { name: "TÔI CÓ THỂ HỦY VIỆC LÀM KHÔNG?", value: "Chúng tôi đặc biệt khuyên bạn không nên hủy bỏ bất kỳ công việc nào trừ khi bạn biết mình không thể tham dự. Trong trường hợp bất khả kháng phải hủy bỏ công việc, bạn cần ngay lập tức liên hệ với chúng tôi và nhãn hàng.Tuy nhiên, việc hủy bỏ công việc sẽ làm giảm xếp hạng của bạn, điều này có thể khiến bạn khó có được công việc trong tương lai." },];

var listPaymentsModel =
  [{ name: "LÀM THẾ NÀO ĐỂ TÔI ĐƯỢC TRẢ TIỀN?", value: "Đối với những người muốn được thanh toán, chỉ cần thêm phương thức thanh toán, Thông tin này được lưu trữ an toàn bởi Stripe, đối tác xử lý thanh toán của chúng tôi. Khi thông tin của bạn đã được nhập, bạn có thể được thuê và trả tiền cho các dự án sắp tới." },
  { name: "KHI NÀO TÔI SẼ ĐƯỢC TRẢ TIỀN?", value: "Pimo cho phép bạn được thanh toán nhanh nhất vào ngày sau khi công việc hoàn thành và chúng tôi nhận được đánh giá của nhãn hàng về bạn. Trong các trường hợp khác, nhãn hàng có thể mất đến 7 ngày làm việc để thanh toán." },
  { name: "PIMO MẤT PHẦN TRĂM NÀO?", value: "Pimo tính phí cố định 15% cho các giao dịch. Phí này có thể thay đổi nếu nhân tài ký hợp đồng với một đại lý và quyết định quản lý đặt phòng với đại lý của họ." },];

var listWorkingWithModel =
  [{ name: "LÀM THẾ NÀO ĐỂ TÌM KIẾM NGƯỜI MẪU TRÊN ỨNG DỤNG?", value: "Bạn có thể tìm thấy người mẫu trên website của chúng tôi. Bạn có thể lọc người mẫu theo yêu cầu cụ thể (tìm kiếm theo phong cách, tìm kiếm theo giới tính, tìm kiếm theo hình xăm,...) trên trang tìm kiếm người mẫu của chúng tôi." },
  { name: "LÀM THẾ NÀO ĐỂ KẾT NỐI VỚI MỘT NGƯỜI MẪU?", value: "Công việc của bạn chỉ đơn giản là đăng ký vào hệ thống của chúng tôi, sau đó tạo sự kiện với thông tin chi tiết về sự kiện của bạn. Chúng tôi sẽ lọc và đề xuất những người mẫu phù hợp với yêu cầu của bạn. Nếu một người mẫu gửi cho bạn một yêu cầu ứng tuyển, chúng tôi sẽ thông báo cho bạn và bạn có quyền trực tiếp chấp nhận hoặc từ chối yêu cầu của người mẫu đó bằng cách nhấp vào nút chấp nhận hoặc từ chối.  " },
  { name: "TỶ GIÁ VÀ ĐIỀU KHOẢN LÀ GÌ?", value: "Khi bạn tạo một công việc, bạn có tùy chọn để chỉ định mức giá theo ngày hoặc khoản thanh toán theo giờ. Vui lòng xem đầy đủ các điều khoản và điều kiện của chúng tôi để đảm bảo danh sách việc làm của bạn đáp ứng các yêu cầu của chúng tôi." },
  { name: "TÔI PHẢI LÀM GÌ NẾU NGƯỜI MẪU KHÔNG THAM GIA VÀO THỜI GIAN ĐÃ ĐƯỢC LÊN LỊCH TRÌNH?", value: "Nếu bạn không thể liên lạc với người mẫu, vui lòng liên hệ với chúng tôi theo địa chỉ support@pimo.com hoặc 091.3333.999." },
  { name: "LÀM THẾ NÀO ĐỂ CÓ ĐƯỢC THÔNG TIN LIÊN LẠC CỦA NGƯỜI MẪU?", value: "Khi người mẫu ứng tuyển vào sự kiện của bạn, chúng tôi sẽ gửi đến bạn thông tin chi tiết của nguòi mẫu bao gồm cả thông tin liên lạc." },
  { name: "NẾU CÓ TRANH CHẤP VỚI NGƯỜI MẪU THÌ NÊN LÀM NHƯ THẾ NÀO?", value: "Nếu bạn có tranh chấp với người mẫu, chỉ cần gửi email cho chúng tôi theo địa chỉ support@pimo.com và giải thích cụ thể vấn đề. Chúng tôi sẽ cố gắng giải quyết vấn đề càng nhanh càng tốt. Trong những trường hợp khắc nghiệt khi một người mẫu không thực hiện được các dịch vụ đã ký kết trong thỏa thuận của bạn, bạn có thể hoàn lại một phần hoặc toàn bộ. Xin vui lòng xem các điều khoản và điều kiện của chúng tôi." },];

var listBookingModel =
  [{ name: "LÀM THẾ NÀO ĐỂ TẠO MỘT SỰ KIỆN TRÊN NỀN TẢNG PIMO?", value: "Sau khi hồ sơ của bạn trên Pimo hoàn tất, bạn sẽ có thể tạo và đăng sự kiện trong tab Sự kiện. Nhấp vào nút Tạo sự kiện trên phần Sự kiện và nhập các chi tiết của công việc như loại công việc và đó là công việc được trả lương hay không được trả lương. Chỉ định loại người mẫu bạn đang tìm kiếm, tên dự án, tỷ lệ ngày hoặc giờ, ngày bạn muốn đặt tài năng, nhập thời gian bắt đầu, địa chỉ vị trí và tải lên hình ảnh cho dự án của bạn. Bạn sẽ có cơ hội xem lại chi tiết công việc của mình trước khi đăng chúng." },
  { name: "LÀM THẾ NÀO ĐỂ HỢP TÁC TRỰC TIẾP VỚI NGƯỜI MẪU?", value: "Hiện tại chúng tôi chỉ hỗ trợ các tính năng đề cập các sự kiện phù hợp với người mẫu và người mẫu sẽ yêu cầu ứng tuyển nếu họ thấy phù hợp. Chúng tôi sẽ cập nhập tính năng này trong thời gian sớm nhất, xin lỗi bạn vì sự bất tiện này. " },
  { name: "LÀM THẾ NÀO ĐỂ CHỈNH SỬA HOẶC HỦY CÔNG VIỆC CỦA TÔI?", value: "Sau khi bạn đã đăng một công việc, bạn sẽ có thể thực hiện bất kỳ chỉnh sửa cần thiết nào đối với chi tiết sự kiện. Nếu bạn phải hủy một công việc, xin lưu ý rằng làm như vậy trước ít hơn 72 giờ, nếu không bạn có thể phải trả phí phạt, lên đến tổng mức giá trị của sự kiện." },
  { name: "LÀM THẾ NÀO ĐỂ HỢP TÁC VỚI NGƯỜI MẪU?", value: "Có nhiều cách để tìm người mẫu trên Pimo. Sử dụng bộ lọc của chúng tôi để khám phá các mô hình dựa trên các tiêu chí cụ thể như chiều cao, giới tính, phong cách, thành phố,... Ngoài ra, nếu bạn tạo danh sách việc làm, chúng tôi sẽ giúp bạn xác định các mô hình phù hợp với sự kiện của bạn. Các ứng viên tốt nhất của chúng tôi chờ đợi khách hàng liên hệ với họ và tìm kiếm cơ hội với đầy đủ thông tin chi tiết về công việc và cung cấp mức giá cạnh tranh." },
  { name: "LÀM THẾ NÀO ĐỂ THÔNG BÁO KÉT QUẢ CASTING CHO NGƯỜI MẪU?", value: "Sau khi buổi casting diễn ra thành công, bạn cần cập nhật kết quả casting lên hệ thống. Chúng tôi sẽ giúp bạn thông báo kết quả này đến người mẫu sớm nhất có thể." },
  { name: "TÔI CÓ THỂ LÀM GÌ NẾU GẶP CÁC VẤN ĐỀ LIÊN QUAN ĐẾN VIỆC HỢP TÁC VỚI NGƯỜI MẪU?  ", value: "Liên hệ với chúng tôi bất cứ lúc nào bằng cách gửi email đến support@pimo.com. Chúng tôi sẽ cố gắng phải hồi vấn đề của bạn sớm nhất có thể." }];

var listPaymentsBrand =
  [{ name: "CÁC PHƯƠNG THỨC THANH TOÁN HÓA ĐƠN CÓ SẴN LÀ GÌ?", value: "Chúng tôi chấp nhận thẻ Visa, Mastercard, thẻ ngân hàng nội địa, các loại ví điện tử. Việc thanh toán phải được thực hiện bởi người đăng công việc hoặc bởi một bên thứ ba. Dù bằng cách nào, giao dịch cần phải được thanh toán đầy đủ trước khi giao dịch được xác nhận." },
  { name: "LÀM THẾ NÀO ĐỂ XEM TRẠNG THÁI KẾ TOÁN CỦA TÔI, TÔI CÓ ĐƯỢC XEM LẠI CÁC GIAO DỊCH ĐÃ HOÀN THÀNH KHÔNG?", value: "Chuyển đến phần Sự kiện của tôi để xem tổng số tiền đến hạn thanh toán và lịch sử thuê người mẫu. Đối với mỗi sự kiện hoàn thành, bạn sẽ có thể thấy bảng phân tích về trạng thái, ngày, địa điểm, số tiền, phí và thuế cũng như ghi chú." },
  ];
const titleEnd = "Nếu bạn có bất kì thắc mắc nào khác, vui lòng gửi mail đến địa chỉ mail dưới đây, chúng tôi sẽ cố gắng phản hồi bạn sớm nhất có thể.";

const titleGeneralQuestion = ["Tổng quan về Pimo", "Bảo mật thông tin"];
const titleModel = ["Làm việc với nhãn hàng", "Ứng tuyển vào sự kiện của nhãn hàng", "Tải xuống ứng dụng Pimo", "Thanh toán"];
const titleBrand = ["Làm việc với người mẫu", "Tạo sự kiện và casting", "Thanh toán"];
export default function AgendaContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.agendaContentTree} >

      <div className={classes.forceOverflow}>
        <p className={classes.generalQuestion} id="General"><a>Câu hỏi chung</a></p>
        <div className={classes.generalLine}></div>
        <p></p>
        <div id="Overview">
          <Accordions list={listOverview} title={titleGeneralQuestion[0]} />
        </div>
        <div id="Security">
          <Accordions list={listSecurity} title={titleGeneralQuestion[1]} />
        </div>
        <p></p>
        <p className={classes.generalQuestion} id="Model">Người mẫu</p>
        <div className={classes.generalLine}></div>
        <p></p>
        <div id="Download_Pimo_App">
          <DownloadPimoApp />
        </div>
        <div id="Working_with_Brands">
          <Accordions list={listWorkingWithBrands} title={titleModel[0]} />
        </div>
        <div id="Apply_To_An_Event">
          <Accordions list={listApplyToAnEvent} title={titleModel[1]} />
        </div>

        <div id="Payments_model">
          <Accordions list={listPaymentsModel} title={titleModel[3]} />
        </div>
        <p></p>
        <p className={classes.generalQuestion} id="Brand">Nhãn hàng</p>
        <div className={classes.generalLine}></div>
        <p></p>
        <div id="Working_with_Model"><Accordions list={listWorkingWithModel} title={titleBrand[0]} /></div>
        <div id="Booking_Model"><Accordions list={listBookingModel} title={titleBrand[1]} /></div>
        <div id="Payments_brand"><Accordions list={listPaymentsBrand} title={titleBrand[2]} /></div>
        <Divider className={classes.divider_Style}></Divider>
        <p className={classes.EndTitle}><i>{titleEnd}</i></p>
        <ul className={classes.ul}>
          <li style={{ display: 'flex', }} className={classes.li}>
            <MailIcon className={classes.icon} /><span className={classes.text} >customercare@pimo.com</span>
          </li>
        </ul>
      </div>
    </div>
  );

}
