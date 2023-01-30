import './Services.css'
import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={"container services__container"}>
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Design</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Corporate identity.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>2D/3D animation.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Photography.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Illustration.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={"service__list"}>
                    <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Prototyping.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>UI/UX.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Front-end Design.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>C# Development.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Videography</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Filming and video editing.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Drone Videography.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Interviews.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Corporate Videos.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services