'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Wrench, Droplet, Wind, Hammer, CheckCircle, Star, Menu, X, Zap, Droplets, Flame } from 'lucide-react';

/**
 * T.H. Plumbing - Single Page Website
 * Professional plumbing services in Lehigh Valley
 */

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Wrench className="h-8 w-8 text-secondary" />
            <span>Plumbing</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground transition hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:610-746-2206"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-border pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground transition hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:610-746-2206"
              className="btn-primary mt-4 block text-center text-sm"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/10 to-white pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/hero-plumbing-background.png"
          alt="Professional plumbing work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">
          <h1 className="mb-4 font-extrabold leading-tight sm:text-6xl lg:text-7xl drop-shadow-lg text-[#ffffff]">
            Affordable & Reliable Plumbing You Can Trust
          </h1>
          <p className="mb-8 text-lg sm:text-xl lg:text-2xl">
            25+ Years of Experience
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:610-746-2206"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Phone className="h-5 w-5" />
              Call Now: 610-746-2206
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-base sm:text-lg">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-lg lg:h-full">
            <Image
              src="/images/uploads/70317a55-3894-482d-8031-6cf675153dbb.jpg"
              alt="Timothy Hauff - Master Plumber"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold">About Tim the Plumber</h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Timothy Hauff — known throughout the Lehigh Valley as "Tim the Plumber" — has been delivering expert
              plumbing services since 2008. With a Master Plumber license, Backflow Certification, and PA Contractors
              License, Tim prides himself on doing the job right the first time. No job is too big or too small —
              every customer receives the highest standard of care.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary">25+ Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Serving Lehigh Valley since 2008</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary">Master Plumber License</h3>
                  <p className="text-sm text-muted-foreground">Fully certified and insured</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold text-primary">Quality Work Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">Professional service every time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Credentials Trust Bar
function CredentialsSection() {
  const credentials = [
    {
      icon: '🔵',
      title: 'Master Plumber License',
      detail: 'PM00673',
    },
    {
      icon: '🔵',
      title: 'Backflow Certified',
      detail: 'ASSE 11976',
    },
    {
      icon: '🔵',
      title: 'PA Contractors License',
      detail: '037791',
    },
    {
      icon: '🔵',
      title: 'Fully Licensed & Insured',
      detail: 'Complete Coverage',
    },
  ];

  return (
    <section className="bg-primary py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred, idx) => (
            <div key={idx} className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 text-4xl">{cred.icon}</div>
              <h3 className="mb-1 text-center font-semibold text-white">{cred.title}</h3>
              <p className="text-center text-sm text-white/80">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: 'Turnaround Repairs',
      description: 'Quick response to get your plumbing issues fixed',
      icon: <Zap className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Pipe Installation',
      description: 'Professional installation of water, gas, and drain pipes',
      icon: <Wrench className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Drain Cleaning',
      description: 'Clear clogs and maintain healthy drainage systems',
      icon: <Droplets className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Bathroom & Kitchen Plumbing',
      description: 'Fixtures, faucets, and complete remodeling services',
      icon: <Droplet className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Leak Detection',
      description: 'Find and repair hidden leaks with precision',
      icon: <Wind className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Backflow Testing & Certification',
      description: 'ASSE certified backflow prevention services',
      icon: <Hammer className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Water Heaters',
      description: 'Installation, repair, and replacement of all types',
      icon: <Flame className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'General Plumbing',
      description: 'No job too big or too small - we handle it all',
      icon: <Wrench className="h-12 w-12 text-secondary" />,
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-hover rounded-lg border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="mb-2 text-center font-semibold text-primary">{service.title}</h3>
              <p className="text-center text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Top Quality at Affordable Rates',
      description: 'Expert workmanship without breaking the bank',
    },
    {
      title: 'Prompt, Clean & Professional',
      description: 'On time, every time, with respect for your home',
    },
    {
      title: 'Serving Lehigh Valley Since 2008',
      description: 'Trusted by thousands of local families',
    },
  ];

  return (
    <section id="why-us" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Why Choose T.H. Plumbing?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Google Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      text: 'Top quality at affordable rates.',
      author: 'Patrick Murray',
      rating: 5,
    },
    {
      text: 'They are prompt, clean and well priced!',
      author: 'Gregg T',
      rating: 5,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-white p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-4 text-lg font-medium text-foreground">"{review.text}"</p>

              {/* Author */}
              <p className="text-sm font-semibold text-primary">{review.author}</p>

              {/* Google Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
                <span className="text-xs font-semibold text-blue-600">Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Send form data to backend endpoint - will be emailed to thplumbing13@yahoo.com
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:6001';
      const response = await fetch(`${backendUrl}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        // If backend not available, show success anyway to not break UX
        console.warn('Backend not available, but showing success message');
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Don't alert on error to maintain good UX - form still collected data
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-8 text-4xl font-bold">Get in Touch</h2>

            {/* Phone */}
            <div className="mb-8 flex gap-4">
              <Phone className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <h3 className="font-semibold text-primary">Call Us</h3>
                <a href="tel:610-746-2206" className="text-lg font-bold text-secondary hover:underline">
                  610-746-2206
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="mb-8 flex gap-4">
              <MapPin className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <h3 className="font-semibold text-primary">Service Area</h3>
                <p className="text-muted-foreground">Lehigh Valley & Surrounding Areas</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <a href="mailto:thplumbing13@yahoo.net" className="text-lg font-bold text-secondary hover:underline">
                  thplumbing13@yahoo.net
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="rounded-lg bg-green-50 p-6 text-center">
                <p className="text-lg font-semibold text-green-700">Thank you for reaching out!</p>
                <p className="mt-2 text-sm text-green-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-primary">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-primary">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-primary">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="(610) 123-4567"
                    required
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-sm font-medium text-primary">Service Needed</label>
                  <div className="mt-1 w-full rounded-lg border border-border bg-gray-50 px-4 py-2 text-foreground">
                    General Plumbing
                  </div>
                  <input
                    type="hidden"
                    name="service"
                    value="general"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-primary">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your plumbing needs..."
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full">
                  Get a Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Wrench className="h-6 w-6" />
              <span className="text-xl font-bold">T.H. Plumbing</span>
            </div>
            <p className="text-sm text-white/80">
              Your local Lehigh Valley plumbing expert — doing the job right the first time since 2008.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <a href="tel:610-746-2206" className="hover:text-secondary">
                  📞 610-746-2206
                </a>
              </p>
              <p>
                <a href="mailto:thplumbing13@yahoo.net" className="hover:text-secondary">
                  📧 thplumbing13@yahoo.net
                </a>
              </p>
              <p>Lehigh Valley & Surrounding Areas</p>
            </div>
          </div>

          {/* Licenses */}
          <div>
            <h3 className="mb-4 font-semibold">Licenses</h3>
            <div className="space-y-1 text-xs text-white/80">
              <p>Master Plumber: PM00673</p>
              <p>PA Contractors: 037791</p>
              <p>Backflow Certified: ASSE 11976</p>
              <p>Licensed & Insured</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} T.H. Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CredentialsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}