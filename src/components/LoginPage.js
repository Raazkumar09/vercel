import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [components, setComponents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/components.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setComponents(data.loginPage.components))
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to load components. Please try again later.');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case 'label':
        return <label htmlFor={component.for}>{component.text}</label>;
      case 'textField':
        return <input type="text" id={component.id} placeholder={component.placeholder} />;
      case 'passwordField':
        return <input type="password" id={component.id} placeholder={component.placeholder} />;
      case 'button':
        return <button id={component.id} onClick={handleSubmit}>{component.text}</button>;
      default:
        return null;
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form>
      {components.map((component, index) => (
        <div key={index}>
          {renderComponent(component)}
        </div>
      ))}
    </form>
  );
};

export default LoginPage;
