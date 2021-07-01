import './index.css';
import {Header} from "./MyComponents/Header";
import { Feedback } from "./MyComponents/Feedback";
import { Footer } from "./MyComponents/Footer";
import { AddForm } from "./MyComponents/AddForm";
import axios from 'axios'
import React, { useState, useEffect } from 'react';


function App() {
  let [mylist,setmylist]=useState([])
  useEffect(()=>{
    axios.get('https://aman-server.herokuapp.com/getalluser')
    .then(res=>{
      console.log(res);
      setmylist(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


  return ( 
    <> 
    <Header/> 
      <AddForm setmylist={setmylist}  />
      <Feedback mylist={mylist}  />
      <Footer />
    </>
  );
}

export default App;
