import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from "./Section.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import Card from "../Card"

function Section({data}) {
    return (
        <>
            <div className={classes['section-header']}>
                <h3>Top Albums</h3>
                <button>Collapse</button>
            </div> 
            { data && data.length !== 0 ? 
            <div className={classes.grid}>  

                {data.map((item)=>{
                    return <Card image={item.image} name={item.title} count={item.follows} />
                })}
            </div>
            :
            <>
                <CircularProgress />
            </>
            }
        </>
    )
}

export default Section