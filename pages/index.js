import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroScrollDemo } from '../components/hero-scroll-demo';
import {
  HiBars3,
  HiXMark,
  HiOutlineBolt,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCloudArrowUp,
  HiOutlineLockClosed,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineBugAnt,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineServer,
  HiOutlineCheckCircle
} from 'react-icons/hi2';
import { FiPlay, FiArrowRight, FiGithub, FiTwitter, FiExternalLink } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// Navigation links
const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'API', href: '/api-docs' },
  { label: 'GitHub', href: 'https://github.com' }
];

// Hero stats pills
const heroStats = ['10K+ Scans Performed', '500+ Security Researchers', 'Open Source'];

// Pain points
const painPoints = [
  {
    title: 'Manual scanning wastes valuable time',
    description: 'Legacy workflows slow your team down and create blind spots across infrastructure.',
    icon: HiOutlineClock
  },
  {
    title: 'Enterprise tools cost thousands per month',
    description: 'Modern security should be accessible without heavy contracts or hidden fees.',
    icon: HiOutlineCurrencyDollar
  },
  {
    title: 'No AI-powered analysis available',
    description: 'Actionable remediation insights should be built in, not bolted on later.',
    icon: HiOutlineSparkles
  }
];

// Feature cards
const features = [
  {
    title: 'AI-Powered Analysis',
    description: 'Let AI identify vulnerabilities and suggest fixes in seconds.',
    icon: HiOutlineSparkles
  },
  {
    title: 'Real-Time Scanning',
    description: 'Watch results stream in as they\'re discovered with live telemetry.',
    icon: HiOutlineBolt
  },
  {
    title: 'Smart Detection',
    description: 'Accurate service identification and OS fingerprinting built in.',
    icon: HiOutlineShieldCheck
  },
  {
    title: 'Visual Dashboard',
    description: 'Beautiful, interactive dashboards for instant insights and reporting.',
    icon: HiOutlineChartBar
  },
  {
    title: 'API Access',
    description: 'REST API and WebSocket integrations for your existing tools.',
    icon: HiOutlineCloudArrowUp
  },
  {
    title: 'Secure & Private',
    description: 'Your data stays yours with open source transparency.',
    icon: HiOutlineLockClosed
  }
];

// How-it-works steps
const steps = [
  {
    title: 'Enter Target',
    description: 'Input domain or IP addresses in seconds.',
    icon: HiOutlineGlobeAlt
  },
  {
    title: 'AI Analyzes',
    description: 'Live scanning progress with instant AI insights.',
    icon: HiOutlineCpuChip
  },
  {
    title: 'Get Insights',
    description: 'Actionable security recommendations delivered instantly.',
    icon: HiOutlineLightBulb
  }
];

// Tech stack badges
const techStack = ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'WebSocket'];
const badges = ['SOC 2 Type II', 'GDPR Compliant', 'Open Source'];

// Stats counters
const stats = [
  { label: 'Total Scans', value: 50000, suffix: '+' },
  { label: 'Active Users', value: 2500, suffix: '+' },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
  { label: 'Avg Response', value: 100, suffix: 'ms', prefix: '<' }
];

// FAQ items
const faqs = [
  {
    question: 'Is CyberSec-CLI really free?',
    answer: 'Yes. The community tier is free forever with daily scan limits and open source tooling.'
  },
  {
    question: 'What types of scans are supported?',
    answer: 'TCP, UDP, service discovery, OS fingerprinting, and AI-assisted vulnerability analysis.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We follow strict security controls and never sell your data. Enterprise plans support private deployments.'
  },
  {
    question: 'Can I use this for commercial purposes?',
    answer: 'Yes. The Pro and Enterprise plans are designed for commercial and agency use cases.'
  },
  {
    question: 'Do you offer API documentation?',
    answer: 'We provide full REST and WebSocket docs, including SDK samples and integration guides.'
  },
  {
    question: 'How does the AI analysis work?',
    answer: 'AI models analyze scan output, correlate CVEs, and generate prioritized remediation steps.'
  }
];

