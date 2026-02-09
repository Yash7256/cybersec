module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryFrom: '#a855f7',
        primaryTo: '#3b82f6',
        cyberNavy: '#0a0e27',
        cyberNavyAlt: '#0d1117',
        cyberPurple: '#a855f7',
        cyberMagenta: '#c026d3',
        cyberBlue: '#3b82f6',
        cyberCyan: '#06b6d4',
        cyberOrange: '#f97316',
        cyberBorder: 'rgba(255,255,255,0.1)',
        cyberMuted: '#9ca3af'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        logo: ['var(--font-orbitron)', 'var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 30px rgba(168, 85, 247, 0.35)',
        cyan: '0 0 24px rgba(6, 182, 212, 0.35)',
        card: '0 20px 60px rgba(6, 12, 28, 0.55)'
      },
      backgroundImage: {
        'purple-blue': 'linear-gradient(90deg, rgba(168,85,247,0.9), rgba(59,130,246,0.9))',
        'hero-radial': 'radial-gradient(circle at top, rgba(168,85,247,0.25), transparent 55%)',
        'glow-ring': 'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
        scanline: 'scanline 4s linear infinite'
      }
    }
  },
  plugins: []
}
