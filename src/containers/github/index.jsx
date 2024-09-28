import React from "react";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { TfiGithub } from "react-icons/tfi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import "./style.css";

const Github = () => {
  return (
    <section className="github" id="github">
      <PageHeaderContent
        headerText="GitHub Stats"
        icon={<TfiGithub size={40} />}
      />
      <div className="main">
        <div className="sub1">
          <img
            src="https://github-readme-stats.vercel.app/api?username=harshau9&theme=dracula"
            alt="harsha"
            height="139"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshau9&layout=compact&theme=dracula"
            alt="harsha"
            height="139"
          />
        </div>
        <div className="sub2">
          <h2 style={{color: "var(--selected-theme-main-color)", marginBottom: "15px", fontSize: "2rem"}}>GitHub Calendar</h2>
          <GitHubCalendar
            username="harshau9"
            style={{
              color: "var(--selected-theme-main-color)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
