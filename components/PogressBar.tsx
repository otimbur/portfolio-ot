import * as React from "react";
import ProgressStyle from "../styles/Progress.module.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";

interface Props {
  value: number;
  image: string;
  alt: string;
}
export function CircularProgress({ value, image, alt }: Props) {
  return (
    <div className={ProgressStyle.progress}>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#DDD0C8",
          trailColor: "white",
        })}
      >
        <Image
          className={ProgressStyle.image}
          //   style={{ width: 90, marginTop: -10 }}
          src={image}
          alt={alt}
        ></Image>
        <div style={{ fontSize: 25, marginTop: -5 }}>
          <strong className={ProgressStyle.text}>{`${value}%`}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
