import { TimelineMax } from 'gsap'

const polygonIn = { up: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', down: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', end: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' };
const polygonOut = { start: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%', up: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', down: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' };

const imgYIn = { up: '-50', down: '50' };
const imgYOut = { up: '50', down: '-50' };

export const projectSlideAnimateIn = scroll => {
  const tl = new TimelineMax({ paused: true });

  const delay = scroll === "up" ? .25 : scroll === "down" ? 0 : '';

  tl.fromTo('.project-slide.active .project-slide__mask', .6, { webkitClipPath: polygonIn[scroll], ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" })
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .6, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, { opacity: 1, y: '0', ease: "Power2.easeInOut" }, .05, delay)
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.phone .gatsby-image-wrapper', .6, { y: imgYIn[scroll], ease: "Power1.easeInOut" }, { y: '0', ease: "Power1.easeInOut" }, 0.1, 0)
    .fromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.web', .6, { y: imgYIn[scroll], ease: "Power1.easeInOut" }, { y: '0', ease: "Power1.easeInOut" }, 0.1, 0)

  return tl;
}

export const projectSlideAnimateOut = scroll => {
  const tl = new TimelineMax({ paused: true });

  const delay = scroll === "up" ? .1 : scroll === "down" ? 0 : '';

  tl.fromTo('.project-slide.active .project-slide__mask', .6, { webkitClipPath: polygonOut.start, ease: "Power2.easeInOut" }, { webkitClipPath: polygonOut[scroll], ease: "Power2.easeInOut" })
    .staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .6, { opacity: 0, y: '30', ease: "Power2.easeInOut" }, .03, delay)
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.phone .gatsby-image-wrapper', .6, { y: '0', ease: "Power1.easeInOut" }, { y: imgYOut[scroll], ease: "Power1.easeInOut" }, 0.1, 0)
    .fromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.web', .6, { y: '0', ease: "Power1.easeInOut" }, { y: imgYOut[scroll], ease: "Power1.easeInOut" }, 0.1, 0)

  return tl;
}

export const projectSlideAnimateHoverIn = () => {
  const tl = new TimelineMax({ paused: true });

  tl.staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.phone .gatsby-image-wrapper', .3, { x: -30, ease: "Power1.easeInOut" }, 0.1, 0)
    .to('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.web', .3, { x: -30, ease: "Power1.easeInOut" }, 0)

  return tl;
}

export const projectSlideAnimateHoverOut = () => {
  const tl = new TimelineMax({ paused: true });

  tl.staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.phone .gatsby-image-wrapper', .4, { x: 0, ease: "Power1.easeInOut" }, 0.1, 0)
    .to('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.web', .3, { x: 0, ease: "Power1.easeInOut" }, 0)
    .to('.projects', .3, { width: '100%', ease: "Power1.easeInOut" }, 0)

  return tl;
}

export const projectSlideLinkAnimate = (height, width) => {
  const tl = new TimelineMax({ paused: true });

  tl.to('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img', 1, { marginLeft: '100vw', ease: "Power2.easeInOut"}, 0)
    .to('.project-slide__logo', 1, { opacity: 0, ease: "Power2.easeInOut" }, 0)
    .to('.overview', .3, { opacity: 0, ease: "Power2.easeInOut" }, 0.5)
    .to('.project-slide.active .project-slide__mask', .7, { width: width, float: 'right', ease: "Power2.easeInOut" }, .3)
    .to('.scroll-indicator', .4, { opacity: 0, y: '30', ease: "Power2.easeInOut" }, 0)
    .to('.project-slide__count ', .4, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, 0)
    .staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .4, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, .01, 0)

  return tl;
}

export const projectPageAnimateIn = (height) => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.project__mainimg', .6, { opacity: 1, y: height * 0.5, ease: "Power2.easeInOut" }, { y: 0, ease: "Power2.easeInOut" }, 0)
    .staggerFromTo('.project__mainimg > div', .6, { opacity: 1, y: height * 0.5, ease: "Power2.easeInOut" }, { y: 0, ease: "Power2.easeInOut" }, 0.1, 0)
    .fromTo('.project__logo', .6, { opacity: 0, y: height * 0.5, ease: "Power2.easeInOut" }, { opacity: 1, y: 0, ease: "Power2.easeInOut" }, 0.2, 0)

  return tl;
}

export const maskAnimate = () => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.page__mask', 1, { webkitClipPath: polygonIn.down, ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" }, 0)
    .fromTo('.page__mask', 1, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.up, ease: "Power2.easeInOut" })

  return tl;
}