// Terminal demo lines
const terminalLines = [
  '$ cybersec scan --target 192.168.1.0/24',
  '[ok] 256 hosts discovered',
  '[ok] 42 open ports found',
  '[live] Streaming results...',
  '22/tcp   open  ssh     OpenSSH 8.9p1',
  '80/tcp   open  http    nginx 1.24.0',
  '443/tcp  open  https   nginx 1.24.0',
  '[ai] Insight: Upgrade OpenSSH to 9.3 to patch CVE-2024-6387',
  '[ok] Report generated: report_2024-12-03.json'
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

// Terminal typing animation
const Typewriter = ({ lines, speed = 24, pause = 600 }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const isLineComplete = charIndex >= currentLine.length;

    const timeout = setTimeout(() => {
      if (isLineComplete) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, isLineComplete ? pause : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, pause, speed]);

  const visibleLines = lines.slice(0, lineIndex);
  const currentLine = lines[lineIndex]?.slice(0, charIndex) ?? '';
  const output = [...visibleLines, currentLine].join('\n');

  return (
    <pre className="text-sm leading-relaxed text-cyan-200 font-mono whitespace-pre-wrap">
      {output}
      {lineIndex < lines.length && <span className="animate-pulse">|</span>}
    </pre>
  );
};

// Count-up stat animation
const CountUp = ({ value, suffix = '', prefix = '', decimals = 0 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start;
    const duration = 1600;
    const from = 0;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = from + (value - from) * progress;
      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      setDisplay(formatted);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [decimals, started, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default function Home() {
  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-based parallax for hero glows
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -120]);
  const heroGlow = useTransform(scrollY, [0, 600], [0, 140]);

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
        <title>CyberSec</title>
        <meta
          name="description"
          content="A comprehensive cybersecurity ecosystem that unifies all your security tools, AI-powered defenses, and threat intelligence on a single platform. Simplify your security operations while amplifying protection across your entire digital infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CyberSec" />
        <meta
          property="og:description"
          content="Where AI And Security Intelligence Converge"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cybersec-cli.com" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* Outer page container (boundary panel wrapper) */}
      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Rounded boundary panel */}
        <div className="relative rounded-[34px] border border-purple-500/40 bg-[#0b1024]/95 shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden">
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
              <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between" aria-label="Primary">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 -mt-5">
                    <img src="/1.gif" alt="Animation" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="h-52 w-52 grid place-items-center">
                    <Image src="/logo.png" alt="CyberSec logo" width={200} height={200} />
                  </div>
                </div>

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

                <div className="hidden lg:flex items-center gap-4">
                  <a
                    href="/dashboard"
                    className="px-6 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#cta"
                    className="px-6 py-3 rounded-full text-sm font-semibold bg-purple-blue hover:shadow-glow transition-all"
                  >
                    Get Started
                  </a>
                </div>

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
                      <a href="/dashboard" className="px-4 py-2 rounded-full border border-white/20 text-center">
                        Dashboard
                      </a>
                      <a href="#cta" className="px-4 py-2 rounded-full text-center bg-purple-blue">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </header>

            <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-24" id="top">
          <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none" aria-hidden="true">
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
          </div>
          <motion.div style={{ y: heroParallax }} className="absolute -top-32 -right-32 h-72 w-72 bg-hero-radial blur-3xl" />
          <motion.div style={{ y: heroGlow }} className="absolute -bottom-40 -left-40 h-72 w-72 bg-glow-ring blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <FadeIn>
              <div className="space-y-6">
                
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
                  Where AI and Security Intelligence <span className="text-gradient">Converge.</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-xl">
                  Unified cybersecurity ecosystem bringing all your tools, AI-powered defenses, and threat intelligence into one powerful platform.
                </p>
               
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="glass-panel rounded-2xl p-5 glow-border relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>Terminal Preview</span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyberPurple" />
                    <span className="h-2 w-2 rounded-full bg-cyberBlue" />
                    <span className="h-2 w-2 rounded-full bg-cyberCyan" />
                  </span>
                </div>
                <div className="relative rounded-xl bg-[#0b122b] border border-white/10 p-5">
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/5 to-transparent" />
                  <Typewriter lines={terminalLines} />
                  <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-cyan-500/10 to-transparent" />
                </div>
              </div>
            </FadeIn>
          </div>
</section>

        {/* Live Demo with Scroll Animation */}
        <section className="max-w-7xl mx-auto px-6 py-0 mb-0 -mt-20" id="demo">
          <HeroScrollDemo />
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-10" id="features">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Features</p>
              <h2 className="text-3xl md:text-4xl font-heading">Built for Modern Security Teams</h2>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.08}>
                  <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-glow">
                    <Icon className="h-8 w-8 text-cyberPurple mb-4" />
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
                    <a href="#docs" className="mt-4 text-sm text-cyberCyan flex items-center gap-2 hover:text-white transition-colors">
                      Learn more <FiArrowRight />
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-6 py-20" id="how">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Workflow</p>
              <h2 className="text-3xl md:text-4xl font-heading">Security Scanning in 3 Simple Steps</h2>
            </div>
          </FadeIn>
          <div className="relative grid gap-8 lg:grid-cols-3">
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={index * 0.1}>
                  <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                    <div className="mx-auto h-12 w-12 rounded-full bg-purple-blue flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>
                    <Icon className="h-8 w-8 text-cyberCyan mx-auto mt-4" />
                    <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{step.description}</p>
                    <div className="mt-4 h-24 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>





        {/* Docs & API */}
        <section className="max-w-7xl mx-auto px-6 py-20" id="docs">
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Docs</p>
                <h2 className="text-3xl md:text-4xl font-heading mt-4">Documentation built for teams</h2>
                <p className="text-gray-300 mt-4">
                  Get started in minutes with clear guides, quickstart snippets, and deployment recipes for every stack.
                </p>
              </div>
              <div id="api" className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold">API &amp; SDKs</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Launch automated scans, stream results, and integrate insights into your workflows using REST and WebSocket APIs.
                </p>
                <a href="#api" className="mt-4 text-sm text-cyan-300 flex items-center gap-2">
                  Explore API Docs <FiExternalLink />
                </a>
              </div>
            </div>
          </FadeIn>
        </section>



        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-20" id="stats">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-3xl font-heading text-white">
                    <CountUp
                      value={item.value}
                      suffix={item.suffix}
                      prefix={item.prefix}
                      decimals={item.decimals || 0}
                    />
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-6 py-20" id="faq">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading">Frequently Asked Questions</h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-24" id="cta">
          <FadeIn>
            <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 border border-white/10 text-center">
              <h2 className="text-3xl md:text-4xl font-heading">Ready to Secure Your Infrastructure?</h2>
              <p className="text-gray-300 mt-4">Join thousands of security professionals using CyberSec-CLI</p>
              <a
                href="/dashboard"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-blue font-semibold text-lg hover:shadow-glow transition-all"
              >
                Get Started for Free <FiArrowRight />
              </a>
              <p className="text-xs text-gray-400 mt-4">No credit card required - 5 minute setup</p>
            </div>
          </FadeIn>
        </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-transparent">
              <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
                <div>
                  <div className="flex items-center">
                    <div className="h-52 w-52 grid place-items-center">
                      <Image src="/logo.png" alt="CyberSec logo" width={200} height={200} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning.</p>
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
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Product</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="/features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="/docs">Docs</a></li>
                    <li><a href="/api-docs">API</a></li>
                    <li><a href="#changelog">Changelog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Resources</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#support">Support</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">Legal</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#security">Security</a></li>
                  </ul>
                  <div className="mt-6">
                    <label htmlFor="newsletter" className="text-sm text-gray-300">Get security tips &amp; updates</label>
                    <div className="mt-3 flex items-center gap-2">
                      <input
                        id="newsletter"
                        type="email"
                        placeholder="Email address"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:outline-none"
                      />
                      <button className="px-3 py-2 rounded-lg bg-purple-blue">Join</button>
                    </div>
                  </div>
                </div>
              </div>
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

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl border border-white/10">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
        aria-controls={`faq-${index}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-sm font-semibold">{faq.question}</span>
        <span className="text-cyan-300">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div id={`faq-${index}`} className="px-5 pb-5 text-sm text-gray-300">
          {faq.answer}
        </div>
      )}
    </div>
  );
};
