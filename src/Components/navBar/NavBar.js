import React, { useEffect } from 'react';
import './NavBar.css';

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbars = document.getElementsByClassName('navbar');
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      
      for (let i = 0; i < navbars.length; i++) {
        if (scrolled > 0) {
          navbars[i].classList.add('scrolled');
        } else {
          navbars[i].classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar'>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  );
}

export default NavBar;
