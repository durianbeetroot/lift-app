import React, { useState } from "react";

import anim from './css/animated.css';
import logo from './img/logo.png';

function Header(){

    const [navbarState,setNavbarState] = useState(false);

    // const keyframes =
    // `@-webkit-keyframes ${animationName} {
    //     10% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)} 
    //     90% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)}
    //     100% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300}px)}
    // }`;

    return(
        <nav className="bg-neutral-800">
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="flex space-x-2">
                        <div>
                            <a className="flex items-center py-4 px-2"> 
                                <img src={logo} alt="logo" className="h-12 w-12 mr-2 ml-2"></img>
                                <span className="text-amber-400 text-3xl">LIFT</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4 pr-[5vw]">
                        <a className="px-10 text-amber-400 hover:text-white transition duration-300">HOME</a>
                        <a className="px-10 text-amber-400 hover:text-white transition duration-300">ABOUT</a>
                        <a className="px-10 text-amber-400 hover:text-white transition duration-300">SERVICES</a>
                        <a className="px-10 text-amber-400 hover:text-white transition duration-300">PROJECT</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none" onClick={()=> setNavbarState(!navbarState)}>
                            <svg
                                className="w-8 h-8 text-amber-500"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${navbarState ? "block" : "hidden"} py-4`}>
                    <a className="block px-4 py-2 text-amber-400 hover:text-white transition duration-300">HOME</a>
                    <a className="block px-4 py-2 text-amber-400 hover:text-white transition duration-300">ABOUT</a>
                    <a className="block px-4 py-2 text-amber-400 hover:text-white transition duration-300">SERVICES</a>
                    <a className="block px-4 py-2 text-amber-400 hover:text-white transition duration-300">PROJECTS</a>
                </div>
            </div>
        </nav>
        
        // <div className="w-[1440px] h-[115px] relative">
        //     <div className="w-[1440px] h-[115px] left-0 top-0 absolute bg-neutral-800" />
        //     <div className="w-[191px] h-[74px] left-[28px] top-[12px] absolute">
        //     <img className="w-[74px] h-[74px] left-0 top-0 absolute" src={logo} />
        //     <div className="left-[90px] top-[26px] absolute text-amber-400 text-5xl font-normal">LIFT</div>
        //     </div>
        //     <div className="left-[449px] top-[46px] absolute text-white text-2xl font-normal">HOME</div>
        //     <div className="left-[1021px] top-[46px] absolute text-amber-400 text-2xl font-normal">ABOUT</div>
        //     <div className="left-[626px] top-[46px] absolute text-amber-400 text-2xl font-normal">SERVICES</div>
        //     <div className="left-[835px] top-[46px] absolute text-amber-400 text-2xl font-normal">PROJECT</div>
        //     <div className="w-[78px] h-1 left-[449px] top-[70px] absolute bg-amber-400" />
        // </div>
    )
}

export default Header
