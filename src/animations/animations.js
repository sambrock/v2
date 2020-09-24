import { TimelineMax } from 'gsap'

const polygonIn = { up: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', down: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', end: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' };
const polygonOut = { start: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%', up: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', down: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' };

const imgYIn = { up: '-50', down: '50' };
const imgYOut = { up: '50', down: '-50' };

const colors = { grey: '#44434c', white: '#f2f4f5' };

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

  tl.to('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img', 1, { marginLeft: '100vw', ease: "Power2.easeInOut" }, 0)
    .to('.project-slide__logo', 1, { opacity: 0, ease: "Power2.easeInOut" }, 0)
    .to('.overview', .3, { opacity: 0, ease: "Power2.easeInOut" }, 0.5)
    .to('.project-slide.active .project-slide__mask', .7, { width: width, float: 'right', ease: "Power2.easeInOut" }, .3)
    .to('.scroll-indicator', .4, { opacity: 0, y: '30', ease: "Power2.easeInOut" }, 0)
    .to('.project-slide__count ', .4, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, 0)
    .staggerTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .4, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, .01, 0)
    .to('.logo', .2, { fill: '#f2f4f5' }, .8);

  return tl;
}

export const projectPageAnimateIn = (height) => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.project__mainimg', .6, { opacity: 1, y: height * 0.5, ease: "Power2.easeInOut" }, { y: 0, ease: "Power2.easeInOut" }, 0)
    .staggerFromTo('.project__mainimg > div', .6, { opacity: 1, y: height * 0.5, ease: "Power2.easeInOut" }, { y: 0, ease: "Power2.easeInOut" }, 0.1, 0)
    .fromTo('.project__logo', .6, { opacity: 0, y: height * 0.5, ease: "Power2.easeInOut" }, { opacity: 1, y: 0, ease: "Power2.easeInOut" }, 0.2, 0)
    .to('.logo', 0, { fill: '#f2f4f5' }, 0);

  return tl;
}

export const maskAnimate = () => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.page__mask', 1, { webkitClipPath: polygonIn.down, ease: "Power3.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power3.easeInOut" }, 0)
    .fromTo('.page__mask', 1, { webkitClipPath: polygonIn.end, ease: "Power3.easeInOut" }, { webkitClipPath: polygonIn.up, ease: "Power3.easeInOut" })

  return tl;
}

export const maskAnimateHome = () => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.page__mask', 1.2, { display: 'block', webkitClipPath: polygonIn.down, ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" }, 0)
    .to('.page__mask', 0, { display: 'none' })
    .to('.logo', .2, { fill: colors.grey }, .8);

  return tl;
}

export const headerAnimateUp = () => {
  const tl = new TimelineMax({ paused: true });

  tl.to('.header', .1, { y: -90, ease: "Power3.easeInOut" }, 0)

  return tl;
}

export const headerAnimateDown = () => {
  const tl = new TimelineMax({ paused: true });

  tl.to('.header', .1, { y: 0, ease: "Power3.easeInOut" }, 0)

  return tl;
}

export const indexAnimateIn = () => {
  const tl = new TimelineMax({ paused: true });

  tl.fromTo('.intro__name .txt-mask', .5, { webkitClipPath: 'inset(0 0 0 0)', ease: "Power1.easeInOut" }, { webkitClipPath: 'inset(0 0 0 100%)', ease: "Power1.easeInOut" })
    .fromTo('.intro__description .txt-mask', .5, { webkitClipPath: 'inset(0 0 0 0)', ease: "Power1.easeInOut" }, { webkitClipPath: 'inset(0 0 0 100%)', ease: "Power1.easeInOut" }, .2)
    .fromTo('.intro__btn .txt-mask', .5, { webkitClipPath: 'inset(0 0 0 0)', ease: "Power1.easeInOut" }, { webkitClipPath: 'inset(0 0 0 100%)', ease: "Power1.easeInOut" }, .6)
    .fromTo('.project-slide.active .project-slide__mask', .6, { webkitClipPath: polygonIn.down, ease: "Power2.easeInOut" }, { webkitClipPath: polygonIn.end, ease: "Power2.easeInOut" }, .3)
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__info > div.to-animate', .6, { opacity: 0, y: '-30', ease: "Power2.easeInOut" }, { opacity: 1, y: '0', ease: "Power2.easeInOut" }, .05, .1)
    .staggerFromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.phone .gatsby-image-wrapper', .6, { y: imgYIn.down, ease: "Power1.easeInOut" }, { y: '0', ease: "Power1.easeInOut" }, 0.1, 0)
    .fromTo('.project-slide.active .project-slide__mask .project-slide__bg .project-slide__img.web', .6, { y: imgYIn.down, ease: "Power1.easeInOut" }, { y: '0', ease: "Power1.easeInOut" }, 0.1, 0)
    .fromTo('.social-links', .2, { opacity: 0, y: 20, ease: "Power2.easeInOut" }, { opacity: 1, y: 0, ease: "Power2.easeInOut" })
    .to(['.project-slide__logo', '.bg-count'], .3, { opacity: 1 })

  return tl;
}



export const animateHeaderColor = (color) => {
  const tl = new TimelineMax();

  tl.to('.logo', .2, { fill: colors[color] });

  return tl;

}