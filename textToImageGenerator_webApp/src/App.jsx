import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { assets } from './assets/assets';
import { ToastContainer} from 'react-toastify';


const Home = lazy(()=>import('./pages/Home'));
const Result = lazy(()=>import('./pages/Result'));
const BuyCredit = lazy(()=>import('./pages/BuyCredit'));
const Navbar = lazy(()=>import('./components/Navbar'));
const Footer = lazy(()=>import('./components/Footer'));
const Login = lazy(()=>import('./components/Login'));
const BorderMovingAnim = lazy(()=>import('./components/BorderMovingAnim'));


export default function App(){

  return(<>
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen
     bg-gradient-to-b from-teal-50 to-orange-50 relative'>

      <Suspense fallback={<p>Loading...</p>}>
        <Navbar/>
        <Login/>
        <ToastContainer position="bottom-right"/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/buy' element={<BuyCredit/>}/>
            <Route path='/border' element={<BorderMovingAnim/>}/>
            
          </Routes>
      <Footer />
      </Suspense>
      <div className='absolute right-6 bottom-24 bg-yellow-300 rounded-full border-2'>
        <a href="#navbar">
          <img src={assets.arrow_up} alt={assets.arrow_up} className='w-8'/> 
        </a>
      </div>
    </div>
  </>)
}