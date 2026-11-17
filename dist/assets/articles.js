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
    pinRank: 0,
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
    pinRank: 1,
    compactReadingLayout: true,
    hideCategoryBadge: true,
    hideArticleSummary: true,
    jumpTargets: ['mini-bi-modules', 'mini-bi-notes'],
    section: 'news',
    category: 'feature',
    title: 'Tổng quan Hệ thống & Lưu ý Sử dụng Nền tảng Web Mini BI (HR Partner)',
    summary: 'Tổng quan 9 phân hệ quản trị – điều hành trung tâm trên trình duyệt Web Mini BI (HR Partner) và 6 lưu ý quan trọng dành cho BoD, Admin, Kế toán, QLDA, Tuyển dụng & Nhân sự.',
    keywords: 'web mini bi hr partner bod admin ke toan qlda vendor cong no so cai excel cccd ai report ung luong nghi phep ma tran cham cong kcn tuyen dung',
    date: '2026-11-15',
    minutes: 10,
    image: 'web-bi.jpg',
    body: `
      <div class="web-bi-overview">
        <section class="web-bi-hero" aria-label="Giới thiệu tổng quan nền tảng Web Mini BI HR Partner">
          <div class="web-bi-hero-copy">
            <span class="web-bi-eyebrow"><span class="intro-dot" aria-hidden="true"></span> TRUNG TÂM ĐIỀU HÀNH TRÊN WEB · BOD · ADMIN · KẾ TOÁN · QLDA · HR</span>
            <p class="web-bi-lead"><strong>Mini BI (HR Partner)</strong> là nền tảng quản trị và báo cáo điều hành trung tâm trên trình duyệt Web, phục vụ toàn bộ các cấp từ <strong>Ban Giám đốc (BoD), Quản trị viên (Admin), Kế toán, Trưởng nhóm/Trưởng bộ phận, Quản lý dự án (QLDA)</strong> đến <strong>Chuyên viên Tuyển dụng và Nhân viên văn phòng</strong>.</p>
            <p class="web-bi-sublead">Nếu ứng dụng di động tập trung vào thao tác nhanh tại hiện trường (như chụp ảnh chấm công, quét QR nhanh), thì nền tảng <strong>Web Mini BI</strong> là trung tâm điều hành toàn diện: xử lý dữ liệu bảng tính quy mô lớn, quản lý công nợ và chứng từ tài chính Vendor, kế toán duyệt ứng lương, cấu hình chính sách công – phép – ca làm việc, thiết kế mẫu báo cáo, đăng tin tuyển dụng và quản trị danh mục toàn hệ thống.</p>
            <div class="web-bi-cta-row">
              <a class="bi-action-btn bi-action-btn--ios" href="https://bi.hrpartner.vn/dashboard" target="_blank" rel="noopener noreferrer">Mở Web Mini BI ↗</a>
              <a class="web-bi-url-chip" href="#bai-viet/tong-quan-hrp-bi-ios">Xem bản Ứng dụng Mobile →</a>
              <span class="web-bi-stat-pill">9 Phân hệ chức năng · 6 Lưu ý vận hành</span>
            </div>
          </div>
          <div class="web-bi-hero-visual">
            <img src="assets/web-bi.jpg" alt="Minh họa nền tảng quản trị và báo cáo điều hành Web Mini BI HR Partner" width="960" height="537" decoding="async">
          </div>
          <div class="web-bi-hero-note hrp-callout hrp-callout--note">
            <span class="hrp-callout-head">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              NOTE
            </span>
            <p>Giao diện Web tương thích trên cả <strong>máy tính và trình duyệt điện thoại</strong>, hỗ trợ đổi chế độ <strong>Sáng / Tối</strong> cùng nhiều tông màu thương hiệu. Thanh menu trên cùng sẽ tự động ẩn/hiện các phân hệ theo đúng quyền hạn thực tế của từng tài khoản đăng nhập.</p>
          </div>
        </section>

        <nav class="bi-platform-nav" aria-label="Chuyển nhanh nội dung nền tảng Web Mini BI">
          <a class="bi-platform-switch bi-platform-switch--ios" href="#bai-viet/gioi-thieu-web-bi?jump=mini-bi-modules" data-jump-target="mini-bi-modules">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>1. Các Phân hệ Chức năng Chính</strong>
              <small>Tổng quan, Nhập liệu Excel, Tài chính Vendor, Ứng lương, Nghỉ phép, Báo cáo, Tuyển dụng, Chấm công &amp; Hệ thống</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">9 phân hệ ↓</span>
          </a>
          <a class="bi-platform-switch bi-platform-switch--notes" href="#bai-viet/gioi-thieu-web-bi?jump=mini-bi-notes" data-jump-target="mini-bi-notes">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>2. Các Lưu ý Quan trọng Khi Sử dụng</strong>
              <small>Chống ghi đè, Dán Excel, Kế toán Vendor, Ứng lương, Chốt phép/Chấm công &amp; Giao báo cáo</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">6 lưu ý ↓</span>
          </a>
        </nav>

        <section class="web-bi-group web-bi-group--bi" id="mini-bi-modules" tabindex="-1">
          <div class="web-bi-group-head">
            <span class="bi-platform-badge bi-platform-badge--ios">PHẦN 1 · 9 PHÂN HỆ QUẢN TRỊ &amp; ĐIỀU HÀNH TRUNG TÂM</span>
            <h2>1. Các Phân hệ Chức năng Chính</h2>
            <p>Hệ thống phân hệ chuyên sâu phục vụ phân tích số liệu, vận hành nhân sự, đối soát tài chính Vendor và quản trị toàn công ty.</p>
          </div>

          <div class="web-bi-grid">
            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.1 · ANALYTICS, AI REPORT &amp; DATA QUALITY</span>
                  <h3>1.1. Tổng quan Số liệu Tuyển dụng &amp; Nhân sự (Tổng quan)</h3>
                </div>
              </div>
              <div class="hrp-subgrid hrp-subgrid--2">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Báo cáo tổng quát, Báo cáo chi tiết &amp; Báo cáo theo nhóm</h4>
                  <ul class="web-bi-list">
                    <li>Theo dõi kết quả tuyển dụng theo từng ngày và khoảng thời gian, phân tích chi tiết theo 4 chiều: <strong>Dự án · Người tuyển · Nguồn tuyển (HRP / Vendor) · Loại hình lao động (Thời vụ / Chính thức)</strong>.</li>
                    <li>Xem bảng xếp hạng mức độ đóng góp của từng chuyên viên tuyển dụng và đi sâu vào từng dòng dữ liệu của mỗi nhóm.</li>
                    <li><strong>Trợ lý Tổng hợp Báo cáo Tự động (AI Report):</strong> Hỗ trợ sinh bản phân tích nhận định số liệu theo kỳ thời gian, lưu lịch sử các lần phân tích và cho phép tải báo cáo về máy.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Giám sát Chất lượng Hồ sơ &amp; Biến động Nhân sự (hiển thị theo thẩm quyền)</h4>
                  <ul class="web-bi-list">
                    <li><strong>Review thông tin NLĐ:</strong> Rà soát và xử lý các hồ sơ có thông tin nhập tay lệch với dữ liệu quét từ mã QR trên ảnh CCCD, hoặc ảnh CCCD bị mờ/thiếu.</li>
                    <li><strong>Báo cáo CCCD trùng:</strong> Phát hiện các trường hợp trùng số CCCD giữa các dự án/ngày vào làm và hỗ trợ rút hồ sơ trùng theo thẩm quyền.</li>
                    <li><strong>Báo cáo NLĐ nghỉ việc:</strong> Theo dõi danh sách người lao động nghỉ việc và cho phép đánh dấu ẩn các bản ghi đã rà soát xong kèm lý do.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.2 · EXCEL GRID, WORKER DIRECTORY &amp; CHANGE REQUESTS</span>
                  <h3>1.2. Nhập liệu Hồ sơ, Quản lý NLĐ &amp; Đề xuất Thay đổi (Nhập liệu &amp; Người lao động)</h3>
                </div>
              </div>
              <div class="hrp-subgrid hrp-subgrid--3">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Nhập liệu trực tiếp &amp; Bảng tính dán từ Excel</h4>
                  <ul class="web-bi-list">
                    <li>Hỗ trợ cả hai cách: nhập biểu mẫu chi tiết từng người hoặc nhập trên <strong>bảng lưới giống Excel</strong> (cho phép sao chép nhiều dòng từ file Excel dán thẳng vào bảng, hoặc tải file Excel mẫu về điền rồi đưa lên), có nút <strong>Hoàn tác</strong> khi dán nhầm.</li>
                    <li>Lưu bản nháp tự động, kiểm tra cảnh báo trùng CCCD trước khi chốt gửi, đính kèm trọn bộ giấy tờ (ảnh chân dung, CCCD mặt trước/sau, hợp đồng lao động, thẻ an toàn) và thông tin ngân hàng nhận lương.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Danh bạ Người lao động</h4>
                  <ul class="web-bi-list">
                    <li>Tra cứu hồ sơ theo phạm vi công việc (hồ sơ do mình tải lên, người mình tuyển, người thuộc dự án mình quản lý, theo nhóm hoặc toàn công ty), lọc theo dự án, trạng thái làm việc và loại hình lao động.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Quy trình Đề xuất &amp; Duyệt thay đổi hồ sơ (Yêu cầu thay đổi)</h4>
                  <ul class="web-bi-list">
                    <li>Với các hồ sơ đã gửi chính thức hoặc các trường nhạy cảm (thông tin định danh, tài khoản nhận tiền), người dùng có thể tạo <strong>Yêu cầu thay đổi</strong> kèm lý do để cấp quản lý phê duyệt, giúp kiểm soát chặt chẽ và lưu giữ lịch sử xử lý minh bạch (tài khoản có quyền đặc biệt có thể chỉnh sửa trực tiếp khi được cấp phép).</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.3 · VENDOR LEDGER, RECONCILIATION &amp; FINANCE</span>
                  <h3>1.3. Tài chính &amp; Quản lý Công nợ Vendor (Tài chính)</h3>
                </div>
              </div>
              <p class="web-bi-mod-lead">Đây là phân hệ kế toán – đối soát chuyên sâu trên Web dành cho Kế toán, Quản lý tài chính và Ban Giám đốc:</p>
              <div class="hrp-feature-strip">
                <strong>Quản lý sổ cái đa tầng:</strong> Theo dõi công nợ tách bạch theo từng <strong>Nhà cung cấp (Vendor)</strong>, <strong>Kế toán phụ trách dự án</strong> và <strong>Loại hợp đồng (Thời vụ / Chính thức)</strong>.
              </div>
              <div class="hrp-subgrid hrp-subgrid--2">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Ghi nhận đầy đủ nghiệp vụ công nợ &amp; tạm ứng</h4>
                  <ul class="web-bi-list">
                    <li>Khởi tạo <strong>Số dư đầu kỳ</strong> (Phải trả hoặc Dư ứng) theo lô có bước xem trước kiểm lỗi.</li>
                    <li>Ghi nhận phát sinh công nợ, bảng lương phải trả, thanh toán cho Vendor, điều chỉnh tăng/giảm phải trả và <strong>Hoàn tác bút toán</strong> khi cần đính chính.</li>
                    <li><strong>Quản lý Quỹ tạm ứng chung của Vendor:</strong> Ghi nhận chi ứng tiền cho Vendor, Vendor hoàn ứng, hoặc khấu trừ khoản tạm ứng trực tiếp vào công nợ của từng dự án.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Đối soát, Chứng từ &amp; Báo cáo tháng</h4>
                  <ul class="web-bi-list">
                    <li>Xem và in các phiếu chứng từ nội bộ, đính kèm ảnh chụp minh chứng thanh toán/đối chiếu.</li>
                    <li>Lập biên bản <strong>Đối soát công nợ định kỳ</strong> (tự động tính chênh lệch giữa sổ hệ thống và số xác nhận thực tế).</li>
                    <li>Phân quyền Kế toán phụ trách theo Dự án, xem <strong>Báo cáo công nợ Vendor hàng tháng</strong> và xuất dữ liệu ra file Excel.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.4 · SALARY ADVANCE WORKFLOW</span>
                  <h3>1.4. Quản lý &amp; Kế toán Ứng lương NLĐ (Ứng lương)</h3>
                </div>
              </div>
              <p class="web-bi-mod-lead">Phối hợp trọn vẹn quy trình giữa Quản lý dự án (QLDA) và Kế toán dự án:</p>
              <ul class="web-bi-list">
                <li><strong>Dành cho QLDA:</strong> Chọn dự án đang phụ trách, kiểm tra tự động điều kiện ứng lương của từng NLĐ, xem tổng số lần và số tiền NLĐ đã ứng trong 30 ngày gần nhất, tạo đề nghị ứng lương (<strong>Tiền mặt</strong> hoặc <strong>Chuyển khoản</strong>) và tải ảnh NLĐ nhận tiền lên phiếu.</li>
                <li><strong>Dành cho Kế toán dự án &amp; Cấp giám sát:</strong> Tiếp nhận danh sách đề nghị đang chờ xử lý, nhắn tin trao đổi/yêu cầu QLDA bổ sung thông tin ngay trên phiếu, phê duyệt, từ chối hoặc chuyển trạng thái <strong>Xử lý ngoài BI</strong>. Đặc biệt có màn hình đối chiếu song song ảnh chứng từ nhận tiền với ảnh chân dung gốc của NLĐ để xác nhận hợp lệ hoặc yêu cầu chụp lại ảnh, đồng thời hỗ trợ xuất danh sách ứng lương.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>QLDA ↔ Kế toán</span><span>Đối chiếu chân dung</span><span>Xuất danh sách ứng</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.5 · LEAVE PORTAL &amp; HR POLICY</span>
                  <h3>1.5. Nghỉ phép Cá nhân &amp; Quản trị Nghỉ phép (Nghỉ phép của tôi &amp; Quản trị nghỉ phép)</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li><strong>Nghỉ phép cá nhân &amp; Duyệt phép:</strong> Xem số dư phép năm, phép thâm niên và phép tồn năm trước; tạo đơn xin nghỉ cả ngày hoặc nửa ngày (<strong>Sáng / Chiều</strong>) với 5 loại nghỉ (<em>Phép năm, Nghỉ ốm, Nghỉ cưới, Nghỉ tang, Nghỉ không lương</em>), có tính năng tự động gợi ý phân bổ ngày nghỉ theo quỹ phép còn lại; rút đơn hoặc duyệt/từ chối/hủy đơn đã duyệt.</li>
                <li><strong>Quản trị nghỉ phép (dành cho HR / Admin / BoD):</strong>
                  <ul class="web-bi-sublist hrp-sublist--indigo">
                    <li>Thiết lập <strong>Chính sách nghỉ phép chung</strong> (như ngày/tháng hết hạn của phép tồn chuyển từ năm trước).</li>
                    <li>Cấu hình <strong>Hồ sơ phép nhân sự</strong> (Thử việc / Chính thức, ngày vào làm, ngày lên chính thức, lộ trình cộng phép thâm niên) và gán Người duyệt theo bộ phận (Marketing, IT, Kế toán).</li>
                    <li>Nhập hàng loạt <strong>Số dư phép đầu kỳ</strong>, cấp quyền nội bộ trong phân hệ và xem/xuất <strong>Báo cáo chốt công &amp; phép tháng</strong> của toàn công ty hoặc từng bộ phận.</li>
                  </ul>
                </li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Quỹ phép &amp; Thâm niên</span><span>Cấu hình chính sách</span><span>Chốt công &amp; phép tháng</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.6 · DYNAMIC REPORT TEMPLATES &amp; ASSIGNMENTS</span>
                  <h3>1.6. Báo cáo Công việc &amp; Điều phối Giao việc (Báo cáo của tôi &amp; Quản lý/Giao báo cáo)</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li><strong>Cá nhân thực hiện:</strong> Xem danh sách báo cáo Cần làm theo hạn nộp (<strong>Ngày / Tuần / Tháng</strong>), lưu nháp hoặc gửi nộp chính thức và tra cứu lại Lịch sử các kỳ trước.</li>
                <li><strong>Thiết lập &amp; Điều hành (dành cho Quản lý / Admin):</strong>
                  <ul class="web-bi-sublist hrp-sublist--indigo">
                    <li><strong>Thiết kế mẫu báo cáo:</strong> Tự tạo biểu mẫu báo cáo động với các trường thông tin phù hợp từng bộ phận.</li>
                    <li><strong>Quản lý Nhóm nhận &amp; Đợt giao báo cáo:</strong> Tạo nhóm người nhận, phát hành đợt giao báo cáo định kỳ, thu hồi hoặc kích hoạt lại đợt giao khi cần.</li>
                    <li><strong>Ủy quyền duyệt:</strong> Chuyển quyền duyệt báo cáo tạm thời cho người khác trong thời gian vắng mặt.</li>
                    <li><strong>Chấm duyệt &amp; Theo dõi tiến độ:</strong> Xử lý hàng đợi Cần duyệt báo cáo và theo dõi bảng thống kê tỷ lệ nộp đúng hạn, số bài quá hạn của từng thành viên/nhóm.</li>
                  </ul>
                </li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Biểu mẫu động</span><span>Ủy quyền duyệt</span><span>Thống kê đúng hạn</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.7 · JOB PUBLISHING &amp; RECRUITMENT</span>
                  <h3>1.7. Quản lý &amp; Tra cứu Tin Tuyển dụng (Tin tuyển dụng)</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li>Tra cứu bảng tin tuyển dụng đang hiệu lực và lọc nhanh theo <strong>Tỉnh/Thành, Khu công nghiệp (KCN), Dự án, Hình thức lao động</strong>.</li>
                <li>Khác với bản di động chỉ xem tin, nền tảng Web cho phép người dùng được cấp quyền <strong>Tạo tin tuyển dụng mới</strong>, <strong>Chỉnh sửa nội dung</strong>, <strong>Ngừng đăng (Thu hồi)</strong> tin cũ, <strong>Sao chép</strong> tin đã thu hồi để đăng lại và <strong>Xuất nội dung chi tiết tin tuyển dụng thành tệp văn bản</strong> để gửi nhanh cho ứng viên hoặc cộng tác viên.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Tạo · Sửa · Thu hồi tin</span><span>Sao chép đăng lại</span><span>Xuất tệp văn bản</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.8 · ATTENDANCE MATRIX &amp; GPS GEOFENCE</span>
                  <h3>1.8. Quản trị &amp; Báo cáo Chấm công (Báo cáo chấm công)</h3>
                </div>
              </div>
              <p class="web-bi-mod-lead">Công cụ trên Web giúp Ban Giám đốc, Nhân sự và Trưởng nhóm kiểm soát dữ liệu chấm công gửi lên từ điện thoại:</p>
              <ul class="web-bi-list">
                <li><strong>Nhật ký Check-in chi tiết:</strong> Tra cứu theo khoảng ngày và nhân viên; xem trực tiếp ảnh chụp chấm công, vị trí trên Google Maps, khoảng cách tính bằng mét tới địa điểm làm việc và trạng thái xác minh giờ chuẩn hay đồng hồ máy.</li>
                <li><strong>Bảng công Ma trận Tháng:</strong> Tổng hợp toàn bộ các ca chấm công trong tháng của từng nhân sự trên một bảng trực quan (kết hợp tự động với ngày nghỉ phép đã duyệt và giải trình đã duyệt) và hỗ trợ xuất file báo cáo tháng.</li>
                <li><strong>Duyệt giải trình &amp; Cấu hình địa điểm, ca làm việc:</strong> Xét duyệt giải trình chấm công; thiết lập tọa độ GPS và bán kính cho Trụ sở chính / các Chi nhánh; cấu hình Khung giờ chấm công linh hoạt (số mốc chấm trong ngày, giờ chuẩn từng mốc, số phút cho phép chấm sớm/trễ) rồi gán riêng cho từng nhân sự hoặc bộ phận.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Google Maps &amp; Bán kính</span><span>Ma trận công tháng</span><span>Cấu hình ca linh hoạt</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">PHÂN HỆ 1.9 · PROJECTS, MASTER DATA &amp; AUDIT LOGS</span>
                  <h3>1.9. Quản trị Dự án, Tổ chức &amp; Hệ thống (Dự án &amp; Quản trị hệ thống)</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li><strong>Quản lý Dự án:</strong> Tạo mới, đổi tên, tạm ngừng/kích hoạt lại dự án, cài đặt tọa độ/bán kính chấm công tại dự án và bổ nhiệm hoặc thu hồi Quản lý dự án (QLDA).</li>
                <li><strong>Quản trị Danh mục chuẩn &amp; Phòng ban:</strong> Quản lý tập trung danh mục Nhân sự/Người tuyển, Nhóm &amp; Trưởng nhóm, Phòng ban, Nhà cung cấp (Vendor), Tỉnh/Thành, Khu công nghiệp, Loại hình lao động và Liên kết phạm vi <strong>Dự án ↔ Nhóm</strong>.</li>
                <li><strong>Tài khoản &amp; Kiểm toán:</strong> Tạo tài khoản đăng nhập, khóa/mở quyền truy cập, gắn kết tài khoản với hồ sơ nhân sự, tự đổi mật khẩu cá nhân và tra cứu <strong>Lịch sử chỉnh sửa hồ sơ NLĐ</strong> trên toàn hệ thống.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Danh mục chuẩn</span><span>Liên kết Dự án ↔ Nhóm</span><span>Nhật ký kiểm toán</span>
              </div>
            </section>
          </div>
        </section>

        <section class="web-bi-group web-bi-group--notes" id="mini-bi-notes" tabindex="-1">
          <div class="web-bi-group-head">
            <span class="bi-platform-badge--notes">PHẦN 2 · QUY TẮC VẬN HÀNH, KIỂM TOÁN &amp; AN TOÀN DỮ LIỆU</span>
            <h2>2. Các Lưu ý Quan trọng Khi Sử dụng</h2>
            <p>Tuân thủ các quy tắc kiểm soát dữ liệu, dán bảng tính, kế toán công nợ và cấu hình danh mục để đảm bảo tính chính xác toàn hệ thống.</p>
          </div>

          <div class="web-bi-grid">
            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.1 · AUDIT LOG &amp; CONCURRENCY</span>
                  <h3>2.1. Lưu ý Chung về Thao tác, Phân quyền &amp; Chống Ghi đè Dữ liệu</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Bắt buộc ghi rõ lý do với các thao tác quản trị:</strong> Khi đổi tên/đóng dự án, gán/gỡ quản lý, hoàn tác/điều chỉnh bút toán tài chính, ẩn dòng báo cáo nghỉ việc hoặc đề xuất sửa hồ sơ, hệ thống đều yêu cầu nhập <strong>Lý do thực hiện</strong> để lưu nhật ký kiểm toán.</li>
                <li><strong>Cơ chế chống ghi đè khi làm việc nhiều người:</strong> Nếu hai người cùng mở và sửa một hồ sơ/phiếu yêu cầu cùng lúc, người bấm lưu sau sẽ nhận được thông báo dữ liệu đã thay đổi và cần tải lại bản mới nhất trước khi thao tác tiếp (hệ thống không tự động ghi đè làm mất nội dung của người lưu trước).</li>
                <li><strong>Không đóng trình duyệt khi đang tải tệp:</strong> Khi vừa bấm lưu hồ sơ kèm nhiều ảnh chân dung/CCCD/hợp đồng, hãy chờ thông báo tải tệp hoàn tất rồi mới đóng tab hoặc đăng xuất.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.2 · NHẬP LIỆU LƯỚI &amp; EXCEL</span>
                  <h3>2.2. Lưu ý khi Nhập liệu Bảng tính &amp; Dán từ Excel (Nhập liệu)</h3>
                </div>
              </div>
              <div class="hrp-callout hrp-callout--important">
                <span class="hrp-callout-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  IMPORTANT
                </span>
                <p class="hrp-callout-lead">Quy tắc dán dữ liệu từ Excel vào bảng lưới trên Web:</p>
                <ul class="web-bi-list">
                  <li>Mỗi lần dán tối đa <strong>100 dòng dữ liệu</strong>.</li>
                  <li>Vùng dán không được vượt quá cột cuối cùng của bảng và không được đè lên các ô đang khóa/không có quyền sửa. Nếu vi phạm bất kỳ điều kiện nào, hệ thống sẽ từ chối toàn bộ lần dán đó để tránh lệch cột sai thông tin (bạn có thể bấm <strong>Hoàn tác</strong> ngay nếu vừa dán nhầm).</li>
                  <li><strong>Tính hợp lệ của danh mục:</strong> Dự án, Người tuyển, Ngân hàng, Loại hình lao động được chọn phải đang ở trạng thái hoạt động. Đặc biệt, Người tuyển phải thuộc nhóm/nguồn tuyển đang có hiệu lực tại đúng <strong>Ngày bắt đầu làm việc</strong> của NLĐ.</li>
                  <li><strong>Quy định tệp và số CCCD:</strong> Tệp đính kèm tối đa <strong>10 MB</strong> (ảnh JPG, PNG, WEBP hoặc PDF). Số CCCD phải đúng <strong>12 chữ số</strong> (hoặc CMND 9 số). Nếu NLĐ từng làm việc trước đó, hồ sơ cũ phải được chuyển sang trạng thái <strong>Đã nghỉ</strong> (có đủ ngày nghỉ và lý do nghỉ) trước khi tạo đợt làm việc mới; hồ sơ đã kết thúc không thể mở lại.</li>
                </ul>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.3 · KẾ TOÁN &amp; CÔNG NỢ VENDOR</span>
                  <h3>2.3. Lưu ý khi Sử dụng Phân hệ Tài chính Vendor (Tài chính)</h3>
                </div>
              </div>
              <div class="hrp-callout hrp-callout--warning">
                <span class="hrp-callout-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
                  WARNING
                </span>
                <p class="hrp-callout-lead">Lưu ý nghiệp vụ kế toán &amp; công nợ trên Mini BI:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li><strong>Bản chất chứng từ:</strong> Tất cả phiếu lương, phiếu chi, tạm ứng và biên bản đối soát trên hệ thống là chứng từ ghi nhận quản trị nội bộ, không phải lệnh chuyển tiền ngân hàng hay xác nhận tiền đã vào tài khoản đối tác. Kế toán cần đính kèm ảnh chụp minh chứng giao dịch (JPG hoặc PNG, tối đa <strong>10 MB</strong>) để đối chiếu.</li>
                  <li><strong>Không sửa/xóa lùi các bút toán đã ghi sổ:</strong> Khi phát hiện nhập nhầm số tiền hoặc sai nội dung, hãy sử dụng chức năng <strong>Hoàn tác bút toán</strong> hoặc ghi bút toán <strong>Điều chỉnh tăng / giảm</strong> kèm lý do giải trình rõ ràng.</li>
                  <li><strong>Khởi tạo Số dư đầu kỳ:</strong> Mỗi lần nhập theo lô hỗ trợ tối đa <strong>200 dòng</strong>. Bạn bắt buộc bấm <strong>Xem trước</strong> và xử lý hết các dòng cảnh báo lỗi trước khi áp dụng chính thức.</li>
                  <li><strong>Phân loại hợp đồng trên sổ phụ:</strong> Cần chọn đúng phân loại <strong>Thời vụ</strong> hoặc <strong>Chính thức</strong> cho sổ phụ của Vendor để báo cáo tháng cộng dồn chính xác theo từng nhóm lao động.</li>
                </ul>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.4 · ĐIỀU KIỆN &amp; ĐỐI SOÁT ỨNG LƯƠNG</span>
                  <h3>2.4. Lưu ý khi Đề nghị &amp; Xử lý Ứng lương (Ứng lương)</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Điều kiện NLĐ được ứng lương:</strong> Hệ thống sẽ tự động chặn tạo phiếu nếu NLĐ thuộc nguồn Vendor, đã nghỉ việc, chưa xác nhận đi làm, thiếu ảnh chân dung, đang bị trùng CCCD chưa xử lý hoặc đang mở làm việc song song ở nhiều dự án.</li>
                <li><strong>Yêu cầu chính chủ khi Chuyển khoản:</strong> Chỉ chọn được phương thức <strong>Chuyển khoản</strong> khi hồ sơ NLĐ có đủ ngân hàng, số tài khoản và tên chủ tài khoản <strong>trùng khớp chính chủ</strong> với họ tên NLĐ; nếu chưa đáp ứng thì phải nhận bằng <strong>Tiền mặt</strong> hoặc cập nhật lại thông tin ngân hàng trước.</li>
                <li><strong>Xử lý ngoài hệ thống:</strong> Nếu một đề nghị ứng lương đã được giải quyết trực tiếp bên ngoài, Kế toán nên chuyển phiếu sang trạng thái <strong>Xử lý ngoài BI</strong> để đóng phiếu và giữ số liệu thống kê 30 ngày không bị sai lệch.</li>
              </ul>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.5 · CHÍNH SÁCH PHÉP &amp; TỌA ĐỘ GPS</span>
                  <h3>2.5. Lưu ý khi Quản trị Nghỉ phép &amp; Báo cáo Chấm công</h3>
                </div>
              </div>
              <div class="hrp-note-group">
                <p class="hrp-note-subhead">Thứ tự thiết lập Quản trị nghỉ phép:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li>Trước khi nhập <strong>Phép tồn năm trước</strong> vào bảng Số dư đầu kỳ (tối đa <strong>300 dòng/lần</strong>), Admin bắt buộc phải cài đặt trước <strong>Ngày/tháng hết hạn phép chuyển năm</strong> trong mục Chính sách nghỉ phép.</li>
                  <li>Mọi con số ngày phép nhập vào hệ thống phải là bội số của <strong>0,5 ngày</strong> (ví dụ: 0, 0.5, 1, 1.5...). Số dư đầu kỳ chỉ khởi tạo cho nhân sự diện <strong>Chính thức</strong> hợp lệ đã có Ngày bắt đầu làm việc và Ngày lên chính thức.</li>
                  <li>Quy định giới hạn khi nhân sự tạo đơn vẫn giữ thống nhất: Nghỉ cưới / Nghỉ tang tối đa <strong>3 ngày/đơn</strong>; Nghỉ ốm / Nghỉ không lương tối đa <strong>7 ngày/đơn</strong>; tài khoản dùng chung không sử dụng quỹ phép cá nhân; người duyệt không được tự duyệt đơn của mình.</li>
                  <li>Khi xuất <strong>Báo cáo chốt công &amp; phép tháng</strong>, mỗi lần tải tối đa <strong>5.000 nhân sự</strong> (nếu vượt giới hạn, hãy lọc theo bộ phận hoặc từ khóa tìm kiếm).</li>
                </ul>
              </div>
              <div class="hrp-note-group">
                <p class="hrp-note-subhead">Cấu hình Tọa độ trước khi xem khoảng cách Chấm công:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li>Để báo cáo chấm công tính được khoảng cách xa/gần của nhân viên so với nơi làm việc, Admin cần khai báo trước tọa độ GPS của <strong>Trụ sở chính, Chi nhánh hoặc Dự án</strong>. Nếu chưa khai báo tọa độ tại thời điểm nhân viên chấm công, lượt chấm vẫn được lưu nhưng cột khoảng cách sẽ báo <code>Chưa cấu hình tọa độ</code>.</li>
                </ul>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.6 · KHÓA QUÁ HẠN &amp; ĐĂNG LẠI TIN</span>
                  <h3>2.6. Lưu ý khi Giao Báo cáo Công việc &amp; Đăng Tin Tuyển dụng</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Báo cáo công việc:</strong> Bản <em>Lưu nháp</em> chưa được tính là đã nộp. Khi quá thời hạn nộp, biểu mẫu sẽ tự khóa sang chế độ <strong>Chỉ xem</strong> (chỉ những bài đã nộp đúng hạn nhưng được người duyệt trả lại trạng thái <strong>Cần bổ sung / Từ chối</strong> mới được phép sửa và nộp lại).</li>
                <li><strong>Đăng lại tin tuyển dụng:</strong> Khi dùng tính năng <strong>Sao chép / Đăng lại</strong> từ một tin tuyển dụng cũ đã thu hồi, bạn cần đảm bảo mình vẫn đang giữ quyền trên dự án đó và Khu công nghiệp / Loại hình lao động gắn với tin cũ vẫn đang ở trạng thái hoạt động.</li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    `,
  },
  {
    id: 'tong-quan-hrp-bi-ios',
    aliases: ['tong-quan-hrp-bi-mobile'],
    pinRank: 2,
    compactReadingLayout: true,
    hideCategoryBadge: true,
    hideArticleSummary: true,
    jumpTargets: ['hrp-mobile-features', 'hrp-mobile-notes'],
    section: 'news',
    category: 'feature',
    title: 'Tổng Quan Chức năng & Lưu ý Sử dụng Ứng dụng HRP BI trên phiên bản Mobile',
    summary: 'Tổng quan 7 nhóm chức năng nghiệp vụ nhân sự – vận hành và 6 lưu ý quan trọng khi sử dụng ứng dụng di động HRP BI trên phiên bản Mobile (iOS & Android).',
    keywords: 'hrp bi mobile di dong ios android iphone ipad cham cong gps offline giai trinh nghi phep cccd qr ung luong qlda dashboard bao cao tuyen dung kcn nhac viec',
    date: '2026-11-15',
    minutes: 8,
    image: 'hrp-bi-ios.jpg',
    body: `
      <div class="web-bi-overview">
        <section class="web-bi-hero" aria-label="Giới thiệu ứng dụng di động HRP BI trên phiên bản Mobile">
          <div class="web-bi-hero-copy">
            <span class="web-bi-eyebrow"><span class="intro-dot" aria-hidden="true"></span> ỨNG DỤNG DI ĐỘNG NỘI BỘ · MOBILE (IOS &amp; ANDROID)</span>
            <p class="web-bi-lead"><strong>HRP BI</strong> là ứng dụng di động nội bộ trên <strong>điện thoại và máy tính bảng (iOS &amp; Android)</strong> của hệ thống <strong>HR Partner</strong>, hỗ trợ nhân viên văn phòng, chuyên viên tuyển dụng, quản lý dự án (QLDA), trưởng nhóm và ban lãnh đạo thực hiện các nghiệp vụ nhân sự – vận hành hằng ngày.</p>
            <p class="web-bi-sublead">Giao diện và các tính năng nghiệp vụ được đồng bộ thống nhất trên cả hai nền tảng <strong>iOS</strong> và <strong>Android</strong>; các mục menu và thao tác trong ứng dụng sẽ tự động hiển thị theo đúng vai trò và quyền hạn của từng tài khoản.</p>
            <div class="web-bi-cta-row">
              <a class="bi-action-btn bi-action-btn--ios" href="#bai-viet/cong-ho-tro-it">Hướng dẫn cài đặt iOS &amp; Android →</a>
              <a class="web-bi-url-chip" href="#bai-viet/gioi-thieu-web-bi">Xem nền tảng Web Mini BI →</a>
              <span class="web-bi-stat-pill">7 Nhóm chức năng · 6 Lưu ý quan trọng</span>
            </div>
          </div>
          <div class="web-bi-hero-visual">
            <img src="assets/hrp-bi-ios.jpg" alt="Minh họa ứng dụng di động HRP BI trên phiên bản Mobile (iOS và Android)" width="960" height="536" decoding="async">
          </div>
        </section>

        <nav class="bi-platform-nav" aria-label="Chuyển nhanh nội dung ứng dụng HRP BI Mobile">
          <a class="bi-platform-switch bi-platform-switch--ios" href="#bai-viet/tong-quan-hrp-bi-ios?jump=hrp-mobile-features" data-jump-target="hrp-mobile-features">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 5.5h3"/><path d="M11 18.5h2"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>1. Tổng quan Các Chức năng Chính</strong>
              <small>Đăng nhập, Chấm công, Nghỉ phép, Hồ sơ NLĐ, Ứng lương, Dashboard &amp; Báo cáo</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">7 nhóm ↓</span>
          </a>
          <a class="bi-platform-switch bi-platform-switch--notes" href="#bai-viet/tong-quan-hrp-bi-ios?jump=hrp-mobile-notes" data-jump-target="hrp-mobile-notes">
            <span class="bi-platform-switch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
            </span>
            <span class="bi-platform-switch-copy">
              <strong>2. Các Lưu ý Quan trọng Khi Sử dụng</strong>
              <small>Quyền thiết bị, GPS/Offline, Giải trình, Cấp mới CCCD, Ứng lương &amp; Báo cáo</small>
            </span>
            <span class="bi-platform-switch-go" aria-hidden="true">6 lưu ý ↓</span>
          </a>
        </nav>

        <section class="web-bi-group web-bi-group--bi" id="hrp-mobile-features" tabindex="-1">
          <div class="web-bi-group-head">
            <span class="bi-platform-badge bi-platform-badge--ios">PHẦN 1 · NGHIỆP VỤ NHÂN SỰ &amp; VẬN HÀNH DI ĐỘNG</span>
            <h2>1. Tổng quan Các Chức năng Chính</h2>
            <p>Hệ thống chức năng được đồng bộ trên cả hai nền tảng iOS và Android, hiển thị linh hoạt theo đúng phân quyền của từng tài khoản.</p>
          </div>

          <div class="web-bi-grid">
            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.1 · QUICK SIGN-IN &amp; THEME</span>
                  <h3>1.1. Đăng nhập nhanh &amp; Cá nhân hóa</h3>
                </div>
              </div>
              <div class="hrp-subgrid hrp-subgrid--2">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Đăng nhập bằng Email hoặc Mã nhân viên</h4>
                  <p>Cho phép bật tùy chọn <strong>Lưu tài khoản đã đăng nhập</strong> để lưu nhiều tài khoản trên máy và chuyển đổi/đăng nhập nhanh chỉ với 1 chạm.</p>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Đổi tông màu giao diện</h4>
                  <p>Người dùng có thể bấm nút <strong>Menu</strong> (góc trên bên phải) để đổi giữa <strong>5 bảng màu giao diện</strong> khác nhau theo sở thích.</p>
                </div>
              </div>
            </section>

            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.2"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.2 · MÀN HÌNH MẶC ĐỊNH SAU ĐĂNG NHẬP</span>
                  <h3>1.2. Chấm công, Giải trình &amp; Nghỉ phép</h3>
                </div>
              </div>
              <p class="web-bi-mod-lead">Đây là màn hình mở ra mặc định ngay sau khi đăng nhập, bao gồm các tab chức năng:</p>
              <div class="hrp-subgrid hrp-subgrid--3">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Chấm công</h4>
                  <ul class="web-bi-list">
                    <li>Chụp ảnh trực tiếp kèm tọa độ GPS và giờ chuẩn của hệ thống.</li>
                    <li>Tích hợp sẵn <strong>4 chế độ làm đẹp ảnh chân dung</strong> (Gốc, Tự nhiên, Sáng mịn, Hồng hào) và ô ghi chú nhanh khi cần.</li>
                    <li><strong>Hỗ trợ chấm công khi mất mạng (ngoại tuyến):</strong> Ảnh và thời điểm chấm công được lưu vào hàng đợi trên máy và tự động gửi lên hệ thống ngay khi điện thoại có kết nối mạng trở lại.</li>
                    <li>Tra cứu lịch sử chấm công theo từng ngày và xuất tệp báo cáo chấm công.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Giải trình &amp; Duyệt giải trình</h4>
                  <ul class="web-bi-list">
                    <li>Nhân sự kiểm tra các mốc giờ trong ngày bị thiếu chấm hoặc chấm ngoài khung giờ cho phép để gửi giải trình hợp thức hóa công.</li>
                    <li>Cấp quản lý nhận đơn trong tab <strong>Duyệt giải trình</strong> để phê duyệt hoặc từ chối kèm ghi chú phản hồi.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Nghỉ phép &amp; Duyệt nghỉ</h4>
                  <ul class="web-bi-list">
                    <li>Theo dõi quỹ phép năm hiện có và số phép tồn chuyển từ năm trước.</li>
                    <li>Tạo đơn xin nghỉ chọn chi tiết từng ngày và buổi (<strong>Cả ngày, Buổi sáng, Buổi chiều</strong>) theo 5 loại nghỉ: <em>Phép năm, Nghỉ ốm, Nghỉ cưới, Nghỉ tang, Nghỉ không lương</em>; cho phép rút lại đơn khi đang chờ duyệt.</li>
                    <li>Cấp quản lý xử lý phê duyệt, từ chối hoặc hủy đơn nghỉ đã duyệt trong hộp thư <strong>Duyệt nghỉ</strong>.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="web-bi-module web-bi-module--wide">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.3 · WORKFORCE, ONBOARDING &amp; SALARY ADVANCE</span>
                  <h3>1.3. Quản lý Nhân sự, Cấp mới NLĐ &amp; Ứng lương (QLDA)</h3>
                </div>
              </div>
              <div class="hrp-subgrid hrp-subgrid--2">
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Danh sách Người lao động (NLĐ)</h4>
                  <ul class="web-bi-list">
                    <li>Xem và tìm kiếm hồ sơ NLĐ theo phạm vi được phân quyền (<strong>Đang quản lý, Do tôi tuyển, Theo nhóm, Hồ sơ đã tải lên, Tất cả</strong>).</li>
                    <li>Lọc theo dự án, trạng thái làm việc, xem chi tiết thông tin/giấy tờ đính kèm và xuất danh sách NLĐ.</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Cấp mới hồ sơ NLĐ</h4>
                  <ul class="web-bi-list">
                    <li>Nhập danh sách một hoặc nhiều NLĐ cùng lúc trong một lần gửi.</li>
                    <li><strong>Quét mã QR trên thẻ CCCD/Căn cước</strong> bằng camera để tự động điền số CCCD, họ tên, ngày sinh, giới tính, quê quán và ngày cấp.</li>
                    <li>Tự động kiểm tra và cảnh báo nếu số CCCD đã tồn tại trên hệ thống.</li>
                    <li>Đính kèm ảnh chân dung, CCCD mặt trước/mặt sau, thẻ an toàn và hợp đồng lao động (hỗ trợ chụp/chọn nhiều trang ảnh hợp đồng để ứng dụng tự gộp thành 1 file PDF).</li>
                  </ul>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Sửa trực tiếp hồ sơ NLĐ</h4>
                  <p>Dành cho nhân sự được phân quyền cập nhật thông tin cá nhân, thông tin <strong>60 ngân hàng nội địa</strong> và trạng thái làm việc (<strong>Đang làm / Đã nghỉ</strong>).</p>
                </div>
                <div class="hrp-subcard">
                  <h4 class="hrp-subcard-title">Ứng lương (dành riêng cho Quản lý dự án - QLDA)</h4>
                  <ul class="web-bi-list">
                    <li>Hệ thống tự động kiểm tra điều kiện ứng lương của từng NLĐ trong dự án và hiển thị thống kê tổng số lần/số tiền NLĐ đã ứng trong <strong>30 ngày gần nhất</strong>.</li>
                    <li>Tạo phiếu yêu cầu ứng lương (<strong>Tiền mặt</strong> hoặc <strong>Chuyển khoản</strong>), nhắn tin trao đổi trực tiếp trên phiếu yêu cầu và tải ảnh chứng từ đối chiếu giải ngân.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.4 · DASHBOARD &amp; CCCD VERIFICATION</span>
                  <h3>1.4. Tổng quan Số liệu (Dashboard) &amp; Chuẩn hóa CCCD</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li><strong>Tổng quát &amp; Theo nhóm:</strong> Theo dõi số lượng nhân sự, tốc độ tuyển dụng và tỷ trọng phân bổ theo từng kỳ thời gian hoặc đi sâu vào kết quả chi tiết của từng nhóm.</li>
                <li><strong>Chuẩn hóa thông tin NLĐ:</strong> Rà soát các hồ sơ có thông tin nhập tay bị lệch so với mã QR trên ảnh CCCD, ảnh mờ không đọc được QR hoặc hồ sơ trùng CCCD để chuẩn hóa lại chỉ với vài thao tác.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Tổng quát &amp; Theo nhóm</span><span>Đối chiếu QR CCCD</span><span>Lọc trùng hồ sơ</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.5 · PERIODIC WORK REPORTS</span>
                  <h3>1.5. Báo cáo Công việc Định kỳ</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li>Quản lý các kỳ báo cáo được giao theo <strong>Ngày / Tuần / Tháng</strong> qua 4 khu vực: <strong>Cần nộp, Lịch sử, Chờ duyệt</strong> và <strong>Tổng hợp báo cáo</strong>.</li>
                <li>Hỗ trợ <strong>Lưu nháp</strong> khi đang làm dở và <strong>Nộp báo cáo</strong> khi hoàn tất; cấp quản lý có thể phê duyệt hoặc trả lại để nhân sự bổ sung, đồng thời theo dõi tỷ lệ hoàn thành/quá hạn của đội ngũ.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Ngày · Tuần · Tháng</span><span>Lưu nháp &amp; Nộp</span><span>Theo dõi tiến độ</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.6 · INTERNAL JOB ORDERS</span>
                  <h3>1.6. Tin Tuyển dụng Nội bộ</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li>Tra cứu danh sách các đơn hàng tuyển dụng đang mở, lọc nhanh theo <strong>Khu công nghiệp (KCN)</strong> và <strong>Hình thức lao động</strong>.</li>
                <li>Xem chi tiết thông tin nhà máy, môi trường làm việc, mức thu nhập dự kiến, các khoản phụ cấp, đơn giá ca ngày/đêm/Chủ nhật/Lễ, yêu cầu tuyển chọn và danh sách giấy tờ hồ sơ cần chuẩn bị cho ứng viên.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Lọc KCN &amp; Hình thức</span><span>Đơn giá ca &amp; Phụ cấp</span><span>Hồ sơ ứng viên</span>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num">MỤC 1.7 · ALERTS &amp; PERSONAL REMINDERS</span>
                  <h3>1.7. Thông báo Hệ thống &amp; Chuông Nhắc việc Cá nhân</h3>
                </div>
              </div>
              <ul class="web-bi-list">
                <li><strong>Thông báo trực tuyến:</strong> Nhận thông báo mới ngay trong ứng dụng; chạm vào thông báo sẽ chuyển thẳng đến màn hình công việc cần xử lý.</li>
                <li><strong>Nhắc việc cá nhân (biểu tượng hình chuông góc trên):</strong> Cho phép tự tạo lịch hẹn giờ nhắc việc (<strong>Hàng ngày</strong> hoặc <strong>1 lần</strong>) với nhiều kiểu âm báo để tránh quên chấm công hoặc quên nộp báo cáo.</li>
              </ul>
              <div class="web-bi-tags" aria-hidden="true">
                <span>Điều hướng 1 chạm</span><span>Hẹn giờ Hàng ngày / 1 lần</span><span>Tùy chọn âm báo</span>
              </div>
            </section>
          </div>
        </section>

        <section class="web-bi-group web-bi-group--notes" id="hrp-mobile-notes" tabindex="-1">
          <div class="web-bi-group-head">
            <span class="bi-platform-badge--notes">PHẦN 2 · QUY ĐỊNH &amp; LƯU Ý VẬN HÀNH BẮT BUỘC</span>
            <h2>2. Các Lưu ý Quan trọng Khi Sử dụng</h2>
            <p>Nắm rõ các yêu cầu về quyền thiết bị, đồng bộ ngoại tuyến và quy tắc dữ liệu để thao tác chính xác ngay từ lần đầu.</p>
          </div>

          <div class="web-bi-grid">
            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.1 · QUYỀN TRUY CẬP TRÊN ĐIỆN THOẠI</span>
                  <h3>2.1. Cài đặt Quyền trên Điện thoại</h3>
                </div>
              </div>
              <div class="hrp-callout hrp-callout--important">
                <span class="hrp-callout-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  IMPORTANT
                </span>
                <p class="hrp-callout-lead">Trong lần đầu sử dụng các tính năng liên quan, bạn cần bấm <strong>Cho phép</strong> đủ 4 quyền trên điện thoại (iOS / Android):</p>
                <ul class="web-bi-list">
                  <li><strong>Camera:</strong> Để chụp ảnh chấm công, quét QR CCCD và chụp tài liệu hồ sơ.</li>
                  <li><strong>Vị trí (GPS) khi dùng ứng dụng:</strong> Bắt buộc để xác thực địa điểm chấm công.</li>
                  <li><strong>Thư viện ảnh / Bộ nhớ tệp:</strong> Để tải ảnh chân dung, CCCD, hợp đồng và lưu tệp xuất ra.</li>
                  <li><strong>Thông báo:</strong> Để tính năng Nhắc việc đổ chuông đúng giờ ngay cả khi đóng màn hình.</li>
                </ul>
              </div>
              <p class="hrp-note-foot">Ứng dụng tương thích trên cả <strong>iOS (từ iOS 16.0 trở lên, cài qua TestFlight)</strong> và <strong>Android (tải trên Google Play)</strong>, luôn hiển thị ở <strong>chế độ nền sáng</strong> (kể cả khi điện thoại đang bật chế độ tối) để đảm bảo ảnh chụp giấy tờ và bảng biểu luôn rõ nét.</p>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.2 · GPS, GIỜ CHUẨN &amp; OFFLINE</span>
                  <h3>2.2. Lưu ý khi Chấm công</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Kiểm tra nhãn &ldquo;Giờ chuẩn&rdquo; và tín hiệu GPS:</strong> Trước khi chụp chấm công, nên đứng ở khu vực thoáng sóng để sai số GPS thấp và kiểm tra nhãn giờ đang báo <code>&ldquo;Giờ chuẩn&rdquo;</code>. Nếu điện thoại vừa tắt nguồn khởi động lại hoặc bị lệch giờ, hãy chạm vào nhãn giờ trên màn hình để đồng bộ lại giờ chuẩn rồi mới chấm công.</li>
                <li><strong>Giới hạn của chấm công ngoại tuyến (khi mất mạng):</strong>
                  <ul class="web-bi-sublist">
                    <li>Ảnh sau khi chụp nếu để chờ <strong>quá 24 giờ</strong> mới gửi hoặc lượt chấm công ngoại tuyến nằm chờ <strong>quá 7 ngày</strong> không có mạng để đồng bộ sẽ bị hệ thống từ chối — khi đó bạn bắt buộc phải chụp chấm công lượt mới.</li>
                    <li>Không gỡ cài đặt ứng dụng hoặc đăng xuất khi trên màn hình vẫn còn lượt chấm công báo <code>&ldquo;Đang chờ gửi&rdquo;</code> hoặc <code>&ldquo;Chờ mạng / Thử lại&rdquo;</code>.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.3 · QUY TẮC ĐƠN TỪ &amp; PHÊ DUYỆT</span>
                  <h3>2.3. Lưu ý khi Giải trình Chấm công &amp; Xin Nghỉ phép</h3>
                </div>
              </div>
              <div class="hrp-note-group">
                <p class="hrp-note-subhead">Đối với Giải trình chấm công:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li>Chỉ gửi được giải trình cho ngày hôm nay hoặc các ngày trước đó (không gửi trước cho ngày tương lai) và chỉ áp dụng cho các mốc thực sự bị thiếu chấm hoặc nằm ngoài khung giờ hợp lệ.</li>
                  <li>Mỗi mốc chấm công trong ngày chỉ được gửi giải trình <strong>1 lần duy nhất</strong> (độ dài lý do từ 3 đến 500 ký tự).</li>
                </ul>
              </div>
              <div class="hrp-note-group">
                <p class="hrp-note-subhead">Đối với Xin nghỉ phép:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li>Ngày nghỉ phải thuộc năm hiện hành và không trùng với đơn đang chờ duyệt hoặc đã duyệt.</li>
                  <li>Trong cùng 1 ngày, chỉ tách riêng <strong>Buổi sáng + Buổi chiều</strong> khi đăng ký 2 loại nghỉ khác nhau; nếu cùng 1 loại nghỉ cho cả ngày thì chọn <strong>Cả ngày</strong>.</li>
                  <li><strong>Giới hạn số ngày tối đa trên mỗi đơn:</strong> Nghỉ tang / Nghỉ cưới tối đa <strong>3 ngày/đơn</strong>; Nghỉ ốm / Nghỉ không lương tối đa <strong>7 ngày/đơn</strong>.</li>
                  <li>Nếu số dư <strong>Phép năm</strong> không đủ cho tổng số ngày chọn, bạn cần đổi phần ngày vượt sang <strong>Nghỉ không lương</strong> hoặc loại nghỉ phù hợp khác.</li>
                </ul>
              </div>
              <p class="hrp-note-foot"><strong>Lưu ý phân quyền:</strong> Tài khoản dùng chung (ví dụ tài khoản chung của bộ phận) không áp dụng tính năng xin nghỉ phép cá nhân. Cấp quản lý không thể tự duyệt giải trình hoặc đơn nghỉ của chính mình.</p>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2"/><path d="M15 12h2"/><path d="M7 16h10"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.4 · HỒ SƠ, TỆP ĐÍNH KÈM &amp; CCCD</span>
                  <h3>2.4. Lưu ý khi Cấp mới &amp; Cập nhật Hồ sơ NLĐ</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Giữ nguyên bản nháp khi chuyển tab:</strong> Khi đang nhập dở danh sách ở mục <em>Cấp mới</em>, bạn có thể chuyển sang mục <em>Tin tuyển dụng</em> hoặc <em>Nhân sự</em> để tra cứu rồi quay lại mà không bị mất dữ liệu đang nhập (bản nháp chỉ xóa khi gửi thành công hoặc đăng xuất).</li>
                <li><strong>Định dạng và dung lượng tệp hồ sơ:</strong> Mỗi tệp đính kèm tối đa <strong>10 MB</strong> (chấp nhận ảnh JPG, PNG, WEBP hoặc tệp PDF). Khi chụp hợp đồng nhiều trang, hãy chọn nhiều ảnh cùng lúc để ứng dụng tự gom thành 1 tệp PDF gọn nhẹ.</li>
                <li><strong>Xử lý hồ sơ trùng hoặc đã nghỉ việc:</strong>
                  <ul class="web-bi-sublist">
                    <li>Số CCCD bắt buộc gồm đúng <strong>12 chữ số</strong> (hoặc CMND 9 số) và không được trùng nhau giữa các dòng trong cùng một lần nhập.</li>
                    <li>Nếu một số CCCD đang có hồ sơ ở trạng thái <strong>Đang làm việc</strong>, cần chuyển hồ sơ cũ sang trạng thái <strong>Đã nghỉ</strong> (bắt buộc điền đủ <em>Ngày nghỉ</em> và <em>Lý do nghỉ</em>) trước khi cấp mới đợt làm việc tiếp theo. Hồ sơ đã kết thúc không thể mở lại mà cần tạo đợt làm việc mới.</li>
                    <li>Nếu vừa tải ảnh lên và bấm <strong>Lưu</strong> ngay mà nhận thông báo tệp đang đồng bộ, chỉ cần chờ vài giây rồi bấm <strong>Lưu</strong> lại (không lo bị tạo trùng hồ sơ).</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.5 · DÀNH CHO QUẢN LÝ DỰ ÁN (QLDA)</span>
                  <h3>2.5. Lưu ý khi Yêu cầu Ứng lương (dành cho QLDA)</h3>
                </div>
              </div>
              <div class="hrp-callout hrp-callout--warning">
                <span class="hrp-callout-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
                  WARNING
                </span>
                <p class="hrp-callout-lead">Điều kiện bắt buộc để NLĐ được ứng lương &amp; chuyển khoản:</p>
                <ul class="web-bi-list web-bi-list--notes">
                  <li><strong>Điều kiện chung:</strong> NLĐ phải đang ở trạng thái <strong>Đang làm việc</strong> (không phải <em>Đã nghỉ</em> hay <em>Chờ xác nhận đi làm</em>), không thuộc nguồn tuyển Vendor, đã có ảnh chân dung trên hồ sơ, không bị vướng trùng CCCD chưa chuẩn hóa và không đang mở làm việc cùng lúc ở nhiều dự án.</li>
                  <li><strong>Điều kiện nhận qua Chuyển khoản:</strong> Hồ sơ NLĐ phải có đầy đủ tên ngân hàng, số tài khoản và tên chủ tài khoản phải <strong>trùng khớp chính chủ</strong> với họ tên NLĐ. Nếu dùng tài khoản người thân hoặc thiếu thông tin ngân hàng, bạn bắt buộc chọn hình thức <strong>Tiền mặt</strong> hoặc cập nhật lại tài khoản ngân hàng chính chủ trước khi gửi yêu cầu.</li>
                </ul>
              </div>
            </section>

            <section class="web-bi-module">
              <div class="web-bi-mod-head">
                <span class="web-bi-mod-icon web-bi-mod-icon--notes" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
                </span>
                <div class="web-bi-mod-titles">
                  <span class="web-bi-mod-num web-bi-mod-num--notes">LƯU Ý 2.6 · THỜI HẠN &amp; NỘP LẠI BÁO CÁO</span>
                  <h3>2.6. Lưu ý khi Nộp Báo cáo Công việc</h3>
                </div>
              </div>
              <ul class="web-bi-list web-bi-list--notes">
                <li><strong>Lưu nháp chưa phải là Đã nộp:</strong> Nút <em>Lưu nháp</em> chỉ giúp giữ lại nội dung đang viết dở. Bạn cần bấm <strong>Nộp báo cáo</strong> trước thời hạn quy định.</li>
                <li><strong>Khóa biểu mẫu khi quá hạn:</strong> Ngay khi quá hạn nộp, kỳ báo cáo chưa nộp (kể cả đang có bản nháp) sẽ tự động chuyển sang chế độ <strong>Chỉ xem</strong> và không thể gửi đi được nữa.</li>
                <li>Trường hợp báo cáo đã nộp nhưng được người duyệt đánh giá <strong>Cần bổ sung / Từ chối</strong>, bạn vẫn có thể mở lại biểu mẫu để chỉnh sửa và nộp lại.</li>
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
