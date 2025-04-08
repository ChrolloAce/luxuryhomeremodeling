'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Head from 'next/head';

export default function Home() {
  const [testFormData, setTestFormData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  });
  
  const [testResult, setTestResult] = useState('');

  const testWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setTestResult('Sending test message...');
    
    // Send data to webhook
    fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData),
    })
      .then(response => {
        console.log('Webhook response status:', response.status);
        console.log('Webhook response:', response);
        setTestResult(`Success! Status: ${response.status}`);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setTestResult(`Error: ${error.message}`);
      });
  };

  return (
    <>
      <Head>
        <title>Luxury Home Remodeling | Premium Renovation Services in Orlando, FL</title>
        <meta name="description" content="Transform your home with Orlando's leading luxury remodeling company. Specializing in premium kitchen and bathroom renovations, custom cabinetry, and high-end flooring installation." />
        <meta name="keywords" content="luxury home remodeling Orlando, kitchen renovation Orlando FL, bathroom remodeling Orlando, custom cabinetry Orlando, premium renovation services, home improvement Orlando, Orlando contractors, high-end home renovation" />
      </Head>
      
      {/* Test Form (only visible in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          zIndex: 9999
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Test Webhook</h3>
          <form onSubmit={testWebhook} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button type="submit" style={{ 
              padding: '5px 10px', 
              backgroundColor: '#007BFF', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Send Test Message
            </button>
            <div>{testResult}</div>
          </form>
        </div>
      )}
      
      <main>
        <Navbar />
        <Hero />
        <Services />
        <HowItWorks />
        <AboutSection />
        <Industries />
        <Testimonials />
        <Portfolio />
        <CTA />
        <Footer />
      </main>
    </>
  );
} 