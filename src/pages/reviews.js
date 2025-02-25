import React from 'react';
import { Link } from "react-router-dom";

import Navbar from '../components/nav';
import Footer from '../components/footer';

import "../navfoot.css";
import "../reviews.css"; 

// Sorting reviews by rating (highest to lowest)
const reviews = [
    { id: 1, name: 'Jane', rating: 5, title: 'Excellent Service', content: 'I had a fantastic experience with this company. Highly recommend!', date: '2025-02-20' },
    { id: 2, name: 'Smith', rating: 4, title: 'Great Product', content: 'The product quality is great, but shipping was a bit slow.', date: '2025-02-18' },
    { id: 3, name: 'Doe', rating: 5, title: 'Excellent Service', content: 'I had a fantastic experience with this company. Highly recommend!', date: '2025-02-20' },
    { id: 4, name: 'John', rating: 4, title: 'Great Product', content: 'The product quality is great, but shipping was a bit slow.', date: '2025-02-18' },
    { id: 5, name: 'Doey', rating: 5, title: 'Excellent Service', content: 'I had a fantastic experience with this company. Highly recommend!', date: '2025-02-20' },
    { id: 6, name: 'Johny', rating: 4, title: 'Great Product', content: 'The product quality is great, but shipping was a bit slow.', date: '2025-02-18' },
    { id: 7, name: 'Janey', rating: 5, title: 'Excellent Service', content: 'I had a fantastic experience with this company. Highly recommend!', date: '2025-02-20' },
    { id: 8, name: 'Smithy', rating: 4, title: 'Great Product', content: 'The product quality is great, but shipping was a bit slow.', date: '2025-02-18' }
];

// Sort reviews by rating (highest to lowest)
const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);

const Reviews = () => {
    return (
        <div className='reviewsPage'>
            <Navbar />
            <section className="reviews-section">
                <h2>What Our Customers Are Saying</h2>
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
                <h2>Contact Us</h2>
                <p>Feel free to reach out!</p>
            </section>
            <Footer />
        </div>
    );
};

export default Reviews;