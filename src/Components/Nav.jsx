import {  NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import Mode from './Toggal/Mode'

const Nav = (props) => {
  return (
    <>
    <div className='fixed h-30 w-full z-20 backdrop-blur-md'>
      <nav className='flex justify-between p-8'>
        <h1 className='text-3xl font-semibold'>Tarun Verma</h1>
         <div className='flex gap-8 text-1.75xl'>
        <HashLink className='hover:text-gray-500' smooth to="/#">Home</HashLink>
        <HashLink className='hover:text-gray-500' smooth to="/#about">About</HashLink>
        <HashLink className='hover:text-gray-500' smooth to="/#projects">Projects</HashLink>
        <HashLink className='hover:text-gray-500' smooth to="/#resume">Resume</HashLink>
          {/* <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink> */}
          <Mode event={props.act}/>
         </div>
      </nav>
    </div>
    </>
  )
}

export default Nav
