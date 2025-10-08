This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

----

1. <type> (Loại commit - Bắt buộc)
Đây là phần quan trọng nhất, cho biết loại thay đổi bạn đã thực hiện. Một số type phổ biến nhất là:

feat: Thêm một tính năng mới (a new feature).

fix: Sửa một lỗi (a bug fix).

chore: Các công việc vặt không ảnh hưởng đến code chạy (ví dụ: cập nhật dependencies, cấu hình build).

docs: Thay đổi liên quan đến tài liệu (documentation).

style: Thay đổi về định dạng code (dấu chấm phẩy, thụt đầu dòng,...) không ảnh hưởng đến logic.

refactor: Tái cấu trúc (refactor) code mà không sửa lỗi hay thêm tính năng mới.

test: Thêm hoặc sửa các bài test.

2. <scope> (Phạm vi - Tùy chọn)
Phần này chỉ rõ nơi thay đổi đã diễn ra trong dự án. Ví dụ: api, auth, ui, database.

3. <subject> (Tiêu đề - Bắt buộc)
Đây là một mô tả ngắn gọn về thay đổi.

Viết ở thì hiện tại, dạng mệnh lệnh (ví dụ: "add", "fix", "change" thay vì "added", "fixed", "changed").

Không viết hoa chữ cái đầu.

Không kết thúc bằng dấu chấm.

4. <body> (Nội dung - Tùy chọn)
Nếu cần giải thích chi tiết hơn, bạn viết ở đây. Phần này giải thích tại sao bạn thực hiện thay đổi và cách nó hoạt động, cách nó khác so với trước đây.

5. <footer> (Chân trang - Tùy chọn)
Dùng để đánh dấu các BREAKING CHANGE (thay đổi gây ảnh hưởng đến các phần khác) hoặc để đóng các issue trên GitHub/Jira (ví dụ: Closes #123).

---
Một commit đơn giản, chỉ có tiêu đề.

feat(auth): add login with email and password

Ví dụ 2: Sửa lỗi hiển thị trên UI
Một commit có cả body và footer để giải thích rõ hơn và đóng một issue.

[fix(ui): correct button alignment on mobile

The login button was misaligned on screen widths below 640px
due to a conflicting flexbox property. This commit resolves the
alignment issue by applying a specific style for mobile views.

Closes #78]

Ví dụ 3: Cập nhật thư viện (chore)
Một commit cho công việc bảo trì.

chore: update project dependencies to latest versions

Ví dụ 4: Một thay đổi lớn (Breaking Change)
Một commit refactor có thể gây ảnh hưởng đến các module khác.

refactor(api): change user ID from integer to UUID

BREAKING CHANGE: The user ID format has been changed from an auto-incrementing
integer to a UUID string. All services that query users by ID
must be updated to handle the new string format.