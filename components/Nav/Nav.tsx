import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  Hidden,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import router from "next/router";
import { StyledBtn1 } from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const drawerWidth = 220;

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ background: "#DDD0C8", padding: "0.5rem" }}
        elevation={10}
      >
        <Toolbar
          sx={{
            display: "inline-flex;",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }), color: "white" }}
            >
              <MenuIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
            <IconButton size="large" edge="start">
              <GitHubIcon
                sx={{ fontSize: 40, color: "white" }}
                onClick={() => {
                  window.open("https://github.com/otimbur");
                }}
              />
            </IconButton>
            <IconButton size="large" edge="start">
              <LinkedInIcon
                sx={{ fontSize: 40, color: "white" }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/olga-timbur-072817236/"
                  );
                }}
              />
            </IconButton>
          </div>
          <Hidden smDown>
            <Stack
              direction="row"
              spacing={5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <StyledBtn1 type="button" onClick={(e) => router.push("/home")}>
                Home
              </StyledBtn1>
              <StyledBtn1 onClick={() => router.push("/about")}>
                About
              </StyledBtn1>
              <StyledBtn1 onClick={() => router.push("/resume")}>
                Resume
              </StyledBtn1>
              <StyledBtn1 onClick={() => router.push("/contact")}>
                Connect
              </StyledBtn1>
            </Stack>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem>
            <ListItem>
              <StyledBtn1 type="button" onClick={(e) => router.push("/home")}>
                Home
              </StyledBtn1>
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItem>
              <StyledBtn1 type="button" onClick={(e) => router.push("/about")}>
                About
              </StyledBtn1>
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItem>
              <StyledBtn1 type="button" onClick={(e) => router.push("/resume")}>
                Resume
              </StyledBtn1>
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItem>
              <StyledBtn1
                type="button"
                onClick={(e) => router.push("/contact")}
              >
                Connect
              </StyledBtn1>
            </ListItem>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Nav;
