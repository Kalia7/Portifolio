import React from "react";
import './habilits.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Habilits(){
    return(
        <section id="habilits">
            <h5>What Skills I Have</h5>
            <h2>My Hablilits</h2>

            <div className="container habilits_container">
                <div className="habilits_front">
                    <h3>Front-end Developer</h3>
                    <div className="habilits_content">
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>HTML</h4>
                            <small className="text-light">Intermediete</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className="text-light">Intermediete</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>JavaScript</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>Figma</h4>
                            <small className="text-light">Intermediete</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className="text-light">Basic</small>
                        </article>
                    </div>
                </div>
                <div className="habilits_back">
                    <h3>Back-end Developer</h3>
                    <div className="habilits_content">
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <h4>MYSQL</h4>
                            <small className="text-light">Basic</small>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Habilits