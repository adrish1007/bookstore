import React from "react";
import "../CSS/Services.css";

export const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">FAQ</h1>
      <div className="services-grid">
        <div className="service">
          <h2>What are your store hours?</h2>
          <p>
            Our bookstore is open Monday through Friday from 9 AM to 8 PM,
            Saturday from 10 AM to 6 PM, and Sunday from 11 AM to 5 PM.
          </p>
        </div>
        <div className="service">
          <h2>Do you offer online shopping?</h2>
          <p>
            Yes, we offer a comprehensive online shopping experience. You can
            browse and purchase books directly from our website. We also provide
            an option for curbside pickup.
          </p>
        </div>
        <div className="service">
          <h2>How can I track my online order?</h2>
          <p>
            Once your order is shipped, you will receive a confirmation email
            with a tracking number. You can use this number to track your order
            on our website or the carrier’s website.
          </p>
        </div>
        <div className="service">
          <h2>Can I return or exchange a book?</h2>
          <p>
            Yes, we accept returns and exchanges within 30 days of purchase. The
            book must be in its original condition. Please refer to our Return
            Policy for more details.
          </p>
        </div>
        <div className="service">
          <h2>Can you help me find a specific book?</h2>
          <p>
            Absolutely! Our knowledgeable staff can assist you in finding any
            book. If we don't have it in stock, we can place a special order for
            you.
          </p>
        </div>
        <div className="service">
          <h2>How do I contact customer service?</h2>
          <p>
            You can reach our customer service team by phone at (123) 456-7890
            or by email at support@bookstore.com. Our team is available Monday
            through Friday from 9 AM to 5 PM.
          </p>
        </div>
      </div>
    </div>
  );
};
