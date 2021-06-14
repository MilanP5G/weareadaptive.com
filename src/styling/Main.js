import React, { useEffect } from 'react';
import BrandSlider from './BrandSlider';
import BrandSliderTwo from './BrandSliderTwo';
import displayComp from '../../assets/DisplayComp.svg';
import displayMob from '../../assets/DisplayMob.svg';
import securityIdentity from '../../assets/SecurityIdentity.svg';
import processStream from '../../assets/ProcessStream.svg';
import careemLogo from '../../assets/CareemLogo.png'
import wiseLogo from '../../assets/WhiteWiseLogo.png'
import rightArrow from '../../assets/right-arrow.png'
import careemCS from '../../assets/CareemCustomerStories.png'
import wiseCS from '../../assets/WiseCustomerStories.png'
import '../../styling/main.css';
import Aos from "aos"
import "aos/dist/aos.css"

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='origin-box'>
      <div className='origin-text'>
        <h1>Unlock more revenue with our connected payment services</h1>
        <p>Adapt, innovate and thrive with more value from every transaction flowing through your business.</p>
        <button className='contact-sales'>Contact sales</button>
        <button className='discover-more'>Discover more</button>
      </div>
      <div className='origin-image'>
        <img className='displayComp' src={displayComp} alt="Desktop UI" />
        <img className='displayMob' src={displayMob} alt="Mobile UI" />
        <img className='securityIdentity' src={securityIdentity} alt="Identity UI" />
      </div>
      <BrandSlider />
      <div className='origin-text-2'>
        <div className='origin-text-2-title'>
          <p>Solutions</p>
        </div>
        <div className='ot2t-line'>
        </div>
        <h1 data-aos='fade-up'>Better payments, unlimited opportunities</h1>
        <div className='origin-text-2-p'>
          <p data-aos='fade-right'>You deserve more than plain old payments. Our super-connected technology makes them seamless and so much more.</p>
          <p data-aos='fade-right'>Get faster, more reliable transactions. Higher conversions. Unbeatable insight and flexibility. So you can delight your customers and unlock new revenue streams.</p>
        </div>
      </div>
      <div className='origin-image-2'>
        <img data-aos='zoom-in' className='processStream' src={processStream} alt="Checkout Stream" />
      </div>
      <div className='origin-text-2-sol'>
        <h1>Global acquiring network</h1>
        <p>Move into new markets more easily with our global solutions.</p>
        <h1>Detailed data</h1>
        <p>Understand how money flows in and out of your business.</p>
      </div>
      <div className='origin-text-2-sol-2'>
      <h1>Modular infrastructure</h1>
      <p>Choose the elements you need, when you need them.</p>
        <h1>Leading-edge innovation</h1>
        <p>Be ready for anything today and tomorrow.</p>
      </div>
      <div className='origin-features'>
        <div className='origin-text-3-title'>
          <p>Features</p>
        </div>
        <div className='ot2t-feature-line'>
        </div>
        <div className='origin-feature-title'>
          <h1 data-aos='fade-up'>Technology that changes everything</h1>
        </div>
        <div className='origin-feature-opp'>
          <h1>One powerful platform</h1>
          <p>Streamline your payments through one unified API that evolves with you and responds to change as it happens.</p>
        </div>
        <div className='origin-feature-gpc'>
          <h1>Global payments coverage</h1>
          <p>Grow anywhere with local acquiring in major markets, 150+ currencies and most popular payment methods.</p>
        </div>
        <div className='origin-feature-udi'>
          <h1>Unrivaled data and insight</h1>
          <p>Get a radically transparent view of your payments data and instant insights you can change your world with.</p>
        </div>
      </div>
      <BrandSliderTwo />
      <div className='origin-customer-stories'>
        <div className='origin-text-4-title'>
          <p>Customer stories</p>
        </div>
        <div className='ot4t-cs-line'>
        </div>
        <div className='origin-cs-title'>
          <h1>Hear from our customers</h1>
        </div>
        <div className='careem-cs'>
          <div className='careem-card'>
            <div className ='careem-background'>
              <img alt='Careem driver' src={careemCS} />
            </div>
            <div className='careem-logo-text'>
              <img alt='Careem' src={careemLogo} />
              <h1>Careem scales at speed with Checkout.com</h1>
              <p>Discover how Careem has turned payments into a competitive advantage,
                 allowing them to scale at speed across markets and harness new revenue
                 growth opportunities.</p>
            </div>
            <div className='careem-link-arrow'>
              <h2>Read case study</h2>
              <img alt='arrow' src={rightArrow}/>
            </div>
          </div>
        </div>
        <div className='wise-cs'>
          <div className='wise-card'>
            <div className ='wise-background'>
              <img alt='Wise App' src={wiseCS} />
            </div>
            <div className='wise-logo-text'>
              <img alt='Wise' src={wiseLogo} />
              <h1>Checkout.com delivers Wise best-in-class payment performance</h1>
              <p>By using our payments technology, Wise (formerly known as TransferWise)
                 delivers on its mission of creating a world of ‘money without borders’ and
                 bring lower costs and greater ease to its customers.</p>
            </div>
            <div className='wise-link-arrow'>
              <h2>Read case study</h2>
              <img alt='arrow' src={rightArrow}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
