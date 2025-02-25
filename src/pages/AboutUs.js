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
                <h2 className="updates-title">Latest Updates:</h2>
                <div className="updates-list">
                    <div className="update-item">
                        <h3 className="update-title">Family plans added</h3>
                        <p className="update-summary">
                            In recent feedback have recieved countless requests from families wanting to join in on the fun, we are happy to announce this is now an option! ...
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">Testing personalisation options</h3>
                        <p className="update-summary">
                            In preperation to provide more options for user personalisation we are testing options, taking feedback, do you want to help us? We are testing ...
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">Discounts for NHS care homes</h3>
                        <p className="update-summary">
                            We are very excited to announce that we are working with the National Health Service and from now, all care homes under the NHS get a discount of ...
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>

            </section>
            <div className="updates-footAB">
                <h4>Want to stay in the loop?</h4>
                <h1>Join our mailing list!</h1>
                <p>We'll keep you informed of important monthly updates, and dont worry you can unsubscribe at any time!</p>
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