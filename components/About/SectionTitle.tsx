import { Typography } from "@mui/material";
import AboutStyle from "../../styles/About.module.css";

interface Props {
  name: string;
}

export default function SectionTitle({ name }: Props) {
  return (
    <div className={AboutStyle.TitleSection}>
      <Typography
        component="div"
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          alignContent: "center",
          fontFamily: "monospace",
          fontSize: 30,
          fontWeight: "medium",
        }}
      >
        {name}
      </Typography>
    </div>
  );
}
