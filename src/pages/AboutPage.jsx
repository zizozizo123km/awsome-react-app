import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">من نحن</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">رسالتنا</h2>
        <p className="text-gray-600 leading-relaxed">
          نحن فريق متخصص في هندسة البرمجيات ملتزمون بتقديم حلول ويب حديثة وفعالة. نعتمد على أحدث التقنيات مثل React و Tailwind CSS لضمان تجربة مستخدم سلسة وأداء عالي.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">التقنيات المستخدمة</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React 18: لبناء واجهات مستخدم تفاعلية.</li>
          <li>React Router DOM: لإدارة مسارات التطبيق.</li>
          <li>Tailwind CSS: لتصميم واجهة مستخدم سريعة ومتجاوبة (Responsive).</li>
          <li>Vite: كأداة بناء حديثة وسريعة.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">قيمنا</h2>
        <p className="text-gray-600 leading-relaxed">
          الابتكار، الجودة، وسهولة الاستخدام هي أساس عملنا. نسعى دائمًا لتبسيط تعقيدات الويب لتقديم أفضل منتج نهائي.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
