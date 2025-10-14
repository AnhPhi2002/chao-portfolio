// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiLogoInstagram, BiLogoTiktok, BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Content } from "@/type/content";

export const content: Record<"en" | "vi" | "ja", Content> = {
  en: {
    nav: [
      { link: "#home", icon: TbSmartHome },
      { link: "#skills", icon: BiUser },
      { link: "#services", icon: RiServiceLine },
      { link: "#projects", icon: RiProjectorLine },
      { link: "#contact", icon: MdOutlinePermContactCalendar },
    ],

    hero: {
      title: "Web Developer",
      firstName: "ANH",
      LastName: "PHI",
      btnText: "My CV",
      image:
        "https://res.cloudinary.com/dlfzkbtie/image/upload/v1759912383/FM100_T_Y_N_180_5_rhjwu3.webp",
      cvLink: "https://vietcv.io/nguyen-hoang-anh-phi",
      hero_content: [
        { count: "FPT University", text: "Graduated" },
        { count: "6+", text: "Completed system-focused projects" },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "MY TOP SKILLS",
      skills_content: [
        {
          name: "C#",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/net.png",
        },
        {
          name: "Node js",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/node.png",
        },
        {
          name: "React js",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/react.png",
        },
        {
          name: "Next js",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/next.jpg",
        },
        {
          name: "My Sql",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/sql.png",
        },
        {
          name: "MS sql server",
          para: "Lorem ipsum text dummy",
          logo: "/assets/images/Skills/ssms.png",
        },
      ],
      icon: MdArrowForward,
    },

    services: {
      title: "Services",
      subtitle: "WHAT I OFFER",
      service_content: [
        {
          title: "Full-stack Web Development",
          para: "From frontend design to backend APIs, I deliver complete business solutions.",
          logo: "/assets/images/Services/logo1.png",
        },
        {
          title: "Database Design & Modeling",
          para: "Schema design, indexing, stored procedures",
          logo: "/assets/images/Services/logo2.png",
        },
        {
          title: "DevOps Integration",
          para: "Setup CI/CD pipelines, performance tuning, testing, and system security",
          logo: "/assets/images/Services/logo3.png",
        },
      ],
    },

    projects: {
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",

      title: "Projects",
      subtitle: "MY CREATIONS",
      project_content: [
        {
          title: "Client Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004800/img3_skqlb7.png",
          githublink: "https://github.com/mkang10/funkytown-web-client",
          demo: "https://funkytown-web-client.vercel.app/",
          description: `
Customer-facing e-commerce site with features:
- Edit profile, add/edit address
- Product recommendations
- Search, view & filter products
- Add/remove favorites
- Add products to cart & edit cart
- Checkout & place orders
- Submit feedback
- Request exchange/return
- Chat with AI chatbot
          `,
        },
        {
          title: "Manager Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004805/img4_zvjazo.png",
          githublink: "https://github.com/mkang10/funkytown-web-manager",
          demo: "https://funkytown-web-manager.vercel.app/",

          description: `
Unified dashboard for managers & staff:
- Create import requests
- Manage revenue reports
- Track customer, import & dispatch orders
- Handle return/exchange receipts
- (Manager only) Process orders for customers, dispatch & imports
- (Staff only) Execute order, dispatch & import tasks
          `,
        },
        {
          title: "Owner Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004615/img2_zpnxqy.png",
          githublink: "https://github.com/mkang10/funkytown-web-owner",
          demo: "https://funkytown-web-owner.vercel.app/",
          description: `
Full system administration portal for owners:
- View, create & update products
- Import stock to central warehouse
- Manage categories (add/edit)
- Track product quantities & revenue
- Monitor import, dispatch & transfer requests
          `,
        },
      ],
    },

    testimonials: {
      title: "Testimonials",
      subtitle: "MY CLIENT REVIEWS",
      testimonials_content: [
        {
          review:
            "“Professional, Dedicated, and Highly Efficient. We deeply appreciate Cuong's work ethic and look forward to working with him on future projects.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
        {
          review:
            "“Professional, Dedicated, and Highly Efficient. We deeply appreciate Cuong's work ethic and look forward to working with him on future projects.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
        {
          review:
            "“Professional, Dedicated, and Highly Efficient. We deeply appreciate Cuong's work ethic and look forward to working with him on future projects.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
      ],
    },

    hireme: {
      title: "Hire Me",
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
      cvLink:
        "https://www.topcv.vn/xem-cv/WlgOV1tRXwFVUlwEVVBcAVZaAglWBVJUUQdVDQa478",
      subtitle: "FOR YOUR PROJECTS",
      para: "Looking for a developer who can build complete systems from scratch? I'm ready to bring your ideas to life.",
      btnText: "My CV",
    },

    contact: {
      title: "Contact Me",
      subtitle: "GET IN TOUCH",
      social_media: [
        {
          text: "masonkang1212@gmail.com",
          icon: GrMail,
          link: "mailto:masonkang1212@gmail.com",
        },
        { text: "+84 937 289 384", icon: MdCall, link: "tel:+84937289384" },
        {
          text: "kang_dev12",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/kang_dev12/",
        },
        {
          text: "mason.kang8",
          icon: BiLogoTiktok,
          link: "https://www.tiktok.com/@mason.kang8/",
        },
      ],
      successMessage: "Email sent successfully!",
      errorMessage: "Error: ",
      form: {
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        btnText: "Send Message",
      },
    },

    footer: {
      text: "All © Copy Right Reserved 2025",
    },
  },

  vi: {
    nav: [
      { link: "#home", icon: TbSmartHome },
      { link: "#skills", icon: BiUser },
      { link: "#services", icon: RiServiceLine },
      { link: "#projects", icon: RiProjectorLine },
      { link: "#contact", icon: MdOutlinePermContactCalendar },
    ],

    hero: {
      title: "Lập trình viên Web",
      firstName: "ANH",
      LastName: "PHI",
      btnText: "Xem CV của tôi",
      image:
        "https://res.cloudinary.com/dlfzkbtie/image/upload/v1759912383/FM100_T_Y_N_180_5_rhjwu3.webp",
      cvLink: "https://vietcv.io/nguyen-hoang-anh-phi",
      hero_content: [
        { count: "Đại học FPT", text: "Tốt nghiệp" },
        { count: "6+", text: "Dự án chuyên về hệ thống đã hoàn thành" },
      ],
    },

    skills: {
      title: "Kỹ Năng",
      subtitle: "KỸ NĂNG NỔI BẬT",
      skills_content: [
        {
          name: "C#",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/net.png",
        },
        {
          name: "Node js",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/node.png",
        },
        {
          name: "React js",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/react.png",
        },
        {
          name: "Next js",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/next.jpg",
        },
        {
          name: "My Sql",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/sql.png",
        },
        {
          name: "MS sql server",
          para: "Văn bản giả lập Lorem ipsum",
          logo: "/assets/images/Skills/ssms.png",
        },
      ],
      icon: MdArrowForward,
    },

    services: {
      title: "Dịch Vụ",
      subtitle: "TÔI CUNG CẤP",
      service_content: [
        {
          title: "Phát triển Web Full-stack",
          para: "Từ thiết kế giao diện đến API backend, tôi cung cấp giải pháp hoàn chỉnh cho doanh nghiệp.",
          logo: "/assets/images/Services/logo1.png",
        },
        {
          title: "Thiết kế & Mô hình hóa Cơ sở dữ liệu",
          para: "Thiết kế schema, indexing, stored procedures",
          logo: "/assets/images/Services/logo2.png",
        },
        {
          title: "Tích hợp DevOps",
          para: "Cài đặt CI/CD, tối ưu hiệu năng, kiểm thử và bảo mật hệ thống",
          logo: "/assets/images/Services/logo3.png",
        },
      ],
    },

    projects: {
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",

      title: "Dự Án",
      subtitle: "SẢN PHẨM CỦA TÔI",
      project_content: [
        {
          title: "Client Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004800/img3_skqlb7.png",
          githublink: "https://github.com/mkang10/funkytown-web-client",
          demo: "https://funkytown-web-client.vercel.app/",
          description: `
Website thương mại điện tử cho khách hàng:
- Chỉnh sửa hồ sơ, thêm/sửa địa chỉ
- Gợi ý sản phẩm
- Tìm kiếm, xem & lọc sản phẩm
- Thêm/xóa yêu thích
- Thêm sản phẩm vào giỏ & chỉnh sửa giỏ hàng
- Thanh toán & đặt hàng
- Gửi đánh giá
- Yêu cầu đổi/trả hàng
- Chat với chatbot AI
          `,
        },
        {
          title: "Manager Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004805/img4_zvjazo.png",
          githublink: "https://github.com/mkang10/funkytown-web-manager",
          demo: "https://funkytown-web-manager.vercel.app/",

          description: `
Bảng điều khiển chung cho quản lý & nhân viên:
- Tạo yêu cầu nhập hàng
- Quản lý báo cáo doanh thu
- Theo dõi đơn hàng khách, đơn nhập & xuất
- Xử lý phiếu trả/đổi hàng
- (Chỉ Quản lý) Xử lý đơn cho khách, xuất & nhập hàng
- (Chỉ Nhân viên) Thực thi đơn hàng, xuất & nhập
          `,
        },
        {
          title: "Owner Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004615/img2_zpnxqy.png",
          githublink: "https://github.com/mkang10/funkytown-web-owner",
          demo: "https://funkytown-web-owner.vercel.app/",
          description: `
Cổng quản trị hệ thống cho chủ cửa hàng:
- Xem, tạo & cập nhật sản phẩm
- Nhập kho về kho trung tâm
- Quản lý danh mục (thêm/sửa)
- Theo dõi số lượng sản phẩm & doanh thu
- Giám sát yêu cầu nhập, xuất & chuyển kho
          `,
        },
      ],
    },

    testimonials: {
      title: "Đánh Giá",
      subtitle: "NHẬN XÉT TỪ KHÁCH HÀNG",
      testimonials_content: [
        {
          review:
            "“Chuyên nghiệp, tận tâm và hiệu quả, chúng tôi đánh giá rất cao tinh thần làm việc của Cường và chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
        {
          review:
            "“Chuyên nghiệp, tận tâm và hiệu quả, chúng tôi đánh giá rất cao tinh thần làm việc của Cường và chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
        {
          review:
            "“Chuyên nghiệp, tận tâm và hiệu quả, chúng tôi đánh giá rất cao tinh thần làm việc của Cường và chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới.”",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
      ],
    },

    hireme: {
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",

      cvLink:
        "https://www.topcv.vn/xem-cv/WlgOV1tRXwFVUlwEVVBcAVZaAglWBVJUUQdVDQa478",
      title: "Là Chìa Khoá",
      subtitle: "CHO DỰ ÁN CỦA BẠN",
      para: "Bạn đang tìm một lập trình viên có thể xây dựng hệ thống từ A đến Z? Tôi sẵn sàng biến ý tưởng của bạn thành hiện thực.",
      btnText: "CV Của Tôi",
    },

    contact: {
      title: "Liên Hệ",
      subtitle: "KẾT NỐI VỚI TÔI",
      social_media: [
        {
          text: "masonkang1212@gmail.com",
          icon: GrMail,
          link: "mailto:masonkang1212@gmail.com",
        },
        { text: "+84 937 289 384", icon: MdCall, link: "tel:+84937289384" },
      ],
      successMessage: "Gửi email thành công!",
      errorMessage: "Lỗi: ",
      form: {
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "Email của bạn",
        messagePlaceholder: "Nội dung tin nhắn",
        btnText: "Gửi",
      },
    },

    footer: {
      text: "© Bản quyền 2025 thuộc về Mạnh Cường",
    },
  },

  ja: {
    nav: [
      { link: "#home", icon: TbSmartHome },
      { link: "#skills", icon: BiUser },
      { link: "#services", icon: RiServiceLine },
      { link: "#projects", icon: RiProjectorLine },
      { link: "#contact", icon: MdOutlinePermContactCalendar },
    ],

    hero: {
      title: "ウェブ開発者",
      firstName: "ANH",
      LastName: "PHI",
      btnText: "私の履歴書",
      image:
        "https://res.cloudinary.com/dlfzkbtie/image/upload/v1759912383/FM100_T_Y_N_180_5_rhjwu3.webp",
      cvLink: "https://vietcv.io/nguyen-hoang-anh-phi",
      hero_content: [
        { count: "FPT大学", text: "卒業" },
        { count: "6+", text: "システム関連のプロジェクトを完了" },
      ],
    },

    skills: {
      title: "スキル",
      subtitle: "私のトップスキル",
      skills_content: [
        {
          name: "C#",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/net.png",
        },
        {
          name: "Node js",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/node.png",
        },
        {
          name: "React js",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/react.png",
        },
        {
          name: "Next js",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/next.jpg",
        },
        {
          name: "My Sql",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/sql.png",
        },
        {
          name: "MS sql server",
          para: "ダミーテキスト",
          logo: "/assets/images/Skills/ssms.png",
        },
      ],
      icon: MdArrowForward,
    },

    services: {
      title: "サービス",
      subtitle: "提供内容",
      service_content: [
        {
          title: "フルスタックWeb開発",
          para: "フロントエンド設計からバックエンドAPIまで、ビジネス向けの完全なソリューションを提供します。",
          logo: "/assets/images/Services/logo1.png",
        },
        {
          title: "データベース設計とモデリング",
          para: "スキーマ設計、インデックス、ストアドプロシージャ",
          logo: "/assets/images/Services/logo2.png",
        },
        {
          title: "DevOps統合",
          para: "CI/CDパイプラインの構築、パフォーマンス調整、テスト、システムセキュリティ",
          logo: "/assets/images/Services/logo3.png",
        },
      ],
    },

    projects: {
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
      title: "プロジェクト",
      subtitle: "私の作品",
      project_content: [
        {
          title: "Client Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004800/img3_skqlb7.png",
          githublink: "https://github.com/mkang10/funkytown-web-client",
          demo: "https://funkytown-web-client.vercel.app/",
          description: `
顧客向けECサイト機能一覧：
- プロフィール編集、住所追加/編集
- 商品おすすめ
- 検索、閲覧、フィルタリング
- お気に入り追加/削除
- カートに追加・編集
- チェックアウト・注文
- フィードバック送信
- 返品/交換リクエスト
- AIチャットボットとチャット
          `,
        },
        {
          title: "Manager Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004805/img4_zvjazo.png",
          githublink: "https://github.com/mkang10/funkytown-web-manager",
          demo: "https://funkytown-web-manager.vercel.app/",

          description: `
管理者・スタッフ共用ダッシュボード機能：
- 入庫リクエスト作成
- 収益レポート管理
- 顧客・入出庫注文の追跡
- 返品/交換レシート処理
- (管理者のみ) 顧客注文処理、出庫・入庫
- (スタッフのみ) 注文・出庫・入庫業務実行
          `,
        },
        {
          title: "Owner Funky Website",
          image:
            "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748004615/img2_zpnxqy.png",
          githublink: "https://github.com/mkang10/funkytown-web-owner",
          demo: "https://funkytown-web-owner.vercel.app/",
          description: `
システム管理ポータル機能一覧：
- 商品の表示、作成、更新
- 中央倉庫への在庫インポート
- カテゴリ管理（追加/編集）
- 在庫数と収益の追跡
- 入出庫・転送リクエストの監視
          `,
        },
      ],
    },

    testimonials: {
      title: "お客様の声",
      subtitle: "クライアントレビュー",
      testimonials_content: [
        {
          review:
            "「プロフェッショナルで献身的、非常に効率的です。彼の働きぶりに深く感謝しており、今後のプロジェクトでもぜひ一緒に仕事をしたいです。」",
          img: "/assets/images/Testimonials/logo.png",
          name: "Funky Town",
        },
        // 追加のレビューも同様に...
      ],
    },

    hireme: {
      title: "採用依頼",
      image:
        "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
      cvLink:
        "https://www.topcv.vn/xem-cv/WlgOV1tRXwFVUlwEVVBcAVZaAglWBVJUUQdVDQa478",
      subtitle: "あなたのプロジェクトのために",
      para: "システムをゼロから構築できる開発者をお探しですか？アイデアを形にする準備はできています。",
      btnText: "履歴書",
    },

    contact: {
      title: "お問い合わせ",
      subtitle: "ご連絡はこちら",
      social_media: [
        {
          text: "masonkang1212@gmail.com",
          icon: GrMail,
          link: "mailto:masonkang1212@gmail.com",
        },
        { text: "+84 937 289 384", icon: MdCall, link: "tel:+84937289384" },
      ],
      successMessage: "メールが正常に送信されました！",
      errorMessage: "エラー：",
      form: {
        namePlaceholder: "お名前",
        emailPlaceholder: "メールアドレス",
        messagePlaceholder: "メッセージ内容",
        btnText: "送信",
      },
    },

    footer: {
      text: "© 2025 Mạnh Cường. 無断転載を禁じます。",
    },
  },
};
