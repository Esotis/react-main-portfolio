import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { QualificationMotion } from "../../constant/animation";
import "./Qualification.css";

function Qualification() {
  const [tab, setTab] = useState<number>(1);

  const toggleTab = (index: number) => setTab(index);

  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personel journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              tab === 1
                ? "qualification-button button-flex qualification-active"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div
            className={
              tab === 2
                ? "qualification-button button-flex qualification-active"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Experience
          </div>
          <div
            className={
              tab === 3
                ? "qualification-button button-flex qualification-active"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-clipboard-notes qualification-icon"></i>{" "}
            Project
          </div>
        </div>

        <div className="qualification-sections">
          <AnimatePresence initial={false} mode="wait">
            {/* Experience section */}
            {tab === 1 && (
              <motion.div
                variants={QualificationMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="education"
                className="qualification-content"
              >
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">Krista Mitra</h3>
                    <span className="qualification-subtitle">High School</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> July 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>

                <div className="qualification-data">
                  <div></div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div>
                    <h3 className="qualification-title">Stikubank</h3>
                    <span className="qualification-subtitle">
                      Bachelor of Information Systems (Ongoing)
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> September 2022
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Experience section */}
            {tab === 2 && (
              <motion.div
                variants={QualificationMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="experience"
                className="qualification-content"
              >
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Learning Basic Things
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - W3Schools - Independent
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> April 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>

                <div className="qualification-data">
                  <div></div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div>
                    <h3 className="qualification-title">Dicoding Course</h3>
                    <span className="qualification-subtitle">
                      Free Entry - BackEnd Path - Path 4
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> July 2022
                    </div>
                  </div>
                </div>

                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Learning BackEnd Independent
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Web
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> September 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>

                <div className="qualification-data">
                  <div></div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div>
                    <h3 className="qualification-title">Learning Front End</h3>
                    <span className="qualification-subtitle">
                      Youtube - Web - Tiktok - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Learning FullStack Developer
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Tiktok
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> January 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div></div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Learning web services and platforms
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Web
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> April 2023
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Learning Computer Network
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> February 2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div></div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Junior Genesys Cloud Administrator
                    </h3>
                    <span className="qualification-subtitle">
                      Kampus Merdeka Program - MSIB Batch 7
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> September 2024
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project section */}
            {tab === 3 && (
              <motion.div
                className="qualification-content"
                variants={QualificationMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="project"
              >
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Simple Travel and Tour Website
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> August 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>

                <div className="qualification-data">
                  <div></div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div>
                    <h3 className="qualification-title">
                      Public Movie API Website
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> August 2022
                    </div>
                  </div>
                </div>

                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Contact App Using Express Server
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> September 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Contact App Using MySQL
                    </h3>
                    <span className="qualification-subtitle">Independent</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> October 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Contact App Using MongoDB
                    </h3>
                    <span className="qualification-subtitle">Independent</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> October 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      React Travel Website
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> October 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Portfolio Web (React & Tailwind)
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Portfolio Website (React, Tailwind, NextJS 13)
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">React Gym Website</h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Hangman Game (Typescript)
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Note App (Typescript)
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Restaurant Website (Typescript)
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">Main Portfolio</h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      E-Commerce Project (MERN)
                    </h3>
                    <span className="qualification-subtitle">Youtube</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> January 2023
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Admin Dashboard Project
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> February 2023
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      React Petshop Website
                    </h3>
                    <span className="qualification-subtitle">Figma</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> June 2023
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Web Messaging with Bot
                    </h3>
                    <span className="qualification-subtitle">
                      Genesys - Web Messenger - Bot Flow
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2024
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Trans Jakarta Call Center
                    </h3>
                    <span className="qualification-subtitle">
                      Genesys - Inbound Call
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2024
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      HealthCare Call Center
                    </h3>
                    <span className="qualification-subtitle">
                      Genesys - Inbound Call
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2024
                    </div>
                  </div>

                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
