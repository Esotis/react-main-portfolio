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
        </div>

        {/* Education section */}
        <div className="qualification-sections">
          <AnimatePresence initial={false} mode="wait">
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
                    <h3 className="qualification-title">
                      Learning Basic Things
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - W3Schools - Independent
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> 27 April 2022
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
                      Free Entry - BackEnd Path
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
                    <h3 className="qualification-title">Learning FullStack</h3>
                    <span className="qualification-subtitle">
                      Youtube - Web - Tiktok
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> November 2022 -
                      Present
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Experince section */}
            {tab === 2 && (
              <motion.div
                className="qualification-content"
                variants={QualificationMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="experience"
              >
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Cloning Public Design
                    </h3>
                    <span className="qualification-subtitle">
                      Youtube - Figma
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> September 2022 -
                      Present
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
                      Make Simple E-Commerce
                    </h3>
                    <span className="qualification-subtitle">Independent</span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> October 2022 -
                      November 2022
                    </div>
                  </div>
                </div>

                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Coming Soon FullStack Projects
                    </h3>
                    <span className="qualification-subtitle">
                      Figma - Web - Youtube
                    </span>
                    <div className="qualification-calender">
                      <i className="uil uil-calendar-alt"></i> December 2022 -
                      Present
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
