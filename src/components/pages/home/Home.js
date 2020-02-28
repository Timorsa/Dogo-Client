import React, { useEffect } from 'react';
import { TweenMax, Expo } from 'gsap';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Home = () => {
  useEffect(() => {
    TweenMax.to('.overlay h1', 2, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
    });

    TweenMax.to('.overlay', 2, {
      delay: 1,
      top: '-100%',
      ease: Expo.easeInOut
    });

    TweenMax.from('.logo', 1, {
      delay: 2.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(
      '.hm-nav-itm',
      1,
      {
        delay: 2.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
      },
      0.2
    );

    TweenMax.from('.side-strip', 2, {
      delay: 2.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
    });
  }, []);
  return (
    <div className="home">
      <div className="overlay">
        <h1>D . O . G . O</h1>
      </div>
      <div className="top-sec">
        <div className="hm-header">
          <div className="logo">D.O.G.O</div>
          <ul className="hm-nav">
            <li className="hm-nav-itm ">Sign-In</li>
            <li className="hm-nav-itm ">Sign-Up</li>
          </ul>
        </div>
        <div className="side-strip">
          <span>DOG OWNERS SOCIAL NETWORK</span>
        </div>
      </div>
      <div className="2nd-sec">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

export default Home;
