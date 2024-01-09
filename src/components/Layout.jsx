import { Container } from "@mui/material";
// import axios from "axios";
import React from "react";
import ResponsiveAppBar from "./AppBar";
import HeroCard from "./HeroCard";
import CardsList from "./Card";
import Cards from "./Card";
import Footer from "./Footer";
import FormModal from "./FormModal";

function Layout() {
  // let getData = async () => {
  //   const response = await axios.get(
  //     "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
  //   );
  //   const movies = await response.data;
  //   console.log(movies);
  //   console.log(response);
  // };
  // getData();
  return (
    <Container
      maxWidth="100vw"
      sx={{ bgcolor: "#EEEFF0", overflow: "hidden", padding: "0 !important" }}
    >
      <ResponsiveAppBar />
      <HeroCard />
      <Cards category={"Popular"} />
      <Cards category={"Recommended"} />
      <FormModal />
      <Footer />
    </Container>
  );
}

export default Layout;
