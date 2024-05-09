/*

Styling React Using Sass
What is Sass?
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processorSass is completely compatible with all 
versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

npm i sass

my-sass.scss:

*/

import React from 'react'

import './sass_style.scss';

function Sass_css() {
  return (
    <div>
        <h1>Hi i am SASS CSS</h1>
        <hr />

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>
        <hr />

        <div className='nestedprop'>Hi i am nested properties</div>
        <hr />

        <button className='button-basic'>Basic</button>
        <button className='red-btn'>Red</button>
        <button className='green-btn'>Green</button>
        <button className='yellow-btn'>Yellow</button>
        <button className='orange-btn'>Orange</button>

    </div>
  )
}

export default Sass_css