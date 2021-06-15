import React from 'react';
import gifSolution from '../../assets/FunctionSolution.gif'
import staticSolution from '../../assets/StaticSolution.png'
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

    </div>
  )

}

export default Main;
