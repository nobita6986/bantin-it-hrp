const articles = [
  {
    id: 'cong-ho-tro-it',
    compactReadingLayout: true,
    quickJump: { target: 'bi-guide-android', label: 'Chuyển nhanh hướng dẫn trên Android' },
    sample: true,
    section: 'news',
    category: 'update',
    title: 'HƯỚNG DẪN CÀI ĐẶT & CẬP NHẬT APP BI TRÊN IPHONE VÀ ANDROID',
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
            <h2 class="bi-guide-section-title"><img class="bi-guide-section-icon" src="assets/hand-pointer-right.png" alt="" aria-hidden="true" width="28" height="21"><span>HƯỚNG DẪN CÀI ĐẶT &amp; CẬP NHẬT ỨNG DỤNG BI TRÊN IPHONE</span></h2>
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

        <section class="bi-guide-panel bi-guide-android" id="bi-guide-android" tabindex="-1">
          <div class="bi-guide-android-top">
            <div class="bi-guide-android-intro">
              <h2 class="bi-guide-section-title"><img class="bi-guide-section-icon" src="assets/hand-pointer-right.png" alt="" aria-hidden="true" width="28" height="21"><span>HƯỚNG DẪN CÀI ĐẶT &amp; CẬP NHẬT ỨNG DỤNG BI TRÊN ANDROID</span></h2>
              <p>Quét mã QR bằng điện thoại Android để mở BI trên Google Play, hoặc chạm nút bên cạnh nếu đang dùng điện thoại.</p>
              <div class="bi-guide-android-entry">
                <img class="article-android-qr" src="assets/bi-android-play-qr.png" alt="Mã QR mở ứng dụng BI trên Google Play" width="750" height="750" loading="lazy" decoding="async">
                <div class="bi-guide-android-link">
                  <a class="bi-guide-android-button" href="https://play.google.com/store/apps/details?id=vn.hrpartner.bi">Mở trên Google Play</a>
                  <p>Dùng camera điện thoại để quét mã, hoặc nhấn nút để mở Google Play.</p>
                </div>
              </div>
            </div>
            <div class="bi-guide-video bi-guide-android-video">
              <button class="bi-guide-video-toggle" type="button" aria-expanded="false" aria-controls="bi-guide-android-video-content">
                <span class="bi-guide-video-play" aria-hidden="true"></span>
                <span class="bi-guide-android-video-badge">VIDEO HƯỚNG DẪN</span>
                <span class="bi-guide-android-video-copy"><strong>Video hướng dẫn Android</strong><small>Cài đặt HRP BI qua Google Play</small></span>
                <span class="bi-guide-android-video-cta">Phát video hướng dẫn</span>
              </button>
              <figure class="bi-guide-video-content" id="bi-guide-android-video-content">
                <iframe class="article-short-video" src="https://www.youtube.com/embed/tEAiYreuigw" title="Video hướng dẫn cài đặt ứng dụng BI trên Android" width="208" height="370" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
                <figcaption><a href="https://www.youtube.com/shorts/tEAiYreuigw?feature=share">Xem video trên YouTube</a></figcaption>
              </figure>
            </div>
          </div>
          <p class="bi-guide-android-note">Hình minh họa có thể khác đôi chút tùy điện thoại Android.</p>
          <ol class="bi-guide-android-steps">
            <li>
              <div class="bi-guide-android-step">
                <div class="bi-guide-android-step-title"><h3>1. Quét mã QR</h3></div>
                <p>Mở Camera trên điện thoại, quét mã QR rồi chạm vào liên kết Google Play hiện ở giữa màn hình.</p>
                <img class="article-android-step-image" src="assets/bi-android-scan.svg" alt="Minh họa điện thoại Android dùng camera quét mã QR" width="300" height="360" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div class="bi-guide-android-step-title"><h3>2. Tiến hành cài đặt ứng dụng BI</h3></div>
                <p>Kiểm tra đúng ứng dụng BI trên Google Play, chạm <strong>Cài đặt</strong> rồi chờ hoàn tất.</p>
                <img class="article-android-step-image article-android-step-image--screenshot article-android-step-image--install-screen" src="assets/bi-android-install-screen.png" alt="Ảnh Google Play có trang HRP BI và nút Cài đặt" width="407" height="856" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div class="bi-guide-android-step-title"><h3>3. Mở ứng dụng</h3></div>
                <p>Sau khi cài đặt hoàn tất, ngoài màn hình chính sẽ xuất hiện app HRP BI. Tiến hành truy cập app và đăng nhập bằng tài khoản IT đã cấp. Trong lần đầu mở ứng dụng BI, nếu hệ thống hỏi cấp quyền (như Thông báo, Mạng cục bộ, Dịch vụ định vị...), bạn hãy chọn <strong>Cho phép</strong> để ứng dụng hoạt động đầy đủ tính năng.</p>
                <img class="article-android-step-image article-android-step-image--screenshot" src="assets/bi-android-home-screen.png" alt="Ảnh màn hình chính Android có biểu tượng HRP BI được khoanh đỏ" width="402" height="820" loading="lazy" decoding="async">
              </div>
            </li>
            <li>
              <div class="bi-guide-android-step">
                <div class="bi-guide-android-step-title"><h3>4. Cập nhật ứng dụng</h3></div>
                <p>Khi có phiên bản mới, hãy quét lại mã QR trên đầu trang hướng dẫn để vào trang cập nhật trên Google Play và bấm <strong>cập nhật</strong>.</p>
                <img class="article-android-step-image article-android-step-image--screenshot" src="assets/bi-android-update-screen.png" alt="Ảnh Google Play có nút Cập nhật HRP BI được đánh dấu" width="412" height="847" loading="lazy" decoding="async">
              </div>
            </li>
          </ol>
        </section>
      </div>
    `,
  },
  {
    id: 'gioi-thieu-web-bi',
    section: 'news',
    category: 'feature',
    title: 'Tổng Quan Về Web Bi',
    wideReadingLayout: true,
    hideCategoryBadge: true,
    summary: 'Tổng quan nền tảng BI và HRIS HR Partner cùng các chức năng quản trị, báo cáo và vận hành nhân sự.',
    date: '2026-11-13',
    minutes: 5,
    body: `
      <div class="web-bi-overview">
        <p class="web-bi-lead"><strong>Hệ thống Báo cáo và Quản trị Nhân sự HRP (HR Partner)</strong> địa chỉ truy cập <a href="https://bi.hrpartner.vn/dashboard" target="_blank" rel="noopener noreferrer">https://bi.hrpartner.vn/dashboard</a>. Đây là nền tảng toàn diện, kết hợp giữa quản trị dữ liệu thông minh (Business Intelligence - BI) và hệ thống thông tin quản lý nhân sự (HRIS). Được thiết kế chuyên biệt cho cấp quản lý và Ban Giám đốc, nền tảng cung cấp bức tranh toàn cảnh về tình hình nhân sự, đồng thời số hóa các quy trình vận hành cốt lõi, giúp doanh nghiệp tối ưu hóa tuyển dụng, quản lý rủi ro và ra quyết định chiến lược hiệu quả.</p>
        <p>Dưới đây là tổng hợp các chức năng trọng yếu của hệ thống:</p>

        <section class="web-bi-group">
          <h2>I. Phân tích &amp; Báo cáo Quản trị (BI Dashboard)</h2>
          <div class="web-bi-grid">
            <section class="web-bi-module">
              <h3>1. Hệ thống Báo cáo Đa chiều</h3>
              <ul>
                <li>Cung cấp các danh mục báo cáo phân lớp: Báo cáo tổng quát, Báo cáo chi tiết và Báo cáo theo nhóm.</li>
                <li>Tích hợp công cụ kiểm soát chất lượng dữ liệu: Review thông tin người lao động, báo cáo CCCD trùng lặp (phòng chống gian lận hồ sơ) và báo cáo người lao động nghỉ việc.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>2. Bảng điều khiển Tổng quan (Executive Dashboard)</h3>
              <ul>
                <li><strong>Chỉ số KPI trọng yếu:</strong> Tự động tổng hợp lượt tuyển mới, số ngày phát sinh tuyển dụng, số lượng dự án đang vận hành và quy mô đội ngũ chuyên viên tuyển dụng (Recruiters).</li>
                <li><strong>So sánh tăng trưởng:</strong> Đối chiếu dữ liệu kỳ hiện tại với các kỳ trước (tuần/tháng/quý) để đo lường mức độ tăng trưởng.</li>
                <li><strong>Bộ lọc dữ liệu linh hoạt:</strong> Trích xuất dữ liệu theo mốc thời gian hoặc bóc tách chi tiết qua “Bộ lọc nâng cao”.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>3. Phân tích Xu hướng &amp; Hiệu suất Tuyển dụng</h3>
              <ul>
                <li><strong>Xu hướng thời gian:</strong> Biểu đồ biến động theo ngày, tuần, tháng giúp nhận diện chu kỳ nguồn lao động và điểm “đỉnh tuyển”.</li>
                <li><strong>Phân bổ theo dự án:</strong> Thống kê tỷ trọng nhân sự cung ứng cho từng khách hàng, đánh giá quy mô dự án.</li>
                <li><strong>Đo lường kênh nguồn (HRP và Vendor):</strong> Phân tích tỷ trọng, hiệu quả giữa nguồn tuyển nội bộ và thuê ngoài, chi tiết đến từng dự án.</li>
                <li><strong>Đánh giá năng suất:</strong> Xếp hạng các chuyên viên tuyển dụng có thành tích tốt nhất.</li>
                <li><strong>Cơ cấu lao động:</strong> Phân loại nhân sự theo tính chất hợp đồng (thời vụ, chính thức).</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>4. Quản lý Hiện trạng &amp; Biến động Trạng thái Lao động</h3>
              <ul>
                <li><strong>Chốt hiện trạng (Snapshot):</strong> Thống kê cơ cấu trạng thái người lao động tại một thời điểm cụ thể (đang làm, đang chờ việc, đã nghỉ).</li>
                <li><strong>Luồng chuyển tiếp trạng thái:</strong> Theo dõi dòng chảy nhân sự, chẳng hạn tỷ lệ chuyển từ “Đang làm” sang “Đã nghỉ”; phân tách rõ tuyển mới và biến động nội bộ.</li>
              </ul>
            </section>
          </div>
        </section>

        <section class="web-bi-group">
          <h2>II. Vận hành &amp; Quản trị Nhân sự (HRIS)</h2>
          <div class="web-bi-grid">
            <section class="web-bi-module">
              <h3>5. Quản trị Tin tuyển dụng (Job Postings &amp; Campaigns)</h3>
              <ul>
                <li><strong>Quản lý chiến dịch:</strong> Đăng tải, lưu trữ và theo dõi trạng thái các yêu cầu tuyển dụng cho từng dự án.</li>
                <li><strong>Thu hút &amp; Phân luồng:</strong> Khởi tạo mô tả công việc (JD), phân phối tin tuyển dụng ra các kênh và thu thập hồ sơ ứng viên (CV) vào kho dữ liệu chung.</li>
                <li><strong>Kết nối dữ liệu:</strong> Đồng bộ hiệu quả chiến dịch tuyển dụng lên Bảng điều khiển tổng quan.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>6. Quản lý Chấm công (Time &amp; Attendance)</h3>
              <ul>
                <li><strong>Kiểm soát thời gian thực tế:</strong> Ghi nhận giờ ra/vào, ca làm việc, thời gian đi muộn/về sớm và số giờ tăng ca (OT).</li>
                <li><strong>Tổng hợp tự động:</strong> Hỗ trợ chốt công cuối kỳ nhanh chóng, giảm sai sót và cung cấp dữ liệu đầu vào chính xác cho bộ phận tính lương (C&amp;B).</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>7. Quản lý Nghỉ phép (Leave Management)</h3>
              <ul>
                <li><strong>Số hóa đơn từ:</strong> Hỗ trợ người lao động tạo và gửi trực tuyến các loại đơn xin nghỉ (phép năm, nghỉ ốm, không lương, thai sản...).</li>
                <li><strong>Kiểm soát quỹ phép:</strong> Tự động theo dõi và cập nhật số ngày phép còn lại của từng cá nhân.</li>
                <li><strong>Phê duyệt nhanh:</strong> Cấp quản lý xem lịch sử và duyệt đơn ngay trên hệ thống, giúp luồng công việc thông suốt.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <h3>8. Quản lý Ứng lương (Salary Advance)</h3>
              <ul>
                <li><strong>Đề xuất linh hoạt:</strong> Cho phép nhân sự gửi yêu cầu tạm ứng thu nhập dựa trên số ngày công đã hoàn thành.</li>
                <li><strong>Quy trình đối trừ tự động:</strong> Hệ thống hóa luồng phê duyệt từ quản lý đến kế toán, ghi nhận khoản ứng để khấu trừ vào kỳ lương tiếp theo, bảo đảm minh bạch và an toàn dòng tiền.</li>
              </ul>
            </section>
          </div>
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
