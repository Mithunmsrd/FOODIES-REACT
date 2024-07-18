// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from "react-router-dom";
import Home from './components/Home'
import Userlogin from './pages/Userlogin';
import UserRegister from './pages/UserRegister';
import Restaurant from "./pages/Restaurant";
import Food1 from "./pages/Food1";
import Food2 from "./pages/Food2";
import Food3 from "./pages/Food3";
import Payment from "./pages/Payment";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AddHotel from "./pages/AddHotel";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
      </>
    )
  )

  return (
    <>
     <Home/>
    </>
  )
}

export default App
