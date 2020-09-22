import React from 'react'
import Image from './image'

import FilmlistVid from '../videos/filmlist-demo.mp4'
import PaceVid from '../videos/pace-demo.mp4'
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

  if (title === "Pace") return (
    <>
      <div className="project__videos" style={{ background: 'rgba(29, 185, 84, .2)' }}>
        <video className="project__vid" autoplay muted controls>
          <source src={PaceVid} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="project__images">
        <div className="project__phone-images grid">
          <Image filename="project__pace-app-1.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-2.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-4.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-5.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-6.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-8.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-9.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-10.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-11.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-12.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-13.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-14.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-15.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-16.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-17.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-18.jpg" alt={title} classes="project__img" />
          <Image filename="project__pace-app-19.jpg" alt={title} classes="project__img" />
        </div>
        <Image filename="project__pace-colours.png" alt={title} classes="project__img" />
        <Image filename="project__pace-typography.png" alt={title} classes="project__img" />
        <Image filename="project__pace-wireframes.jpg" alt={title} classes="project__img" />
        <Image filename="project__pace-implementation-1.jpg" alt={title} classes="project__fluid-img" />
      </div>
    </>
  )

  if (title === "INFLOWSEM") return (
    <div className="project__images">
      <Image filename="project__inflowsem-home.png" alt={title} classes="project__img" />
      <Image filename="project__inflowsem-pdf.png" alt={title} classes="project__img" />
      <Image filename="project__inflowsem-contact.png" alt={title} classes="project__img" />
      <Image filename="project__inflowsem-home-laptop.jpg" alt={title} classes="project__fluid-img" />
    </div>
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
