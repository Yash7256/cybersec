module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/CyberSec-Main/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/CyberSec-Main/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/react-icons/hi2/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/react-icons/fi/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CyberSec-Main/node_modules/react-icons/fa/index.esm.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const DotScreenShader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/CyberSec-Main/components/ui/dot-shader-background.tsx [ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.DotScreenShader), {
    loadableGenerated: {
        modules: [
            "[project]/CyberSec-Main/components/ui/dot-shader-background.tsx [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Navigation links
const navItems = [
    {
        label: 'Features',
        href: '/features'
    },
    {
        label: 'Pricing',
        href: '#pricing'
    },
    {
        label: 'Docs',
        href: '/docs'
    },
    {
        label: 'API',
        href: '/api-docs'
    },
    {
        label: 'GitHub',
        href: 'https://github.com'
    }
];
// Hero stats pills
const heroStats = [
    '10K+ Scans Performed',
    '500+ Security Researchers',
    'Open Source'
];
// Pain points
const painPoints = [
    {
        title: 'Manual scanning wastes valuable time',
        description: 'Legacy workflows slow your team down and create blind spots across infrastructure.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineClock"]
    },
    {
        title: 'Enterprise tools cost thousands per month',
        description: 'Modern security should be accessible without heavy contracts or hidden fees.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCurrencyDollar"]
    },
    {
        title: 'No AI-powered analysis available',
        description: 'Actionable remediation insights should be built in, not bolted on later.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineSparkles"]
    }
];
// Feature cards
const features = [
    {
        title: 'AI-Powered Analysis',
        description: 'Let AI identify vulnerabilities and suggest fixes in seconds.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineSparkles"]
    },
    {
        title: 'Real-Time Scanning',
        description: 'Watch results stream in as they\'re discovered with live telemetry.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineBolt"]
    },
    {
        title: 'Smart Detection',
        description: 'Accurate service identification and OS fingerprinting built in.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineShieldCheck"]
    },
    {
        title: 'Visual Dashboard',
        description: 'Beautiful, interactive dashboards for instant insights and reporting.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineChartBar"]
    },
    {
        title: 'API Access',
        description: 'REST API and WebSocket integrations for your existing tools.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCloudArrowUp"]
    },
    {
        title: 'Secure & Private',
        description: 'Your data stays yours with open source transparency.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineLockClosed"]
    }
];
// How-it-works steps
const steps = [
    {
        title: 'Enter Target',
        description: 'Input domain or IP addresses in seconds.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineGlobeAlt"]
    },
    {
        title: 'AI Analyzes',
        description: 'Live scanning progress with instant AI insights.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCpuChip"]
    },
    {
        title: 'Get Insights',
        description: 'Actionable security recommendations delivered instantly.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineLightBulb"]
    }
];
// Use cases
const useCases = [
    {
        title: 'Penetration Testers',
        description: 'Streamline reconnaissance and reporting workflows.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineBugAnt"]
    },
    {
        title: 'DevSecOps Teams',
        description: 'Integrate scanning into CI/CD pipelines with APIs.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCodeBracket"]
    },
    {
        title: 'Security Researchers',
        description: 'Discover vulnerabilities faster with AI analysis.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineBeaker"]
    },
    {
        title: 'System Admins',
        description: 'Monitor infrastructure continuously and proactively.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineServer"]
    }
];
// Pricing tiers
const pricing = [
    {
        name: 'FREE / Community',
        price: 0,
        description: 'For personal exploration and open source enthusiasts.',
        features: [
            '10 scans/day',
            'Basic port scanning',
            'Community support'
        ],
        cta: 'Get Started',
        highlight: false
    },
    {
        name: 'PRO',
        price: 29,
        description: 'For professional security teams scaling fast.',
        features: [
            'Unlimited scans',
            'AI vulnerability analysis',
            'Priority support',
            'API access',
            'Scan history (90 days)'
        ],
        cta: 'Start Free Trial',
        highlight: true
    },
    {
        name: 'ENTERPRISE',
        price: null,
        description: 'For organizations with advanced security needs.',
        features: [
            'Everything in Pro',
            'White-label option',
            'Dedicated support',
            'Custom integrations',
            'SLA guarantees'
        ],
        cta: 'Contact Sales',
        highlight: false
    }
];
// Tech stack badges
const techStack = [
    'Python',
    'FastAPI',
    'Redis',
    'PostgreSQL',
    'Docker',
    'WebSocket'
];
const badges = [
    'SOC 2 Type II',
    'GDPR Compliant',
    'Open Source'
];
// Stats counters
const stats = [
    {
        label: 'Total Scans',
        value: 50000,
        suffix: '+'
    },
    {
        label: 'Active Users',
        value: 2500,
        suffix: '+'
    },
    {
        label: 'Uptime',
        value: 99.9,
        suffix: '%',
        decimals: 1
    },
    {
        label: 'Avg Response',
        value: 100,
        suffix: 'ms',
        prefix: '<'
    }
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
const FadeIn = ({ children, delay = 0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/CyberSec-Main/pages/index.js",
        lineNumber: 225,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Terminal typing animation
const Typewriter = ({ lines, speed = 24, pause = 600 })=>{
    const [lineIndex, setLineIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [charIndex, setCharIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (lineIndex >= lines.length) return;
        const currentLine = lines[lineIndex];
        const isLineComplete = charIndex >= currentLine.length;
        const timeout = setTimeout(()=>{
            if (isLineComplete) {
                setLineIndex((prev)=>prev + 1);
                setCharIndex(0);
            } else {
                setCharIndex((prev)=>prev + 1);
            }
        }, isLineComplete ? pause : speed);
        return ()=>clearTimeout(timeout);
    }, [
        charIndex,
        lineIndex,
        lines,
        pause,
        speed
    ]);
    const visibleLines = lines.slice(0, lineIndex);
    const currentLine = lines[lineIndex]?.slice(0, charIndex) ?? '';
    const output = [
        ...visibleLines,
        currentLine
    ].join('\n');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pre", {
        className: "text-sm leading-relaxed text-cyan-200 font-mono whitespace-pre-wrap",
        children: [
            output,
            lineIndex < lines.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "animate-pulse",
                children: "|"
            }, void 0, false, {
                fileName: "[project]/CyberSec-Main/pages/index.js",
                lineNumber: 265,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CyberSec-Main/pages/index.js",
        lineNumber: 263,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Count-up stat animation
const CountUp = ({ value, suffix = '', prefix = '', decimals = 0 })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('0');
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setStarted(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.35
        });
        observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!started) return;
        let start;
        const duration = 1600;
        const from = 0;
        const tick = (timestamp)=>{
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
    }, [
        decimals,
        started,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            prefix,
            display,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/CyberSec-Main/pages/index.js",
        lineNumber: 316,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Home() {
    // UI state
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [billing, setBilling] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('monthly');
    // Scroll-based parallax for hero glows
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["useScroll"])();
    const heroParallax = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["useTransform"])(scrollY, [
        0,
        600
    ], [
        0,
        -120
    ]);
    const heroGlow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["useTransform"])(scrollY, [
        0,
        600
    ], [
        0,
        140
    ]);
    // Sticky nav background on scroll
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    // Pricing toggle display logic
    const pricingDisplay = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return pricing.map((plan)=>{
            if (plan.price === null) return plan;
            const adjusted = billing === 'annual' ? Math.round(plan.price * 0.8) : plan.price;
            return {
                ...plan,
                displayPrice: adjusted
            };
        });
    }, [
        billing
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#070a18] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "CyberSec"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "A comprehensive cybersecurity ecosystem that unifies all your security tools, AI-powered defenses, and threat intelligence on a single platform. Simplify your security operations while amplifying protection across your entire digital infrastructure."
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "CyberSec"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Where AI And Security Intelligence Converge"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://cybersec-cli.com"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CyberSec-Main/pages/index.js",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative rounded-[34px] border border-purple-500/40 bg-[#0b1024]/95 shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-[32px] bg-grid opacity-40"
                        }, void 0, false, {
                            fileName: "[project]/CyberSec-Main/pages/index.js",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-[32px] bg-dots opacity-30 animate-glow"
                        }, void 0, false, {
                            fileName: "[project]/CyberSec-Main/pages/index.js",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                                    className: `sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-[#0b1024]/80 border-b border-white/10' : 'bg-transparent'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                            className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between",
                                            "aria-label": "Primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "h-52 w-52 grid place-items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/logo.png",
                                                            alt: "CyberSec logo",
                                                            width: 200,
                                                            height: 200
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 387,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 385,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:flex items-center gap-8 text-sm text-gray-300",
                                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            className: "hover:text-white transition-colors",
                                                            ...item.href.startsWith('http') ? {
                                                                target: '_blank',
                                                                rel: 'noreferrer'
                                                            } : {},
                                                            children: item.label
                                                        }, item.label, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 393,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "/dashboard",
                                                            className: "px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all",
                                                            children: "Dashboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 405,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#cta",
                                                            className: "px-5 py-2 rounded-full text-sm font-semibold bg-purple-blue hover:shadow-glow transition-all",
                                                            children: "Get Started"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 411,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "lg:hidden p-2 rounded-md border border-white/10",
                                                    "aria-label": "Toggle navigation",
                                                    "aria-expanded": menuOpen,
                                                    "aria-controls": "mobile-menu",
                                                    onClick: ()=>setMenuOpen((prev)=>!prev),
                                                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiXMark"], {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 427,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiBars3"], {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 427,
                                                        columnNumber: 65
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "mobile-menu",
                                            className: "lg:hidden px-6 pb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "glass-panel rounded-2xl p-4 flex flex-col gap-3 text-gray-200",
                                                children: [
                                                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            className: "py-2 px-3 rounded-lg hover:bg-white/5",
                                                            ...item.href.startsWith('http') ? {
                                                                target: '_blank',
                                                                rel: 'noreferrer'
                                                            } : {},
                                                            children: item.label
                                                        }, item.label, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 435,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 flex flex-col gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "/dashboard",
                                                                className: "px-4 py-2 rounded-full border border-white/20 text-center",
                                                                children: "Dashboard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 445,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#cta",
                                                                className: "px-4 py-2 rounded-full text-center bg-purple-blue",
                                                                children: "Get Started"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 448,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                                    className: "relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "relative max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32",
                                            id: "top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 -z-10 opacity-70 pointer-events-none",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DotScreenShader, {}, void 0, false, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 461,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 460,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                    style: {
                                                        y: heroParallax
                                                    },
                                                    className: "absolute -top-32 -right-32 h-72 w-72 bg-hero-radial blur-3xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 463,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                    style: {
                                                        y: heroGlow
                                                    },
                                                    className: "absolute -bottom-40 -left-40 h-72 w-72 bg-glow-ring blur-3xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 464,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "space-y-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                                        className: "text-4xl md:text-5xl lg:text-6xl font-heading leading-tight",
                                                                        children: [
                                                                            "Where AI and Security Intelligence ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "text-gradient",
                                                                                children: "Converge."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 471,
                                                                                columnNumber: 54
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 470,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-lg text-gray-300 max-w-xl",
                                                                        children: "Unified cybersecurity ecosystem bringing all your tools, AI-powered defenses, and threat intelligence into one powerful platform."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 473,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 468,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 467,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                            delay: 0.1,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "glass-panel rounded-2xl p-5 glow-border relative overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between text-xs text-gray-400 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                children: "Terminal Preview"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 483,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: "h-2 w-2 rounded-full bg-cyberPurple"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                        lineNumber: 485,
                                                                                        columnNumber: 21
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: "h-2 w-2 rounded-full bg-cyberBlue"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                        lineNumber: 486,
                                                                                        columnNumber: 21
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: "h-2 w-2 rounded-full bg-cyberCyan"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 21
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 484,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 482,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "relative rounded-xl bg-[#0b122b] border border-white/10 p-5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/5 to-transparent"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 491,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Typewriter, {
                                                                                lines: terminalLines
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 492,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-cyan-500/10 to-transparent"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 493,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 490,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 481,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 480,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 466,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 459,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "features",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "Features"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 505,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Built for Modern Security Teams"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 506,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 504,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 503,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                                                    children: features.map((feature, index)=>{
                                                        const Icon = feature.icon;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                            delay: index * 0.08,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-glow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                                        className: "h-8 w-8 text-cyberPurple mb-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 515,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold",
                                                                        children: feature.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 516,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-300 mt-2",
                                                                        children: feature.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 517,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#docs",
                                                                        className: "mt-4 text-sm text-cyberCyan flex items-center gap-2 hover:text-white transition-colors",
                                                                        children: [
                                                                            "Learn more ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
                                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                lineNumber: 519,
                                                                                columnNumber: 34
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 518,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 514,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, feature.title, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 513,
                                                            columnNumber: 17
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 509,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 502,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "how",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "Workflow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 532,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Security Scanning in 3 Simple Steps"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 533,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 531,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 530,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "relative grid gap-8 lg:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "hidden lg:block absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 537,
                                                            columnNumber: 13
                                                        }, this),
                                                        steps.map((step, index)=>{
                                                            const Icon = step.icon;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                                delay: index * 0.1,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "glass-panel rounded-2xl p-6 border border-white/10 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "mx-auto h-12 w-12 rounded-full bg-purple-blue flex items-center justify-center text-lg font-semibold",
                                                                            children: index + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 543,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                                            className: "h-8 w-8 text-cyberCyan mx-auto mt-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 546,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold mt-4",
                                                                            children: step.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 547,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-300 mt-2",
                                                                            children: step.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 548,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "mt-4 h-24 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 549,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 542,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, step.title, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 541,
                                                                columnNumber: 17
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 536,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 529,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "demo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                    children: "Live Demo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 562,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl md:text-4xl font-heading mt-4",
                                                                    children: "Watch the CLI in action"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 563,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-300 mt-4",
                                                                    children: "Experience the speed of CyberSec-CLI. Scan targets, stream results, and receive AI insights in real time."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 564,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    className: "mt-6 px-6 py-3 rounded-full bg-purple-blue font-semibold flex items-center gap-2 hover:shadow-glow transition-all",
                                                                    children: [
                                                                        "Try Interactive Demo ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 568,
                                                                            columnNumber: 40
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 567,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 561,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-panel rounded-2xl p-5 border border-white/10 relative overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 572,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "relative rounded-xl bg-[#0b122b] border border-white/10 p-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Typewriter, {
                                                                        lines: terminalLines.slice(0, 6),
                                                                        speed: 18,
                                                                        pause: 420
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 574,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 573,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 571,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 560,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                lineNumber: 559,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 558,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "use-cases",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "Use Cases"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 585,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Trusted by Security Professionals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 586,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 584,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 583,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible",
                                                    children: useCases.map((useCase, index)=>{
                                                        const Icon = useCase.icon;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                            delay: index * 0.1,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "min-w-[240px] md:min-w-0 glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                                        className: "h-8 w-8 text-cyberCyan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 595,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold mt-4",
                                                                        children: useCase.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 596,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-300 mt-2",
                                                                        children: useCase.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 597,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 594,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, useCase.title, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 593,
                                                            columnNumber: 17
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 589,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 582,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "pricing",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "Pricing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 609,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Choose Your Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 610,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 608,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 607,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-4 mb-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: `text-sm ${billing === 'monthly' ? 'text-white' : 'text-gray-400'}`,
                                                            children: "Monthly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 615,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "relative h-7 w-14 rounded-full bg-white/10 border border-white/20",
                                                            "aria-label": "Toggle billing",
                                                            onClick: ()=>setBilling((prev)=>prev === 'monthly' ? 'annual' : 'monthly'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: `absolute top-0.5 h-5 w-5 rounded-full bg-purple-blue transition-transform ${billing === 'annual' ? 'translate-x-7' : 'translate-x-1'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 622,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 616,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: `text-sm ${billing === 'annual' ? 'text-white' : 'text-gray-400'}`,
                                                            children: [
                                                                "Annual ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-300",
                                                                    children: "(save 20%)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 629,
                                                                    columnNumber: 22
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 628,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 614,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-6 lg:grid-cols-3",
                                                    children: pricingDisplay.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                            delay: index * 0.08,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: `rounded-2xl p-[1px] ${plan.highlight ? 'bg-gradient-to-r from-purple-500 to-cyan-400' : 'bg-white/10'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "glass-panel rounded-2xl p-6 h-full flex flex-col",
                                                                    children: [
                                                                        plan.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs uppercase tracking-[0.3em] text-cyan-200",
                                                                            children: "Most Popular"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 643,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold mt-4",
                                                                            children: plan.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 645,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-300 mt-2",
                                                                            children: plan.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 646,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "mt-6",
                                                                            children: [
                                                                                plan.price === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                    className: "text-3xl font-heading",
                                                                                    children: "Custom"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                    lineNumber: 649,
                                                                                    columnNumber: 25
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                    className: "text-3xl font-heading",
                                                                                    children: [
                                                                                        "$",
                                                                                        plan.displayPrice,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm text-gray-400",
                                                                                            children: "/month"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                            lineNumber: 653,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                billing === 'annual' && plan.price !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-400 mt-1",
                                                                                    children: "Billed annually"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                    lineNumber: 657,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 647,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                                            className: "mt-6 space-y-3 text-sm text-gray-300",
                                                                            children: plan.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCheckCircle"], {
                                                                                            className: "h-5 w-5 text-cyan-300"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                            lineNumber: 663,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        feature
                                                                                    ]
                                                                                }, feature, true, {
                                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                                    lineNumber: 662,
                                                                                    columnNumber: 25
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 660,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                            className: `mt-8 px-4 py-2 rounded-full font-semibold transition-all ${plan.highlight ? 'bg-purple-blue hover:shadow-glow' : 'border border-white/20 hover:border-white/40'}`,
                                                                            children: plan.cta
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 668,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 641,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 636,
                                                                columnNumber: 17
                                                            }, this)
                                                        }, plan.name, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 635,
                                                            columnNumber: 15
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 633,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 606,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "docs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                    children: "Docs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 689,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl md:text-4xl font-heading mt-4",
                                                                    children: "Documentation built for teams"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 690,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-300 mt-4",
                                                                    children: "Get started in minutes with clear guides, quickstart snippets, and deployment recipes for every stack."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 691,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 688,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "api",
                                                            className: "glass-panel rounded-2xl p-6 border border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold",
                                                                    children: "API & SDKs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 696,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-300 mt-2",
                                                                    children: "Launch automated scans, stream results, and integrate insights into your workflows using REST and WebSocket APIs."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 697,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                    href: "#api",
                                                                    className: "mt-4 text-sm text-cyan-300 flex items-center gap-2",
                                                                    children: [
                                                                        "Explore API Docs ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiExternalLink"], {}, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 701,
                                                                            columnNumber: 36
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 700,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 695,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 687,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                lineNumber: 686,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 685,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "trust",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "Infrastructure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 712,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Built on Modern, Secure Infrastructure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 713,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 711,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 710,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-8 lg:grid-cols-[1fr_0.9fr]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-panel rounded-2xl p-6 border border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Technology Stack"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 718,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 flex flex-wrap gap-3",
                                                                    children: techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "px-3 py-2 rounded-full border border-white/10 bg-white/5 text-sm",
                                                                            children: tech
                                                                        }, tech, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 721,
                                                                            columnNumber: 19
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 719,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mt-6 flex flex-wrap gap-3",
                                                                    children: badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "px-3 py-2 rounded-full bg-cyan-500/10 text-cyan-200 text-xs",
                                                                            children: badge
                                                                        }, badge, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 728,
                                                                            columnNumber: 19
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 726,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 717,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-400",
                                                                            children: "Open Source Momentum"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 736,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                            className: "text-4xl font-heading mt-4",
                                                                            children: "1.2K stars"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 737,
                                                                            columnNumber: 17
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-300 mt-2",
                                                                            children: "Join a thriving GitHub community building secure tooling."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 738,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 735,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                    className: "mt-6 px-4 py-2 rounded-full border border-white/20 text-sm flex items-center gap-2 w-fit",
                                                                    href: "https://github.com",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [
                                                                        "Visit GitHub ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiGithub"], {}, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 746,
                                                                            columnNumber: 30
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 740,
                                                                    columnNumber: 15
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 734,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 716,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 709,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 py-20",
                                            id: "stats",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                                                    children: stats.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-panel rounded-2xl p-6 border border-white/10 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-3xl font-heading text-white",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CountUp, {
                                                                        value: item.value,
                                                                        suffix: item.suffix,
                                                                        prefix: item.prefix,
                                                                        decimals: item.decimals || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 759,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 758,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-300 mt-2",
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 766,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, item.label, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 757,
                                                            columnNumber: 17
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 755,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                lineNumber: 754,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 753,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-5xl mx-auto px-6 py-20",
                                            id: "faq",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.4em] text-cyan-300",
                                                                children: "FAQ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 777,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-4xl font-heading",
                                                                children: "Frequently Asked Questions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 778,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                        lineNumber: 776,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 775,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FaqItem, {
                                                            faq: faq,
                                                            index: index
                                                        }, faq.question, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 783,
                                                            columnNumber: 15
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 781,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 774,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                            className: "max-w-7xl mx-auto px-6 pb-24",
                                            id: "cta",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FadeIn, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl p-10 md:p-16 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 border border-white/10 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-4xl font-heading",
                                                            children: "Ready to Secure Your Infrastructure?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 792,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 mt-4",
                                                            children: "Join thousands of security professionals using CyberSec-CLI"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 793,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "/dashboard",
                                                            className: "mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-blue font-semibold text-lg hover:shadow-glow transition-all",
                                                            children: [
                                                                "Get Started for Free ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiArrowRight"], {}, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 798,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 794,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mt-4",
                                                            children: "No credit card required - 5 minute setup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 800,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 791,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                lineNumber: 790,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 789,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                                    className: "border-t border-white/10 bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "h-52 w-52 grid place-items-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/logo.png",
                                                                    alt: "CyberSec logo",
                                                                    width: 200,
                                                                    height: 200
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 812,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                lineNumber: 811,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 810,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-400 mt-4",
                                                            children: "CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning."
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 815,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                    className: "p-2 rounded-full border border-white/10",
                                                                    href: "https://github.com",
                                                                    "aria-label": "GitHub",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiGithub"], {}, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 818,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 817,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                    className: "p-2 rounded-full border border-white/10",
                                                                    href: "https://twitter.com",
                                                                    "aria-label": "Twitter",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiTwitter"], {}, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 821,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 820,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                    className: "p-2 rounded-full border border-white/10",
                                                                    href: "https://discord.com",
                                                                    "aria-label": "Discord",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CyberSec$2d$Main$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FaDiscord"], {}, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 824,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 823,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 816,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 809,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm uppercase tracking-[0.2em] text-gray-400",
                                                            children: "Product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 829,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "mt-4 space-y-2 text-sm text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "/features",
                                                                        children: "Features"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 831,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 831,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#pricing",
                                                                        children: "Pricing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 832,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 832,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "/docs",
                                                                        children: "Docs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 833,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 833,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "/api-docs",
                                                                        children: "API"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 834,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 834,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#changelog",
                                                                        children: "Changelog"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 835,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 835,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 830,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 828,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm uppercase tracking-[0.2em] text-gray-400",
                                                            children: "Resources"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 839,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "mt-4 space-y-2 text-sm text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#blog",
                                                                        children: "Blog"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 841,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 841,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#tutorials",
                                                                        children: "Tutorials"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 842,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 842,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#community",
                                                                        children: "Community"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 843,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 843,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#support",
                                                                        children: "Support"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 844,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 844,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 840,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 838,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm uppercase tracking-[0.2em] text-gray-400",
                                                            children: "Legal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 848,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                            className: "mt-4 space-y-2 text-sm text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#privacy",
                                                                        children: "Privacy Policy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 850,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 850,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#terms",
                                                                        children: "Terms of Service"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 851,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 851,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "#security",
                                                                        children: "Security"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                        lineNumber: 852,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 852,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 849,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "mt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "newsletter",
                                                                    className: "text-sm text-gray-300",
                                                                    children: "Get security tips & updates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 855,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                            id: "newsletter",
                                                                            type: "email",
                                                                            placeholder: "Email address",
                                                                            className: "flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 857,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                            className: "px-3 py-2 rounded-lg bg-purple-blue",
                                                                            children: "Join"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                            lineNumber: 863,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                                    lineNumber: 856,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                                            lineNumber: 854,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                                    lineNumber: 847,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 808,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "border-t border-white/10 text-center text-xs text-gray-400 py-6",
                                            children: "(c) 2024 CyberSec-CLI - Made with care by security professionals"
                                        }, void 0, false, {
                                            fileName: "[project]/CyberSec-Main/pages/index.js",
                                            lineNumber: 868,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CyberSec-Main/pages/index.js",
                                    lineNumber: 807,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CyberSec-Main/pages/index.js",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CyberSec-Main/pages/index.js",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CyberSec-Main/pages/index.js",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CyberSec-Main/pages/index.js",
        lineNumber: 352,
        columnNumber: 5
    }, this);
}
const FaqItem = ({ faq, index })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "glass-panel rounded-2xl border border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "button",
                className: "w-full flex items-center justify-between p-5 text-left",
                "aria-expanded": open,
                "aria-controls": `faq-${index}`,
                onClick: ()=>setOpen((prev)=>!prev),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold",
                        children: faq.question
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 891,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-cyan-300",
                        children: open ? '-' : '+'
                    }, void 0, false, {
                        fileName: "[project]/CyberSec-Main/pages/index.js",
                        lineNumber: 892,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/CyberSec-Main/pages/index.js",
                lineNumber: 884,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                id: `faq-${index}`,
                className: "px-5 pb-5 text-sm text-gray-300",
                children: faq.answer
            }, void 0, false, {
                fileName: "[project]/CyberSec-Main/pages/index.js",
                lineNumber: 895,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/CyberSec-Main/pages/index.js",
        lineNumber: 883,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a748552._.js.map