const articles = [
  {
    id: 'cong-ho-tro-it',
    sample: true,
    section: 'news',
    category: 'update',
    title: 'Cổng hỗ trợ IT có giao diện mới',
    summary: 'Tạo yêu cầu, theo dõi tiến độ và tìm hướng dẫn ngay từ trang chủ cổng hỗ trợ IT.',
    date: '2026-11-12',
    minutes: 3,
    image: 'hero.webp',
    featured: true,
    body: `
      <p>Giao diện mới gom các thao tác thường dùng vào trang chủ để bạn có thể gửi yêu cầu và theo dõi phản hồi ở cùng một nơi.</p>
      <h2>Trang chủ có gì mới?</h2>
      <ul>
        <li>Nút <strong>Tạo yêu cầu</strong> giúp bạn mở biểu mẫu hỗ trợ từ trang chủ.</li>
        <li>Mục <strong>Yêu cầu của tôi</strong> hiển thị tiến độ và phản hồi mới nhất của từng yêu cầu.</li>
        <li>Kho hướng dẫn gợi ý các bài viết theo chủ đề khi bạn cần tự xử lý một vấn đề thường gặp.</li>
      </ul>
      <h2>Khi gửi yêu cầu hỗ trợ</h2>
      <p>Chọn đúng nhóm vấn đề, ghi rõ thông báo lỗi và thời điểm xảy ra. Nếu đính kèm ảnh màn hình, hãy che thông tin cá nhân và dữ liệu nội bộ không liên quan.</p>
    `,
  },
  {
    id: 'duyet-yeu-cau',
    sample: true,
    section: 'news',
    category: 'feature',
    title: 'Duyệt yêu cầu ngay trên HRP',
    summary: 'Xem thông tin, ghi chú và xử lý yêu cầu chờ duyệt trong cùng một màn hình.',
    date: '2026-11-10',
    minutes: 2,
    image: 'approval.webp',
    body: `
      <p>Màn hình phê duyệt trên HRP tập hợp các yêu cầu đang chờ bạn xử lý và hiển thị thông tin cần thiết để đưa ra quyết định.</p>
      <h2>Quy trình xử lý</h2>
      <ol>
        <li>Mở danh sách yêu cầu đang chờ bạn duyệt.</li>
        <li>Đọc nội dung, kiểm tra thời gian và các tệp đính kèm liên quan.</li>
        <li>Chọn phê duyệt hoặc yêu cầu bổ sung thông tin. Ghi chú cụ thể nếu người gửi cần chỉnh sửa.</li>
      </ol>
    `,
  },
  {
    id: 'bao-tri-thang-11',
    sample: true,
    section: 'news',
    category: 'notice',
    title: 'Lịch bảo trì hệ thống tháng 11',
    summary: 'Các bước chuẩn bị khi có thông báo bảo trì và cách kiểm tra hệ thống sau khi mở lại.',
    date: '2026-11-06',
    minutes: 2,
    image: 'maintenance.webp',
    body: `
      <p>Thông báo bảo trì chính thức sẽ nêu rõ thời gian bắt đầu, thời gian dự kiến hoàn tất và các dịch vụ bị ảnh hưởng.</p>
      <h2>Trước thời gian bảo trì</h2>
      <ul>
        <li>Lưu công việc đang làm và hoàn tất các thao tác có thời hạn.</li>
        <li>Đối chiếu danh sách dịch vụ bị ảnh hưởng để lên kế hoạch cho công việc cần xử lý.</li>
      </ul>
      <h2>Sau khi hệ thống mở lại</h2>
      <p>Kiểm tra lại các tác vụ dở dang. Nếu thao tác trước đó chưa rõ kết quả, hãy kiểm tra lịch sử trước khi gửi lại để tránh tạo bản ghi trùng.</p>
      <p>Vui lòng theo dõi thông báo chính thức để biết lịch bảo trì.</p>
    `,
  },
  {
    id: 'tra-cuu-yeu-cau',
    sample: true,
    section: 'news',
    category: 'update',
    title: 'Tra cứu trạng thái yêu cầu hỗ trợ',
    summary: 'Dùng mã yêu cầu để xem tiến độ và bổ sung thông tin cho nhân viên hỗ trợ.',
    date: '2026-11-03',
    minutes: 2,
    image: 'tracking.webp',
    body: `
      <p>Khi gửi yêu cầu hỗ trợ, bạn có thể lưu mã yêu cầu để dễ tra cứu và trao đổi với phòng IT.</p>
      <h2>Cách tra cứu</h2>
      <ol>
        <li>Mở danh sách yêu cầu của bạn trên cổng hỗ trợ.</li>
        <li>Nhập mã yêu cầu hoặc tìm theo tiêu đề.</li>
        <li>Mở yêu cầu để đọc phản hồi mới nhất và bổ sung thông tin nếu cần.</li>
      </ol>
    `,
  },
  {
    id: 'doi-mat-khau',
    sample: true,
    section: 'docs',
    category: 'account',
    title: 'Đổi hoặc đặt lại mật khẩu',
    summary: 'Các bước đổi mật khẩu, khôi phục quyền truy cập và xử lý khi tài khoản bị khóa.',
    date: '2026-11-09',
    minutes: 3,
    body: `
      <p>Nếu vẫn đăng nhập được, hãy mở phần cài đặt tài khoản trên cổng chính thức của tổ chức và chọn đổi mật khẩu. Chọn mật khẩu riêng cho tài khoản công việc và lưu trong công cụ quản lý mật khẩu được tổ chức phê duyệt.</p>
      <h2>Khi quên mật khẩu</h2>
      <ol>
        <li>Mở trang đăng nhập từ địa chỉ bạn thường dùng hoặc dấu trang đã lưu.</li>
        <li>Chọn chức năng quên mật khẩu và làm theo các bước xác minh.</li>
        <li>Nếu không còn truy cập được phương thức xác minh, hãy liên hệ bộ phận hỗ trợ qua kênh chính thức của tổ chức.</li>
      </ol>
      <p>Giữ riêng mật khẩu và mã xác minh một lần. Phòng IT có thể yêu cầu bạn xác minh danh tính qua quy trình của tổ chức.</p>
    `,
  },
  {
    id: 'xac-thuc-hai-buoc',
    sample: true,
    section: 'docs',
    category: 'account',
    title: 'Thiết lập xác thực hai bước (MFA)',
    summary: 'Thêm phương thức xác minh cho tài khoản công việc và chuẩn bị trước khi đổi điện thoại.',
    date: '2026-11-08',
    minutes: 4,
    body: `
      <h2>Đăng ký phương thức xác minh</h2>
      <ol>
        <li>Mở cài đặt bảo mật trong tài khoản công việc của bạn.</li>
        <li>Thêm phương thức xác minh theo chính sách của tổ chức.</li>
        <li>Hoàn tất bước kiểm tra và xác nhận phương thức mới hoạt động.</li>
      </ol>
      <h2>Khi đổi thiết bị</h2>
      <p>Đăng ký và thử phương thức xác minh trên thiết bị mới trước khi xóa thiết bị cũ. Nếu nhận được yêu cầu xác nhận đăng nhập mà bạn không khởi tạo, hãy từ chối và báo phòng IT.</p>
    `,
  },
  {
    id: 'gui-yeu-cau-ho-tro',
    sample: true,
    section: 'docs',
    category: 'tools',
    title: 'Gửi yêu cầu hỗ trợ IT',
    summary: 'Thông tin cần chuẩn bị để phòng IT xác định vấn đề và phản hồi nhanh hơn.',
    date: '2026-11-05',
    minutes: 3,
    body: `
      <h2>Chuẩn bị thông tin</h2>
      <ul>
        <li>Tên ứng dụng hoặc thiết bị gặp sự cố.</li>
        <li>Thời điểm xảy ra, thao tác trước khi lỗi xuất hiện và nội dung thông báo lỗi.</li>
        <li>Phạm vi ảnh hưởng và công việc đang bị gián đoạn.</li>
      </ul>
      <h2>Gửi và theo dõi yêu cầu</h2>
      <p>Gửi qua kênh hỗ trợ chính thức của tổ chức. Nếu có ảnh chụp, hãy che dữ liệu cá nhân và thông tin nhạy cảm trước khi đính kèm. Lưu mã yêu cầu và dùng cùng mã khi cần bổ sung thông tin.</p>
    `,
  },
  {
    id: 'hop-truc-tuyen',
    sample: true,
    section: 'docs',
    category: 'tools',
    title: 'Kiểm tra thiết bị trước khi họp trực tuyến',
    summary: 'Kiểm tra micro, camera và quyền chia sẻ màn hình trước khi vào cuộc họp.',
    date: '2026-11-04',
    minutes: 3,
    body: `
      <h2>Trước cuộc họp</h2>
      <ol>
        <li>Mở phần cài đặt thiết bị trong ứng dụng họp.</li>
        <li>Chọn đúng micro, loa và camera, sau đó thử âm thanh và hình ảnh.</li>
        <li>Nếu dùng trình duyệt, kiểm tra quyền truy cập micro và camera của trang họp.</li>
      </ol>
      <h2>Khi chia sẻ màn hình</h2>
      <p>Chọn cửa sổ bạn cần trình bày. Kiểm tra phần xem trước và tắt thông báo có thể xuất hiện trong lúc chia sẻ.</p>
    `,
  },
  {
    id: 'thu-dien-tu-gia-mao',
    sample: true,
    section: 'docs',
    category: 'security',
    title: 'Nhận biết và báo cáo email giả mạo',
    summary: 'Kiểm tra người gửi, xác minh yêu cầu bất thường và báo cáo thư đáng ngờ.',
    date: '2026-11-02',
    minutes: 4,
    body: `
      <h2>Dấu hiệu cần kiểm tra</h2>
      <ul>
        <li>Địa chỉ người gửi có tên miền lạ hoặc khác địa chỉ thường dùng.</li>
        <li>Thư yêu cầu đăng nhập gấp, cung cấp mã xác minh hoặc thanh toán đột xuất.</li>
        <li>Tệp đính kèm bất ngờ hoặc liên kết dẫn tới địa chỉ bạn không nhận ra.</li>
      </ul>
      <h2>Khi nhận được thư đáng ngờ</h2>
      <p>Giữ nguyên thư và dùng tính năng báo cáo thư giả mạo nếu tổ chức đã bật. Xác minh yêu cầu qua một kênh liên hệ độc lập. Nếu đã mở tệp, nhập thông tin đăng nhập hoặc xác nhận một yêu cầu lạ, hãy báo phòng IT ngay.</p>
    `,
  },
  {
    id: 'chia-se-tai-lieu',
    sample: true,
    section: 'docs',
    category: 'security',
    title: 'Chia sẻ tài liệu đúng quyền truy cập',
    summary: 'Chọn người nhận, giới hạn quyền chỉnh sửa và thu hồi quyền khi công việc kết thúc.',
    date: '2026-10-28',
    minutes: 3,
    body: `
      <h2>Trước khi chia sẻ</h2>
      <ol>
        <li>Kiểm tra nội dung và xác định người thực sự cần truy cập.</li>
        <li>Dùng công cụ lưu trữ được tổ chức phê duyệt. Chọn chia sẻ với người cụ thể nếu có tùy chọn.</li>
        <li>Cấp quyền xem khi người nhận chỉ cần đọc và cấp quyền chỉnh sửa khi cần cộng tác.</li>
      </ol>
      <h2>Khi tài liệu không còn cần chia sẻ</h2>
      <p>Kiểm tra danh sách người đang có quyền truy cập, xóa quyền không còn cần thiết và tắt liên kết chia sẻ cũ theo quy trình của tổ chức.</p>
    `,
  },
];
