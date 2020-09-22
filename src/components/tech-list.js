import React from 'react'
import ReactTooltip from 'react-tooltip';

import NodeIcon from './images/node';
import ReactIcon from './images/react';
import MongoDBIcon from './images/mongodb';
import GulpIcon from './images/gulp';
import IllustratorIcon from './images/illustrator';
import PhotoshopIcon from './images/photoshop';

export default function TechIcon({ items }) {
  return (
    <>
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('react') && (
        <a href="https://reactjs.org/" target="__blank" data-tip="React.js" data-place="bottom" className="tech"><ReactIcon classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('node') && (
        <a href="https://nodejs.org/" target="__blank" data-tip="Node.js" data-place="bottom" className="tech"><NodeIcon classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('mongodb') && (
        <a href="https://www.mongodb.com/" target="__blank" data-tip="MongoDB" data-place="bottom" className="tech"><MongoDBIcon classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('gulp') && (
        <a href="https://gulpjs.com/" target="__blank" data-tip="gulp.js" data-place="bottom" className="tech" className="tech"><GulpIcon classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('illustrator') && (
        <a href="https://www.adobe.com/uk/products/illustrator.html" target="__blank" data-tip="Adobe Illustrator" data-place="bottom" className="tech" className="tech"><IllustratorIcon classes="tech-icon" /></a>
      )}
      <ReactTooltip className="tech-icon-tooltip" />
      {items.includes('photoshop') && (
        <a href="https://www.adobe.com/uk/products/photoshop.html" target="__blank" data-tip="Adobe Photoshop" data-place="bottom" className="tech" className="tech"><PhotoshopIcon classes="tech-icon" /></a>
      )}
      {items.includes('express') && (
        <a href="https://expressjs.com/" target="__blank" className="tech no-icon">Express</a>
      )}
      {items.includes('tmdb api') && (
        <a href="https://developers.themoviedb.org/3/" target="__blank" className="tech no-icon">TMDb API</a>
      )}
      {items.includes('protopie') && (
        <a href="https://www.protopie.io/" target="__blank" className="tech no-icon">ProtoPie</a>
      )}
    </>
  )
}
