import React from "react";
import Image from "next/image";
import StyleHome from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import { StyledBtn2 } from "../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const typographyEl = document.querySelector(".animated-typography");

    if (typographyEl instanceof HTMLElement) {
      // Increase font size by 1px for every click
      const fontSize = 23 + clickCount * 1;
      typographyEl.style.fontSize = `${fontSize}px`;

      // Apply animation class for 1 second after click
      typographyEl.classList.add("animated");
      setTimeout(() => {
        typographyEl.classList.remove("animated");
      }, 50);
    }
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div className={StyleHome.HomePage}>
      <div className={StyleHome.Content}>
        <div className={StyleHome.Name}>
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
          <div className={StyleHome.HomeButtons}>
            <StyledBtn2 disableRipple onClick={() => router.push("/contact")}>
              Connect
            </StyledBtn2>
            <StyledBtn2 disableRipple onClick={() => router.push("/resume")}>
              Resume
            </StyledBtn2>
          </div>
        </div>

        <Image
          className={StyleHome.ProfilePic}
          src={require("../src/profil.jpg")}
          alt="profile"
        ></Image>
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
            maxWidth: "1000px",
            fontSize: 23,
          }}
          onClick={handleClick}
          className="animated-typography"
        >
          Passionate and motivated software developer in test can jump into any
          job quickly. Hands-on coding experience at Salesforce in quality
          assurance and six months of collegiate-level training. Solid
          understanding of software development principles, Agile methodologies,
          and testing best practices. Eager to apply skills to deliver
          high-quality software products that meet the needs of the end users.
          Excited about working at a company with shared values that promotes
          career growth.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
