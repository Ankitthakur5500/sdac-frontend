"use client"
import React from 'react'
import transport from '../../Assets/images/transport.jpg'
import { useState } from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';

function Track() {
  const [consignmentNumber,setConsignmentNumber] = useState("");
  const router = useRouter();
  const styling = {
    backgroundImage: `url('${transport.src}')`,
    width:"100%",
    height:"100%"
  }
   async function handleSubmit(event){
    event.preventDefault();
    setConsignmentNumber("");
    console.log("->",consignmentNumber);
    // const result = await axios.post(`http://localhost:3001/`,{consignmentNumber});
    // console.log("->",result);
    router.push('/pages/track');
  }
  return (
    <div className="ftco-blocks-cover-1">
        <div className="ftco-cover-1 overlay" style={styling}>
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-6">
                <h1>TRANSPORTATIONS &amp; LOGISTICS</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem eius eligendi esse quod?</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Your tracking number" required onChange={(event)=>(setConsignmentNumber(event.target.value))} value={consignmentNumber}/>
                    <input type="submit" className="btn btn-primary text-white px-4" value="Track Now"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Track