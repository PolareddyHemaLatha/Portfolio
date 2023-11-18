import React from 'react';
import './intro.css';
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png';
//add your image
//import bg from '../../assets/';

const Intro=()=>{
    return(
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'> Hello, </span>
                <span className='introText'> <span className='introName'>Add your name</span><br/> designation
                </span>
                <p className='introPara'>Intro paragraph <br/>--</p>
                <Link> <button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire me</button> </Link>
            </div>
            <img  alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro;