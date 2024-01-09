import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import logo from "../assets/ptired.png";
import heroImg from "../assets/Image2.png";
import { Button, Container, InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function Footer() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    display: "flex",

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#A3A3A3",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  return (
    <Container
      maxWidth="xl"
      sx={{ p: "0 !important", bgcolor: "#F79F1F", mt: "100px" }}
    >
      <Card
        // fullWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#F79F1F",
          boxShadow: "none",
          width: "80%",
          margin: "40px auto 0px auto",
          padding: "40px 0 80px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "100%", sm: "60%" },
            // padding: "60px 0px 60px 80px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", color: "#FFF" }}>
            <Search>
              <StyledInputBase
                placeholder="Search Audiobook"
                inputProps={{ "aria-label": "search" }}
              />
              <Button
                sx={{
                  bgcolor: { xs: "#fff", sm: "#FD6011" },
                  color: { xs: "#FD6011", sm: "#fff" },
                  fontWeight: "600",
                  padding: "5px 30px 5px 30px",
                  margin: "5px",

                  "&:hover": {
                    bgcolor: alpha("#fd6011", 0.8),
                    color: "#fff",
                  },
                }}
              >
                AddMore
                <TrendingFlatIcon
                  sx={{
                    cursor: "pointer",
                    pl: 1,
                    fontSize: "2rem",
                  }}
                />
              </Button>
            </Search>
          </CardContent>
          <CardContent
            sx={{
              color: "#FFF",
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", sm: "flex-end" },
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "block" },
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 34,
                  cursor: "pointer",
                }}
                alt="Your logo."
                src={logo}
              />
              <Typography
                variant="subtitle1"
                color="#000"
                component="div"
                fontSize="1.15rem"
                fontWeight={500}
              >
                CopyrightcTripp.All Right Reserved
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                // bgcolor: "#FD6011",
              }}
            >
              <GoogleIcon
                sx={{
                  cursor: "pointer",

                  bgcolor: "#FD6011",
                  fontSize: "2.5rem",
                  p: 1,
                  borderRadius: "10px",
                }}
              />
              <FacebookIcon
                sx={{
                  cursor: "pointer",

                  bgcolor: "#FD6011",
                  fontSize: "2.5rem",
                  p: 1,
                  borderRadius: "10px",
                }}
              />
              <InstagramIcon
                sx={{
                  cursor: "pointer",
                  bgcolor: "#FD6011",
                  fontSize: "2.5rem",
                  p: 1,
                  borderRadius: "10px",
                }}
              />
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "25%", display: { xs: "none", sm: "block" } }}
          image={heroImg}
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
}
