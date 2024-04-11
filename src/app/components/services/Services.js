import React from 'react'

function Services() {
  return (
    <div className="site-section ftco-service-image-1 pb-5">
          <div className="container">
            <div className="owl-carousel owl-all owl-loaded">
            <div className="owl-stage-outer"><div className="owl-stage"><div className="owl-item active"><div className="service text-center">
                <a href="#"><img src="images/depot_img_1.jpg" alt="Image" className="img-fluid"/></a>
                <div className="px-md-3">
                  <h3><a href="#">Truck Insurance</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!</p>
                </div>
              </div></div><div className="owl-item"><div className="service text-center">
                <a href="#"><img src="images/depot_img_2.jpg" alt="Image" className="img-fluid"/></a>
                <div className="px-md-3">
                  <h3><a href="#">Plane Transportation</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!</p>
                </div>
              </div></div><div className="owl-item"><div className="service text-center">
                <a href="#"><img src="images/depot_img_3.jpg" alt="Image" className="img-fluid"/></a>
                <div className="px-md-3">
                  <h3><a href="#">Sea &amp; Ear Freight</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!</p>
                </div>
              </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><span className="icon-arrow_back"></span></div><div className="owl-next"><span className="icon-arrow_forward"></span></div></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div>
          </div>
        </div>
  )
}

export default Services