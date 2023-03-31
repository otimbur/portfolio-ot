import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StyledBtn2 } from "./Button";
import { List, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Image from "next/image";
import AboutStyle from "../styles/About.module.css";

const style = {
  position: "absolute" as "absolute",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  haight: 400,
  boxShadow: "5px 20px 30px Gray",
  backgroundColor: "white",
  borderRadius: 5,
};

interface Props {
  jobImg: string;
  jobTitle: string;
  jobDedscription: string;
  skill: any;
  jobCompany: string;
}

export const MediaCard = ({
  jobImg,
  jobTitle,
  jobDedscription,
  skill,
  jobCompany,
}: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{
        width: 260,
        height: 350,
        backgroundColor: "transparent",
        boxShadow: "0px 15px 20px #323232",
        borderRadius: 5,
        display: "flex",
        alignItem: "center",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        aligncontent: "space-evenly",
        overflow: "hidden",
      }}
    >
      <CardContent className={AboutStyle.CardContent}>
        <Image
          className={AboutStyle.MediaCardImg}
          src={jobImg}
          alt={"name"}
          width="250"
          height="150"
        ></Image>
        <Typography
          gutterBottom
          component="div"
          sx={{
            alignItem: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            aligncontent: "space-evenly",
            fontFamily: "monospace",
            fontSize: 10,
            fontWeight: "bold",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-line-clamp": 3,
            "-webkit-box-orient": "vertical",
          }}
        >
          {jobTitle}
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          {jobCompany}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ fontFamily: "monospace", fontSize: 10 }}
        >
          {jobDedscription}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          alignContent: "center",
          justifyContent: "center",
          marginTop: "about",
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": 3,
          "-webkit-box-orient": "vertical",
        }}
      >
        <StyledBtn2
          onClick={handleOpen}
          sx={{
            fontSize: 20,
            minWidth: 100,
            maxHeight: 20,
          }}
        >
          Experience
        </StyledBtn2>
      </CardActions>
      <Modal
        key={jobTitle}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          fontFamily: "serif",
          display: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <List>{skill}</List>
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};
