import { TimelineMax } from 'gsap'

// const transition = { ease: [0.43, 0.13, 0.23, 0.96] };

const polygonIn = { up: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', down: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', end: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' };
const polygonOut = { start: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%', up: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', down: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' };

const imgYIn = { up: '-50', down: '50' };
const imgYOut = { up: '50', down: '-50' };

export const projectSlideAnimateIn = scroll => {
  const tl = new TimelineMax({ paused: true });

  const delay = scroll === "up" ? .25 : scroll === "down" ? 0 : '';

  tl.fromTo('.project-slide.active .project-slide__mask', .6, { webkitClipPath: polygonIn[scroll], ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" })
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .6, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, { opacity: 1, y: '0', ease: "Power2.easeInOut" }, .05, delay)
    .staggerFromTo(['.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img .gatsby-image-wrapper', '.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img'], .6, { y: imgYIn[scroll], ease: "Power1.easeInOut" }, { y: '0', ease: "Power1.easeInOut" }, 0.1, 0)

  return tl;
}

export const projectSlideAnimateOut = scroll => {
  const tl = new TimelineMax({ paused: true });

  const delay = scroll === "up" ? .1 : scroll === "down" ? 0 : '';

  tl.fromTo('.project-slide.active .project-slide__mask', .6, { webkitClipPath: polygonOut.start, ease: "Power2.easeInOut" }, { webkitClipPath: polygonOut[scroll], ease: "Power2.easeInOut" })
    .staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .6, { opacity: 0, y: '30', ease: "Power2.easeInOut" }, .03, delay)
    .staggerFromTo(['.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img .gatsby-image-wrapper', '.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img'], .6, { y: '0', ease: "Power1.easeInOut" }, { y: imgYOut[scroll], ease: "Power1.easeInOut" }, 0.1, 0)

  return tl;
}
