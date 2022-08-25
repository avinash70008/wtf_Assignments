import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Data = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
getData()
    })
    function getData() {
axios.get("https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
    }



  return (
    <div></div>
  )
}

export default Data