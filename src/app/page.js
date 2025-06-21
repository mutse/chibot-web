'use client';
import React from 'react';
import '../i18n'; // 导入 i18n 配置
import {
  Navigation,
  Hero,
  Features,
  Product,
  About,
  Contact,
  CTA,
  Footer,
  AnimatedBackground
} from '../components';

const ChiBotLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Product Section */}
      <Product />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChiBotLanding;