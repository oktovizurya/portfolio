import React from 'react'
import './services.css'
import { BsCheck2 } from "react-icons/bs";

function Services() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Software Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Design software from scratch.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Scalable system design for future needs.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Documentation of the software for Frontend or Backend.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Database optimization.</p>
                        </li>

                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Develop web app for your company</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Highly optimize for the users need.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Chat beetwen users.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Executing payment using digital wallet.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Inventory management and point of sales.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Company profile website</p>
                        </li>

                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Server</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Deploy application</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Server debugging</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Dockerizing application</p>
                        </li>


                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services