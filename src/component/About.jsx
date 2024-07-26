import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./About.css";

function About() {
  return (
    <>
      <Nav />

      <main className="about">
        <div className="background">
          <section className="about-hero">
            <h2>เกี่ยวกับเรา</h2>
            <p>เรียนรู้เพิ่มเติมเกี่ยวกับการเดินทางและค่านิยมของเรา.</p>
          </section>
        </div>

        <section className="our-story">
          <h3>แนะนำเที่ยวทั่วไทย</h3>
          <p>
            เราเริ่มต้นการเดินทางในปี 2010 ด้วยความหลงใหลในการเดินทางและ
            การผจญภัย. เป้าหมายของเราคือการมอบประสบการณ์ที่น่าจดจำให้กับเรา
            ลูกค้าพาไปสถานที่ที่สวยงามและแปลกใหม่ที่สุด รอบโลก.
          </p>
        </section>

        <section className="our-values">
          <h3>Our Values</h3>
          <ul>
            <li>
              Customer Satisfaction: We prioritize our customers' happiness and
              satisfaction.
            </li>
            <li>
              Quality Service: We offer top-notch services to ensure the best
              experience.
            </li>
            <li>
              Integrity: We conduct our business with honesty and integrity.
            </li>
            <li>
              Innovation: We constantly innovate to bring new and exciting
              experiences.
            </li>
          </ul>
        </section>

        <section className="our-team">
          <h3>Meet Our Team</h3>
          <div className="team-list">
            <div className="team-member">
              <img src="team-member1.jpg" alt="Team Member 1" />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="team-member2.jpg" alt="Team Member 2" />
              <h4>Jane Smith</h4>
              <p>COO</p>
            </div>
            <div className="team-member">
              <img src="team-member3.jpg" alt="Team Member 3" />
              <h4>Mike Johnson</h4>
              <p>Head of Marketing</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
