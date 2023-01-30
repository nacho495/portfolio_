import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"}/>
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h5>Clients</h5>
                            <small>30+ Clients</small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Projects</h5>
                            <small>50+ Projects</small>
                        </article>
                    </div>
                    <p className='about__text'>Hello!, I'm  Ignacio, a graphic designer, video editor and self-taught programmer seeking to broaden my knowledge and solidify my abilities in digital and visual communication.</p>
                     <p>I'm always interested in learning new technologies and applying them into my creative process, to achieve in that way, a good combination of both design and function.</p>
    
                    <div className='about__text'> <p>I'm fluent in both spanish and english, having achieved a C2 proficiency level in the later.</p> </div>
                    <div></div>
                    <a href={"#contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About