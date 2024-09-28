import React from "react";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utils";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Line } from "rc-progress";
import "./style.scss";
import { Animate, AnimateKeyframes } from "react-simple-animate";
// import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiNetlify, SiVercel, SiHeroku } from "react-icons/si";
// import { DiReact,} from "react-icons/di";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, key) => (
          <div key={key} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.4}
              start={{
                transform: "translateX(-250px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((dataItem, index) => (
                  <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity : 1", "opacity : 0"]}
                  iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={index}>
                      <p>{dataItem.skillName}<span>{dataItem.sym}</span></p>
                      {/* <p>{dataItem.sym}</p> */}
                      <Line
                        percent={dataItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
