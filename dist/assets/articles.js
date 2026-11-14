const biIphoneApp = {
  name: 'HRP BI',
  platform: 'iPhone (TestFlight)',
  testflightUrl: 'https://testflight.apple.com/join/VGd3SbtC',
  guideArticleId: 'cong-ho-tro-it',
  updates: [
    {
      id: 'pr-6',
      pr: 'PR #6',
      status: 'Đang mở',
      version: '1.1.1',
      versionDetail: 'v1.1.1 (Build 163 → 164 → 165 → 166)',
      build: '163–166',
      release: 'Release V1.1.1.13112026',
      date: '2026-11-14',
      timeLabel: 'Cập nhật mới nhất lúc 14:47 ngày 14/11/2026',
      latest: true,
      summary: 'Bản tin nội bộ (Ảnh/PDF) & Beauty Camera',
      changes: [
        'Build 163 (13/11): Thêm icon Bản tin HRPartner trên Top Bar và giao diện mockup; thêm cơ chế tự động thử lại (retry) khi đẩy TestFlight bằng altool.',
        'Build 164 (13/11): Tích hợp API thật /api/bulletins, hỗ trợ file đính kèm IMAGE + PDF, đọc PDF trực tiếp bằng PDFKit và phóng to pinch-to-zoom.',
        'Build 165 (13/11): Căn giữa ảnh trong hộp thoại xem ảnh phóng to (lightbox) và thêm thông báo iOS khi có bản tin nội bộ mới.',
        'Build 166 (14/11): Bổ sung khung ngắm Live Beauty Camera làm đẹp trực tiếp khi chụp ảnh chấm công kèm rung phản hồi nhẹ (HapticsManager.lightImpact()) trên nút chụp.',
      ],
    },
    {
      id: 'pr-5',
      pr: 'PR #5',
      version: '1.0.12',
      versionDetail: 'v1.0.12 (Build 162)',
      build: '162',
      release: 'Release V1.0.12.13112026',
      date: '2026-11-13',
      timeLabel: 'Merge lúc 11:00 ngày 13/11/2026',
      summary: 'Đồng bộ Dashboard nhóm không phạm vi',
      changes: [
        'Đồng bộ giao diện Dashboard cho nhóm tài khoản không có phạm vi tuyển dụng (empty-scope / non-team). (Commit 3b14e85 ban đầu nâng lên 1.0.13, sau đó commit cbc3b63 giữ lại MARKETING_VERSION = 1.0.12 với Build 162 để phát hành nhanh trên TestFlight).',
      ],
    },
    {
      id: 'pr-4',
      pr: 'PR #4',
      version: '1.0.12',
      versionDetail: 'v1.0.12 (Build 161)',
      build: '161',
      release: 'Release V1.0.12.12112026',
      date: '2026-11-13',
      timeLabel: 'Merge lúc 00:00 ngày 13/11/2026',
      summary: 'Đồng bộ báo cáo Tổng quát & Theo nhóm',
      changes: [
        'Đồng bộ toàn bộ logic báo cáo Tổng quát và Theo nhóm (/api/reporting/team-report, /api/reporting/team-drill-down) với Android; xóa bỏ fallback gán giả on_count = total khi dữ liệu server để trống.',
      ],
    },
    {
      id: 'pr-3',
      pr: 'PR #3',
      version: '1.0.11',
      versionDetail: 'v1.0.11 (Build 156 → 158 → 159 → 160)',
      build: '156–160',
      date: '2026-11-12',
      timeLabel: 'Merge lúc 20:55 ngày 12/11/2026',
      summary: 'Tối ưu bộ lọc KCN, Facets & tổng số tin',
      changes: [
        'Build 156 – 158: Đảm bảo bộ lọc KCN & Hình thức lao động luôn hiển thị đầy đủ số lượng tin trên toàn DB trong khi danh sách chỉ tải 10 tin mới nhất; khóa chọn ngày tương lai trên tất cả thanh chọn ngày (HrpDateNavigatorBar).',
        'Build 159: Tích hợp include_facets=true giúp tải danh sách và số liệu thống kê bộ lọc chỉ trong 1 request.',
        'Build 160: Sửa badge tổng số tin tuyển dụng hiển thị con số chính xác thay vì 10+.',
      ],
    },
    {
      id: 'pr-2',
      pr: 'PR #2',
      version: '1.0.10',
      versionDetail: 'v1.0.9 (Build 156 fast-track) → v1.0.10 (Build 157)',
      build: '156–157',
      date: '2026-11-12',
      timeLabel: 'Merge lúc 12:29 ngày 12/11/2026',
      summary: 'Thay logo HRPartner & gói fast-track',
      changes: [
        'Thay biểu tượng chữ BI bằng logo hrpartner_logo trong khung squircle trắng trên Top Bar, màn hình Khởi động và màn hình Đăng nhập.',
        'Phát hành song song gói V1.0.9.12112026 (Build 156 để đi thẳng lên TestFlight không chờ duyệt bản mới) và V1.0.10.12112026 (Build 157).',
      ],
    },
    {
      id: 'pr-1',
      pr: 'PR #1',
      version: '1.0.10',
      versionDetail: 'v1.0.10 (Build 155)',
      build: '155',
      date: '2026-11-12',
      timeLabel: 'Merge lúc 10:12 ngày 12/11/2026',
      summary: 'Hiển thị họ tên tiếng Việt & bộ lọc dự án',
      changes: [
        'Giải mã và lưu cache Keychain họ tên tiếng Việt đầy đủ trên thanh tiêu đề thay vì hiển thị tên tài khoản đăng nhập.',
        'Chuyển nhãn yêu cầu giới tính ANY từ Cặp Nam/Nữ sang Nam/Nữ.',
        'Bỏ nút Làm mới thủ công (dùng cử chỉ kéo .refreshable gốc), đánh số thứ tự dự án (1., 2.,...) và bổ sung thanh lọc 2 tiêu chí (KCN, Hình thức).',
      ],
    },
  ],
};

