import React from "react";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <form
            action="https://getform.io/f/3464a23c-261d-480d-ad87-a2e2978a0f7d"
            method="POST"
          >
            <div className="contact__content__form__controlsWrapper">
              <div className="nameWrapper">
                <input name="name" className="inputName" type="text" />
                <label htmlFor="name" className="namelabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input type="text" className="inputEmail" name="email" />
                <label htmlFor="email" className="emaillabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  name="description"
                  className="inputDescription"
                  type="text"
                  rows={"5"}
                  style={{ resize: "nonw" }}
                />
                <label htmlFor="description" className="descriptionlabel">
                  Description
                </label>

                <div className="contact-me__socials-wrapper">
                  <a href="https://github.com/harshau9" target="_blank">
                    <FaGithub size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harsha-umesh/"
                    target="_blank"
                  >
                    <FaLinkedin size={32} />
                  </a>
                </div>
                <p>Email: harshau129@gmail.com</p>
                <p>Mobile: 7019722654</p>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div class="info-box">
          <div class="footnote">
            <a href= "https://github.com/harshau9">
            Made by Harsha Umesh</a> <span class="highlight">&copy;2022 </span>
          </div>
          </div>
    </section>
  );
};

export default Contact;
