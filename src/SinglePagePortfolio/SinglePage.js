import React from 'react'
import '../SinglePagePortfolio/SinglePage.scss'
import ComputerBitmoji from '../Assets/computerBitmoji.png'
import LoveBitmoji from '../Assets/loveBitmoji.png'
import { Icon } from '@iconify/react';

export default function SinglePage() {
    return (
        <div class='container fluid'>

             {/* Navbar */}

             <div class='row' className='navRow'>
                    <button className='homeNavBtn'>Home</button>
                    <button className='aboutNavBtn'>About</button>
                    <button className='projectNavBtn'>Project</button>
                    <button className='skillNavBtn'>Skills</button>
                </div>

            {/* Home Section */}

            <div class='row' className='homeSectionRow' >
                <div>
                    <p className='welcomeTxt'>
                        <span class="title-word title-word-1">Welcome </span>
                        <span class="title-word title-word-2">to </span>
                        <span class="title-word title-word-3">my </span>
                        <span class="title-word title-word-4">Portfolio</span>
                    </p>
                    {/* <div className='sideNavLink'>
                        <div className='sideNavDiv'>
                            <button className='aboutSideLink'>About</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button className='projectSideLink'>Projects</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button className='skillSideLink'>Skills</button>
                        </div>
                    </div> */}
                </div>
                <div className='starterEmojiDiv'>
                    <img className='starterEmoji' src={ComputerBitmoji} alt='' />
                </div>
            </div>

            {/* Main Portfolio Section */}

            <div className='mainPortfolioSection'>

                {/* About Me Section */}

                <div className='aboutSectionDiv'>
                    <div class='row' className='aboutRow'>
                        <div>
                            <p className='helloTxt'>Hello, my name is Lerissa Lazar</p>
                            <p className='helloInfo'>I specialize in Frontend Web Development UI/UX Design.<br />
                                I am constantly seeking new opportunities to expand my expertise in development & design. <br />
                                Beyond my technical skills, I also run two small businesses. I make custom cakes that bring joy to celebrations & I create unique and stylish custom shoes that make a statement. These businesses not only allow me to showcase my creativity but also enable me to connect with people on a personal level.</p>
                            <p className='contactTxt'>Contact</p>
                            <span className='contactLine'>
                                <div className='mobileIcon'>
                                    <Icon className='emailIcon' icon="mdi-light:email" width="35" height="35" />
                                    <a href='mailto:lerissalazarjob@gmail.com' className='contactItem'>lerissalazarjob@gmail.com</a>
                                </div>
                                <div className='mobileIcon'>
                                    <Icon className='linkedIcon' icon="ph:linkedin-logo-thin" width="35" height="35" />
                                    <a href='https://www.linkedin.com/in/lerissalazar12/' className='linkedItem'>LinkedIn</a>
                                </div>
                                <div className='mobileIcon'>
                                    <Icon className='gitIcon' icon="ph:github-logo-thin" width="35" height="35" />
                                    <a href='https://github.com/lerissalazar' className='gitItem'>Github</a>
                                </div>
                            </span>
                        </div>
                        <div>
                            <img className='aboutEmoji' src={LoveBitmoji} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
        </div>
    )
}
