import React from 'react';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📜 Terms and Conditions</h1>
      <p className="mb-6">
        Welcome to our custom phone case platform. By placing an order on our website, you agree to the following terms:
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Custom Image Responsibility</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You are solely responsible for the images you upload.</li>
          <li>We do not claim ownership of your images.</li>
          <li>We are not liable for the content of the image (e.g., copyright infringement, offensive material).</li>
          <li>Make sure you have the legal rights to use and print the image.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Print Quality & Colors</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Final printed colors may vary slightly from what you see on your screen.</li>
          <li>We do not guarantee perfect color matching.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Phone Case Material</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>The image is permanently printed on the case and cannot be removed or changed.</li>
          <li>Cases are not heat-resistant. Do not expose them to fire or high heat.</li>
          <li>We are not responsible for damage caused by misuse (e.g., drops, water, fire).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Order Modifications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Once an order is placed and confirmed, it cannot be modified or cancelled.</li>
          <li>Please double-check your phone model and image before submitting.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Returns & Refunds</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We do not accept returns or refunds for custom products, unless:</li>
          <ul className="list-disc pl-6 space-y-1">
            <li>The case arrives damaged.</li>
            <li>The model sent is incorrect (our mistake).</li>
          </ul>
          <li>Issues must be reported within 48 hours of delivery.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Shipping & Delivery</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We aim to deliver on time, but are not responsible for postal delays or incorrect addresses.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Liability Disclaimer</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Our responsibility ends at the successful printing and shipping of the case.</li>
          <li>We are not liable for any issues after delivery caused by third parties or misuse.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We reserve the right to update or change these terms at any time.</li>
        </ul>
      </section>
    </div>
  );
};

export default page;
