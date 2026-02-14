import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiBars3, HiXMark, HiOutlineCheckCircle, HiOutlineCodeBracket, HiOutlineBolt, HiOutlineCloudArrowUp } from 'react-icons/hi2';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// Navigation links
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com' }
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

export default function ApiDocsPage() {
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
        <title>CyberSec-CLI | API</title>
        <meta name="description" content="Explore the CyberSec-CLI API for automation, streaming scans, and integrations." />
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
              <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
                <FadeIn>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">API Documentation</p>
                    <h1 className="text-4xl md:text-5xl font-heading mt-4">CyberSec-CLI API Documentation</h1>
                    <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                      Version: <span className="text-cyan-300">1.0.0</span> • Base URL:{' '}
                      <code className="text-cyan-300">http://localhost:8000/api/v1</code> • Authentication: API Key (Bearer Token)
                    </p>
                  </div>
                </FadeIn>
              </section>

              {/* Table of Contents */}
              <section className="max-w-5xl mx-auto px-6 py-8">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-6 border border-white/10">
                    <h2 className="text-xl font-heading">Table of Contents</h2>
                    <div className="mt-4 grid gap-2 text-sm text-gray-300">
                      <a href="#authentication" className="hover:text-white">1. Authentication</a>
                      <a href="#rate-limiting" className="hover:text-white">2. Rate Limiting</a>
                      <a href="#response-format" className="hover:text-white">3. Response Format</a>
                      <a href="#error-codes" className="hover:text-white">4. Error Codes</a>
                      <a href="#endpoints" className="hover:text-white">5. Endpoints</a>
                      <a href="#scan-operations" className="hover:text-white">- Scan Operations</a>
                      <a href="#results-management" className="hover:text-white">- Results Management</a>
                      <a href="#ai-assistant" className="hover:text-white">- AI Assistant</a>
                      <a href="#system-health" className="hover:text-white">- System & Health</a>
                      <a href="#websocket-api" className="hover:text-white">6. WebSocket API</a>
                      <a href="#sse" className="hover:text-white">7. Server-Sent Events (SSE)</a>
                      <a href="#code-examples" className="hover:text-white">8. Code Examples</a>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Authentication */}
              <section id="authentication" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-3">
                      <HiOutlineCloudArrowUp className="h-7 w-7 text-cyberPurple" />
                      <h2 className="text-2xl font-heading">Authentication</h2>
                    </div>
                    <p className="text-sm text-gray-300 mt-3">
                      All API requests require authentication using an API key passed in the Authorization header.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">Getting an API Key</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}`}</code>
                    </pre>
                    <p className="text-sm text-gray-300 mt-4">Response:</p>
                    <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`{
  "success": true,
  "data": {
    "user_id": "usr_abc123",
    "api_key": "sk_live_abc123xyz789",
    "expires_at": "2025-12-31T23:59:59Z"
  }
}`}</code>
                    </pre>

                    <h3 className="text-lg font-semibold mt-6">Using API Keys</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`GET /api/v1/scans
Authorization: Bearer sk_live_abc123xyz789`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Rate Limiting */}
              <section id="rate-limiting" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-3">
                      <HiOutlineBolt className="h-7 w-7 text-cyberCyan" />
                      <h2 className="text-2xl font-heading">Rate Limiting</h2>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm text-gray-300">
                      <div><span className="text-cyan-300 font-semibold">Free Tier:</span> 10 scans/day • 100 API requests/hour • 2 concurrent scans</div>
                      <div><span className="text-cyan-300 font-semibold">Pro Tier:</span> Unlimited scans • 1000 API requests/hour • 10 concurrent scans</div>
                      <div><span className="text-cyan-300 font-semibold">Enterprise Tier:</span> Unlimited everything • Custom rate limits</div>
                    </div>

                    <h3 className="text-lg font-semibold mt-6">Rate Limit Headers</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1640995200`}</code>
                    </pre>
                    <p className="text-sm text-gray-300 mt-4">When rate limited:</p>
                    <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Retry after 3600 seconds.",
    "retry_after": 3600
  }
}`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Response Format */}
              <section id="response-format" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Response Format</h2>
                    <h3 className="text-lg font-semibold mt-6">Success Response</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`{
  "success": true,
  "data": {
    // Response data here
  },
  "metadata": {
    "timestamp": "2024-02-06T12:00:00Z",
    "request_id": "req_abc123"
  }
}`}</code>
                    </pre>
                    <h3 className="text-lg font-semibold mt-6">Error Response</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`{
  "success": false,
  "error": {
    "code": "INVALID_TARGET",
    "message": "Target hostname is invalid",
    "details": {
      "field": "target",
      "value": "invalid..host"
    }
  },
  "metadata": {
    "timestamp": "2024-02-06T12:00:00Z",
    "request_id": "req_abc123"
  }
}`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Error Codes */}
              <section id="error-codes" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Error Codes</h2>
                    <div className="mt-6 grid gap-3 text-sm text-gray-300">
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">INVALID_API_KEY</span><span>401 • API key is missing or invalid</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">RATE_LIMIT_EXCEEDED</span><span>429 • Rate limit exceeded</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">INVALID_TARGET</span><span>400 • Target hostname/IP is invalid</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">SCAN_NOT_FOUND</span><span>404 • Scan ID not found</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">CONCURRENT_LIMIT_EXCEEDED</span><span>429 • Too many concurrent scans</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">INTERNAL_ERROR</span><span>500 • Server internal error</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">SCAN_TIMEOUT</span><span>504 • Scan operation timed out</span></div>
                      <div className="flex justify-between gap-4"><span className="text-cyan-300">INSUFFICIENT_PERMISSIONS</span><span>403 • Insufficient permissions</span></div>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Endpoints */}
              <section id="endpoints" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Endpoints</h2>
                    <div id="scan-operations" className="mt-6">
                      <h3 className="text-xl font-semibold">Scan Operations</h3>
                      <h4 className="text-lg font-semibold mt-4">Create New Scan</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`POST /api/v1/scans
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "target": "example.com",
  "scan_type": "tcp",
  "ports": "1-1000",
  "options": {
    "os_detection": true,
    "service_detection": true,
    "ssl_check": true,
    "fast_mode": false
  }
}`}</code>
                      </pre>
                      <p className="text-sm text-gray-300 mt-4">Response:</p>
                      <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "status": "queued",
    "target": "example.com",
    "created_at": "2024-02-06T12:00:00Z",
    "estimated_duration": 120,
    "websocket_url": "ws://localhost:8000/ws/scans/scan_abc123",
    "sse_url": "http://localhost:8000/api/v1/scans/scan_abc123/stream"
  }
}`}</code>
                      </pre>

                      <h4 className="text-lg font-semibold mt-6">Get Scan Status</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`}</code>
                      </pre>
                      <p className="text-sm text-gray-300 mt-4">Response:</p>
                      <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "status": "running",
    "target": "example.com",
    "scan_type": "tcp",
    "progress": 45,
    "started_at": "2024-02-06T12:00:00Z",
    "estimated_completion": "2024-02-06T12:02:00Z",
    "results": {
      "open_ports": 12,
      "closed_ports": 433,
      "filtered_ports": 10
    }
  }
}`}</code>
                      </pre>

                      <h4 className="text-lg font-semibold mt-6">Get Scan Results</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`}</code>
                      </pre>
                      <p className="text-sm text-gray-300 mt-4">Response:</p>
                      <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "target": "example.com",
    "scan_type": "tcp",
    "started_at": "2024-02-06T12:00:00Z",
    "completed_at": "2024-02-06T12:02:15Z",
    "duration": 135,
    "summary": {
      "total_ports_scanned": 1000,
      "open_ports": 12,
      "closed_ports": 978,
      "filtered_ports": 10
    }
  }
}`}</code>
                      </pre>

                      <h4 className="text-lg font-semibold mt-6">List All Scans</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/scans
Authorization: Bearer {api_key}`}</code>
                      </pre>

                      <h4 className="text-lg font-semibold mt-6">Cancel Scan</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`DELETE /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`}</code>
                      </pre>
                    </div>

                    <div id="results-management" className="mt-10">
                      <h3 className="text-xl font-semibold">Results Management</h3>
                      <h4 className="text-lg font-semibold mt-4">Export Scan Results</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/scans/{scan_id}/export
