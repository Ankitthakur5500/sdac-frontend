import React from 'react'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

function Topnavbar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <div className='d-inline'>
              <a href="#" className=""><DraftsOutlinedIcon/><span className="d-none d-md-inline-block">shreedurgaonline@gmail.com</span></a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#" className=""><PhoneIcon/> <span className="d-none d-md-inline-block">+91 9706124551</span></a>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="d-inline">
              <a href="#" className=""><XIcon/><span className="d-none d-md-inline-block">Twitter</span></a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#" className=""><FacebookIcon  /><span className="d-none d-md-inline-block">Facebook</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topnavbar;