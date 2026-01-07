import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// استيراد الصفحات
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* يمكن إضافة مسار 404 هنا */}
          <Route path="*" element={<h1>404 | الصفحة غير موجودة</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
