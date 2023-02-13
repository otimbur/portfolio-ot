import { Typography } from "@mui/material";

interface Props {
  title: string;
}
export const SectionTitle = ({ title }: Props) => {
  return (
    <span>
      <Typography
        sx={{
          display: "flex",
          alignItem: "start",
          justifyContent: "start",
          fontFamily: "serif",
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "uppercase",
          marginLeft: "3rem",
        }}
      >
        {title}
      </Typography>
      <hr />
    </span>
  );
};
