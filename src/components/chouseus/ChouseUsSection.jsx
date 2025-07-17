import Image from 'next/image'
import React from 'react'

const ChouseUsSection = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-image">
                <figure className="image-anime ">
                  <Image fill src="/assets/images/why-choose-image.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-content">
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Reliable solutions for cybersecurity excellence
                  </h2>
                </div>

                <div className="why-choose-list">
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <Image fill src="/assets/images/icon-why-choose-1.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>expertise and experience</h3>
                      <p>
                        A team of seasoned cybersecurity professionals with
                        extensive industry knowledge.
                      </p>
                    </div>
                  </div>

                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <Image fill src="/assets/images/icon-why-choose-2.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>proactive security approach</h3>
                      <p>
                        Focused on preventing threats before they impact your
                        system, not just reacting after the fact.
                      </p>
                    </div>
                  </div>

                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon-box">
                      <Image fill src="/assets/images/icon-why-choose-3.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>tailored training programs</h3>
                      <p>
                        Educating your team on security best practices to reduce
                        human error and enhance vigilance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="why-choose-counter-list">
                <div className="why-choose-counter-item">
                  <div className="icon-box">
                    <Image fill src="/assets/images/icon-why-choose-counter-1.svg" alt="" />
                  </div>
                  <div className="why-choose-counter-content">
                    <h3>
                      <span className="counter">25</span>+
                    </h3>
                    <p>Years Experience</p>
                  </div>
                </div>

                <div className="why-choose-counter-item">
                  <div className="icon-box">
                    <Image fill src="/assets/images/icon-why-choose-counter-2.svg" alt="" />
                  </div>
                  <div className="why-choose-counter-content">
                    <h3>
                      <span className="counter">15</span>K
                    </h3>
                    <p>project complete</p>
                  </div>
                </div>

                <div className="why-choose-counter-item">
                  <div className="icon-box">
                    <Image fill src="/assets/images/icon-why-choose-counter-3.svg" alt="" />
                  </div>
                  <div className="why-choose-counter-content">
                    <h3>
                      <span className="counter">16</span>K
                    </h3>
                    <p>customer happy</p>
                  </div>
                </div>

                <div className="why-choose-counter-item">
                  <div className="icon-box">
                    <Image fill src="/assets/images/icon-why-choose-counter-4.svg" alt="" />
                  </div>
                  <div className="why-choose-counter-content">
                    <h3>
                      <span className="counter">120</span>
                    </h3>
                    <p>winning awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ChouseUsSection
