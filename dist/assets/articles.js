const articles = [
  {
    id: 'cong-ho-tro-it',
    compactReadingLayout: true,
    sample: true,
    section: 'news',
    category: 'update',
    title: 'Hướng dẫn cài đặt & cập nhật APP BI trên iPhone và Android',
    summary: '',
    date: '2026-11-12',
    minutes: 3,
    image: 'hero.webp',
    featured: true,
    hideFeaturedSampleLabel: true,
    featuredFooterImage: { src: 'ios-vs-android.png', alt: 'Biểu trưng Android và iOS', width: 690, height: 362 },
    body: `
      <div class="bi-guide">
        <div class="bi-guide-lead">
          <div class="bi-guide-intro">
            <h2>HƯỚNG DẪN CÀI ĐẶT &amp; CẬP NHẬT ỨNG DỤNG BI TRÊN IPHONE</h2>
            <p>Để cài đặt ứng dụng <strong>BI</strong> (phiên bản thử nghiệm qua TestFlight), bạn vui lòng thực hiện lần lượt theo 3 bước đơn giản sau hoặc tham khảo video chi tiết.</p>
          </div>
          <div class="bi-guide-video">
            <button class="bi-guide-video-toggle" type="button" aria-expanded="false" aria-controls="bi-guide-video-content">
              <span class="bi-guide-video-play" aria-hidden="true"></span>
              Video hướng dẫn
            </button>
            <figure class="bi-guide-video-content" id="bi-guide-video-content">
              <iframe class="article-short-video" src="https://www.youtube.com/embed/1vwW6s3NdFM" title="Video hướng dẫn cập nhật ứng dụng BI trên iPhone" width="208" height="370" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
              <figcaption><a href="https://www.youtube.com/shorts/1vwW6s3NdFM?feature=share">Xem video trên YouTube</a></figcaption>
            </figure>
          </div>
          <section class="bi-guide-panel bi-guide-prepare">
            <h3>1. Cài đặt ứng dụng hỗ trợ TestFlight</h3>
            <p><em>Bước chuẩn bị.</em></p>
            <div class="bi-guide-pair bi-guide-download">
              <p>Mở <strong>App Store</strong>&nbsp;<img class="article-inline-icon" src="assets/app-store-icon.png" alt="" width="24" height="22"> trên iPhone, tìm kiếm từ khóa <code>TestFlight</code> và nhấn <strong>Nhận</strong> để tải về máy (nếu máy bạn đã có sẵn ứng dụng này thì có thể bỏ qua bước này).</p>
              <img class="article-download-screenshot" src="assets/testflight-download.png" alt="Mũi tên chỉ biểu tượng tải TestFlight trong App Store" width="1496" height="830" loading="lazy" decoding="async">
            </div>
            <p class="bi-guide-check"><strong>Kiểm tra.</strong> Biểu tượng TestFlight (hình cánh quạt màu xanh dương) xuất hiện trên màn hình chính của iPhone.</p>
          </section>
        </div>

        <section class="bi-guide-panel">
          <h3>2. Quét mã QR để nhận lời mời tải app BI</h3>
          <div class="bi-guide-pair bi-guide-scan">
            <p>Mở ứng dụng <strong>Camera</strong> mặc định trên iPhone (hoặc dùng tính năng <strong>Quét mã</strong> trong Trung tâm điều khiển), hướng camera vào mã QR được cung cấp và chạm vào đường link màu vàng hiện trên màn hình.</p>
            <img class="article-qr-code" src="assets/bi-testflight-qr.png" alt="Mã QR nhận lời mời cài đặt ứng dụng BI qua TestFlight" width="750" height="750" decoding="async">
            <div class="bi-guide-invite">
              <p>Nếu đang đọc trên iPhone</p>
              <a href="https://testflight.apple.com/join/VGd3SbtC">Mở trong TestFlight</a>
            </div>
          </div>
          <p class="bi-guide-check"><strong>Kiểm tra.</strong> Màn hình tự động chuyển hướng sang giao diện TestFlight của ứng dụng <strong>BI</strong> kèm nút <strong>Chấp nhận</strong> (Accept) hoặc <strong>Cài đặt</strong> (Install).</p>
        </section>

        <section class="bi-guide-panel">
          <h3>3. Tiến hành cài đặt ứng dụng BI</h3>
          <div class="bi-guide-install">
            <div class="bi-guide-copy bi-guide-install-pair">
              <p>Nhấn vào nút <strong>Chấp nhận</strong> (nếu hệ thống yêu cầu), sau đó nhấn <strong>Cài đặt</strong> (Install) và chờ quá trình tải hoàn tất.</p>
              <img class="article-install-screenshot" src="assets/hrp-bi-install.png" alt="Màn hình HRP BI trên TestFlight với nút Cài đặt" width="675" height="862" loading="lazy" decoding="async">
            </div>
            <div class="bi-guide-copy bi-guide-install-pair">
              <p class="bi-guide-check"><strong>Kiểm tra.</strong> Biểu tượng ứng dụng <strong>BI</strong> xuất hiện trên màn hình chính với một dấu chấm tròn màu cam nhỏ nằm ngay trước tên ứng dụng.</p>
              <img class="article-verification-screenshot" src="assets/hrp-bi-home-screen.png" alt="Biểu tượng HRP BI và dấu chấm màu cam bên cạnh tên ứng dụng trên màn hình chính iPhone" width="1462" height="822" loading="lazy" decoding="async">
            </div>
          </div>
        </section>

        <section class="bi-guide-panel bi-guide-notes">
          <h2>Một số lưu ý quan trọng</h2>
          <ul>
            <li><strong>Không dùng Zalo để quét mã:</strong> Bạn nên dùng <strong>Camera của iPhone</strong> để quét mã QR. Nếu quét bằng Zalo hoặc trình duyệt bên thứ ba, link có thể bị chặn chuyển hướng sang TestFlight. (Nếu lỡ mở bằng Zalo, hãy nhấn biểu tượng <code>...</code> ở góc trên bên phải và chọn <strong>Mở bằng Safari</strong>).</li>
            <li><strong>Quyền truy cập:</strong> Trong lần đầu mở ứng dụng BI, nếu hệ thống hỏi cấp quyền (như Thông báo, Mạng cục bộ, Dịch vụ định vị...), bạn hãy chọn <strong>Cho phép</strong> để ứng dụng hoạt động đầy đủ tính năng.</li>
          </ul>
          <div class="bi-guide-pair bi-guide-update">
            <div class="bi-guide-copy">
              <h3>Cập nhật phiên bản</h3>
              <p>Bản thử nghiệm trên TestFlight có thời hạn sử dụng trong <strong>90 ngày</strong>. Khi có bản cập nhật mới, bạn chỉ cần vào ứng dụng <strong>TestFlight</strong> và nhấn <strong>Cập nhật</strong> (Update) để tiếp tục dùng mà không bị mất dữ liệu.</p>
            </div>
            <img class="article-install-screenshot" src="assets/hrp-bi-update.png" alt="Màn hình HRP BI trên TestFlight với nút Cập nhật" width="677" height="871" loading="lazy" decoding="async">
          </div>
        </section>

        <section class="bi-guide-panel bi-guide-android">
          <h2>Hướng dẫn cài đặt ứng dụng BI trên Android</h2>
          <p>Quét mã QR để mở ứng dụng BI trên Google Play. Nếu đang đọc bài viết trên điện thoại Android, bạn có thể chạm nút bên cạnh mã.</p>
          <div class="bi-guide-android-entry">
            <img class="article-android-qr" src="assets/bi-android-play-qr.png" alt="Mã QR mở ứng dụng BI trên Google Play" width="750" height="750" loading="lazy" decoding="async">
            <div class="bi-guide-android-link">
              <a class="bi-guide-android-button" href="https://play.google.com/store/apps/details?id=vn.hrpartner.bi">Mở trên Google Play</a>
              <p>Nếu xem bài viết trên máy tính, hãy dùng camera điện thoại Android quét mã QR.</p>
            </div>
          </div>
          <p class="bi-guide-android-note">Các hình bên dưới là minh họa. Giao diện thực tế có thể khác đôi chút tùy điện thoại Android.</p>
          <ol class="bi-guide-android-steps">
            <li>
              <div class="bi-guide-android-step">
                <div><strong>Mở trang ứng dụng.</strong> Mở Camera, quét mã QR rồi chạm liên kết Google Play hiện trên màn hình.</div>
                <img class="article-android-step-image" src="assets/bi-android-scan.svg" alt="Minh họa điện thoại Android dùng camera quét mã QR và mở liên kết Google Play" width="300" height="360" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div><strong>Cài đặt BI.</strong> Trên Google Play, kiểm tra ứng dụng BI rồi chạm <strong>Cài đặt</strong>. Chờ tải và cài đặt hoàn tất.</div>
                <img class="article-android-step-image" src="assets/bi-android-install.svg" alt="Minh họa trang ứng dụng BI trên Google Play với nút Cài đặt" width="300" height="360" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div><strong>Mở ứng dụng.</strong> Chạm <strong>Mở</strong> trên Google Play hoặc biểu tượng BI trên màn hình điện thoại. Đăng nhập bằng tài khoản công ty đã được cấp.</div>
                <img class="article-android-step-image" src="assets/bi-android-home.svg" alt="Minh họa biểu tượng BI trên màn hình chính điện thoại Android" width="300" height="360" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div><strong>Cập nhật.</strong> Khi có phiên bản mới, mở trang BI trên Google Play và chạm <strong>Cập nhật</strong>.</div>
                <img class="article-android-step-image" src="assets/bi-android-update.svg" alt="Minh họa nút Cập nhật trên trang ứng dụng BI trong Google Play" width="300" height="360" loading="lazy" decoding="async">
              </div>
            </li>
          </ol>
        </section>
      </div>
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
