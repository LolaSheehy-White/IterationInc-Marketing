import React from 'react';
import { Link } from "react-router-dom";

import Navbar from '../components/nav';
import Footer from '../components/footer';

import "../navfoot.css";
import "../reviews.css"; 

// Sorting reviews by rating (highest to lowest)
const reviews = [
    { id: 1, name: 'Lorelai', rating: 5, title: 'Excellent Product', content: 'Super easy to use and implement into our care-home!', date: '2025-02-20' },
    { id: 2, name: 'Rory', rating: 4, title: 'Great Product', content: 'The product is great, but it was quite pricy for our budget', date: '2024-09-18' },
    { id: 3, name: 'Luke', rating: 5, title: 'Excellent Service', content: 'I had a fantastic experience with this company. Highly recommend!', date: '2024-10-05' },
    { id: 4, name: 'Jess', rating: 4, title: 'Very good', content: 'The product quality is great, but I wish families could join to support as not all residents are as capable', date: '2025-02-18' },
    { id: 5, name: 'Paris', rating: 5, title: 'Brilliant company', content: 'It is a great comfort to know my mum is being cared for not only by the carers but also by innovative companies like...', date: '2024-12-14' },
    { id: 6, name: 'Lane', rating: 4, title: 'Good', content: 'We had a couple problems initially but we contacted IterationInc and they were so helpful and made sure everything worked.', date: '2025-01-24' },
    { id: 7, name: 'Dave', rating: 5, title: 'Love it!', content: 'All residents have managed to use this no matter their abilities and we love being able to check in on them quickly as carers!', date: '2025-03-03' },
    { id: 8, name: 'Sookie', rating: 4, title: 'Smart product', content: 'Needs a couple adjustments for my care home but I have spoken to IterationInc and they are working on it already!', date: '2025-02-01' }
];

// Sort reviews by rating (highest to lowest)
const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);

const Reviews = () => {
    return (
        <div className='reviewsPage'>
            <Navbar />
            <section className="reviews-section">
                <h2>What our customers are saying:</h2>
                <div className="reviews-container">
                    {sortedReviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <h3>{review.title}</h3>
                                <div className="review-rating">
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                            <p className="review-content">"{review.content}"</p>
                            <div className="review-footer">
                                <span className="review-author">{review.name}</span>
                                <span className="review-date">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id="contactUs">
                <div className="contact-container">
                    <div className="contact-header">
                    <h1>Contact Us</h1>
                    </div>

                    <div className="contact-content">
                    {/* Contact Info Section */}
                    <div className="contact-info">
                        <p>We'd love to hear from you.</p>
                        <h2>Fill out the form to get started </h2>
                        <p> We aim to respond to all emails within 24 hours.</p>
                        <div className='contactDeets'>
                            <p>Email: <a href="mailto:iterationInc@gmail.com">iterationInc@gmail.com</a></p>
                            <p>Phone: <a href="tel:+123456789">0131 123 4567</a></p>
                            <p>Instagram: <a href="instagram.com">IterationInc</a></p>
                            <p>Facebook: <a href="facebook.com">IterationInc</a></p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="contact-form">
                        <h2>Send Us a Message</h2>
                        <form>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input-field"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input-field"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="input-field"
                            rows="4"
                        ></textarea>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            <Footer />
        </div>
    );
};

export default Reviews;