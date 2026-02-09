module.exports=[55399,a=>{"use strict";var b=a.i(8171),c=a.i(99731),d=a.i(29211),e=a.i(27669),f=a.i(89953),g=a.i(48605),h=a.i(84100),i=a.i(77315);let j=[{label:"Home",href:"/"},{label:"Features",href:"/features"},{label:"Pricing",href:"/#pricing"},{label:"Docs",href:"/docs"},{label:"GitHub",href:"https://github.com"}],k=({children:a,delay:c=0})=>(0,b.jsx)(f.motion.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:c},viewport:{once:!0,amount:.2},children:a});function l(){let[a,f]=(0,e.useState)(!1),[l,m]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{let a=()=>m(window.scrollY>12);return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsxs)("div",{className:"min-h-screen bg-[#070a18] text-white",children:[(0,b.jsxs)(c.default,{children:[(0,b.jsx)("title",{children:"CyberSec-CLI | API"}),(0,b.jsx)("meta",{name:"description",content:"Explore the CyberSec-CLI API for automation, streaming scans, and integrations."}),(0,b.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,b.jsx)("div",{className:"relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,b.jsxs)("div",{className:"relative rounded-[32px] border border-purple-500/40 bg-[#0b1024]/95 shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden",children:[(0,b.jsx)("div",{className:"absolute inset-0 rounded-[32px] bg-grid opacity-40"}),(0,b.jsx)("div",{className:"absolute inset-0 rounded-[32px] bg-dots opacity-30 animate-glow"}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsxs)("header",{className:`sticky top-0 z-50 transition-all ${l?"backdrop-blur-xl bg-[#0b1024]/80 border-b border-white/10":"bg-transparent"}`,children:[(0,b.jsxs)("nav",{className:"max-w-7xl mx-auto px-6 py-3 flex items-center justify-between","aria-label":"Primary",children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)("div",{className:"h-52 w-52 grid place-items-center",children:(0,b.jsx)(d.default,{src:"/logo.png",alt:"CyberSec logo",width:200,height:200})})}),(0,b.jsx)("div",{className:"hidden lg:flex items-center gap-8 text-sm text-gray-300",children:j.map(a=>(0,b.jsx)("a",{href:a.href,className:"hover:text-white transition-colors",...a.href.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:a.label},a.label))}),(0,b.jsxs)("div",{className:"hidden lg:flex items-center gap-4",children:[(0,b.jsx)("a",{href:"/dashboard",className:"px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all",children:"Dashboard"}),(0,b.jsx)("a",{href:"/#cta",className:"px-5 py-2 rounded-full text-sm font-semibold bg-purple-blue hover:shadow-glow transition-all",children:"Get Started"})]}),(0,b.jsx)("button",{type:"button",className:"lg:hidden p-2 rounded-md border border-white/10","aria-label":"Toggle navigation","aria-expanded":a,"aria-controls":"mobile-menu",onClick:()=>f(a=>!a),children:a?(0,b.jsx)(g.HiXMark,{className:"h-6 w-6"}):(0,b.jsx)(g.HiBars3,{className:"h-6 w-6"})})]}),a&&(0,b.jsx)("div",{id:"mobile-menu",className:"lg:hidden px-6 pb-6",children:(0,b.jsxs)("div",{className:"glass-panel rounded-2xl p-4 flex flex-col gap-3 text-gray-200",children:[j.map(a=>(0,b.jsx)("a",{href:a.href,className:"py-2 px-3 rounded-lg hover:bg-white/5",...a.href.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:a.label},a.label)),(0,b.jsxs)("div",{className:"pt-4 flex flex-col gap-3",children:[(0,b.jsx)("a",{href:"/dashboard",className:"px-4 py-2 rounded-full border border-white/20 text-center",children:"Dashboard"}),(0,b.jsx)("a",{href:"/#cta",className:"px-4 py-2 rounded-full text-center bg-purple-blue",children:"Get Started"})]})]})})]}),(0,b.jsxs)("main",{className:"relative overflow-hidden",children:[(0,b.jsx)("section",{className:"max-w-7xl mx-auto px-6 pt-20 pb-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("p",{className:"text-sm uppercase tracking-[0.4em] text-cyan-300",children:"API Documentation"}),(0,b.jsx)("h1",{className:"text-4xl md:text-5xl font-heading mt-4",children:"CyberSec-CLI API Documentation"}),(0,b.jsxs)("p",{className:"text-gray-300 mt-4 max-w-3xl mx-auto",children:["Version: ",(0,b.jsx)("span",{className:"text-cyan-300",children:"1.0.0"})," • Base URL:"," ",(0,b.jsx)("code",{className:"text-cyan-300",children:"http://localhost:8000/api/v1"})," • Authentication: API Key (Bearer Token)"]})]})})}),(0,b.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-8",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-6 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-xl font-heading",children:"Table of Contents"}),(0,b.jsxs)("div",{className:"mt-4 grid gap-2 text-sm text-gray-300",children:[(0,b.jsx)("a",{href:"#authentication",className:"hover:text-white",children:"1. Authentication"}),(0,b.jsx)("a",{href:"#rate-limiting",className:"hover:text-white",children:"2. Rate Limiting"}),(0,b.jsx)("a",{href:"#response-format",className:"hover:text-white",children:"3. Response Format"}),(0,b.jsx)("a",{href:"#error-codes",className:"hover:text-white",children:"4. Error Codes"}),(0,b.jsx)("a",{href:"#endpoints",className:"hover:text-white",children:"5. Endpoints"}),(0,b.jsx)("a",{href:"#scan-operations",className:"hover:text-white",children:"- Scan Operations"}),(0,b.jsx)("a",{href:"#results-management",className:"hover:text-white",children:"- Results Management"}),(0,b.jsx)("a",{href:"#ai-assistant",className:"hover:text-white",children:"- AI Assistant"}),(0,b.jsx)("a",{href:"#system-health",className:"hover:text-white",children:"- System & Health"}),(0,b.jsx)("a",{href:"#websocket-api",className:"hover:text-white",children:"6. WebSocket API"}),(0,b.jsx)("a",{href:"#sse",className:"hover:text-white",children:"7. Server-Sent Events (SSE)"}),(0,b.jsx)("a",{href:"#code-examples",className:"hover:text-white",children:"8. Code Examples"})]})]})})}),(0,b.jsx)("section",{id:"authentication",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)(g.HiOutlineCloudArrowUp,{className:"h-7 w-7 text-cyberPurple"}),(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Authentication"})]}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-3",children:"All API requests require authentication using an API key passed in the Authorization header."}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Getting an API Key"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}`})}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
  "success": true,
  "data": {
    "user_id": "usr_abc123",
    "api_key": "sk_live_abc123xyz789",
    "expires_at": "2025-12-31T23:59:59Z"
  }
}`})}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Using API Keys"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/scans
Authorization: Bearer sk_live_abc123xyz789`})})]})})}),(0,b.jsx)("section",{id:"rate-limiting",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)(g.HiOutlineBolt,{className:"h-7 w-7 text-cyberCyan"}),(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Rate Limiting"})]}),(0,b.jsxs)("div",{className:"mt-4 grid gap-3 text-sm text-gray-300",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Free Tier:"})," 10 scans/day • 100 API requests/hour • 2 concurrent scans"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Pro Tier:"})," Unlimited scans • 1000 API requests/hour • 10 concurrent scans"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Enterprise Tier:"})," Unlimited everything • Custom rate limits"]})]}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Rate Limit Headers"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1640995200`})}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"When rate limited:"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Retry after 3600 seconds.",
    "retry_after": 3600
  }
}`})})]})})}),(0,b.jsx)("section",{id:"response-format",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Response Format"}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Success Response"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
  "success": true,
  "data": {
    // Response data here
  },
  "metadata": {
    "timestamp": "2024-02-06T12:00:00Z",
    "request_id": "req_abc123"
  }
}`})}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Error Response"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
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
}`})})]})})}),(0,b.jsx)("section",{id:"error-codes",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Error Codes"}),(0,b.jsxs)("div",{className:"mt-6 grid gap-3 text-sm text-gray-300",children:[(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"INVALID_API_KEY"}),(0,b.jsx)("span",{children:"401 • API key is missing or invalid"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"RATE_LIMIT_EXCEEDED"}),(0,b.jsx)("span",{children:"429 • Rate limit exceeded"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"INVALID_TARGET"}),(0,b.jsx)("span",{children:"400 • Target hostname/IP is invalid"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"SCAN_NOT_FOUND"}),(0,b.jsx)("span",{children:"404 • Scan ID not found"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"CONCURRENT_LIMIT_EXCEEDED"}),(0,b.jsx)("span",{children:"429 • Too many concurrent scans"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"INTERNAL_ERROR"}),(0,b.jsx)("span",{children:"500 • Server internal error"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"SCAN_TIMEOUT"}),(0,b.jsx)("span",{children:"504 • Scan operation timed out"})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,b.jsx)("span",{className:"text-cyan-300",children:"INSUFFICIENT_PERMISSIONS"}),(0,b.jsx)("span",{children:"403 • Insufficient permissions"})]})]})]})})}),(0,b.jsx)("section",{id:"endpoints",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Endpoints"}),(0,b.jsxs)("div",{id:"scan-operations",className:"mt-6",children:[(0,b.jsx)("h3",{className:"text-xl font-semibold",children:"Scan Operations"}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Create New Scan"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`POST /api/v1/scans
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
}`})}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
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
}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get Scan Status"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`})}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
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
}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get Scan Results"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`})}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`{
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
}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"List All Scans"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/scans
Authorization: Bearer {api_key}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Cancel Scan"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`DELETE /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`})})]}),(0,b.jsxs)("div",{id:"results-management",className:"mt-10",children:[(0,b.jsx)("h3",{className:"text-xl font-semibold",children:"Results Management"}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Export Scan Results"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/scans/{scan_id}/export
Authorization: Bearer {api_key}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Delete Scan Results"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`DELETE /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`})})]}),(0,b.jsxs)("div",{id:"ai-assistant",className:"mt-10",children:[(0,b.jsx)("h3",{className:"text-xl font-semibold",children:"AI Assistant"}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Ask Security Question"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`POST /api/v1/ai/ask
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "question": "What does an open SSH port on 22 mean for security?",
  "context": {
    "scan_id": "scan_abc123"
  }
}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Explain Security Concept"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`POST /api/v1/ai/explain
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "concept": "port scanning",
  "level": "beginner"
}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Generate Security Report"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`POST /api/v1/ai/report
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "scan_id": "scan_abc123",
  "report_type": "executive",
  "include_sections": ["summary", "vulnerabilities", "recommendations"]
}`})})]}),(0,b.jsxs)("div",{id:"system-health",className:"mt-10",children:[(0,b.jsx)("h3",{className:"text-xl font-semibold",children:"System & Health"}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Health Check"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:"GET /api/v1/health"})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get System Statistics"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/stats
Authorization: Bearer {api_key}`})}),(0,b.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get User Profile"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`GET /api/v1/user/profile
Authorization: Bearer {api_key}`})})]})]})})}),(0,b.jsx)("section",{id:"websocket-api",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"WebSocket API"}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"Real-time bidirectional communication for live scan updates."}),(0,b.jsx)("pre",{className:"mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`const ws = new WebSocket('ws://localhost:8000/ws/scans/scan_abc123?api_key=sk_live_abc123xyz789');

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
};`})})]})})}),(0,b.jsx)("section",{id:"sse",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Server-Sent Events (SSE)"}),(0,b.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"One-way real-time updates, simpler than WebSockets."}),(0,b.jsx)("pre",{className:"mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`const eventSource = new EventSource('http://localhost:8000/api/v1/scans/scan_abc123/stream?api_key=sk_live_abc123xyz789');

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
};`})})]})})}),(0,b.jsx)("section",{id:"code-examples",className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Code Examples"}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Python Example"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`import requests
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
print(f"Scan started: {scan_id}")`})}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"JavaScript / Node.js Example"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`const axios = require('axios');

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
}`})}),(0,b.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"cURL Examples"}),(0,b.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`curl -X POST http://localhost:8000/api/v1/scans \\
  -H "Authorization: Bearer sk_live_abc123xyz789" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "example.com",
    "scan_type": "tcp",
    "ports": "1-1000"
  }'`})})]})})}),(0,b.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Best Practices"}),(0,b.jsxs)("div",{className:"mt-4 space-y-4 text-sm text-gray-300",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"1. Always Handle Errors"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e.response.status_code}")
    print(f"Details: {e.response.json()}")`})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"2. Use Streaming for Long-Running Scans"}),(0,b.jsx)("p",{className:"mt-2",children:"Use WebSocket or SSE instead of polling for better performance and real-time updates."})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"3. Implement Exponential Backoff"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`import time

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
        backoff *= 2`})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"4. Cache Results When Possible"}),(0,b.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,b.jsx)("code",{children:`response = requests.get(
    f"{BASE_URL}/scans?target=example.com&status=completed&sort=created_at&order=desc&per_page=1",
    headers=headers
)`})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"5. Secure Your API Keys"}),(0,b.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,b.jsx)("div",{children:"- Never commit API keys to version control"}),(0,b.jsx)("div",{children:"- Use environment variables or secure vaults"}),(0,b.jsx)("div",{children:"- Rotate keys regularly"}),(0,b.jsx)("div",{children:"- Use different keys for development/production"})]})]})]})]})})}),(0,b.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-10",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Changelog"}),(0,b.jsxs)("div",{className:"mt-4 text-sm text-gray-300",children:[(0,b.jsx)("span",{className:"text-cyan-300 font-semibold",children:"v1.0.0 (2024-02-06)"}),(0,b.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,b.jsx)("div",{children:"- Initial API release"}),(0,b.jsx)("div",{children:"- REST API endpoints for scan operations"}),(0,b.jsx)("div",{children:"- WebSocket and SSE support"}),(0,b.jsx)("div",{children:"- AI assistant endpoints"}),(0,b.jsx)("div",{children:"- Export functionality"})]})]})]})})}),(0,b.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-20",children:(0,b.jsx)(k,{children:(0,b.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,b.jsx)("h2",{className:"text-2xl font-heading",children:"Support"}),(0,b.jsxs)("div",{className:"mt-4 text-sm text-gray-300 space-y-2",children:[(0,b.jsxs)("div",{children:["Documentation: ",(0,b.jsx)("code",{className:"text-cyan-300",children:"https://docs.cybersec-cli.com"})]}),(0,b.jsxs)("div",{children:["API Status: ",(0,b.jsx)("code",{className:"text-cyan-300",children:"https://status.cybersec-cli.com"})]}),(0,b.jsxs)("div",{children:["GitHub: ",(0,b.jsx)("code",{className:"text-cyan-300",children:"https://github.com/Yash7256/CyberSec-CLI"})]}),(0,b.jsxs)("div",{children:["Email: ",(0,b.jsx)("code",{className:"text-cyan-300",children:"support@cybersec-cli.com"})]})]}),(0,b.jsx)("div",{className:"mt-6 text-xs text-gray-400",children:"© 2024 CyberSec-CLI | API Documentation v1.0.0"})]})})})]}),(0,b.jsxs)("footer",{className:"border-t border-white/10 bg-transparent",children:[(0,b.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)("div",{className:"h-52 w-52 grid place-items-center",children:(0,b.jsx)(d.default,{src:"/logo.png",alt:"CyberSec logo",width:200,height:200})})}),(0,b.jsx)("p",{className:"text-sm text-gray-400 mt-4",children:"CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning."}),(0,b.jsxs)("div",{className:"flex items-center gap-3 mt-6",children:[(0,b.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://github.com","aria-label":"GitHub",children:(0,b.jsx)(h.FiGithub,{})}),(0,b.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://twitter.com","aria-label":"Twitter",children:(0,b.jsx)(h.FiTwitter,{})}),(0,b.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://discord.com","aria-label":"Discord",children:(0,b.jsx)(i.FaDiscord,{})})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm uppercase tracking-[0.2em] text-gray-400",children:"Product"}),(0,b.jsxs)("ul",{className:"mt-4 space-y-2 text-sm text-gray-300",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/features",children:"Features"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/api-docs",children:"API"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/#pricing",children:"Pricing"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/docs",children:"Docs"})})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm uppercase tracking-[0.2em] text-gray-400",children:"Resources"}),(0,b.jsxs)("ul",{className:"mt-4 space-y-2 text-sm text-gray-300",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/#blog",children:"Blog"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/#community",children:"Community"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"/#support",children:"Support"})})]})]})]}),(0,b.jsx)("div",{className:"border-t border-white/10 text-center text-xs text-gray-400 py-6",children:"(c) 2024 CyberSec-CLI - Made with care by security professionals"})]})]})]})})]})}a.s(["default",()=>l])},28858,a=>a.a(async(b,c)=>{try{var d=a.i(5026),e=a.i(98056),f=a.i(51558),g=a.i(49140),h=a.i(39848),i=a.i(55399),j=a.i(23550),k=b([h]);[h]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/api-docs",pathname:"/api-docs",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/api-docs",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=CyberSec-Main_c67a6358._.js.map