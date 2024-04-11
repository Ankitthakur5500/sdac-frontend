import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import Signin from '@/app/components/signin/Signin'
import Topnavbar from '@/app/components/topnavbar/Topnavbar'
import React from 'react'
// import Styles from './page.module.css'
// import sdaclogo from '../../Assets/images/sdacLogo.png'

function page() {
  return (
        <div>
        <Topnavbar/>
        <Navbar/>
        <Signin/>
        <Footer/>
        </div>
  )
}

export default page