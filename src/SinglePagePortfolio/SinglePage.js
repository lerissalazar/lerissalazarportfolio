import React from 'react'
import '../SinglePagePortfolio/SinglePage.scss'
import ComputerBitmoji from '../Assets/computerBitmoji.png'
import LoveBitmoji from '../Assets/loveBitmoji.png'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function SinglePage() {
    return (
        <div class='container' className='projectContainer'>

            {/* Navbar */}

            {/* <div class='row' className='navRow'>
                <button className='homeNavBtn'>Home</button>
                <button className='aboutNavBtn'>About</button>
                <button className='projectNavBtn'>Project</button>
                <button className='skillNavBtn'>Skills</button>
            </div> */}

            {/* Home Section */}

            <div class='container' className='homeSectionRow' >
                <div>
                    <p className='welcomeTxt'>
                        <span class="title-word title-word-1">Welcome </span>
                        <span class="title-word title-word-2">to </span>
                        <span class="title-word title-word-3">my </span>
                        <span class="title-word title-word-4">Portfolio</span>
                    </p>
                    <div className='sideNavLink'>
                        <div className='sideNavDiv'>
                            <button className='aboutSideLink'>About</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button className='projectSideLink'>Projects</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button className='skillSideLink'>Skills</button>
                        </div>
                    </div>
                </div>
                <div className='starterEmojiDiv'>
                    <img className='starterEmoji' src={ComputerBitmoji} alt='' />
                </div>
            </div>
            <div className='arrowDown'>
                <Icon icon="iconamoon:arrow-down-2-thin" width="45" />
            </div>

            {/* Main Portfolio Section */}

            <Navbar sticky="top" className='navRow'>
                <Nav>
                    <Nav.Link className='homeNavBtn' href="#">Home</Nav.Link>
                    <Nav.Link className='aboutNavBtn' href="#">About</Nav.Link>
                    <Nav.Link className='projectNavBtn' href="#">Project</Nav.Link>
                    <Nav.Link className='skillNavBtn' href="#">Skills</Nav.Link>
                </Nav>
            </Navbar>

            <div className='mainPortfolioSection'>

                {/* About Me Section */}

                <div className='aboutSectionDiv'>
                    <div class='row' className='aboutRow'>
                        <div>
                            <p className='helloTxt'>Hello, my name is <span className='highlightColor'>Lerissa Lazar</span></p>
                            <p className='helloInfo'>I specialize in <span className='highlightColorInfo'>Frontend Web Development</span> & <span className='highlightColorInfo'>UI/UX Design.</span> <br />
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
