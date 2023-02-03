import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { StyledBtn1 } from "./Button";

const Nav = () => {
  const router = useRouter();

  return (
    <AppBar
      position="sticky"
      sx={{ background: "white", padding: "1rem" }}
      elevation={0}
    >
      <Toolbar>
        <IconButton size="large" edge="start">
          <GitHubIcon
            sx={{ fontSize: 50, color: "#DDD0C8" }}
            onClick={() => {
              window.open("https://github.com/otimbur");
            }}
          />
        </IconButton>
        <IconButton>
          <LinkedInIcon
            sx={{ fontSize: 50, color: "#DDD0C8" }}
            onClick={() => {
              window.open("https://www.linkedin.com/in/olga-timbur-072817236/");
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 2, color: "black", padding: 2, fontFamily: "Mon" }}
        ></Typography>
        <Stack direction="row" spacing={4}>
          <StyledBtn1 type="button" onClick={(e) => router.push("/home")}>
            Home
          </StyledBtn1>
          <StyledBtn1 onClick={() => router.push("/about")}>About</StyledBtn1>
          <StyledBtn1 onClick={() => router.push("/resume")}>Resume</StyledBtn1>
          <StyledBtn1 onClick={() => router.push("/contact")}>
            Connect
          </StyledBtn1>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
