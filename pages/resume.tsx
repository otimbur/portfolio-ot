import ResumeStyle from "../styles/Resume.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { ResumeComponent } from "../components/Resume/Resume";

export default function Resume() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={ResumeStyle.Pagebody}>
      <motion.div className={ResumeStyle.progressBar} style={{ scaleX }} />
      <ResumeComponent />
    </div>
  );
}
