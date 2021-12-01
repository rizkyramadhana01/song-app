import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navigation />
            <div className="container my-4">
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="card-body p-2">
                        <h1 className="text-info">About this Application</h1>
                        <p>Rizky Ramadhana (105011910029), Sistem Informasi </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default About;