import React from 'react';

const HomePage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        مرحبًا بك في مشروع React الاحترافي
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        هذا المشروع يستخدم React Router للتنقل و Tailwind CSS للتصميم السريع والفعال.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
        <p className="text-indigo-600 font-semibold">اكتشف الصفحات الأخرى عبر شريط التنقل!</p>
      </div>
      <div className="mt-10">
        <img 
          src="https://placehold.co/600x400/indigo/white?text=React+Home"
          alt="صورة توضيحية"
          className="mx-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
