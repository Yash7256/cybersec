import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiBars3,
  HiXMark,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCpuChip
} from 'react-icons/hi2';
import { FiArrowRight, FiGithub, FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// Navigation links
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'API', href: '/api-docs' },
  { label: 'GitHub', href: 'https://github.com' }
];

// Feature sections
const featureSections = [
  {
    title: '🤖 AI-Powered Intelligence',
    subtitle: 'Bring AI into every phase of your security workflow.',
    icon: HiOutlineSparkles,
    groups: [
      {
        title: 'AI Capabilities',
        items: [
          'Natural Language Security Assistant - Ask questions in plain English about cybersecurity',
          'Automated Security Recommendations - Get actionable insights automatically',
          'Contextual Explanations - Understand security concepts with AI-generated explanations',
          'Smart Report Generation - AI-generated security assessment reports'
        ]
      }
    ]
  },
  {
    title: '🔍 Advanced Scanning Capabilities',
    subtitle: 'Deep coverage with fast, accurate detection.',
    icon: HiOutlineBolt,
    groups: [
      {
        title: 'Port & Network Scanning',
        items: [
          'TCP Port Scanning - Fast and accurate TCP port discovery',
          'UDP Port Scanning - Comprehensive UDP service detection',
          'Custom Port Range Scanning - Scan specific port ranges (e.g., 1-1000)',
          'Top Ports Scanning - Quick scan of most common 1000 ports',
          'Fast Scan Mode - Optimized for speed with essential ports only'
        ]
      },
      {
        title: 'Service Detection',
        items: [
          'Enhanced Service Detection - Accurate service identification with active probing',
          'Version Detection - Identify software versions running on open ports',
          'OS Fingerprinting - Operating system detection and identification',
          'Banner Grabbing - Extract service banners for detailed analysis'
        ]
      },
      {
        title: 'Security Analysis',
        items: [
          'SSL/TLS Certificate Analysis - Check SSL configuration and certificate validity',
          'Vulnerability Scanning - Automated vulnerability detection',
          'Security Posture Assessment - Comprehensive security evaluation'
        ]
      }
    ]
  },
  {
    title: '⚡ Performance & Optimization',
    subtitle: 'Built for speed, stability, and safe usage at scale.',
    icon: HiOutlineCpuChip,
    groups: [
      {
        title: 'Performance Controls',
        items: [
          'Adaptive Concurrency Control - Auto-adjusts scanning speed based on network performance',
          'Intelligent Rate Limiting - Prevents overwhelming target systems',
          'Sliding Window Rate Limiting - Advanced request throttling',
          'Abuse Detection System - Prevents misuse with built-in safeguards',
          'Smart Caching System - Avoid redundant scans with intelligent caching',
          'In-Memory Fallback - Automatic fallback when Redis is unavailable'
        ]
      }
    ]
  },
  {
    title: '🌐 Web Interface & API',
    subtitle: 'Modern UI plus developer-friendly integrations.',
    icon: HiOutlineChartBar,
    groups: [
      {
        title: 'Web Dashboard',
        items: [
          'Modern Web Interface - Beautiful, responsive dashboard',
          'Real-Time Scan Monitoring - Watch scans progress live',
          'Interactive Results Dashboard - Explore scan results visually',
          'Scan History Viewer - Access all previous scan results',
          'Advanced Filtering - Filter and search through scan results',
          'Performance Metrics - Monitor system performance in real-time'
        ]
      },
      {
        title: 'API Access',
        items: [
          'RESTful API - Full programmatic access to all features',
          'WebSocket Support - Real-time bidirectional communication',
          'Server-Sent Events (SSE) - Live streaming scan results',
          'API Key Management - Secure API authentication system'
        ]
      }
    ]
  }
];

