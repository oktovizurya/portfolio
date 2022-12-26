import React from 'react'
import './about.css'
import ME from '../../assets/okto-about-me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolder } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>

                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Connections</h5>
                            <small>100+ Connections</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>


                    <p>
                        I am a Backend Developer with 2+ years experience focusing more on Building REST API using laravel as my main framework. As a I prefered to work on Backend side of the project, I'm still experienced and comfortable in developing frontend and setting up infrastructure.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About