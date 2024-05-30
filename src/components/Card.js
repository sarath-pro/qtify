import React from "react";
import Chip from "@mui/material/Chip";
import classes from "./Card.module.css";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Tooltip from '@mui/material/Tooltip';


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
  let title = data.follows ? data.songs.length+" Songs" : ""
  return (
    // <ThemeProvider theme={theme}>
    <Tooltip title={title} placement="top" arrow>
      <div className={classes.card}>
        <div className={classes.container}>
          <img className={classes["card-img"]} src={image} alt="#" />
          {/* <div> */}
          <Chip className={classes["chips"]} label={count} />
          {/* </div> */}
        </div>
        <div className={classes["card-name"]}>{name}</div>
      </div>
    </Tooltip>
  );
}

export default Card;
