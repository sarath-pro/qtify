import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from "./Content.module.css"
import Section from '../Section/Section'

function Content() {
    const [topAlbums, setTopAlbums] = useState([])
    const [newAlbums, setNewAlbums] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url1 = 'https://qtify-backend-labs.crio.do/albums/top'
                let response1 = await axios.get(url1)
                console.log(response1.data)
                setTopAlbums(response1.data)
                let url2 = 'https://qtify-backend-labs.crio.do/albums/new'
                let response2 = await axios.get(url2)
                console.log(response2.data)
                setNewAlbums(response2.data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <Section title={'Top Albums'} data={topAlbums} type={'Album'}/>
            <Section title={'New Albums'} data={newAlbums} type={'Album'}/>
        </>
    )
}

export default Content