Authorization: Bearer {api_key}`}</code>
                      </pre>
                      <h4 className="text-lg font-semibold mt-6">Delete Scan Results</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`DELETE /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`}</code>
                      </pre>
                    </div>

                    <div id="ai-assistant" className="mt-10">
                      <h3 className="text-xl font-semibold">AI Assistant</h3>
                      <h4 className="text-lg font-semibold mt-4">Ask Security Question</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`POST /api/v1/ai/ask
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "question": "What does an open SSH port on 22 mean for security?",
  "context": {
    "scan_id": "scan_abc123"
  }
}`}</code>
                      </pre>
                      <h4 className="text-lg font-semibold mt-6">Explain Security Concept</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`POST /api/v1/ai/explain
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "concept": "port scanning",
  "level": "beginner"
}`}</code>
                      </pre>
                      <h4 className="text-lg font-semibold mt-6">Generate Security Report</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`POST /api/v1/ai/report
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "scan_id": "scan_abc123",
  "report_type": "executive",
  "include_sections": ["summary", "vulnerabilities", "recommendations"]
}`}</code>
                      </pre>
                    </div>

                    <div id="system-health" className="mt-10">
                      <h3 className="text-xl font-semibold">System & Health</h3>
                      <h4 className="text-lg font-semibold mt-4">Health Check</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/health`}</code>
                      </pre>
                      <h4 className="text-lg font-semibold mt-6">Get System Statistics</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/stats
