import React from "react";
import Chip from "@mui/material/Chip";
import classes from "./Card.module.css";
import { Box, ThemeProvider, createTheme } from "@mui/system";

// const theme = createTheme({
//   palette: {
//     background: {
//       white: "#ffffff",
//       black: "#121212",
//       green: "#34C94B",
//     },
//   },
// });

function Card({ data }) {
  // console.log(image)
  let image = data.image
  let count = data.follows ? data.follows+" Follows" : data.likes+" Likes"
  let name = data.title
  return (
    // <ThemeProvider theme={theme}>
      <div className={classes.card}>
        <div className={classes.container}>
          <img className={classes["card-img"]} src={image} alt="#" />
          {/* <div> */}
          <Chip className={classes["chips"]} label={count} />
          {/* </div> */}
        </div>
        <div className={classes["card-name"]}>{name}</div>
      </div>
    // </ThemeProvider>
  );
}

export default Card;
