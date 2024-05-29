import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [fullView, setFullView] = useState(true);
  let cards = []
  console.log('data is ::', data)
  if(data && data.length>0) {
    console.log('inside data is ::', data)
    data.forEach(item => {
        cards.push(<Card
            image={item.image}
            name={item.title}
            count={item.follows}
          />)
    });
  }

  return (
    <>
      <div className={classes["section-header"]}>
        <h3>{title}</h3>
        <button
          onClick={() => {
            setFullView(prevState => !prevState)
          }}
        >
          {fullView ? 'Collapse' : 'Show all'}
        </button>
      </div>
      {data && data.length !== 0 ? (
        <>
          {fullView ? (
            <>
              <div className={classes.grid}>
                {data.map((item) => {
                  return (
                    <Card
                      image={item.image}
                      name={item.title}
                      count={item.follows}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <Carousel data={data} renderComponent={(item)=>(<Card
                      image={item.image}
                      name={item.title}
                      count={item.follows}
                    />)} />
            </>
          )}
        </>
      ) : (
        <>
          <CircularProgress />
        </>
      )}
    </>
  );
}

export default Section;
