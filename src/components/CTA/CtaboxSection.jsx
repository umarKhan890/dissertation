import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CtaboxSection = () => {
  return (
    <>
      <div className="cta-box-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-box">
                <div className="cta-box-content">
                  <div className="section-title dark-section">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">
                      Protect business, cyber security solution today!
                    </h2>
                  </div>

                  <div className="cta-contact-info">
                    <div className="cta-contact-item">
                      <div className="icon-box">
                        <Image fill src="images/icon-phone.svg" alt="" />
                      </div>
                      <div className="cta-contact-content">
                        <h3>Get contact now</h3>
                        <p>
                          <Link href="#">+123 000 000</Link>
                        </p>
                      </div>
                    </div>

                    <div className="cta-contact-item">
                      <div className="icon-box">
                        <Image fill src="images/icon-mail.svg" alt="" />
                      </div>
                      <div className="cta-contact-content">
                        <h3>Sent e-mail</h3>
                        <p>
                          <Link href="#">
                            ABc@domainname.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cta-box-image">
                  <figure className="image-anime reveal">
                    <Image fill src="images/cta-box-image.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default CtaboxSection
