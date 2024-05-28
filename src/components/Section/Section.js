import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from "./Section.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import Card from "../Card"

function Section() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url1 = 'https://qtify-backend-labs.crio.do/albums/top'
                let response = await axios.get(url1)
                console.log(response.data)
                setData(response.data)
                console.log('data')
                console.log(data)
                let url2 = 'https://qtify-backend-labs.crio.do/albums/new'
                let response2 = await axios.get(url2)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className={classes['section-header']}>
                <h3>Top Albums</h3>
                <button>Collapse</button>
            </div> 
            { data.length === 0 ? 
            <>
                <CircularProgress />
            </>
            :
            <div className={classes.grid}>  

                {data.map((item)=>{
                    return <Card image={item.image} name={item.title} count={item.follows} />
                })}
            </div>
            }
        </>
    )
}

export default Section