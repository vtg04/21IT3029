import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdMenu } from "react-icons/md";
import { GiCornucopia } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const[drop,setdrop]=useState(true);
  const Dropdown=()=>{
    console.log("Before the click ", drop)
    
   setdrop(!drop);
   console.log(drop);
  }
  return (
    <>
      <nav className="flex bg-blue-300 justify-between items-center p-3 sticky">
      <a href='#' className='flex gap-2 items-center'>
     <img className='max-w-20 max-h-20f' src='https://www.feedough.com/wp-content/uploads/2016/09/brand-image.png'></img>
     <span className='font-bold text-4xl'>Company Name</span>
      </a>


      {/* The main menu */}
      <div className='hidden md:flex gap-14'>
      <details className="dropdown">
        <summary className="m-1 btn">Company</summary>
     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>AMZ</a></li>
    <li><a>FLP</a></li>
    <li><a>SNP</a></li>
    <li><a>MYN</a></li>
    <li><a>Azo</a></li>
      </ul>
     </details>

     <details className="dropdown">
        <summary className="m-1 btn">Category</summary>
     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Phone</a></li>
    <li><a>Computer</a></li>
    <li><a>TV</a></li>
      </ul>
     </details>
 
      </div>
        <button className='hidden md:flex gap-4 items-center p-3 border-2 border-black rounded-lg hover:border-blue-700'>
        <GiCornucopia />
          <span>Explore the website</span>
          <FaArrowRightLong />
        </button>

            {/*Drop down menu  */}
            <button className='p-2 md:hidden' onClick={Dropdown}>
            {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" /> */}
            <MdMenu  className='text-4xl text-gray-500'/>
            </button>
          {/* Drop down menu */}
          {
            (drop==false) ?(
              
              <div className=' bg-white inset-0 fixed '>
              <div className='flex justify-between  bg-blue-300  items-center p-3'>
              <a href='#' className='flex gap-2 items-center'>
     <img className='max-w-20 max-h-20f' src='https://www.feedough.com/wp-content/uploads/2016/09/brand-image.png'></img>
     <span className='font-bold text-4xl'>Company Name</span>
      </a>
         <button onClick={Dropdown}>
          <RxCross1  className='text-4xl text-gray-500'/>
         </button>
      </div>

      {/* Drop down options */}

      <div className='mt-6 p-3'>
          <a  href="#" className='font-bold text-lg  block rounded-lg  p-3 hover:bg-gray-500' > Pricing</a>
          <a  href="#" className='font-bold text-lg  block rounded-lg  p-3 hover:bg-gray-500' > Docs</a>
          <a  href="#" className='font-bold text-lg  block rounded-lg  p-3 hover:bg-gray-500' > Blogs</a>
          <a  href="#" className='font-bold text-lg  block rounded-lg  p-3 hover:bg-gray-500' > sign in</a>
          <a  href="#" className='font-bold text-lg  block rounded-lg  p-3 hover:bg-gray-500' > Login </a>
      </div>

          </div>
          ):(<></>)
          }

          {/* <div className='bg-white fixed inset-0 flex  '>
          <span>Menu</span>
          <button onClick={Dropdown}>
          <RxCross1 />
          </button>
          
          
          </div> */}

      </nav>
    </>
  )
}

export default Navbar