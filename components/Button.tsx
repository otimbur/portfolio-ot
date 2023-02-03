import { Button, styled } from "@mui/material";

export const StyledBtn1 = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#323232",
  margin: 5,
  maxHeight: "3rem",
  minWidth: 160,
  padding: 15,
  borderRadius: 25,
  "&:hover": {
    backgroundColor: "#DDD0C8",
    color: "white",
  },
  fontSize: 25,
  textTransform: "none",
  fontWeight: "bold",
}));

export const StyledBtn2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#DDD0C8",
  color: "white",
  margin: 5,
  maxHeight: "3rem",
  minWidth: 160,
  padding: 15,
  borderRadius: 25,
  fontSize: 20,
  fontWeight: "bold",
  fontFamily: "Helvetica Neue",
  "&:hover": {
    backgroundColor: "#DDD0C8",
    color: "white",
  },
}));
