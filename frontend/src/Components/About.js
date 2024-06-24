import React from "react";
import "../CSS/About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover our story and meet the team behind Roy Bookstore</p>
      </div>
      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2006, Roy Bookstore has been a sanctuary for book lovers
            for over two decades. Our mission is to ignite a passion for reading
            by offering a diverse collection of books from all genres and for
            all ages. We believe in the power of stories to inspire, educate,
            and connect people.
          </p>
        </section>
        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-ycnCXMU_IhRLsRqnkOnGExWNNDFFy07Kg&s"
              height="280px"
              width="280px"
              alt="Team Member 1"
              className="team-photo"
            />
            <p>John Doe - Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member 2"
              className="team-photo"
            />
            <p>Jane Smith - Head of Operations</p>
          </div>
          {/* Add more team members as needed */}
        </section>
        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Passion for Literature</li>
            <li>Customer-Centric Service</li>
            <li>Community Engagement</li>
            <li>Commitment to Sustainability</li>
            <li>Inclusivity and Diversity</li>
          </ul>
        </section>
        <section className="about-services">
          <h2>Our Services</h2>
          <ul>
            <li>Curated Book Recommendations</li>
            <li>Special Order Services</li>
            <li>Community Events and Book Signings</li>
            <li>Book Club Hosting</li>
            <li>Gift Wrapping and Personalized Gift Recommendations</li>
          </ul>
        </section>
        <section className="about-testimonials">
          <h2>Customer Testimonials</h2>
          <blockquote>
            "Book Haven is my go-to place for all my reading needs. The staff
            are incredibly helpful and the selection is unparalleled."
            <cite>- Avid Reader</cite>
          </blockquote>
          <blockquote>
            "I love attending the book signings and events at Book Haven. It's a
            great place to meet fellow book enthusiasts!"
            <cite>- Book Club Member</cite>
          </blockquote>
          {/* Add more testimonials as needed */}
        </section>
        <section className="about-location">
          <h2>Visit Us</h2>
          <p>
            We are located at 123 Book Street, Literature City, Bookland. Drop
            by to explore our collection, attend events, or just to chat with
            fellow book enthusiasts.
          </p>
        </section>
      </div>
    </div>
  );
};
