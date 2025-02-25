import React, { useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../navfoot.css";
import "../signup.css";

const SignUp = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [closing, setClosing] = useState(false);

    const sendEmail = () => {
    const email = "iterationInc@gmail.com";
    const subject = "";
    const body = "";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    };
    const [formData, setFormData] = useState({ name: "", email: "" });
    const toggleSection = (section) => {
        if (activeSection === section) {
            setClosing(true); 
            setTimeout(() => {
                setActiveSection(null); 
                setClosing(false);
            }, 500); 
        } else {
            setClosing(true);
            setTimeout(() => {
                setActiveSection(section); 
                setClosing(false);
            }, 500); 
        }
    };
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
        <main>
            <div className="info-line">
                <h3>Become a smart care home or join a family member's account:</h3>
            </div>
        <div className={`content-container ${activeSection === "home" ? "active" : ""} ${closing && activeSection === "home" ? "closing" : ""}`}>
        {activeSection === "home" && (
            <div className="main-content">
            <h4>Homes:</h4>
            <h1>Do you want to be the next smart care home?</h1>
            <p>Just email us with your home name and contact details,</p>
            <p>then we will contact you to discuss how we can provide the best technology for your care home specifically!</p>
            <button onClick={sendEmail} className="button-link">
                Email Us
            </button>
            </div>
        )}
        </div>
        <div className={`content-container ${activeSection === "family" ? "active" : ""} ${closing && activeSection === "family" ? "closing" : ""}`}>
        {activeSection === "family" && (
            <div className="main-content">
            <h4>Families:</h4>
            <h1>Want to stay connected no matter the distance?</h1>
            <p>Just email us with your family member's place of residence and we'll take it from there!</p>
            <button onClick={sendEmail} className="button-link">
                Email Us
            </button>
            </div>
        )}
        </div>

        <div className="toggle-buttons">
        <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => toggleSection("home")}
        >
            Smart home
        </button>
        <button
            className={activeSection === "family" ? "active" : ""}
            onClick={() => toggleSection("family")} 
        >
            Join family
        </button>
        </div>
        </main>
        <div className="updates-footSU">
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

export default SignUp;
