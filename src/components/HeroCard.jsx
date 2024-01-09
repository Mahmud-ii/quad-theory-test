import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import heroImg from "../assets/Image1.png";

export default function HeroCard() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: { xs: "transparent", sm: "#F79F1F" },
        boxShadow: "none",
        width: { xs: "100%", sm: "80%" },
        textAlign: { xs: "center", sm: "left" },
        margin: "80px auto",
        maxWidth: "lg",
        borderRadius: "50px",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "60px 0px 60px 0px", sm: "60px 0px 60px 80px" },
        }}
      >
        <CardContent
          sx={{ flex: "1 0 auto", color: { xs: "#000", sm: "#fff" } }}
        >
          <Typography
            component="div"
            variant="h4"
            mb={4}
            sx={{ fontWeight: { xs: "600", sm: "700" } }}
          >
            Deliver Food To Your Door Step|
          </Typography>
          <Typography
            variant="subtitle1"
            color={{ xs: "#7e7e7e", sm: "#c9c9c9" }}
            component="div"
            fontSize="1.15rem"
          >
            Authentic Food, Quick Service, Fast Delivery
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "95%", sm: "45%" },
          margin: { xs: "0 auto", sm: "0" },
          bgcolor: { xs: "#FD9460", sm: "transparent" },
          borderRadius: "50px",
        }}
        image={heroImg}
        alt="Live from space album cover"
      />
    </Card>
  );
}
