import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiBars3, HiXMark, HiOutlineBookOpen, HiOutlineCommandLine, HiOutlineCloudArrowUp } from 'react-icons/hi2';
import { FiArrowRight, FiGithub, FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// Navigation links
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'API', href: '/api-docs' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'GitHub', href: 'https://github.com' }
];

// Docs sections
const docsSections = [
  {
    title: 'Quickstart',
    items: [
      'Install CyberSec-CLI via npm, pip, or Docker',
      'Authenticate and generate your API key',
      'Run your first scan in under 60 seconds'
    ]
  },
  {
    title: 'CLI Reference',
    items: [
      'cybersec scan --target example.com',
      'cybersec scan --scan-type udp --ports 1-1000',
      'cybersec scan --fast-mode --service-detection'
    ]
  },
  {
    title: 'Integrations',
    items: [
      'GitHub Actions workflow templates',
      'Slack alerts for critical findings',
      'SIEM export for enterprise pipelines'
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

export default function DocsPage() {
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
        <title>CyberSec-CLI | Documentation</title>
        <meta name="description" content="CyberSec-CLI documentation, quickstart guides, CLI reference, and integrations." />
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
                    className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/api-docs"
                    className="px-5 py-2 rounded-full text-sm font-semibold bg-purple-blue hover:shadow-glow transition-all"
                  >
                    API Docs
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
                      <a href="/dashboard" className="px-4 py-2 rounded-full border border-white/20 text-center">
                        Dashboard
                      </a>
                      <a href="/api-docs" className="px-4 py-2 rounded-full text-center bg-purple-blue">
                        API Docs
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </header>

            <main className="relative overflow-hidden">
              {/* Hero */}
              <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <FadeIn>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Documentation</p>
                    <h1 className="text-4xl md:text-5xl font-heading mt-4">CyberSec-CLI Docs</h1>
                    <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                      Everything you need to install, configure, and integrate CyberSec-CLI across your security workflows.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/api-docs"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-blue font-semibold hover:shadow-glow transition-all"
                      >
                        Explore API Docs <FiArrowRight />
                      </a>
                      <a
                        href="/features"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-gray-200 hover:border-white/40 hover:text-white transition-all"
                      >
                        View Features
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Docs sections */}
              <section className="max-w-7xl mx-auto px-6 py-12">
                <FadeIn>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {docsSections.map((section) => (
                      <div key={section.title} className="glass-panel rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                          <HiOutlineBookOpen className="text-cyberCyan" />
                          {section.title}
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-cyan-300">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </section>

              {/* CLI commands */}
              <section className="max-w-5xl mx-auto px-6 py-12">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-3">
                      <HiOutlineCommandLine className="h-7 w-7 text-cyberPurple" />
                      <h2 className="text-2xl font-heading">CLI Basics</h2>
                    </div>
                    <pre className="mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`# Install
npm install -g cybersec-cli

# Authenticate
cybersec login

# Run a scan
cybersec scan --target example.com --scan-type tcp --ports 1-1000`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Integrations */}
              <section className="max-w-5xl mx-auto px-6 py-12">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-3">
                      <HiOutlineCloudArrowUp className="h-7 w-7 text-cyberCyan" />
                      <h2 className="text-2xl font-heading">Integrations</h2>
                    </div>
                    <p className="text-sm text-gray-300 mt-3">
                      Connect CyberSec-CLI to your CI/CD pipelines, alerting tools, and dashboards in minutes.
                    </p>
                    <div className="mt-4 grid gap-3 text-sm text-gray-300">
                      <div>- GitHub Actions and GitLab CI templates</div>
                      <div>- Slack, Teams, and webhook alerts</div>
                      <div>- Export to SIEM and compliance tools</div>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* CTA */}
              <section className="max-w-7xl mx-auto px-6 pb-20">
                <FadeIn>
                  <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 border border-white/10 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading">Need help getting started?</h2>
                    <p className="text-gray-300 mt-4">Our team can help you deploy CyberSec-CLI across your stack.</p>
                    <a
                      href="/api-docs"
                      className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-blue font-semibold text-lg hover:shadow-glow transition-all"
                    >
                      Read API Docs <FiArrowRight />
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
                  <p className="text-sm text-gray-400 mt-4">
                    CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <a className="p-2 rounded-full border border-white/10" href="https://github.com" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a className="p-2 rounded-full border border-white/10" href="https://twitter.com" aria-label="Twitter">
                      <FiTwitter />
                    </a>
                    <a className="p-2 rounded-full border border-white/10" href="https://discord.com" aria-label="Discord">
                      <FaDiscord />
                    </a>
                  </div>
                </div>
                {/* Quick links */}
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Product</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="/features">Features</a></li>
                    <li><a href="/api-docs">API</a></li>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
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
                (c) 2024 CyberSec-CLI - Made with care by security professionals
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