const articles = [
  {
    id: 'cong-ho-tro-it',
    compactReadingLayout: true,
    hideHeaderJump: true,
    quickJump: { target: 'bi-guide-android', label: 'Chuyển nhanh hướng dẫn trên Android' },
    jumpTargets: ['bi-guide-ios', 'bi-guide-android'],
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
      <div class="bi-guide bi-guide-v2">
        <nav class="bi-platform-nav" aria-label="Chọn nền tảng điện thoại">
          <a class="bi-platform-switch bi-platform-switch--ios" href="#bai-viet/cong-ho-tro-it?jump=bi-guide-ios" data-jump-target="bi-guide-ios">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43Zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45Z"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>Dành cho iPhone (iOS)</strong>
              <small>Cài đặt &amp; cập nhật qua Apple TestFlight</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">Xem ngay ↓</span>
          </a>
          <a class="bi-platform-switch bi-platform-switch--android" href="#bai-viet/cong-ho-tro-it?jump=bi-guide-android" data-jump-target="bi-guide-android">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341a.857.857 0 1 1 .001-1.715.857.857 0 0 1-.001 1.715Zm-11.046 0a.857.857 0 1 1 .001-1.715.857.857 0 0 1-.001 1.715Zm11.405-6.02 1.997-3.459a.416.416 0 0 0-.721-.416l-2.022 3.503A12.14 12.14 0 0 0 12 8.018c-1.852 0-3.597.338-5.136.931L4.842 5.446a.416.416 0 0 0-.721.416l1.997 3.459C2.688 11.186.435 14.66.24 18.75h23.52c-.195-4.09-2.448-7.564-5.878-9.429Z"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>Dành cho Android</strong>
              <small>Tải &amp; cập nhật trực tiếp trên Google Play</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">Xem ngay ↓</span>
          </a>
        </nav>

        <section class="bi-platform-section bi-platform--ios" id="bi-guide-ios" tabindex="-1">
          <div class="bi-platform-top">
            <div class="bi-platform-intro">
              <span class="bi-platform-badge bi-platform-badge--ios">PHẦN I · IPHONE (IOS · TESTFLIGHT)</span>
              <h2 class="bi-platform-heading">HƯỚNG DẪN CÀI ĐẶT &amp; CẬP NHẬT ỨNG DỤNG BI TRÊN IPHONE</h2>
              <p>Để cài đặt ứng dụng <strong>HRP BI</strong> trên iPhone (qua TestFlight), bạn thực hiện theo 4 bước bên dưới hoặc quét nhanh mã QR lời mời.</p>
              <div class="bi-qr-box">
                <img class="bi-qr-img" src="assets/bi-testflight-qr.png" alt="Mã QR nhận lời mời cài đặt ứng dụng BI qua TestFlight" width="750" height="750" decoding="async">
                <div class="bi-qr-actions">
                  <div class="bi-qr-buttons">
                    <a class="bi-action-btn bi-action-btn--ios" href="https://testflight.apple.com/join/VGd3SbtC" target="_blank" rel="noopener noreferrer">Mở trong TestFlight ↗</a>
                    <a class="bi-action-btn bi-action-btn--ghost" href="#phien-ban-bi-iphone">Các bản cập nhật iOS →</a>
                  </div>
                  <p>Mở <strong>Camera mặc định của iPhone</strong> để quét mã QR, hoặc chạm nút trên nếu bạn đang đọc trực tiếp trên iPhone.</p>
                </div>
              </div>
            </div>
            <div class="bi-guide-video bi-platform-video">
              <button class="bi-guide-video-toggle" type="button" aria-expanded="false" aria-controls="bi-guide-video-content">
                <span class="bi-guide-video-play" aria-hidden="true"></span>
                <span class="bi-guide-android-video-badge">VIDEO HƯỚNG DẪN</span>
                <span class="bi-guide-android-video-copy"><strong>Video hướng dẫn iPhone</strong><small>Cài đặt &amp; cập nhật HRP BI qua TestFlight</small></span>
                <span class="bi-guide-android-video-cta">Phát video hướng dẫn</span>
              </button>
              <figure class="bi-guide-video-content" id="bi-guide-video-content">
                <iframe class="article-short-video" src="https://www.youtube.com/embed/1vwW6s3NdFM" title="Video hướng dẫn cập nhật ứng dụng BI trên iPhone" width="208" height="370" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
                <figcaption><a href="https://www.youtube.com/shorts/1vwW6s3NdFM?feature=share" target="_blank" rel="noopener noreferrer">Xem video trên YouTube ↗</a></figcaption>
              </figure>
            </div>
          </div>

          <ol class="bi-step-grid">
            <li class="bi-step-card">
              <div class="bi-step-head">
                <span class="bi-step-num">Bước 01</span>
                <h3>Cài đặt ứng dụng hỗ trợ TestFlight</h3>
              </div>
              <p>Mở <strong>App Store</strong>&nbsp;<img class="article-inline-icon" src="assets/app-store-icon.png" alt="" width="24" height="22"> trên iPhone, tìm từ khóa <code>TestFlight</code> và nhấn <strong>Nhận</strong> để tải về máy <em>(nếu máy đã có sẵn TestFlight thì bỏ qua bước này)</em>.</p>
              <div class="bi-step-media bi-step-media--wide">
                <img src="assets/testflight-download.png" alt="Mũi tên chỉ biểu tượng tải TestFlight trong App Store" width="1496" height="830" loading="lazy" decoding="async">
              </div>
              <p class="bi-step-check"><strong>✓ Kiểm tra:</strong> Biểu tượng TestFlight (cánh quạt màu xanh dương) xuất hiện trên màn hình chính của iPhone.</p>
            </li>

            <li class="bi-step-card">
              <div class="bi-step-head">
                <span class="bi-step-num">Bước 02</span>
                <h3>Quét mã QR để nhận lời mời tải app BI</h3>
              </div>
              <p>Mở ứng dụng <strong>Camera</strong> mặc định trên iPhone (hoặc dùng <strong>Quét mã</strong> trong Trung tâm điều khiển), hướng vào mã QR và chạm vào đường link màu vàng hiện trên màn hình.</p>
              <div class="bi-step-media bi-step-media--qr-row">
                <img class="bi-step-qr" src="assets/bi-testflight-qr.png" alt="Mã QR nhận lời mời cài đặt ứng dụng BI qua TestFlight" width="750" height="750" loading="lazy" decoding="async">
                <div class="bi-step-qr-cta">
                  <span>Nếu đang xem trên iPhone:</span>
                  <a href="https://testflight.apple.com/join/VGd3SbtC" target="_blank" rel="noopener noreferrer">Nhấn mở lời mời TestFlight ↗</a>
                </div>
              </div>
              <p class="bi-step-check"><strong>✓ Kiểm tra:</strong> Màn hình tự động chuyển sang TestFlight của ứng dụng <strong>HRP BI</strong> kèm nút <strong>Chấp nhận</strong> hoặc <strong>Cài đặt</strong>.</p>
            </li>

            <li class="bi-step-card">
              <div class="bi-step-head">
                <span class="bi-step-num">Bước 03</span>
                <h3>Tiến hành cài đặt ứng dụng BI</h3>
              </div>
              <p>Nhấn <strong>Chấp nhận</strong> (Accept) nếu hệ thống yêu cầu, sau đó nhấn <strong>Cài đặt</strong> (Install) và chờ quá trình tải hoàn tất.</p>
              <div class="bi-step-media bi-step-media--duo">
                <img src="assets/hrp-bi-install.png" alt="Màn hình HRP BI trên TestFlight với nút Cài đặt" width="675" height="862" loading="lazy" decoding="async">
                <img src="assets/hrp-bi-home-screen.png" alt="Biểu tượng HRP BI và dấu chấm màu cam trên màn hình chính iPhone" width="1462" height="822" loading="lazy" decoding="async">
              </div>
              <p class="bi-step-check"><strong>✓ Kiểm tra:</strong> Biểu tượng <strong>HRP BI</strong> xuất hiện trên màn hình chính kèm dấu chấm tròn màu cam nhỏ trước tên ứng dụng.</p>
            </li>

            <li class="bi-step-card">
              <div class="bi-step-head">
                <span class="bi-step-num">Bước 04</span>
                <h3>Cập nhật phiên bản mới (hạn 90 ngày)</h3>
              </div>
              <p>Bản thử nghiệm trên TestFlight có thời hạn sử dụng <strong>90 ngày</strong>. Khi có bản cập nhật mới, bạn chỉ cần mở <strong>TestFlight</strong> và nhấn <strong>Cập nhật</strong> (Update) để dùng tiếp mà không mất dữ liệu.</p>
              <div class="bi-step-media bi-step-media--single-portrait">
                <img src="assets/hrp-bi-update.png" alt="Màn hình HRP BI trên TestFlight với nút Cập nhật" width="677" height="871" loading="lazy" decoding="async">
              </div>
              <p class="bi-step-check"><strong>✓ Lưu ý:</strong> Dữ liệu và tài khoản đăng nhập được giữ nguyên hoàn toàn sau mỗi lần cập nhật.</p>
            </li>
          </ol>

          <div class="bi-notes-row" aria-label="Lưu ý quan trọng khi cài đặt trên iPhone">
            <div class="bi-note-card bi-note-card--warn">
              <strong>⚠ Không dùng Zalo để quét mã QR</strong>
              <p>Hãy dùng <strong>Camera mặc định của iPhone</strong>. Nếu quét bằng Zalo hoặc trình duyệt bên thứ ba, link có thể bị chặn chuyển hướng sang TestFlight. <em>(Nếu lỡ mở bằng Zalo, nhấn biểu tượng <code>...</code> góc trên bên phải và chọn <strong>Mở bằng Safari</strong>).</em></p>
            </div>
            <div class="bi-note-card bi-note-card--info">
              <strong>✓ Cấp quyền truy cập trong lần đầu mở app</strong>
              <p>Khi mở ứng dụng <strong>BI</strong> lần đầu, nếu hệ thống hỏi cấp quyền <em>(như Thông báo, Mạng cục bộ, Dịch vụ định vị, Camera...)</em>, bạn hãy chọn <strong>Cho phép</strong> để ứng dụng hoạt động đầy đủ tính năng.</p>
            </div>
          </div>
        </section>

        <section class="bi-platform-section bi-platform--android" id="bi-guide-android" tabindex="-1">
          <div class="bi-platform-top">
            <div class="bi-platform-intro">
              <span class="bi-platform-badge bi-platform-badge--android">PHẦN II · ANDROID (GOOGLE PLAY)</span>
              <h2 class="bi-platform-heading">HƯỚNG DẪN CÀI ĐẶT &amp; CẬP NHẬT ỨNG DỤNG BI TRÊN ANDROID</h2>
              <p>Quét mã QR bằng điện thoại Android để mở ứng dụng <strong>HRP BI</strong> trên Google Play, hoặc chạm nút bên dưới nếu đang dùng điện thoại.</p>
              <div class="bi-qr-box">
                <img class="bi-qr-img" src="assets/bi-android-play-qr.png" alt="Mã QR mở ứng dụng BI trên Google Play" width="750" height="750" decoding="async">
                <div class="bi-qr-actions">
                  <div class="bi-qr-buttons">
                    <a class="bi-action-btn bi-action-btn--android" href="https://play.google.com/store/apps/details?id=vn.hrpartner.bi" target="_blank" rel="noopener noreferrer">Mở trên Google Play ↗</a>
                  </div>
                  <p>Dùng Camera điện thoại để quét mã hoặc nhấn nút mở Google Play. <em>(Hình minh họa có thể khác đôi chút tùy dòng điện thoại Android).</em></p>
                </div>
              </div>
            </div>
            <div class="bi-guide-video bi-platform-video bi-platform-video--android">
              <button class="bi-guide-video-toggle" type="button" aria-expanded="false" aria-controls="bi-guide-android-video-content">
                <span class="bi-guide-video-play" aria-hidden="true"></span>
                <span class="bi-guide-android-video-badge">VIDEO HƯỚNG DẪN</span>
                <span class="bi-guide-android-video-copy"><strong>Video hướng dẫn Android</strong><small>Cài đặt &amp; cập nhật HRP BI qua Google Play</small></span>
                <span class="bi-guide-android-video-cta">Phát video hướng dẫn</span>
              </button>
              <figure class="bi-guide-video-content" id="bi-guide-android-video-content">
                <iframe class="article-short-video" src="https://www.youtube.com/embed/tEAiYreuigw" title="Video hướng dẫn cài đặt ứng dụng BI trên Android" width="208" height="370" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
                <figcaption><a href="https://www.youtube.com/shorts/tEAiYreuigw?feature=share" target="_blank" rel="noopener noreferrer">Xem video trên YouTube ↗</a></figcaption>
              </figure>
            </div>
          </div>

          <ol class="bi-step-grid bi-step-grid--android">
            <li class="bi-step-card bi-step-card--side">
              <div class="bi-step-side-copy">
                <span class="bi-step-num bi-step-num--android">Bước 01</span>
                <h3>Quét mã QR</h3>
                <p>Mở <strong>Camera</strong> trên điện thoại Android, hướng vào mã QR phía trên rồi chạm vào liên kết <strong>Google Play</strong> hiện ở giữa màn hình.</p>
              </div>
              <img class="bi-android-shot bi-android-shot--svg" src="assets/bi-android-scan.svg" alt="Minh họa điện thoại Android dùng camera quét mã QR" width="300" height="360" loading="lazy" decoding="async">
            </li>

            <li class="bi-step-card bi-step-card--side">
              <div class="bi-step-side-copy">
                <span class="bi-step-num bi-step-num--android">Bước 02</span>
                <h3>Tiến hành cài đặt ứng dụng BI</h3>
                <p>Kiểm tra đúng ứng dụng <strong>HRP BI</strong> trên Google Play, chạm nút <strong>Cài đặt</strong> màu xanh rồi chờ quá trình tải hoàn tất.</p>
              </div>
              <img class="bi-android-shot bi-android-shot--install" src="assets/bi-android-install-screen.png" alt="Ảnh Google Play có trang HRP BI và nút Cài đặt" width="407" height="856" loading="lazy" decoding="async">
            </li>

            <li class="bi-step-card bi-step-card--side">
              <div class="bi-step-side-copy">
                <span class="bi-step-num bi-step-num--android">Bước 03</span>
                <h3>Mở ứng dụng &amp; Cấp quyền</h3>
                <p>Mở app <strong>HRP BI</strong> ngoài màn hình chính và đăng nhập bằng tài khoản IT đã cấp. Khi được hỏi quyền <em>(Thông báo, Định vị, Camera...)</em>, hãy chọn <strong>Cho phép</strong> để dùng đầy đủ tính năng.</p>
              </div>
              <img class="bi-android-shot bi-android-shot--home" src="assets/bi-android-home-screen.png" alt="Ảnh màn hình chính Android có biểu tượng HRP BI được khoanh đỏ" width="402" height="820" loading="lazy" decoding="async">
            </li>

            <li class="bi-step-card bi-step-card--side">
              <div class="bi-step-side-copy">
                <span class="bi-step-num bi-step-num--android">Bước 04</span>
                <h3>Cập nhật ứng dụng</h3>
                <p>Khi có phiên bản mới, hãy quét lại mã QR trên đầu mục Android (hoặc nhấn <strong>Mở trên Google Play</strong>) để vào trang ứng dụng và bấm <strong>Cập nhật</strong>.</p>
              </div>
              <img class="bi-android-shot bi-android-shot--update" src="assets/bi-android-update-screen.png" alt="Ảnh Google Play có nút Cập nhật HRP BI được đánh dấu" width="412" height="847" loading="lazy" decoding="async">
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
    title: 'TỔNG QUAN VỀ WEB BI',
    wideReadingLayout: true,
    hideCategoryBadge: true,
    summary: 'Tổng quan nền tảng BI và HRIS HR Partner cùng các chức năng quản trị, báo cáo và vận hành nhân sự.',
    date: '2026-11-13',
    minutes: 5,
    image: 'web-bi.jpg',
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
