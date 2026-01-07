import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} مشروع React محترف. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center mt-2 space-x-4 space-x-reverse text-sm">
          <a href="#" className="hover:text-indigo-400">الخصوصية</a>
          <a href="#" className="hover:text-indigo-400">شروط الاستخدام</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
