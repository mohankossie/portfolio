//src/components/Testimonials.js
import React from "react";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Client Testimonials
                </h1>
                <div className="row">
                    <div>
                        <span>Education</span>
                        <h2>Education</h2>
                    </div>                       
                </div>
                <div className="row">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree of Communication and Information Systems Engineering</a>
                                        </h4>
                                    </div>
                                    <div>
                                        <div className = "row">
                                            <div>
                                                <p><strong>Ongoing</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}