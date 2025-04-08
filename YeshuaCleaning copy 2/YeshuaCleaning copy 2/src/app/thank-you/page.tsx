'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ReviewsWidget } from '../../components/ReviewsWidget';

const ThankYouPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white relative">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 whitespace-nowrap">
                Thank You for <span className="gold-gradient-text">Choosing Us</span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-10">
                We've received your request and a member of our team will contact you shortly. While you wait, explore more about our premium remodeling services.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
              >
                <Link href="/services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/" className="btn bg-gray-100 text-gray-800 hover:bg-gray-200">
                  Return to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>
        </section>

        {/* Reviews Widget Section */}
        <section className="py-16 bg-white relative">
          <ReviewsWidget />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage; 