import React from 'react'
import Image from './image'

import FilmlistVid from '../videos/filmlist-demo.mp4'
import TrypVid from '../videos/tryp-demo.mp4'

export default function ProjectImages({ title }) {
  if (title === "Filmlist") return (
    <>
      <div className="project__videos" style={{ background: 'rgba(242, 116, 5,.2)' }}>
        <video className="project__vid" autoplay muted controls>
          <source src={FilmlistVid} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      </div>
      <div className="project__images">
        <Image filename="project__filmlist-home.png" alt={title} classes="project__img" />
        <Image filename="project__filmlist-seen.png" alt={title} classes="project__img" />
        <Image filename="project__filmlist-details.png" alt={title} classes="project__img" />
        <Image filename="project__filmlist-favorite.png" alt={title} classes="project__img" />
        <Image filename="project__filmlist-register.jpg" alt={title} classes="project__fluid-img" />

        <div className="project__phone-images">
          <Image filename="project__filmlist-details-mobile-1.png" alt={title} classes="project__img" />
          <Image filename="project__filmlist-details-mobile-2.png" alt={title} classes="project__img" />
        </div>
      </div>
    </>
  )

  if (title === "TRYP") return (
    <>
      <div className="project__videos" style={{ background: 'rgba(43, 196, 244, .2)' }}>
        <video className="project__vid" autoplay muted controls>
          <source src={TrypVid} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="project__images">
        <Image filename="project__tryp-home.jpg" alt={title} classes="project__img" />
        <Image filename="project__tryp-details.jpg" alt={title} classes="project__img" />
        <Image filename="project__tryp-laptop.jpg" alt={title} classes="project__fluid-img" />
        <div className="project__phone-images">
          <Image filename="project__tryp-home-m.jpg" alt={title} classes="project__img" />
          <Image filename="project__tryp-details-m.jpg" alt={title} classes="project__img" />
        </div>
      </div>
    </>
  )



  return <div className="project__images"></div>
}
