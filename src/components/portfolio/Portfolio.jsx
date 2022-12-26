import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BPK.jpg'
import IMG2 from '../../assets/smartpoint.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'BPK RI',
        dsecription: 'Wordpress developer',
        web: 'https://www.bpk.go.id/',
        date: 'June 2021 - August 2021'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Smartpoint 369',
        dsecription: 'Backend Developer',
        web: 'https://www.smartpoint-369.com',
        date: 'September 2022 - August 2022'
    },

]

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Work History</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, dsecription, web, date }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />

                                </div>

                                <h3>{title}</h3>
                                <p className='description'>{dsecription}</p>
                                <p className='date'>{date}</p>
                                <div className="portfolio__item-cta">

                                    <a href={web} className='btn btn-primary' target='_blank'>Go to Web</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio