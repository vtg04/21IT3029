
import './App.css'
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
function App() {
 const[company, setcompany]=useState("AMZ")
 const[category, setcategory]=useState("Phone")

 const value=async()=>{
  try{
    const response=await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=10&minPri
    ce=1&maxPrice=10000`)
    console.log(response)
  }
catch(err){
  console.log("This is a error",err)
}
 }
  useEffect(()=>{

  value();
  },[company,category])
  return (
    <div  >
    <Navbar/>
    <div className='flex p-10 justify-between' >
    <Card/>
    <Card/>
    <Card/>
    </div>

    {/* <Feed/> */}
    </div>
  )
}

export default App
