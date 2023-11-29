import {React , useContext , useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import {FavoriteContext} from "../Store/FavoriteState";

function Master() {
  const { data , setData } =  useContext(FavoriteContext);
  
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Master