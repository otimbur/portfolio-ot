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
          maxWidth: "800px",
          fontFamily: "monospace",
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
    </div>
  );
}
