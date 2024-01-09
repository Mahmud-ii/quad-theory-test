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

// const itemData = cardItems
// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
//     title: "Bed",
//     author: "swabdesign",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
//     title: "Books",
//     author: "Pavel Nekoranec",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     title: "Sink",
//     author: "Charles Deluvio",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//     title: "Kitchen",
//     author: "Christian Mackie",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
//     title: "Blinds",
//     author: "Darren Richardson",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
//     title: "Chairs",
//     author: "Taylor Simpson",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
//     title: "Laptop",
//     author: "Ben Kolde",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
//     title: "Doors",
//     author: "Philipp Berndt",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
//     title: "Coffee",
//     author: "Jen P.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
//     title: "Storage",
//     author: "Douglas Sheppard",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
//     title: "Candle",
//     author: "Fi Bell",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//     title: "Coffee table",
//     author: "Hutomo Abrianto",
//   },
// ];
