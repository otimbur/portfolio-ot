import ResumeStyle from "../styles/Resume.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { ResumeComponent } from "../components/Resume/Resume";
import { Typography } from "@mui/material";

export default function Resume() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={ResumeStyle.Pagebody}>
      <motion.div
        className={ResumeStyle.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <div className={ResumeStyle.nameSection}>
        <Typography
          variant="h3"
          mt={2}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          Olga Timbur
        </Typography>
        <p>206-965-5550 || olgatimbur1@gmail.com </p>
      </div>

      <ResumeComponent />
    </div>
  );
}
