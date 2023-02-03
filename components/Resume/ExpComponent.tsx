import * as React from "react";
import ExpComponentStyle from "./ExpComponent.module.css";

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
    <div className={ExpComponentStyle.ExpItem}>
      <div className={ExpComponentStyle.CompanyDetails}>
        <div className={ExpComponentStyle.Company}>{company}</div>
        <div className={ExpComponentStyle.Time}>{time}</div>
      </div>
      <div className={ExpComponentStyle.Possition}>{position}</div>
      <ul>{skill}</ul>
    </div>
  );
}
