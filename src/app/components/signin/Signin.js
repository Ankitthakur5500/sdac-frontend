"use client"
import React from 'react'
import sdacLogo from '../../Assets/images/sdac_logo_main.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


function Signin() {
  const router = useRouter();
  function handleSubmit(event){
    event.preventDefault();
    router.push('/pages/insertdata');
  }
  return (
    <div className='text-center signin'>
        <form className="form-signin" onSubmit={handleSubmit}>
        <Image className='mb-4' src={sdacLogo} width={80} height={70} alt='brand logo'/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
        <button type='submit' className="btn btn-lg btn-outline-primary btn-block">Sign in</button>
        <p className= "mt-5 mb-3 text-muted" >© 2017-2018</p>
        </form>
        </div>
  )
}

export default Signin