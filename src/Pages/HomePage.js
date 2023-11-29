import React, { useState, useEffect, useContext } from 'react'
import styled, { keyframes } from 'styled-components';
import Buton from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import {FavoriteContext} from "../Store/FavoriteState";

// Define the gradient animation
const gradient = keyframes`
  0% {background-position: 0% 50%}
  50% {background-position: 80% 50%}
  100% {background-position: 0% 50%}
`;

// Create a styled div with the gradient animation and increased font size
const GradientText = styled.div`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(270deg, #4ECDC4, #4ECDC4);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 5s ease infinite; // Increase the duration to slow down the animation
`;

function HomePage() {
  const navigate = useNavigate();

    const { data , setData } =  useContext(FavoriteContext);
    useEffect(() =>{
      if(localStorage.getItem("data")) navigate('/IndexPage')
    },[])

  return (  
    <>
  <div className="h-[40vh] flex items-center justify-center">
    <GradientText>
      Welcome to the Favorite NPM Packages.
    </GradientText>
  </div>

  <div className="relative border-2 border-gray-300 p-4 rounded h-[30vh] w-[80vw] flex flex-col items-center justify-center mx-auto my-auto mb-[25vh]">
  <p> Add you favourite packages </p>
  
  <button
  className='bg-gradient-to-tr from-teal-500 to-teal-300 text-white shadow-lg mt-4 rounded-full p-3'
  onClick={
    () => {
      navigate('/AddFavourite')
    }
  }>
    Add Packages
  </button>
  
</div>
</>
  )
}

export default HomePage