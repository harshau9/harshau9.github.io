import React from "react";
import "./style.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { NavLink, Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Harsha Umesh
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a
            className="hire"
              href="#contact"
              style={{
                textDecoration: "none",
              }}
            >
              Hire Me
            </a>
            <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1QJg5fEi7JfRjQqGmsfSedrpDvCx33Ufb/view?usp=share_link",
                "_blank"
              )
            }><a
            href="https://drive.google.com/uc?export=download&id=1QJg5fEi7JfRjQqGmsfSedrpDvCx33Ufb"
            style={{
              textDecoration: "none",
            }}
          >
            Download Resume
          </a></button>
            
          </div>
          <div className="contact-me__socials-wrapper">
            <a href="https://github.com/harshau9" target="_blank">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/harsha-umesh/" target="_blank">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
