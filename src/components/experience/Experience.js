import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className={"container experience__container"}>
                <div className={"experience__frontend"}>

                    <h3>Graphic Design</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Photoshop</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Illustrator</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Premiere Pro</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>After Effects</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Photography</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Videography</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className={"experience__backend"}>
                    <h3>Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Html</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Css</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Javascript</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>React</h4>
                                <small className={"text-light"}>Basic</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Unity</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>C#</h4>
                                <small className={"text-light"}>Intermediate</small>
                            
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience