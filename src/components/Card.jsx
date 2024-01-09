import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardsList from "./Cards";
import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modalSlice";
import { slideNext, slidePrev } from "../store/slices/cardSlice";
export default function Cards({ category }) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: "80%",
        margin: "40px auto ",
        maxWidth: "lg",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle1"
          color="#000"
          component="div"
          fontWeight={500}
          sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" } }}
        >
          {category}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            sx={{ color: "#FD6011" }}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            AddMore
          </Button>
          <Box>
            <ArrowBackIosIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fe6011",
                },
              }}
              onClick={() => {
                dispatch(slidePrev());
              }}
            />
            <ArrowForwardIosIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fe6011",
                },
              }}
              onClick={() => {
                dispatch(slideNext());
              }}
            />
          </Box>
        </Box>
      </Box>
      <CardsList />
    </Box>
  );
}
