import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import Harsha from "../../images/harsha.jpg";
import ImageFive from "../../images/image5.png";
import { Animate } from "react-simple-animate";
import { personalData } from "./utils";
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <div className="h-data">
              <ul>
                {personalData.map((item, key) => (
                  <li key={key}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
              <img
                style={{ height: 180, width: 140 }}
                src={Harsha}
                alt="dp"
              ></img>
            </div>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Full Stack Developer</h3>
            <p>
              I’m a full-stack developer with expertise in the MERN stack and
              hands-on experience building mobile apps using React Native.
              Whether it's creating seamless web applications or developing
              high-performance mobile solutions, I thrive on exploring the
              latest technologies and turning ideas into impactful digital
              products. If you're looking for a developer who can bridge the gap
              between web and mobile, let’s connect—I’m ready to bring my
              passion for innovation to your team!
            </p>
            <h3>Work Experience</h3>
            <div>
              <h4>
                Junior Software Developer -{" "}
                <a
                  href="https://artenos.tech/"
                  target="_blank"
                  style={{
                    color: "#00f0ff",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  Artenos
                </a>{" "}
                (May 2024 - Present)
              </h4>
              <p>
                Focused on web development using React and Node.js in the
                Banking and Auditing domain. Contributed to building an online
                banking platform that allows users to manage transactions and
                payments. Worked on integrating secure banking APIs and ensuring
                a smooth, user-friendly experience.
              </p>
              <p>
                Tech Stack: React JS, Shadcn, TypeScript, Express, Koa.js,
                PostgreSQL, GCS, Docker, Tailwind.
              </p>
            </div>
            <div>
              <h4>
                Associate React Native Developer -{" "}
                <a
                  href="https://www.honeysys.com/"
                  target="_blank"
                  style={{
                    color: "#4361ee",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  Honeysys
                </a>{" "}
                (May 2023 - Nov 2023)
              </h4>
              <p>
                I have contributed to dynamic mobile app projects, building
                efficient, user-friendly cross-platform solutions. Key projects
                include the Ratnadeep Merchant App and Mini POS Lite App. My
                role involved collaborating with teams, implementing modern
                technologies, and delivering high-quality code to meet project
                goals.
              </p>
              <p>
                Tech Stack: React Native, React JS, JavaScript, SQLite, Expo.
              </p>
            </div>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
