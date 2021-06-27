import React, { useEffect } from 'react';
import Aos from "aos";
import gifSolution from '../../assets/FunctionSolution.gif';
import staticSolution from '../../assets/StaticSolution.png';
import jigSaw from '../../assets/jigsaw.png';
import timeRecord from '../../assets/time-record.png';
import browserControl from '../../assets/browser.png';
import codeFactory from '../../assets/CodeFactory.png';
import '../../styling/main.css';
import "aos/dist/aos.css";

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='origin-box'>
      <div className='origin-text'>
        <h1>Your solution, delivered</h1>
        <p>We partner with capital and commodity market participants that value differentiation
           through technology.</p>
        <p>Our experienced teams design and deliver complex solutions, using our proven accelerators,
           creating long-term competitive advantage for you.</p>
      </div>
      <div className='origin-image'>
        <img className='function-solution' src={gifSolution} alt='Solution pathway' />
        <img className='static-solution' src={staticSolution} alt='Solution pathway' />
      </div>
      <br>
      </br>
      <div className='origin-features'>
        <div className='origin-feature-cs'>
          <img data-aos='fade-right' src={jigSaw} alt='Custom Solutions' />
          <h1>Custom Solutions</h1>
          <p>Get what you need, without compromise.
             Our approach enables you to create real business
             value that is tailored for your business.</p>
        </div>
        <div className='origin-feature-da'>
          <img data-aos='fade-down' src={timeRecord} alt='Delivery Accelerators' />
          <h1>Delivery Accelerators</h1>
          <p>Reduce your time-to-market and create
             the ability to capitalize on market opportunities
             to stay a step ahead of your competition.</p>
        </div>
        <div className='origin-feature-yc'>
          <img data-aos='fade-left' src={browserControl} alt='Your Control' />
          <h1>Your Control</h1>
          <p>Retain full ownership of your business value for the
             long-term and control how your solution evolves.</p>
        </div>
      </div>
      <div className='origin-products'>
        <img className='code-factory' src={codeFactory} alt='Products' />
        <div data-aos='fade-up' class='origin-products-igs'>
          <h1>Institutional Grade Solutions</h1>
          <p>Regulated execution venues</p>
          <p>Next-generation dealer platforms</p>
          <p>Front office trading tools & infrastructure</p>
          <p>Exchanges</p>
        </div>
        <div data-aos='fade-up' class='origin-products-mpp'>
          <h1>Market Participant Perspective</h1>
          <p>Sell-side & Buy-side</p>
          <p>Brokers</p>
          <p>Market venues</p>
          <p>Fintechs new and mature</p>
        </div>
        <div data-aos='fade-up' class='origin-products-aac'>
          <h1>Across Asset Classes</h1>
          <p>Fixed Income</p>
          <p>FX</p>
          <p>Equities</p>
          <p>Commodities</p>
          <p>Cryptocurrency</p>
        </div>
      </div>
      <div className='origin-solutions'>
        <div className='origin-solutions-ps'>
          <h1>Platform Solutions</h1>
          <p>Deliver your next-generation trading platform faster with Hydra Platform.</p>
        </div>
        <div className='origin-solutions-ps'>
          <h1>Solution Delivery Teams</h1>
          <p>Build a custom solution by partnering with a team of our experienced consultants.</p>
        </div>
      </div>
    </div>
  )

}

export default Main;
