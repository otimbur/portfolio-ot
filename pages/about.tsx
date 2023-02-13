import React from "react";
import { MediaCard } from "../components/Card";
import AboutStyle from "../styles/About.module.css";

import {
  bankingSkills,
  dentalSkills,
  techSkills,
} from "../components/skillsData";
import { ListItem } from "@mui/material";
import SectionTitle from "../components/About/SectionTitle";
import SkillCard from "../components/About/SkillCard";
import ProjectItem from "../components/project/projectComponent";

const about = () => {
  function skillItem(skill: any) {
    return <ListItem key={skill.id}>{skill.name}</ListItem>;
  }

  return (
    <div className={AboutStyle.AboutPage}>
      <section className={AboutStyle.HardSkills}>
        <SectionTitle name={"Technicall Skills"} />
        <div className={AboutStyle.mainAbout}>
          <div className={AboutStyle.TechSkills}>
            <SkillCard
              value={60}
              image={require("../src/JavaScript-logo.png")}
              alt={"JS"}
              valueBuffer={100}
            />
            <SkillCard
              value={50}
              image={require("../src/webio.webp")}
              alt={"JS"}
              valueBuffer={100}
            />
            <SkillCard
              value={30}
              image={require("../src/java.png")}
              alt={"JS"}
              valueBuffer={100}
            />

            <SkillCard
              value={70}
              image={require("../src/mui.png")}
              alt={"mui"}
              valueBuffer={100}
            />

            <SkillCard
              value={40}
              image={require("../src/node.webp")}
              alt={"JS"}
              valueBuffer={100}
            />
            <SkillCard
              value={60}
              image={require("../src/react.png")}
              alt={"JS"}
              valueBuffer={100}
            />
          </div>
        </div>
      </section>
      <section className={AboutStyle.WorkExp}>
        <SectionTitle name={"Work Experience"} />
        <div className={AboutStyle.nonTechSkills}>
          <MediaCard
            jobImg={require("../src/tech.png")}
            jobTitle="Software Engineering in Test"
            jobCompany="Salesforce"
            jobDedscription="Q3 focuses on understanding real-world
               customer scenarios and running realistic, 
              customer persona-based tests here at Salesforce 
              by building test suites."
            skill={techSkills.map(skillItem)}
          />

          <MediaCard
            jobImg={require("../src/dental.png")}
            jobTitle="Dental Assistant"
            jobCompany="Red-Bell OMS"
            jobDedscription="Patient care"
            skill={dentalSkills.map(skillItem)}
          />

          <MediaCard
            jobImg={require("../src/financial.jpg")}
            jobTitle="Teller/Banker"
            jobCompany="Washington Federal/BECU"
            jobDedscription="Managing client bank accounts, including opening and closing accounts, and overseeing transactions."
            skill={bankingSkills.map(skillItem)}
          />
        </div>
      </section>
      <section className={AboutStyle.Projects}>
        <SectionTitle name={"Projects"} />
        <ProjectItem />
      </section>
    </div>
  );
};

export default about;
