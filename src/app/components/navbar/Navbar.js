"use client"
import React from 'react';
import Image from 'next/image';
import sdacLogo from '../../Assets/images/sdacLogo.png';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();
  function ankit(){
    import('bootstrap/dist/js/bootstrap.bundle');
  }
  function handleClick(){
    router.push('/pages/signin');
  }
    useEffect(()=>{
       ankit();
    },[]);
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ms-5">
            <a href="#"><Image className='navbar-brand' src={sdacLogo} width={300} height={80} alt='brand logo'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Why Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            <button className="btn btn-outline-primary m-4 me-5" type="submit" onClick={handleClick}>Sign in</button>
            </div>
        </div>
    </nav>
  )
}
export default Navbar;