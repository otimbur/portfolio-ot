import { Typography } from "@mui/material";
import ResumeStyle from "../../styles/Resume.module.css";
import { bankingSkills, dentalSkills, techSkills } from "../skillsData";
import { Certifications } from "./Certifications";
import TimelineExp from "./ExpComponent";
import { SectionTitle } from "./SectionTitle";

export function ResumeComponent() {
  function skillItem(skill: any) {
    return <li key={skill.id}>{skill.name}</li>;
  }

  return (
    <article className={ResumeStyle.Resume}>
      <SectionTitle title="Skills" />
      <div className={ResumeStyle.SkillsSection}>
        <ul className={ResumeStyle.list}>
          <li>JavaScript</li>
          <li>Java</li>
          <li>React</li>
          <li>NodeJs</li>
          <li>JSON</li>
        </ul>

        <ul className={ResumeStyle.list}>
          <li>HTML</li>
          <li>CSS/MUI</li>
          <li>Strum</li>
          <li>Automation testing</li>
          <li>WebdriverIo</li>
        </ul>

        <ul className={ResumeStyle.list}>
          <li>Selenium</li>
          <li>Appium</li>
          <li>UI Automation</li>
          <li>TypeScript</li>
          <li>API</li>
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
          Year Up is an intensive, competitive technical training and career
          development program. The program includes college-level courses,
          professional training, and a six-month internship. Completed
          coursework in Software Development and Testing, Project Management,
          and Business Communications, with specialized training in Application
          Development, including HTML, CSS, JavaScript, and React
        </div>
      </div>
      <SectionTitle title="Additional Skills" />
      <div className={ResumeStyle.Certifications}>
        <Certifications certificate="Software Development and Testing Certification, Seattle Central College - March 2023" />
      </div>
      <Typography
        sx={{
          display: "flex",
          marginLeft: 3,
          alignItem: "start",
          justifyContent: "start",
          fontFamily: "sans-serif",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Experience
      </Typography>
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