// Section fade-in helper
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function FeaturesPage() {
  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky nav background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070a18] text-white">
      <Head>
        <title>CyberSec-CLI | Features</title>
        <meta
          name="description"
          content="Explore CyberSec-CLI features: AI analysis, real-time scanning, automation, and secure infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Outer page container (boundary panel wrapper) */}
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Rounded boundary panel */}
        <div className="relative rounded-[32px] border border-purple-500/40 bg-[#0b1024]/95 shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden">
          {/* Background grid + dots */}
          <div className="absolute inset-0 rounded-[32px] bg-grid opacity-40" />
          <div className="absolute inset-0 rounded-[32px] bg-dots opacity-30 animate-glow" />
          <div className="relative">
            {/* Sticky Navigation */}
            <header
              className={`sticky top-0 z-50 transition-all ${
                scrolled ? 'backdrop-blur-xl bg-[#0b1024]/80 border-b border-white/10' : 'bg-transparent'
              }`}
            >
              <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between" aria-label="Primary">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="h-52 w-52 grid place-items-center">
                    <Image src="/logo.png" alt="CyberSec logo" width={200} height={200} />
                  </div>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="hover:text-white transition-colors"
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Desktop CTA buttons */}
                <div className="hidden lg:flex items-center gap-4">
                  <a
                    href="/dashboard"
                    className="px-5 py-2 rounded-[10px] border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/#cta"
                    className="px-5 py-2 rounded-[10px] text-sm font-semibold bg-[#8B5CF6] hover:shadow-glow transition-all"
                  >
                    Get Started
                  </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                  type="button"
                  className="lg:hidden p-2 rounded-md border border-white/10"
                  aria-label="Toggle navigation"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  {menuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
                </button>
              </nav>

              {/* Mobile menu panel */}
              {menuOpen && (
                <div id="mobile-menu" className="lg:hidden px-6 pb-6">
                  <div className="glass-panel rounded-2xl p-4 flex flex-col gap-3 text-gray-200">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="py-2 px-3 rounded-lg hover:bg-white/5"
                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                      {/* Mobile CTA buttons */}
                      <a href="/dashboard" className="px-4 py-2 rounded-[10px] border border-white/20 text-center">
                        Dashboard
                      </a>
                      <a href="/#cta" className="px-4 py-2 rounded-[10px] text-center bg-[#8B5CF6]">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </header>

            <main className="relative overflow-hidden">
              {/* Hero */}
              <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
                <FadeIn>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Features</p>
                    <h1 className="text-4xl md:text-5xl font-heading mt-4">
                      Every Tool You Need to Scan Faster
                    </h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                      CyberSec-CLI combines real-time scanning, AI analysis, and automation-ready APIs to deliver actionable security insights.
                    </p>
                    <a
                      href="/#pricing"
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#8B5CF6] font-semibold hover:shadow-glow transition-all"
                    >
                      View Pricing <FiArrowRight />
                    </a>
                  </div>
                </FadeIn>
              </section>

              {/* Feature sections */}
              <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="space-y-12">
                  {featureSections.map((section, sectionIndex) => {
                    const Icon = section.icon;
                    return (
                      <FadeIn key={section.title} delay={sectionIndex * 0.05}>
                        <div className="glass-panel rounded-3xl p-8 border border-white/10">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div>
                              <div className="flex items-center gap-3">
                                <Icon className="h-7 w-7 text-cyberPurple" />
                                <h2 className="text-2xl md:text-3xl font-heading">{section.title}</h2>
                              </div>
                              <p className="text-sm text-gray-300 mt-3 max-w-2xl">{section.subtitle}</p>
                            </div>
                          </div>

                          <div className={`mt-8 grid gap-6 ${section.groups.length > 1 ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
                            {section.groups.map((group) => (
                              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-semibold">{group.title}</h3>
                                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                  {group.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="text-cyan-300">-</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-7xl mx-auto px-6 pb-20">
                <FadeIn>
                  <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 border border-white/10 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading">Ready to see CyberSec-CLI in action?</h2>
                    <p className="text-gray-300 mt-4">Start scanning in minutes with the free community plan.</p>
                    <a
                      href="/dashboard"
                      className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[#8B5CF6] font-semibold text-lg hover:shadow-glow transition-all"
                    >
                      Get Started <FiArrowRight />
                    </a>
                  </div>
                </FadeIn>
              </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-transparent">
              <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
                {/* Brand + social */}
                <div>
                  <div className="flex items-center">
                    <div className="h-52 w-52 grid place-items-center">
                      <Image src="/logo.png" alt="CyberSec logo" width={200} height={200} />
                    </div>
                  </div>
                  <p className="text-sm text-white mt-4">
                    CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <a className="p-2 rounded-[10px] border border-white/10" href="https://github.com" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a className="p-2 rounded-[10px] border border-white/10" href="https://twitter.com" aria-label="Twitter">
                      <FiTwitter />
                    </a>
                    <a className="p-2 rounded-[10px] border border-white/10" href="https://discord.com" aria-label="Discord">
                      <FaDiscord />
                    </a>
                  </div>
                </div>
                {/* Quick links */}
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Product</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="/features">Features</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/api-docs">API</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Resources</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="/#blog">Blog</a></li>
                    <li><a href="/#community">Community</a></li>
                    <li><a href="/#support">Support</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer bottom bar */}
              <div className="border-t border-white/10 text-center text-xs text-gray-400 py-6">
               © 2026 CyberSec-CLI - All rights reserved
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
