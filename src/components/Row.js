import React, { useEffect, useState } from 'react'

import axios from '../axios.js'

function Row({title,fetchURL}) {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchUrl(){
               const req=await axios.get(fetchURL)
               console.log(req)
               return req;
        }
        fetchUrl()
    },[])
  return (
    <div>
       <h1> {title}</h1>

    </div>
  )
}

export default Row