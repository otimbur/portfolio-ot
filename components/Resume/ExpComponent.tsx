import * as React from "react";
import ResumeStyle from "../../styles/Resume.module.css";

interface Props {
  company: string;
  time: string;
  position: string;
  skill: any;
}

export default function ExpComponent({
  company,
  time,
  position,
  skill,
}: Props) {
  return (
    <div className={ResumeStyle.ExpItem}>
      <div className={ResumeStyle.CompanyDetails}>
        <div className={ResumeStyle.Company}>{company}</div>
        <div className={ResumeStyle.Time}>{time}</div>
      </div>
      <div className={ResumeStyle.Possition}>{position}</div>
      <ul>{skill}</ul>
    </div>
  );
}
