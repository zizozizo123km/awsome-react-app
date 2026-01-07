import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">تواصل معنا</h1>
      <p className="text-center text-gray-600 mb-10">
        لدينا فريق جاهز للإجابة على استفساراتك. يرجى ملء النموذج أدناه.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
