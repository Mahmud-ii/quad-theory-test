import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useDispatch, useSelector } from "react-redux";
import { getCardItems } from "../store/slices/cardSlice";
import { useEffect } from "react";

export default function CardsList() {
  const dispatch = useDispatch();
  const { cardItems, isLoading, formOpen, translate } = useSelector(
    (store) => store.card
  );
  console.log(cardItems);
  useEffect(() => {
    dispatch(getCardItems());
  }, []);
  const itemData = cardItems;
  return (
    <Box
      sx={{
        margin: "20px auto",
        overflowX: "hidden",

        maxWidth: "lg",
      }}
    >
      {isLoading ? (
        <Box sx={{ textAlign: "center" }}>Loading...</Box>
      ) : (
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fit, 180px) !important",
            gridAutoColumns: "minmax(150px, 1fr)",
            overflowX: "hidden",
            transform: `translateX(${translate}%)`,
          }}
          gap={10}
        >
          {/* <ImageList variant="masonry" cols={5} gap={8}> */}
          {itemData?.map((item) => (
            <ImageListItem key={item.Id}>
              <img
                srcSet={`${item.ImageUrl}`}
                src={`${item.ImageUrl}`}
                alt={item.Name}
                loading="lazy"
                style={{ borderRadius: "20px" }}
              />
              <ImageListItemBar
                position="below"
                title={item.Name}
                sx={{
                  textAlign: "center",
                  color: "#535353",
                  cursor: "pointer",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
