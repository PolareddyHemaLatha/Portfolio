import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
const Works = () => {
  return (
    <div>
        <section id='works'>
            <h2 className='workstitle'> My Portfolio</h2>
            <span className='workDesc'> Demo part </span>
            <div className='workImgs'>
                <img src={Portfolio1} alt='' className='workImg'/>
                <img src={Portfolio2} alt='' className='workImg'/>
                <img src={Portfolio3} alt='' className='workImg'/>

            </div>
            <button className='worksbtn'> See More</button>

        </section>
      
    </div>
  )
}

export default Works;
