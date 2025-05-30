import React from 'react';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔐 Privacy Policy</h1>

      <p className="mb-6">
        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and store your personal data and uploaded images.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We collect your name, email, shipping address, and phone model during checkout.</li>
          <li>We also store the image you upload for your custom phone case.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Image Retention</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Uploaded images are stored securely on our servers for <strong>30 days</strong> after your order.</li>
          <li>This is to facilitate customer support and potential reprints if needed.</li>
          <li>After 30 days, your image is permanently deleted from our system.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Use of Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We use your information to process orders, print phone cases, and provide support.</li>
          <li>We do not sell, rent, or share your data or images with third parties.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Security</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We use industry-standard security practices to protect your data and images.</li>
          <li>However, no online service can be 100% secure. Please upload content responsibly.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We use cookies to enhance your browsing experience and remember your preferences.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We may update this Privacy Policy from time to time.</li>
          <li>Changes will be posted on this page with an updated effective date.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about this policy, please contact us at <strong>support@phonecase.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default page;
