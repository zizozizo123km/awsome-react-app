# مشروع React كامل مع Tailwind و React Router

هذا المشروع تم إنشاؤه باستخدام React و Vite، ويستخدم Tailwind CSS للتصميم و React Router للتنقل.

## تثبيت وتشغيل المشروع

1. تثبيت الاعتماديات:
   ```bash
   npm install
   # أو
   yarn install
   ```
2. تشغيل الوضع المحلي (Development):
   ```bash
   npm run start
   # أو
   yarn start
   ```

## هيكل المجلدات

```
src/
├── components/       # المكونات القابلة لإعادة الاستخدام (Navbar, Footer, Form)
├── pages/            # صفحات المسارات الرئيسية (Home, About, Contact)
├── App.jsx           # تعريف المسارات الرئيسية والتخطيط العام
├── index.css         # استيراد أنماط Tailwind
└── main.jsx          # نقطة الدخول للتطبيق (Root Renderer)
```