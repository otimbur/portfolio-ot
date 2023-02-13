import { Button, styled } from "@mui/material";

export const StyledBtn1 = styled(Button)(({ theme }) => ({
  margin: 3,
  maxHeight: "3rem",
  minWidth: 150,
  borderRadius: 25,
  "&:hover": {
    backgroundColor: "#DDD0C8",
    color: "#323232",
  },
  fontSize: 20,
  textTransform: "none",
  fontWeight: "bold",
  backgroundColor: "#323232",
  color: "white",
}));

export const StyledBtn2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#323232",
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
