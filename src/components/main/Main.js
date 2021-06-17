import React from 'react';
import gifSolution from '../../assets/FunctionSolution.gif'
import staticSolution from '../../assets/StaticSolution.png'
import jigSaw from '../../assets/jigsaw.png'
import timeRecord from '../../assets/time-record.png'
import browserControl from '../../assets/browser.png'
import codeFactory from '../../assets/CodeFactory.png'
import '../../styling/main.css';

const Main = () => {

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
          <img src={jigSaw} alt='Custom Solutions' />
          <h1>Custom Solutions</h1>
          <p>Get what you need, without compromise.
             Our approach enables you to create real business
             value that is tailored for your business.</p>
        </div>
        <div className='origin-feature-da'>
          <img src={timeRecord} alt='Delivery Accelerators' />
          <h1>Delivery Accelerators</h1>
          <p>Reduce your time-to-market and create
             the ability to capitalize on market opportunities
             to stay a step ahead of your competition.</p>
        </div>
        <div className='origin-feature-yc'>
          <img src={browserControl} alt='Your Control' />
          <h1>Your Control</h1>
          <p>Retain full ownership of your business value for the
             long-term and control how your solution evolves.</p>
        </div>
      </div>
      <div className='origin-products'>
        <img className='code-factory' src={codeFactory} alt='Products' />
      </div>
    </div>
  )

}

export default Main;
