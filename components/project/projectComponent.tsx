import { motion } from "framer-motion";
import Image from "next/image";
import ProjectStyle from "components/project/projectStyle.module.css";
import AboutStyle from "../../styles/About.module.css";
import { ListItemButton, ListItemText } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectsData } from "../../components/project/projectData";

const ProjectItem = () => {
  return (
    <div className={AboutStyle.ProjectContainer}>
      {projectsData.map((data) => {
        return (
          <motion.div
            whileHover={{ scale: 1.3 }}
            className={ProjectStyle.item}
            key={Math.random() * 10}
          >
            <Image src={data.img} alt="img" />
            <div className={ProjectStyle.projectDetail}>
              <p>{data.desc}</p>
              <ListItemButton
                onClick={() => {
                  window.open(data.projectLink);
                }}
              >
                <ListItemText>Link</ListItemText>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  window.open(data.gitHubRepo);
                }}
              >
                <GitHubIcon></GitHubIcon>
              </ListItemButton>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectItem;
