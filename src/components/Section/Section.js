import React, { useState, useEffect } from "react";
import classes from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card";
import Carousel from "../Carousel/Carousel";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function Section({ title, data, type, useFilters }) {
  const [fullView, setFullView] = useState(false);
  const [value, setValue] = useState("all");
  const [filteredData, setFilteredData] = useState(data)
  console.log('data is :: ', data)
  console.log('value1 is:: ', value)
  useEffect(()=>{
    setFilteredData(data)
    console.log('filtered :: ', filteredData)
    if(useFilters) {
      if(value==='all') {
        setFilteredData(data)
      } else {
        let d = data.filter((item)=>item.genre.key===value)
        console.log('filtered data::')
        console.log(d)
        setFilteredData(d)
      } 
    }
  })
  // useEffect(()=>{
  //   console.log('value2 is::', value)
    
  // }, [value])
  // filteredData = data.filter()

  return (
    <div>
      <div className={classes["section-header"]}>
        <h3>{title}</h3>
        {!useFilters && (
          <button
          onClick={() => {
            setFullView(prevState => !prevState)
          }}
        >
          {fullView ? 'Collapse' : 'Show all'}
        </button>
        )}
      </div>
      {useFilters && (
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={(event)=>{
                console.log(event.target.textContent)
                setValue(event.target.textContent.toLowerCase())
              }} aria-label="lab API tabs example" textColor='white'>
                <Tab style={{color: '#ffffff'}} label="All" value="all" />
                <Tab style={{color: '#ffffff'}} label="Rock" value="rock" />
                <Tab style={{color: '#ffffff'}} label="Pop" value="pop" />
                <Tab style={{color: '#ffffff'}} label="Jazz" value="jazz" />
                <Tab style={{color: '#ffffff'}} label="Blues" value="blues" />
              </TabList>
            </Box>
            <TabPanel value="all">All</TabPanel>
            <TabPanel value="rock">Rock</TabPanel>
            <TabPanel value="pop">Pop</TabPanel>
            <TabPanel value="jazz">Jazz</TabPanel>
            <TabPanel value="blues">Blues</TabPanel>
          </TabContext>
        )}
      {data && data.length !== 0 ? (
        <>
          {fullView ? (
            <>
              <div className={classes.grid}>
                {filteredData.map((item) => {
                  return (
                    <Card
                      data={item}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <Carousel data={filteredData} renderComponent={(item)=>(<Card
                      data={item}
                    />)} />
            </>
          )}
        </>
      ) : (
        <>
          <CircularProgress />
        </>
      )}
    </div>
  );
}

export default Section;
