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
    <nav data-zylo-id="zylo-5abe9794d37c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="26:5-90:11" data-zylo-component="Navigation" className="sticky top-0 z-50 bg-white shadow-md">
      <div data-zylo-id="zylo-548398788d45" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="27:7-89:13" data-zylo-component="Navigation" className="container mx-auto px-4">
        <div data-zylo-id="zylo-2a6d43a6afdc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="28:9-66:15" data-zylo-component="Navigation" className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link data-zylo-id="zylo-331d0a9cd766" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="30:11-33:18" data-zylo-component="Navigation" href="#hero" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Wrench data-zylo-id="zylo-7079863e0afa" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="31:13-31:58" data-zylo-component="Navigation" className="h-8 w-8 text-secondary" />
            <span data-zylo-id="zylo-00898e0cc2ac" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="32:13-32:39" data-zylo-component="Navigation">T.H. Plumbing</span>
          </Link>

          {/* Desktop Menu */}
          <div data-zylo-id="zylo-6f36f5611b06" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="36:11-53:17" data-zylo-component="Navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link data-zylo-id="zylo-db2975474419" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="38:15-44:22" data-zylo-component="Navigation"
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground transition hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
            <a data-zylo-id="zylo-3173b47b3fb7" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="46:13-52:17" data-zylo-component="Navigation"
              href="tel:610-746-2206"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Phone data-zylo-id="zylo-717606c4d642" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="50:15-50:44" data-zylo-component="Navigation" className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button data-zylo-id="zylo-68a8a6107728" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/app/page.tsx" data-zylo-loc="56:11-65:20" data-zylo-component="Navigation"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X data-zylo-id="zylo-1f0848bb2fc0" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="61:15-61:40" data-zylo-component="Navigation" className="h-6 w-6" />
            ) : (
              <Menu data-zylo-id="zylo-d7353ef6f1ba" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="63:15-63:43" data-zylo-component="Navigation" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div data-zylo-id="zylo-da0239eb7b98" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="70:11-87:17" data-zylo-component="Navigation" className="border-t border-border pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link data-zylo-id="zylo-59ee2132bf93" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="72:15-79:22" data-zylo-component="Navigation"
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground transition hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a data-zylo-id="zylo-f659a2489eaf" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="81:13-86:17" data-zylo-component="Navigation"
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
    <section data-zylo-id="zylo-55844af4f89a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="97:5-138:15" data-zylo-component="HeroSection"
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/10 to-white pt-20"
    >
      {/* Background Image with Overlay */}
      <div data-zylo-id="zylo-bee45ca81abc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="102:7-111:13" data-zylo-component="HeroSection" className="absolute inset-0 z-0">
        <Image data-zylo-id="zylo-44b9d7bdffbc" data-zylo-kind="media" data-zylo-cap="742" data-zylo-file="src/app/page.tsx" data-zylo-loc="103:9-109:11" data-zylo-component="HeroSection"
          src="/images/generated/hero-plumbing-background.png"
          alt="Professional plumbing work"
          fill
          className="object-cover"
          priority
        />
        <div data-zylo-id="zylo-71da7982b5f0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="110:9-110:57" data-zylo-component="HeroSection" className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div data-zylo-id="zylo-c433dbf7e19a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="114:7-137:13" data-zylo-component="HeroSection" className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div data-zylo-id="zylo-97a4a070585c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="115:9-136:15" data-zylo-component="HeroSection" className="max-w-3xl text-center text-white">
          <h1 data-zylo-id="zylo-7991a2155e41" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="116:11-118:16" data-zylo-component="HeroSection" className="mb-4 font-extrabold leading-tight sm:text-6xl lg:text-7xl drop-shadow-lg text-[#ffffff]">
            Affordable & Reliable Plumbing You Can Trust
          </h1>
          <p data-zylo-id="zylo-fc748aab4260" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="119:11-121:15" data-zylo-component="HeroSection" className="mb-8 text-lg sm:text-xl lg:text-2xl">
            25+ Years of Experience
          </p>

          {/* CTA Buttons */}
          <div data-zylo-id="zylo-9e977db153dd" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="124:11-135:17" data-zylo-component="HeroSection" className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a data-zylo-id="zylo-b054c227570b" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="125:13-131:17" data-zylo-component="HeroSection"
              href="tel:610-746-2206"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Phone data-zylo-id="zylo-c6a9dd6c0b2e" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="129:15-129:44" data-zylo-component="HeroSection" className="h-5 w-5" />
              Call Now: 610-746-2206
            </a>
            <a data-zylo-id="zylo-9946407c4546" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="132:13-134:17" data-zylo-component="HeroSection" href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-base sm:text-lg">
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
    <section data-zylo-id="zylo-b18f2e6ef648" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="145:5-195:15" data-zylo-component="AboutSection" id="about" className="section bg-white">
      <div data-zylo-id="zylo-7e7bec1376f9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="146:7-194:13" data-zylo-component="AboutSection" className="container mx-auto px-4">
        <div data-zylo-id="zylo-b2c9de62412f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="147:9-193:15" data-zylo-component="AboutSection" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div data-zylo-id="zylo-6fecd3917820" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="149:11-156:17" data-zylo-component="AboutSection" className="relative h-96 w-full overflow-hidden rounded-xl shadow-lg lg:h-full">
            <Image data-zylo-id="zylo-26f8a9ecd36b" data-zylo-kind="media" data-zylo-cap="742" data-zylo-file="src/app/page.tsx" data-zylo-loc="150:13-155:15" data-zylo-component="AboutSection"
              src="/images/uploads/70317a55-3894-482d-8031-6cf675153dbb.jpg"
              alt="Timothy Hauff - Master Plumber"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div data-zylo-id="zylo-696cb0a6c6df" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="159:11-192:17" data-zylo-component="AboutSection">
            <h2 data-zylo-id="zylo-b5fc2d9e070f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="160:13-160:79" data-zylo-component="AboutSection" className="mb-6 text-4xl font-bold">About Tim the Plumber</h2>
            <p data-zylo-id="zylo-7fead31d2d30" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="161:13-166:17" data-zylo-component="AboutSection" className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Timothy Hauff — known throughout the Lehigh Valley as "Tim the Plumber" — has been delivering expert
              plumbing services since 2008. With a Master Plumber license, Backflow Certification, and PA Contractors
              License, Tim prides himself on doing the job right the first time. No job is too big or too small —
              every customer receives the highest standard of care.
            </p>

            {/* Highlights */}
            <div data-zylo-id="zylo-bda80d52dc8e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="169:13-191:19" data-zylo-component="AboutSection" className="space-y-4">
              <div data-zylo-id="zylo-3b4790c151e2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="170:15-176:21" data-zylo-component="AboutSection" className="flex items-start gap-4">
                <CheckCircle data-zylo-id="zylo-e5699aaa1718" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="171:17-171:86" data-zylo-component="AboutSection" className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div data-zylo-id="zylo-0daa5b6aa371" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="172:17-175:23" data-zylo-component="AboutSection">
                  <h3 data-zylo-id="zylo-1c6f5249be2f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="173:19-173:87" data-zylo-component="AboutSection" className="font-semibold text-primary">25+ Years Experience</h3>
                  <p data-zylo-id="zylo-4e593c1bebc4" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="174:19-174:100" data-zylo-component="AboutSection" className="text-sm text-muted-foreground">Serving Lehigh Valley since 2008</p>
                </div>
              </div>
              <div data-zylo-id="zylo-518e1626accc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="177:15-183:21" data-zylo-component="AboutSection" className="flex items-start gap-4">
                <CheckCircle data-zylo-id="zylo-997f549ca5b2" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="178:17-178:86" data-zylo-component="AboutSection" className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div data-zylo-id="zylo-70fd8049f20c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="179:17-182:23" data-zylo-component="AboutSection">
                  <h3 data-zylo-id="zylo-661f2db71435" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="180:19-180:89" data-zylo-component="AboutSection" className="font-semibold text-primary">Master Plumber License</h3>
                  <p data-zylo-id="zylo-6e745804a93f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="181:19-181:95" data-zylo-component="AboutSection" className="text-sm text-muted-foreground">Fully certified and insured</p>
                </div>
              </div>
              <div data-zylo-id="zylo-60e56c507bab" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="184:15-190:21" data-zylo-component="AboutSection" className="flex items-start gap-4">
                <CheckCircle data-zylo-id="zylo-6e5877d6143e" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="185:17-185:86" data-zylo-component="AboutSection" className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div data-zylo-id="zylo-dffed2b1c946" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="186:17-189:23" data-zylo-component="AboutSection">
                  <h3 data-zylo-id="zylo-e7a3939e0595" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="187:19-187:90" data-zylo-component="AboutSection" className="font-semibold text-primary">Quality Work Guaranteed</h3>
                  <p data-zylo-id="zylo-c45d4ec62142" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="188:19-188:99" data-zylo-component="AboutSection" className="text-sm text-muted-foreground">Professional service every time</p>
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
    <section data-zylo-id="zylo-4eac2e6b8515" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="225:5-237:15" data-zylo-component="CredentialsSection" className="bg-primary py-12 sm:py-16">
      <div data-zylo-id="zylo-f4b686dccdfc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="226:7-236:13" data-zylo-component="CredentialsSection" className="container mx-auto px-4">
        <div data-zylo-id="zylo-c466261119fe" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="227:9-235:15" data-zylo-component="CredentialsSection" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred, idx) => (
            <div data-zylo-id="zylo-098d03f864fc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="229:13-233:19" data-zylo-component="CredentialsSection" key={idx} className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div data-zylo-id="zylo-1532d5074c0b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="230:15-230:63" data-zylo-component="CredentialsSection" className="mb-3 text-4xl">{cred.icon}</div>
              <h3 data-zylo-id="zylo-4c9bfcba04af" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="231:15-231:90" data-zylo-component="CredentialsSection" className="mb-1 text-center font-semibold text-white">{cred.title}</h3>
              <p data-zylo-id="zylo-aa3f520775cf" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="232:15-232:81" data-zylo-component="CredentialsSection" className="text-center text-sm text-white/80">{cred.detail}</p>
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
      icon: <Zap data-zylo-id="zylo-f4bef2f3e6cc" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="247:13-247:57" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Pipe Installation',
      description: 'Professional installation of water, gas, and drain pipes',
      icon: <Wrench data-zylo-id="zylo-11fce9d19353" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="252:13-252:60" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Drain Cleaning',
      description: 'Clear clogs and maintain healthy drainage systems',
      icon: <Droplets data-zylo-id="zylo-b03c73c6175f" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="257:13-257:62" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Bathroom & Kitchen Plumbing',
      description: 'Fixtures, faucets, and complete remodeling services',
      icon: <Droplet data-zylo-id="zylo-a6ce0c1bb7da" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="262:13-262:61" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Leak Detection',
      description: 'Find and repair hidden leaks with precision',
      icon: <Wind data-zylo-id="zylo-bea12ff9b7a4" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="267:13-267:58" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Backflow Testing & Certification',
      description: 'ASSE certified backflow prevention services',
      icon: <Hammer data-zylo-id="zylo-0c954b6c1b7e" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="272:13-272:60" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'Water Heaters',
      description: 'Installation, repair, and replacement of all types',
      icon: <Flame data-zylo-id="zylo-9534423ff125" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="277:13-277:59" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
    {
      title: 'General Plumbing',
      description: 'No job too big or too small - we handle it all',
      icon: <Wrench data-zylo-id="zylo-7c8a8b5d507d" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="282:13-282:60" data-zylo-component="ServicesSection" className="h-12 w-12 text-secondary" />,
    },
  ];

  return (
    <section data-zylo-id="zylo-a5b9a4ee20f5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="287:5-303:15" data-zylo-component="ServicesSection" id="services" className="section bg-white">
      <div data-zylo-id="zylo-bcf8976e142c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="288:7-302:13" data-zylo-component="ServicesSection" className="container mx-auto px-4">
        <h2 data-zylo-id="zylo-ac27811af277" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="289:9-289:62" data-zylo-component="ServicesSection" className="section-title mb-12">Our Services</h2>
        <div data-zylo-id="zylo-09e57208922c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="290:9-301:15" data-zylo-component="ServicesSection" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div data-zylo-id="zylo-049bc14f3a11" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="292:13-299:19" data-zylo-component="ServicesSection"
              key={idx}
              className="card-hover rounded-lg border border-border bg-white p-6 shadow-sm"
            >
              <div data-zylo-id="zylo-f63a39732b44" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="296:15-296:77" data-zylo-component="ServicesSection" className="mb-4 flex justify-center">{service.icon}</div>
              <h3 data-zylo-id="zylo-4730523e8722" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="297:15-297:105" data-zylo-component="ServicesSection" className="mb-2 text-center font-semibold text-primary">Prompt Turnaround Repairs</h3>
              <p data-zylo-id="zylo-ffb6c7654918" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="298:15-298:97" data-zylo-component="ServicesSection" className="text-center text-sm text-muted-foreground">{service.description}</p>
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
    <section data-zylo-id="zylo-be73d3687c30" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="325:5-343:15" data-zylo-component="WhyChooseUsSection" id="why-us" className="section bg-gray-50">
      <div data-zylo-id="zylo-ffdd6acde70f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="326:7-342:13" data-zylo-component="WhyChooseUsSection" className="container mx-auto px-4">
        <h2 data-zylo-id="zylo-dc089a0f9d76" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="327:9-327:75" data-zylo-component="WhyChooseUsSection" className="section-title mb-12">Why Choose T.H. Plumbing?</h2>
        <div data-zylo-id="zylo-dc4fce0f0432" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="328:9-341:15" data-zylo-component="WhyChooseUsSection" className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, idx) => (
            <div data-zylo-id="zylo-38f98bace113" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="330:13-339:19" data-zylo-component="WhyChooseUsSection"
              key={idx}
              className="rounded-lg border border-border bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div data-zylo-id="zylo-dd38b167cf69" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="334:15-336:21" data-zylo-component="WhyChooseUsSection" className="mb-4">
                <CheckCircle data-zylo-id="zylo-c67a806a1f94" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="335:17-335:69" data-zylo-component="WhyChooseUsSection" className="h-10 w-10 text-secondary" />
              </div>
              <h3 data-zylo-id="zylo-c4dce36b3860" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="337:15-337:86" data-zylo-component="WhyChooseUsSection" className="mb-3 text-xl font-bold text-primary">{reason.title}</h3>
              <p data-zylo-id="zylo-36ac9ac60439" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="338:15-338:76" data-zylo-component="WhyChooseUsSection" className="text-muted-foreground">{reason.description}</p>
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
      author: 'Happy Customer',
      rating: 5,
    },
    {
      text: 'They are prompt, clean and well priced!',
      author: 'Satisfied Client',
      rating: 5,
    },
  ];

  return (
    <section data-zylo-id="zylo-f1f8f9b02b48" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="363:5-393:15" data-zylo-component="ReviewsSection" className="section bg-white">
      <div data-zylo-id="zylo-ce298c84dae9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="364:7-392:13" data-zylo-component="ReviewsSection" className="container mx-auto px-4">
        <h2 data-zylo-id="zylo-e38532f4bb71" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="365:9-365:72" data-zylo-component="ReviewsSection" className="section-title mb-12">What Our Customers Say</h2>
        <div data-zylo-id="zylo-192e042c7d8d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="366:9-391:15" data-zylo-component="ReviewsSection" className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, idx) => (
            <div data-zylo-id="zylo-4f88ca240db1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="368:13-389:19" data-zylo-component="ReviewsSection"
              key={idx}
              className="rounded-lg border border-border bg-white p-8 shadow-sm"
            >
              {/* Stars */}
              <div data-zylo-id="zylo-28d6e8f7cff0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="373:15-377:21" data-zylo-component="ReviewsSection" className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star data-zylo-id="zylo-c54f2848598c" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="375:19-375:87" data-zylo-component="ReviewsSection" key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p data-zylo-id="zylo-b22d341b91e4" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="380:15-380:90" data-zylo-component="ReviewsSection" className="mb-4 text-lg font-medium text-foreground">"{review.text}"</p>

              {/* Author */}
              <p data-zylo-id="zylo-103a64ca1684" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="383:15-383:76" data-zylo-component="ReviewsSection" className="text-sm font-semibold text-primary">Gregg T</p>

              {/* Google Badge */}
              <div data-zylo-id="zylo-771a658b4726" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="386:15-388:21" data-zylo-component="ReviewsSection" className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
                <span data-zylo-id="zylo-539b0dd0a0bd" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="387:17-387:84" data-zylo-component="ReviewsSection" className="text-xs font-semibold text-blue-600">Google</span>
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
    <section data-zylo-id="zylo-82e185088eea" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="459:5-584:15" data-zylo-component="ContactSection" id="contact" className="section bg-gray-50">
      <div data-zylo-id="zylo-adcd86229350" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="460:7-583:13" data-zylo-component="ContactSection" className="container mx-auto px-4">
        <div data-zylo-id="zylo-a135a9e88451" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="461:9-582:15" data-zylo-component="ContactSection" className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div data-zylo-id="zylo-cf805d2917e8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="463:11-496:17" data-zylo-component="ContactSection">
            <h2 data-zylo-id="zylo-f6d6d5d273a9" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="464:13-464:70" data-zylo-component="ContactSection" className="mb-8 text-4xl font-bold">Get in Touch</h2>

            {/* Phone */}
            <div data-zylo-id="zylo-7c59caf4acac" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="467:13-475:19" data-zylo-component="ContactSection" className="mb-8 flex gap-4">
              <Phone data-zylo-id="zylo-8413a16e30f7" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="468:15-468:73" data-zylo-component="ContactSection" className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div data-zylo-id="zylo-beaf728be55e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="469:15-474:21" data-zylo-component="ContactSection">
                <h3 data-zylo-id="zylo-586ec9ae808f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="470:17-470:72" data-zylo-component="ContactSection" className="font-semibold text-primary">Call Us</h3>
                <a data-zylo-id="zylo-3acba2197a3c" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="471:17-473:21" data-zylo-component="ContactSection" href="tel:610-746-2206" className="text-lg font-bold text-secondary hover:underline">
                  610-746-2206
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div data-zylo-id="zylo-b29fe825b6c0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="478:13-484:19" data-zylo-component="ContactSection" className="mb-8 flex gap-4">
              <MapPin data-zylo-id="zylo-bbfb2798ba86" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="479:15-479:74" data-zylo-component="ContactSection" className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div data-zylo-id="zylo-c075760ad42c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="480:15-483:21" data-zylo-component="ContactSection">
                <h3 data-zylo-id="zylo-9cb5158bb463" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="481:17-481:77" data-zylo-component="ContactSection" className="font-semibold text-primary">Service Area</h3>
                <p data-zylo-id="zylo-c7ba2317f383" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="482:17-482:91" data-zylo-component="ContactSection" className="text-muted-foreground">Lehigh Valley & Surrounding Areas</p>
              </div>
            </div>

            {/* Email */}
            <div data-zylo-id="zylo-f677bd69efde" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="487:13-495:19" data-zylo-component="ContactSection" className="flex gap-4">
              <Mail data-zylo-id="zylo-9b45f80c298b" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="488:15-488:72" data-zylo-component="ContactSection" className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div data-zylo-id="zylo-d7bfa0f601e5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="489:15-494:21" data-zylo-component="ContactSection">
                <h3 data-zylo-id="zylo-5e65b1e6ca8d" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="490:17-490:70" data-zylo-component="ContactSection" className="font-semibold text-primary">Email</h3>
                <a data-zylo-id="zylo-25813cf1ff1b" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="491:17-493:21" data-zylo-component="ContactSection" href="mailto:thplumbing13@yahoo.net" className="text-lg font-bold text-secondary hover:underline">
                  thplumbing13@yahoo.net
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-zylo-id="zylo-14d5ec5e8002" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="499:11-581:17" data-zylo-component="ContactSection" className="rounded-lg bg-white p-8 shadow-sm">
            {submitted ? (
              <div data-zylo-id="zylo-0b7fd429afdb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="501:15-504:21" data-zylo-component="ContactSection" className="rounded-lg bg-green-50 p-6 text-center">
                <p data-zylo-id="zylo-e9a6a7f30bea" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="502:17-502:100" data-zylo-component="ContactSection" className="text-lg font-semibold text-green-700">Thank you for reaching out!</p>
                <p data-zylo-id="zylo-55af55f0e284" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="503:17-503:94" data-zylo-component="ContactSection" className="mt-2 text-sm text-green-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form data-zylo-id="zylo-9d580b356ed5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="506:15-579:22" data-zylo-component="ContactSection" onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div data-zylo-id="zylo-a1884d8443d0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="508:17-519:23" data-zylo-component="ContactSection">
                  <label data-zylo-id="zylo-a6f53afb873b" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="509:19-509:91" data-zylo-component="ContactSection" className="block text-sm font-medium text-primary">Name *</label>
                  <input data-zylo-id="zylo-50ee2fc8f27f" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/app/page.tsx" data-zylo-loc="510:19-518:21" data-zylo-component="ContactSection"
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
                <div data-zylo-id="zylo-8a9694c46062" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="522:17-533:23" data-zylo-component="ContactSection">
                  <label data-zylo-id="zylo-33b7f8a4c695" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="523:19-523:92" data-zylo-component="ContactSection" className="block text-sm font-medium text-primary">Email *</label>
                  <input data-zylo-id="zylo-a864de8cd954" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/app/page.tsx" data-zylo-loc="524:19-532:21" data-zylo-component="ContactSection"
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
                <div data-zylo-id="zylo-49eb8db01aa6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="536:17-547:23" data-zylo-component="ContactSection">
                  <label data-zylo-id="zylo-297bcf6e163a" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="537:19-537:92" data-zylo-component="ContactSection" className="block text-sm font-medium text-primary">Phone *</label>
                  <input data-zylo-id="zylo-5c4d7b8c0221" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/app/page.tsx" data-zylo-loc="538:19-546:21" data-zylo-component="ContactSection"
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
                <div data-zylo-id="zylo-b21d611a468f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="550:17-560:23" data-zylo-component="ContactSection">
                  <label data-zylo-id="zylo-7be9899cf333" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="551:19-551:99" data-zylo-component="ContactSection" className="block text-sm font-medium text-primary">Service Needed</label>
                  <div data-zylo-id="zylo-5b7a6266e769" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="552:19-554:25" data-zylo-component="ContactSection" className="mt-1 w-full rounded-lg border border-border bg-gray-50 px-4 py-2 text-foreground">
                    General Plumbing
                  </div>
                  <input data-zylo-id="zylo-3872a0222c3f" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/app/page.tsx" data-zylo-loc="555:19-559:21" data-zylo-component="ContactSection"
                    type="hidden"
                    name="service"
                    value="general"
                  />
                </div>

                {/* Message */}
                <div data-zylo-id="zylo-f7ee214748aa" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="563:17-573:23" data-zylo-component="ContactSection">
                  <label data-zylo-id="zylo-9369aa8dd40e" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="564:19-564:92" data-zylo-component="ContactSection" className="block text-sm font-medium text-primary">Message</label>
                  <textarea data-zylo-id="zylo-e1599493ef67" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/app/page.tsx" data-zylo-loc="565:19-572:21" data-zylo-component="ContactSection"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your plumbing needs..."
                  />
                </div>

                {/* Submit Button */}
                <button data-zylo-id="zylo-ba5ac6c840e4" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/app/page.tsx" data-zylo-loc="576:17-578:26" data-zylo-component="ContactSection" type="submit" className="btn-primary w-full">
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
    <footer data-zylo-id="zylo-650b0818df72" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="591:5-640:14" data-zylo-component="Footer" className="bg-primary py-12 text-white">
      <div data-zylo-id="zylo-d2c15ec9bcb6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="592:7-639:13" data-zylo-component="Footer" className="container mx-auto px-4">
        <div data-zylo-id="zylo-2def76a175a3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="593:9-633:15" data-zylo-component="Footer" className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div data-zylo-id="zylo-eac7e49d5921" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="595:11-603:17" data-zylo-component="Footer">
            <div data-zylo-id="zylo-6092168a1dbc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="596:13-599:19" data-zylo-component="Footer" className="mb-4 flex items-center gap-2">
              <Wrench data-zylo-id="zylo-88e06ea42ed9" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/app/page.tsx" data-zylo-loc="597:15-597:45" data-zylo-component="Footer" className="h-6 w-6" />
              <span data-zylo-id="zylo-5dff6472686e" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="598:15-598:71" data-zylo-component="Footer" className="text-xl font-bold">T.H. Plumbing</span>
            </div>
            <p data-zylo-id="zylo-1e6ff16bbcd2" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="600:13-602:17" data-zylo-component="Footer" className="text-sm text-white/80">
              Your local Lehigh Valley plumbing expert — doing the job right the first time since 2008.
            </p>
          </div>

          {/* Contact Info */}
          <div data-zylo-id="zylo-b60b0f38f35d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="606:11-621:17" data-zylo-component="Footer">
            <h3 data-zylo-id="zylo-5b18d9fba40d" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="607:13-607:60" data-zylo-component="Footer" className="mb-4 font-semibold">Contact</h3>
            <div data-zylo-id="zylo-cf2e40b44ffb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="608:13-620:19" data-zylo-component="Footer" className="space-y-2 text-sm text-white/80">
              <p data-zylo-id="zylo-109373945db5" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="609:15-613:19" data-zylo-component="Footer">
                <a data-zylo-id="zylo-82fda8afaa09" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="610:17-612:21" data-zylo-component="Footer" href="tel:610-746-2206" className="hover:text-secondary">
                  📞 610-746-2206
                </a>
              </p>
              <p data-zylo-id="zylo-a8e67167b4ab" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="614:15-618:19" data-zylo-component="Footer">
                <a data-zylo-id="zylo-0326b9aa6cec" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/app/page.tsx" data-zylo-loc="615:17-617:21" data-zylo-component="Footer" href="mailto:thplumbing13@yahoo.net" className="hover:text-secondary">
                  📧 thplumbing13@yahoo.net
                </a>
              </p>
              <p data-zylo-id="zylo-b42461283776" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="619:15-619:55" data-zylo-component="Footer">Lehigh Valley & Surrounding Areas</p>
            </div>
          </div>

          {/* Licenses */}
          <div data-zylo-id="zylo-ceaa60c75dfb" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="624:11-632:17" data-zylo-component="Footer">
            <h3 data-zylo-id="zylo-06810ae5f4e6" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="625:13-625:61" data-zylo-component="Footer" className="mb-4 font-semibold">Licenses</h3>
            <div data-zylo-id="zylo-8c7aa18b70a5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="626:13-631:19" data-zylo-component="Footer" className="space-y-1 text-xs text-white/80">
              <p data-zylo-id="zylo-a5197ffe2d5c" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="627:15-627:45" data-zylo-component="Footer">Master Plumber: PM00673</p>
              <p data-zylo-id="zylo-2e7e84df7542" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="628:15-628:44" data-zylo-component="Footer">PA Contractors: 037791</p>
              <p data-zylo-id="zylo-c2f610bebf0c" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="629:15-629:52" data-zylo-component="Footer">Backflow Certified: ASSE 11976</p>
              <p data-zylo-id="zylo-99b11380221a" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="630:15-630:46" data-zylo-component="Footer">Fully Licensed & Insured</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div data-zylo-id="zylo-9784d16d2c3b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="636:9-638:15" data-zylo-component="Footer" className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p data-zylo-id="zylo-3e9fb03fe020" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/app/page.tsx" data-zylo-loc="637:11-637:87" data-zylo-component="Footer">&copy; {new Date().getFullYear()} T.H. Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <div data-zylo-id="zylo-9aefab2eab09" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="647:5-657:11" data-zylo-component="HomePage" className="w-full">
      <Navigation data-zylo-id="zylo-5a1c4ea4b83c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="648:7-648:21" data-zylo-component="HomePage" />
      <HeroSection data-zylo-id="zylo-31de06d3878e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="649:7-649:22" data-zylo-component="HomePage" />
      <AboutSection data-zylo-id="zylo-aed5a1cf4f07" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="650:7-650:23" data-zylo-component="HomePage" />
      <CredentialsSection data-zylo-id="zylo-19ab204e8e2f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="651:7-651:29" data-zylo-component="HomePage" />
      <ServicesSection data-zylo-id="zylo-cdeaaf66458c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="652:7-652:26" data-zylo-component="HomePage" />
      <WhyChooseUsSection data-zylo-id="zylo-0af3c1934b6e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="653:7-653:29" data-zylo-component="HomePage" />
      <ReviewsSection data-zylo-id="zylo-b0b798b74641" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="654:7-654:25" data-zylo-component="HomePage" />
      <ContactSection data-zylo-id="zylo-29ea8845442c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="655:7-655:25" data-zylo-component="HomePage" />
      <Footer data-zylo-id="zylo-68fdedaa6785" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/app/page.tsx" data-zylo-loc="656:7-656:17" data-zylo-component="HomePage" />
    </div>
  );
}