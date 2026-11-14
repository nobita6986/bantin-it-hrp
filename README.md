# Bản tin IT

Website HTML tĩnh của phòng IT gồm **Tin mới** và **Tài liệu và HDSD**. Mã HTML, CSS, JavaScript, phông chữ và hình minh họa nằm trong `dist/`. Mở `dist/index.html` bằng trình duyệt để xem ngay. Website cũng có thể chạy trên máy chủ tệp tĩnh với `dist/` là thư mục gốc.

## Thêm hoặc sửa bài viết

Chỉnh `dist/assets/articles.js`. Mỗi bài có một `id` duy nhất gồm chữ thường, số và dấu gạch ngang. Giữ nguyên `id` khi sửa bài để liên kết `#bai-viet/<id>` tiếp tục hoạt động.

- Với **Tin mới**, đặt `section: 'news'` và chọn `category` là `update` (Bản cập nhật), `feature` (Tính năng mới) hoặc `notice` (Thông báo).
- Với **Tài liệu và HDSD**, đặt `section: 'docs'` và chọn `category` là `account` (Tài khoản), `tools` (Công cụ) hoặc `security` (An toàn thông tin).
- Điền `title`, `summary`, `date` theo dạng `YYYY-MM-DD` và `minutes` là thời lượng đọc tính bằng phút. Viết nội dung đã biên tập trong `body` bằng HTML đơn giản, chẳng hạn `<p>`, `<h2>`, `<ul>` và `<ol>`.
- Để thêm ảnh bìa, lưu ảnh trong `dist/assets/` và điền tên tệp vào `image`. Đặt `featured: true` cho tin muốn đưa lên đầu trang. Nếu có nhiều tin được đánh dấu, website chọn tin có ngày mới nhất.
- Các bài ban đầu có `sample: true` và hiện nhãn minh họa. Bỏ trường này khi thay bằng nội dung đã được phòng IT duyệt.
- Với khung **Các Phiên Bản Update App BI trên iPhone** ở đầu trang, chỉnh mảng `biIphoneApp.updates` trong `dist/assets/articles.js` (`version`, `build`, `date`, `summary`, `changes` và đặt `latest: true` cho bản mới nhất).

Hình bìa WebP trong `dist/assets/` được tạo bằng ImageGen với chủ đề hỗ trợ IT, phê duyệt yêu cầu, bảo trì hệ thống và tra cứu yêu cầu. Phông Inter đi kèm giấy phép trong `dist/assets/Inter-OFL.txt`.
