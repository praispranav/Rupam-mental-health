import React from 'react';
import './Signup.scss';
import signupIllustration from '../../../Assests/ill.png'

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-right">
                <div className="signup-box">
                    <h3>Create Your Account</h3>
                    <p className="subtitle">Start your healing journey with us</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Enter your password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input id="confirmPassword" type="password" placeholder="Repeat your password" required />
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    <div className="bottom-text">
                        Already have an account? <a href="/login">Login here</a>
                    </div>
                </div>
            </div>
            <div className="signup-left">
                <img src={signupIllustration} alt="Mental Health Illustration" />
                <h2>You're Not Alone</h2>
                <p>Join our caring community focused on emotional well-being and support.</p>
            </div>

        </div>
    );
};

export default Signup;
