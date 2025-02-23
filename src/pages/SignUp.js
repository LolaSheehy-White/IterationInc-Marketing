import React, { useState } from "react";

import Navbar from "../components/nav"; 

import Footer from "../components/footer"; 

import "../navfoot.css";
import "../signup.css";

const SignUp = () => {
    const sendEmail = () => {
        const email = "iterationInc@gmail.com";
        const subject = "";
        const body = "";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink; 
    };

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (formData.name && formData.email) {
        setSubmitted(true);
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
        <div className="SignUp">
            <Navbar />
            <main className="main">
                <section className="main-left">
                    <div className="Home">
                        <h4>We are different</h4>
                        <h1>Driven by innovation</h1>
                        <p>Aiming to introduce tech that helps, not confuses</p>
                        <p>Client-centred</p>
                        <button onClick={sendEmail} 
                        className="button-link">
                        Email Us About Reviews
                        </button>
                    </div>
                </section>
                <section className="main-right">
                    <div className="Family">
                        <h4>We are different</h4>
                        <h1>Driven by innovation</h1>
                        <p>Aiming to introduce tech that helps, not confuses</p>
                        <p>Client-centred</p>
                        <button onClick={sendEmail} 
                        className="button-link">
                        Email Us About Reviews
                        </button>
                    </div>
                </section>
            </main>
            <div className="updates-footSU">
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

export default SignUp;