import React from 'react';
import { Link } from "react-router-dom";

import Navbar from '../components/nav';
import Footer from '../components/footer';

import "../navfoot.css";
import "../reviews.css"; 

const reviews = [
    {
    id: 1,
    name: 'Jane Doe',
    rating: 5,
    title: 'Excellent Service',
    content: 'I had a fantastic experience with this company. Highly recommend!',
    date: '2025-02-20',
    },
    {
    id: 2,
    name: 'John Smith',
    rating: 4,
    title: 'Great Product',
    content: 'The product quality is great, but shipping was a bit slow.',
    date: '2025-02-18',
    },
];

const Reviews = () => {
    return (
    <div className='reviewsPage'>
        <section className="reviews-section">
        <h2>What Our Customers Are Saying</h2>
        <div className="reviews-container">
            {reviews.map((review) => (
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
            <h2>Contact Us</h2>
            <p>Feel free to reach out!</p>
        </section>
    <Footer />
    </div>
    );
};

export default Reviews;