Authorization: Bearer {api_key}`}</code>
                      </pre>
                      <h4 className="text-lg font-semibold mt-6">Get User Profile</h4>
                      <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                        <code>{`GET /api/v1/user/profile
Authorization: Bearer {api_key}`}</code>
                      </pre>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* WebSocket API */}
              <section id="websocket-api" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">WebSocket API</h2>
                    <p className="text-sm text-gray-300 mt-2">Real-time bidirectional communication for live scan updates.</p>
                    <pre className="mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`const ws = new WebSocket('ws://localhost:8000/ws/scans/scan_abc123?api_key=sk_live_abc123xyz789');

ws.onopen = () => {
  console.log('Connected to scan stream');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Scan update:', data);
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

ws.onclose = () => {
  console.log('Disconnected from scan stream');
};`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Server-Sent Events */}
              <section id="sse" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Server-Sent Events (SSE)</h2>
                    <p className="text-sm text-gray-300 mt-2">One-way real-time updates, simpler than WebSockets.</p>
                    <pre className="mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`const eventSource = new EventSource('http://localhost:8000/api/v1/scans/scan_abc123/stream?api_key=sk_live_abc123xyz789');

eventSource.addEventListener('progress', (event) => {
  const data = JSON.parse(event.data);
  console.log('Progress:', data.progress);
});

eventSource.addEventListener('port_found', (event) => {
  const data = JSON.parse(event.data);
  console.log('Port found:', data.port);
});

eventSource.addEventListener('complete', (event) => {
  const data = JSON.parse(event.data);
  console.log('Scan complete');
  eventSource.close();
});

eventSource.onerror = (error) => {
  console.error('SSE error:', error);
  eventSource.close();
};`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Code Examples */}
              <section id="code-examples" className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Code Examples</h2>

                    <h3 className="text-lg font-semibold mt-6">Python Example</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`import requests
import json

API_KEY = "sk_live_abc123xyz789"
BASE_URL = "http://localhost:8000/api/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(
    f"{BASE_URL}/scans",
    headers=headers,
    json={
        "target": "example.com",
        "scan_type": "tcp",
        "ports": "1-1000",
        "options": {
            "service_detection": True,
            "ssl_check": True
        }
    }
)

scan_data = response.json()
scan_id = scan_data["data"]["scan_id"]
print(f"Scan started: {scan_id}")`}</code>
                    </pre>

                    <h3 className="text-lg font-semibold mt-6">JavaScript / Node.js Example</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`const axios = require('axios');

const API_KEY = 'sk_live_abc123xyz789';
const BASE_URL = 'http://localhost:8000/api/v1';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};

