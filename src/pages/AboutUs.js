import React, { useState } from "react";

import Navbar from "../components/nav"; 

import Footer from "../components/footer"; 

import "../navfoot.css";
import"../aboutus.css";

const AboutUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (formData.name && formData.email) {
        setSubmitted(true);
          // could send  data to backend or email service
          // fetch('/submit', { method: 'POST', body: JSON.stringify(formData) })
        console.log("Form Submitted:", formData);
        } else {
        alert("Please enter both your name and email.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
            <div className="updates-footAB">
                <h4>We are different</h4>
                <h1>Driven by innovation</h1>
                <p>Aiming to introduce tech that helps, not confuses</p>
                <p>Client-centred</p>
                <form onSubmit={handleSubmit} className="mailing-list">
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                <button type="submit" 
                className="button-link"> 
                    Join our mailing list!
                </button>
                </form>
                {submitted && <p>Thank you for subscribing! We will keep you updated.</p>}
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;