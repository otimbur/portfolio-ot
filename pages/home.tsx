import React from "react";
import Image from "next/image";
import StyleHome from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import { StyledBtn2 } from "../components/Button";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className={StyleHome.HomePage}>
      <div className={StyleHome.Content}>
        <div className={StyleHome.Name}>
          <Typography variant="h1" mt={2}>
            Olga Timbur
          </Typography>
          <div className={StyleHome.HomeButtons}>
            <StyledBtn2 disableRipple onClick={() => router.push("/contact")}>
              Connect
            </StyledBtn2>
            <StyledBtn2 disableRipple onClick={() => router.push("/resume")}>
              Resume
            </StyledBtn2>
          </div>
        </div>
        <div className={StyleHome.Picture}>
          <Image
            className={StyleHome.ProfilePic}
            src={require("../src/profil.jpg")}
            alt="profile"
          ></Image>
        </div>
      </div>
      <div className={StyleHome.aboutText}>
        <Typography
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            maxWidth: "800px",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Hello, I am Olga, a Software Engineer in the Test
        </Typography>
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            maxWidth: "700px",
            fontSize: 23,
          }}
        >
          Passionate about automation and front-end development.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