async function scanTarget(target) {
  const scanResponse = await axios.post(\`\${BASE_URL}/scans\`, {
    target,
    scan_type: 'tcp',
    ports: '1-1000',
    options: {
      service_detection: true,
      ssl_check: true
    }
  }, { headers });

  const scanId = scanResponse.data.data.scan_id;
  console.log(\`Scan started: \${scanId}\`);
}`}</code>
                    </pre>

                    <h3 className="text-lg font-semibold mt-6">cURL Examples</h3>
                    <pre className="mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                      <code>{`curl -X POST http://localhost:8000/api/v1/scans \\
  -H "Authorization: Bearer sk_live_abc123xyz789" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "example.com",
    "scan_type": "tcp",
    "ports": "1-1000"
  }'`}</code>
                    </pre>
                  </div>
                </FadeIn>
              </section>

              {/* Best Practices */}
              <section className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Best Practices</h2>
                    <div className="mt-4 space-y-4 text-sm text-gray-300">
                      <div>
                        <span className="text-cyan-300 font-semibold">1. Always Handle Errors</span>
                        <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                          <code>{`try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e.response.status_code}")
    print(f"Details: {e.response.json()}")`}</code>
                        </pre>
                      </div>
                      <div>
                        <span className="text-cyan-300 font-semibold">2. Use Streaming for Long-Running Scans</span>
                        <p className="mt-2">Use WebSocket or SSE instead of polling for better performance and real-time updates.</p>
                      </div>
                      <div>
                        <span className="text-cyan-300 font-semibold">3. Implement Exponential Backoff</span>
                        <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                          <code>{`import time

retries = 0
max_retries = 5
backoff = 1

while retries < max_retries:
    try:
        response = requests.get(url, headers=headers)
        break
    except Exception as e:
        retries += 1
        time.sleep(backoff)
        backoff *= 2`}</code>
                        </pre>
                      </div>
                      <div>
                        <span className="text-cyan-300 font-semibold">4. Cache Results When Possible</span>
                        <pre className="mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto">
                          <code>{`response = requests.get(
    f"{BASE_URL}/scans?target=example.com&status=completed&sort=created_at&order=desc&per_page=1",
    headers=headers
)`}</code>
                        </pre>
                      </div>
                      <div>
                        <span className="text-cyan-300 font-semibold">5. Secure Your API Keys</span>
                        <div className="mt-2 space-y-2">
                          <div>- Never commit API keys to version control</div>
                          <div>- Use environment variables or secure vaults</div>
                          <div>- Rotate keys regularly</div>
                          <div>- Use different keys for development/production</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Changelog */}
              <section className="max-w-5xl mx-auto px-6 py-10">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Changelog</h2>
                    <div className="mt-4 text-sm text-gray-300">
                      <span className="text-cyan-300 font-semibold">v1.0.0 (2024-02-06)</span>
                      <div className="mt-2 space-y-2">
                        <div>- Initial API release</div>
                        <div>- REST API endpoints for scan operations</div>
                        <div>- WebSocket and SSE support</div>
                        <div>- AI assistant endpoints</div>
                        <div>- Export functionality</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Support */}
              <section className="max-w-5xl mx-auto px-6 pb-20">
                <FadeIn>
                  <div className="glass-panel rounded-3xl p-8 border border-white/10">
                    <h2 className="text-2xl font-heading">Support</h2>
                    <div className="mt-4 text-sm text-gray-300 space-y-2">
                      <div>Documentation: <code className="text-cyan-300">https://docs.cybersec-cli.com</code></div>
                      <div>API Status: <code className="text-cyan-300">https://status.cybersec-cli.com</code></div>
                      <div>GitHub: <code className="text-cyan-300">https://github.com/Yash7256/CyberSec-CLI</code></div>
                      <div>Email: <code className="text-cyan-300">support@cybersec-cli.com</code></div>
                    </div>
                    <div className="mt-6 text-xs text-gray-400">© 2024 CyberSec-CLI | API Documentation v1.0.0</div>
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
                    <li><a href="/api-docs">API</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/docs">Docs</a></li>
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
