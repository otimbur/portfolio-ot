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
        height: 390,
        backgroundColor: "transparent",
        boxShadow: "0px 15px 20px #d9d9d9",
        borderRadius: 5,
        display: "flex",
        alignItem: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        aligncontent: "space-evenly",
      }}
    >
      <Image src={jobImg} alt={"name"} width="220" height="150"></Image>
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            aligncontent: "space-evenly",
            fontFamily: "monospace",
            fontSize: 10,
            fontWeight: "bold",
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledBtn2
          size="small"
          onClick={handleOpen}
          sx={{
            alignContent: "center",
            display: "flex",
            justifyContent: "space-between",
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
