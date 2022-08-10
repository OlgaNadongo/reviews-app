import React from 'react';
import Header from "./Header"
import './App.css';
//import Review from './Review';
import ReviewsContent from './ReviewsContent';
import { useState, useEffect } from 'react';


function App() {

  const [reviews, setReviews]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/reviews")
    .then(r=>r.json())
    .then(data=>{
      // console.log(data)
      setReviews(data)
    })
    .catch((error)=>{console.log(error)}) 
  },
   
 [] )


  return (
    <div className="App">
          <Header/>
          <ReviewsContent reviews={reviews} setReviews={setReviews}/>
      
      
    </div>
  );
}

export default App;
