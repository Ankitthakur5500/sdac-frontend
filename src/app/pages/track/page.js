import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import Topnavbar from '@/app/components/topnavbar/Topnavbar'
import React from 'react'

function page() {
  return (
    <div>
        <Topnavbar/>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default page