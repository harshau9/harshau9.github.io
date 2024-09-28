import React, { useState } from "react";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./style.scss";
import { filterOptions, portfolioData } from "./utils";

const Project = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleFilter = (id) => {
    setFilterValue(id);
  };
  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? "active" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
        {/* </div> */}
        <div className="portfolio__content__cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              {/* <div className="overlay"> */}
              <div style={{padding:"10px"}}>
                {/* {hoveredIndex === key && ( */}
                {/* <div> */}
                  <p>{item.projectName}</p>
                  <h6>{item.des}</h6>
                  <h6 id="higlight">
                    <strong>Tech Stack: {item.tech}</strong>
                  
                  </h6>
                  <div className="but">
                    <a href={item.projectLink} target="_blank">
                      <button className="buttoneff">Visit</button>
                    </a>
                    <a href={item.githubLink} target="_blank">
                      <button className="buttoneff">GitHub</button>
                    </a>
                  </div>
                {/* </div> */}
                {/* )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
