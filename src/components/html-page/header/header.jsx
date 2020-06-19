<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = ({ movePointer, mouseLeave }) => {
  return (
    <section
      onMouseLeave={mouseLeave}
      onMouseMove={movePointer}
      className="about-me-page html-page"
    >
      <div className="pointer"></div>
      <div className="about-me html-page">
        <div className="left-block html-page">
          <h2 className="left-block-title">JS & Gag</h2>
        </div>
        <div className="top-block html-page">
          <article className="resume">
            <section className="resume-header">
              <div className="resume-header--title">
                <h1>Gagik Harutyunyan</h1>
                <h2>Frontend Developer</h2>
              </div>
              <div className="resume-header--contacts">
                <NavLink className="download-btn" to="/das">
                  download PDF
                </NavLink>
                <p>
                  <a className="email-href" href="mailto:gagharut@gmail.com">
                    gagharut@gmail.com
                  </a>
                </p>
                <p>
                  <a className="phone-href" href="tel:+7-980-266-26-09">
                    +7(980)266-26-09
                  </a>
                </p>
              </div>
            </section>
            <hr />
            <div className="about-me-main">
              <h3 className="about-me--title">About me</h3>
              <div className="about-me-info">
                <ul className="personal-info">
                  <li>
                    <span className="personal-info--title">Name :</span>
                    <span className="personal-info--value">Gagik</span>
                  </li>
                  <li>
                    <span className="personal-info--title">Surname :</span>
                    <span className="personal-info--value">Harutyunyan</span>
                  </li>
                  <li>
                    <span className="personal-info--title">Age :</span>
                    <span className="personal-info--value">23 years</span>
                  </li>
                  <li>
                    <span className="personal-info--title">Location :</span>
                    <span className="personal-info--value">Moscow, Russia</span>
                  </li>
                  <li>
                    <span className="personal-info--title">Gender :</span>
                    <span className="personal-info--value">male</span>
                  </li>
                </ul>
                <ul className="personal-info">
                  <li>
                    <span className="personal-info--title">Professions :</span>
                    <span className="personal-info--value">
                      Frontend-developer, professional photographer
                    </span>
                  </li>
                  <li>
                    <span className="personal-info--title">Languages :</span>
                    <span className="personal-info--value">
                      Russian, English, Armenian
                    </span>
                  </li>
                  <li>
                    <span className="personal-info--title">Technical :</span>
                    <span className="personal-info--value">
                      HTML5, CSS3, VanillaJS, React + Redux
                    </span>
                  </li>
                  <li>
                    <span className="personal-info--title">Experience :</span>
                    <span className="personal-info--value">1.5 years</span>
                  </li>
                  <li>
                    <span className="personal-info--title">Career level :</span>
                    <span className="personal-info--value">junior</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="about-me-main">
              <h3 className="about-me--title">Who am I?</h3>
              <div className="who-i-am">
                <p>
                  &nbsp;My name is Gagik. Am I a Frontend developer? You decide
                  after watching my works. I’ll only share how i got to this
                  level and what i own perfectly
                </p>
                <p>
                  &nbsp;My way began in the distant of 2012. In the first time i
                  got acquainted with the source code under the sites. Rummaging
                  around a bit on Google how to create a site and founded many
                  manuals how to create sites on different CMS. That's how i
                  created my first site. Then a long story and i don't want to
                  waste your time i'll just tell you what i am doing at the
                  moment.
                </p>
                <p>
                  &nbsp;The middle of 2018 i've been started to study html, css.
                  Passed all interactive courses in HTML Academy. Studied
                  courses (in HTML Academy) "Professional HTML & CSS Level 1",
                  "Professional HTML & CSS Level 2".
                </p>
                <p>
                  &nbsp;At the end of 2018 i began to study javascript. Studied
                  courses (in HTML Academy) "Professional javascript Level 1",
                  "Professional javascript Level 2".
                </p>
                <p>
                  &nbsp;I've been studying React for the last 10 months and also
                  last 1 month NodeJS,Express,MongoDB. Because i want to learn
                  MERN stack.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
=======
import React from 'react';

import './header.css';

const Header = () => {
   return (
      <section className="about-me-page html-page">
         <div className="about-me html-page">
            <div className="left-block html-page">
               <h2 className="left-block-title">JS & Gag</h2>
            </div>
            <div className="top-block html-page">
               <article className="resume">
                  <section className="resume-header">
                     <div className="resume-header--title">
                        <h1>Gagik Harutyunyan</h1>
                        <h2>Front-end Developer</h2>
                     </div>
                     <div className="resume-header--contacts">
                        <a
                           className="download-btn"
                           rel="noopener noreferrer"
                           target="_blank"
                           href="https://drive.google.com/file/d/1essYpUX1iVfPfhPSNcVSgMCMA67151Jt/view"
                        >
                           download PDF
                        </a>

                        <p>
                           <a
                              className="email-href"
                              href="mailto:gagharut@gmail.com"
                           >
                              gagharut@gmail.com
                           </a>
                        </p>
                        <p>
                           <a
                              className="phone-href"
                              href="tel:+7-980-266-26-09"
                           >
                              +7(980)266-26-09
                           </a>
                        </p>
                     </div>
                  </section>
                  <hr />
                  <div className="about-me-main">
                     <h3 className="about-me--title">About me</h3>
                     <div className="about-me-info">
                        <ul className="personal-info">
                           <li>
                              <span className="personal-info--title">
                                 Name :
                              </span>
                              <span className="personal-info--value">
                                 Gagik
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Surname :
                              </span>
                              <span className="personal-info--value">
                                 Harutyunyan
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Age :
                              </span>
                              <span className="personal-info--value">
                                 23 years
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Location :
                              </span>
                              <span className="personal-info--value">
                                 Moscow, Russia
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Gender :
                              </span>
                              <span className="personal-info--value">male</span>
                           </li>
                        </ul>
                        <ul className="personal-info">
                           <li>
                              <span className="personal-info--title">
                                 Professions :
                              </span>
                              <span className="personal-info--value">
                                 Frontend-developer, professional photographer
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Languages :
                              </span>
                              <span className="personal-info--value">
                                 Russian, English, Armenian
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Technical :
                              </span>
                              <span className="personal-info--value">
                                 HTML5, CSS3, VanillaJS, React + Redux, MobX,
                                 TypeScript, Vue(beginner)
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Experience :
                              </span>
                              <span className="personal-info--value">
                                 2+ years
                              </span>
                           </li>
                           <li>
                              <span className="personal-info--title">
                                 Career level :
                              </span>
                              <span className="personal-info--value">
                                 Middle
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <hr />
                  <br />
                  <div className="about-me-main">
                     <h3 className="about-me--title">Who am I?</h3>
                     <div className="who-i-am">
                        <p>
                           &nbsp;My name is Gagik. Am I a Frontend developer?
                           You decide after watching my works. I’ll only share
                           how i got to this level and what i own perfectly
                        </p>
                        <p>
                           &nbsp;My way began in the distant of 2012. In the
                           first time i got acquainted with the source code
                           under the sites. Rummaging around a bit on Google how
                           to create a site and founded many manuals how to
                           create sites on different CMS. That's how i created
                           my first site. Then a long story and i don't want to
                           waste your time i'll just tell you what i am doing at
                           the moment.
                        </p>
                        <p>
                           &nbsp;The middle of 2018 i've been started to study
                           html, css. Passed all interactive courses in HTML
                           Academy. Studied courses (in HTML Academy)
                           "Professional HTML & CSS Level 1", "Professional HTML
                           & CSS Level 2".
                        </p>
                        <p>
                           &nbsp;At the end of 2018 and the beginning of 2019 i
                           began to study javascript. Studied courses (in HTML
                           Academy) "Professional javascript Level 1",
                           "Professional javascript Level 2".
                        </p>
                        <p>
                           &nbsp;A large number of courses in udemy about react,
                           js and etc.
                        </p>
                        <p>
                           &nbsp;I've been studying React for the last 10 months
                           and also last 1 month TypeScript.
                        </p>
                        <p>
                           &nbsp;Also i am looking at the MERN stack, it really
                           interesting for me how to create REST Api, what do
                           things it's have inside Api, but i am not a backend
                           developer :)
                        </p>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </section>
   );
>>>>>>> 7f3731dae2bd6da58025f1a02adb295f3f800266
};

export default Header;
