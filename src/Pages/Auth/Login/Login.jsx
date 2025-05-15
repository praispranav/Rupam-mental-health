import React, { useState, useEffect } from 'react';
import './Login.scss';
import loginIllustration from '../../../Assests/ill.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail, remember: true }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: formData.email ? '' : 'Email is required.',
      password: formData.password ? '' : 'Password is required.'
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(error => error !== '');
    if (hasError) {
      toast.error('Please fix the errors and try again.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (formData.remember) {
        localStorage.setItem('userEmail', formData.email);
      } else {
        localStorage.removeItem('userEmail');
      }

      localStorage.setItem('login', 'true');

      toast.success('Logged in successfully!');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-center" />

      <div className="login-right">
        <div className="login-box">
          <h3>Welcome Back</h3>
          <p className="subtitle">Please login to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember Me
              </label>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="bottom-text">
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </div>
        </div>
      </div>

      <div className="login-left">
        <img src={loginIllustration} alt="Mental Health Illustration" />
        <h2>Your Mind Matters</h2>
        <p>We're here to support your journey to emotional well-being.</p>
      </div>
    </div>
  );
};

export default Login;
