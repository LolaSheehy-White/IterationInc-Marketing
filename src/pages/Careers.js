import React, { useState } from 'react';

import { Link } from "react-router-dom";

import Navbar from "../components/nav";

import Footer from "../components/footer";

import "../navfoot.css";
import "../Careers.css";

const Careers = () => {
    const allJobs = [
    {
        title: 'Frontend Developer',
        description:
        'We are looking for a talented Frontend Developer to work with our team to build amazing digital experiences.',
        location: 'Remote/Edinburgh',
        type: 'Frontend Developer',
    },
    {
        title: 'Backend Developer',
        description:
        'Join our team as a Backend Developer to help us scale our platform and optimize server-side code.',
        location: 'Remote/Edinburgh',
        type: 'Backend Developer',
    },
    {
        title: 'Software Engineer',
        description:
        'Looking for a passionate Software Engineer to design and develop software solutions for our clients.',
        location: 'Remote/Edinburgh',
        type: 'Software Engineer',
    },
    {
        title: 'Marketing Manager',
        description:
        'We are looking for a Marketing Manager to help build our brand and increase market visibility.',
        location: 'On-site - New York',
        type: 'Marketing',
    },
    {
        title: 'Sales Representative',
        description:
        'Join our team as a Sales Representative and help us drive sales and build customer relationships.',
        location: 'Remote/Edinburgh',
        type: 'Sales',
    },
    {
        title: 'Frontend Developer Internship',
        description:
        'We are looking for a talented Frontend Developer to work with our team to build amazing digital experiences.',
        location: 'Remote/Edinburgh',
        type: 'Frontend Developer intern',
    },
    {
        title: 'Backend Developer Internship',
        description:
        'Join our team as a Backend Developer to help us scale our platform and optimize server-side code.',
        location: 'Remote/Edinburgh',
        type: 'Backend Developer',
    },
    {
        title: 'Software Engineer Internship',
        description:
        'Looking for a passionate Software Engineer to design and develop software solutions for our clients.',
        location: 'Remote/Edinburgh',
        type: 'Software Engineer',
    },
    {
        title: 'Marketing Manager Internship',
        description:
        'We are looking for a Marketing Manager to help build our brand and increase market visibility.',
        location: 'On-site - New York',
        type: 'Marketing',
    },
    {
        title: 'Sales Representative Internship',
        description:
        'Join our team as a Sales Representative and help us drive sales and build customer relationships.',
        location: 'Remote/Edinburgh',
        type: 'Sales',
    },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Filter jobs based on search query and selected filter
    const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
        selectedFilter === 'All' || job.type === selectedFilter;

    return matchesSearch && matchesFilter;
    });

    const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    };

    return (
    <div className="careers-container">
        {/* Hero Section */}
        <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">Join Our Team</h1>
            <p className="hero-subtitle">
            We are always looking for talented individuals to join our growing team. Explore the opportunities
            below!
            </p>
            <button className="apply-cta-btn">See Job Openings</button>
        </div>
        </section>

        {/* Job Listings Section */}
        <section className="job-listings">
        <h2 className="section-title">Current Job Openings</h2>

        {/* Search and Filter */}
        <div className="search-filter-container">
            <input
            type="text"
            placeholder="Search Jobs"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            />

            <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="filter-dropdown"
            >
            <option value="All">All Job Types</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            </select>
        </div>

        <div className="job-cards">
            {filteredJobs.length === 0 ? (
            <p>No jobs found matching your criteria.</p>
            ) : (
            filteredJobs.map((job, index) => (
                <div className="job-card" key={index}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p className="job-location">Location: {job.location}</p>
                <a href="#" className="apply-btn">
                    Apply Now
                </a>
                </div>
            ))
            )}
        </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us at:</p>
        <p>Email: <a href="mailto:jobs@company.com">jobs@company.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
        </section>
    </div>
    );
};

export default Careers;