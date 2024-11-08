"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './HomePage.css';
import Link from 'next/link';
import SlotCounter from 'react-slot-counter';

const HomePage: React.FC = () => {
  useEffect(() => {
    gsap.from(".text", { y: 40, opacity: 1, ease: "power2.inOut", delay: 1 });
    gsap.from(".loader", { width: 0, ease: "power4.inOut", delay: 2 });
    gsap.to(".pre-loader", { top: "-100%", ease: "power4.inOut", delay: 4 });
    gsap.from(".row", {
      y: 50,
      opacity: 1,
      ease: "power4.inOut",
      delay: 0.5,
      stagger: { amount: 0.3 },
    });
  }, []);

  return (
    <>
      <div className="container w-full h-screen flex flex-col bg-black text-white">
        <div className="navbar w-full h-10 bg-black flex items-center justify-between px-8 uppercase font-sans">
          <div className="logo p-2 font-blox">CodeDash</div>
          <div className="info">
          <SlotCounter value={100} duration={6} />+ Users
          </div>
          <Link href="/auth/login">
          <button className="link text-white bg-gradient-to-br from-yellow-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Sign In
          </button>
          </Link>
        </div>

        <div className="hero-section w-full h-90 bg-yellow-400 rounded-t-lg p-8 flex justify-center items-center relative">
          <div className="copy row row-2 flex flex-col-reverse md:flex-row items-center space-y-4">
            <div className="text-center text-9xl tracking-tight leading-tight font-extrabold text-black opacity-100">
            Practice Smart, Succeed Fast
            </div>
            <div className="text-md text-center font-medium text-black max-w-md">
            Prepare Smarter with Company-Specific Coding Practice for a Winning Edge
            </div>
          </div>
        </div>
      </div>

      <div className="spline absolute top-10 w-2/5 h-[90vh] md:w-full scale-90">
  <iframe
    src="https://my.spline.design/forhotburocopy-d8d6b1df53fea4cee2c21d09e6d7cb23/"
    frameBorder="0"
    width="100%"
    height="100%"
  ></iframe>
  
</div>


      <div className="pre-loader fixed top-0 w-full h-screen flex justify-center items-center bg-black">
        <div className="content flex flex-col items-center justify-center text-2xl font-sans text-white space-y-4">
          <div className="text">Everyone uses a <span className="italic font-serif">preloader</span>, sorry :(</div>
          <div className="loader w-44 h-0.5 bg-red-500"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
