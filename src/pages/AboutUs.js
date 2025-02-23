import React from "react";

import Navbar from "../components/nav"; 

import Footer from "../components/footer"; 

import "../navfoot.css";
import"../aboutus.css";

const AboutUs = () => {
    return (
        <div className="aboutus-page">
            <Navbar />
            <section className="updates-section">
                <h2 className="updates-title">Latest Updates</h2>
                <div className="updates-list">
                    <div className="update-item">
                        <h3 className="update-title">Update Title #1</h3>
                        <p className="update-summary">
                            This is a brief summary of the update. It gives a quick insight into what
                            the update is about.
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">Update Title #2</h3>
                        <p className="update-summary">
                            Another brief summary of a different update, to keep the user engaged.
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">Update Title #3</h3>
                        <p className="update-summary">
                            A short introduction to the update content that entices the user to click
                            for more details.
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;