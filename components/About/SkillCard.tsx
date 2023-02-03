import React from "react";
import StyleSkillCard from "./SkillCardStyle.module.css";
import Image from "next/image";
import { LinearProgress, Typography } from "@mui/material";

interface Props {
  value: number;
  image: string;
  alt: string;
  valueBuffer: number;
}
export default function SkillCard({ value, image, alt, valueBuffer }: Props) {
  return (
    <div className={StyleSkillCard.CardComponent}>
      <div className={StyleSkillCard.CardImageContainer}>
        <Image
          className={StyleSkillCard.CardImage}
          src={image}
          alt={alt}
        ></Image>
      </div>
      <LinearProgress
        variant="buffer"
        value={value}
        valueBuffer={valueBuffer}
      />
      <div className={StyleSkillCard.Value}>
        <Typography
          sx={{
            fontFamily: "Helvetica Neue",
            color: "#DDD0C8",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >{`${value}%`}</Typography>
      </div>
    </div>
  );
}
