import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from '../components/nav';
import Footer from '../components/footer';

import "../navfoot.css";
import "../help.css"; 

const HelpPage = () => {
    useEffect(() => {
        const element = document.getElementById("contactUs");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
    };

    const sendEmail = () => {
        const email = "iterationInc@gmail.com";
        const subject = "";
        const body = "";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink; 
    };

    return (
    <div className="help-page">
        <Navbar />
        <section className="parallax-hero">
        <div className="PH-content">
            <h4>Need help? We're here!</h4>
            <h1>
            <a href="#resources">Have a look at our resources</a> or get in touch!
            </h1>
            <a className="button-H" href="/reviews#contactUs">
                Contact us
            </a>
        </div>
        <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
            <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(0)}>
                <h3>How do I reset my password?</h3>
                {activeFAQ === 0 && (
                <p className="faq-answer">
                    To reset your password, go to the login page, click 'Forgot Password', and follow the instructions sent to your email.
                </p>
                )}
            </div>
            </div>
            <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
                <h3>How do I update my account details?</h3>
                {activeFAQ === 1 && (
                <p className="faq-answer">
                    You can update your account details by navigating to the 'Account Settings' page from your dashboard.
                </p>
                )}
            </div>
            </div>
            <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(2)}>
                <h3>How do I contact customer support?</h3>
                {activeFAQ === 2 && (
                <p className="faq-answer">
                    You can reach out to customer support by clicking the 'Contact us' button at the top of this page, or in the box above this.
                </p>
                )}
            </div>
            </div>
        </div>
        </section>
        <section className="resources-section" id='resources'>
        <h2>Help Resources</h2>
        <div className="resource-links">
            <a href="/user-guide" className="button-H">User Guide</a>
            <a href="/tutorials" className="button-H">Tutorials</a>
            <a href="/community-forum" className="button-H">Community Forum</a>
        </div>
        <h2>Coming soon!</h2>
        <img src="/images/iterationincv3.png" alt="Logo" className="snakeLoading" />
        </section>
        </section>
        <Footer />
    </div>
    );
};

export default HelpPage;
