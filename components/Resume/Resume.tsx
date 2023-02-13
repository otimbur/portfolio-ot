import { Typography } from "@mui/material";
import ResumeStyle from "../../styles/Resume.module.css";
import { bankingSkills, dentalSkills, techSkills } from "../skillsData";
import { Certifications } from "./Certifications";
import TimelineExp from "./ExpComponent";
import { SectionTitle } from "./SectionTitle";

export function ResumeComponent() {
  function skillItem(skill: any) {
    return (
      <li className={ResumeStyle.ExpSkillList} key={skill.id}>
        {skill.name}
      </li>
    );
  }

  return (
    <article className={ResumeStyle.Resume}>
      <SectionTitle title="Skills" />
      <div className={ResumeStyle.SkillsSection}>
        <ul className={ResumeStyle.list}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>

        <ul className={ResumeStyle.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>MUI</li>
        </ul>

        <ul className={ResumeStyle.list}>
          <li>Selenium</li>
          <li>WebdriverIO</li>
          <li>UI Automation</li>
        </ul>
        <ul className={ResumeStyle.list}>
          <li>Scrum</li>
          <li>GitHub</li>
          <li>Postman</li>
        </ul>
        <ul className={ResumeStyle.list}>
          <li>JSON</li>
          <li>Mocha</li>
          <li>Automation Testing</li>
        </ul>
      </div>
      <SectionTitle title="Relevan Skills" />
      <TimelineExp
        company="Salesforce -San Francisco, CA"
        time=" September 2022 - Present "
        position="Software engineering in test"
        skill={techSkills.map(skillItem)}
      />
      <SectionTitle title="Education & Certifications" />
      <div className={ResumeStyle.Education}>
        <div className={ResumeStyle.School}>
          <div className={ResumeStyle.SchoolName}>
            Year Up / Seattle Central College, Seattle, WA
          </div>
          <div className={ResumeStyle.SchoolTime}>March 2022 – Present</div>
        </div>
        <div className={ResumeStyle.SchoolDesc}>
          Completed coursework in Software Development and Testing, Project
          Management, and Business Communications, with specialized training in
          Application Development, including HTML, CSS, JavaScript, and React
        </div>
      </div>
      <div className={ResumeStyle.Certifications}>
        <Certifications certificate="Software Development and Testing Certification, Seattle Central College - March 2023" />
        <Certifications certificate="Getting Started in Test Automation Engineering - Jan 2023 " />
      </div>
      <SectionTitle title="Additional Skills" />
      <div className={ResumeStyle.ExpTimeline}>
        <TimelineExp
          company="Trevor Tshuchikawa DDS, Renton, WA"
          time="December 2019 – March 2022 "
          position="Dental Assistant"
          skill={dentalSkills.map(skillItem)}
        />
        <TimelineExp
          company="BECU, Seattle, WA / Washington Bank, Seattle, WA"
          time=" February 2018 – August 2019 "
          position="Teller/Banker"
          skill={bankingSkills.map(skillItem)}
        />
      </div>
    </article>
  );
}
