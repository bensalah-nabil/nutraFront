// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://your-backend-api.com/login', {
        email: formData.email,
        password: formData.password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);

      // Store token if remember me is checked
      if (formData.remember && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      } else if (response.data.token) {
        sessionStorage.setItem('authToken', response.data.token);
      }

      // Redirect to home page after successful login
      // navigate('/'); // or navigate('/home') depending on your route

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
      navigate('/');
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>{t('loginForm.email')}</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>{t('loginForm.password')}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rememberMe">
        <Form.Check
          type="checkbox"
          label={t('loginForm.remember')}
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100">
        {!isLoading?"submit":"Loading..."}
      </Button>

    </Form>
  );
};

export default LoginForm;
