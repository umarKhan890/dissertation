import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <>
      <>
  <div className="hero parallaxie">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="hero-content">
            <div className="section-title dark-section">
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Secure your world, effortlessly today!
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Protect your digital world with seamless, cutting-edge
                cybersecurity solutions designed to safeguard your data,
                systems, and peace of mind.
              </p>
            </div>
  
            <div
              className="hero-content-body wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hero-btn">
                <Link href="#" className="btn-default btn-highlighted">
                  learn more
                </Link>
              </div>
           
            </div>
         
            <div className="hero-content-footer">
              <div className="hero-list wow fadeInUp" data-wow-delay="0.8s">
                <ul>
                  <li>Access control management</li>
                  <li>Security awareness training</li>
                </ul>
              </div>
            
              <div className="hero-client-box">
                <div className="our-client-images">
                  <div className="client-image">
                    <figure className="image-anime">
                      <Image fill src="images/client-image-1.jpg" alt="" />
                    </figure>
                  </div>
              
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Services
