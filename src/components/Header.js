import React, { useEffect, useState } from 'react'
import TransitionLink from "gatsby-plugin-transition-link";
import { useScrollDirection } from '../hooks/useScrollDirection';
import { headerAnimateUp, headerAnimateDown, maskAnimateHome } from '../animations/animations'
import Logo from '../components/images/logo';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Header() {
  const [hide, setHide] = useState(null);
  const [bg, setBg] = useState(false);

  const [width, height] = useWindowSize();
  const scrollDir = useScrollDirection();
  const isMobile = height < 768;

  useEffect(() => {
    if (scrollDir === 'up') setHide(false);
    if (scrollDir === 'down' && hide) setHide(false);
    if (scrollDir === 'down' && !hide) setHide(true);
  }, [scrollDir, hide])

  useEffect(() => {
    function onScroll() {
      setBg(window.pageYOffset > (height * 0.9));
    }

    return window.addEventListener("scroll", onScroll);
  }, [bg, height]);

  useEffect(() => {
    if (hide && isMobile) headerAnimateUp().play();
    if (!hide && isMobile) headerAnimateDown().play();
  }, [hide, isMobile])

  return (
    <header className={`header ${hide ? 'hide' : ''} ${bg ? 'bg' : ''}`}>
      <TransitionLink to="/" exit={{ trigger: () => maskAnimateHome().play(), length: 1 }} entry={{ delay: 1 }} aria-label="Home">
        <Logo classes="logo" />
      </TransitionLink>
    </header>
  )
}
