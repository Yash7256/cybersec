import '../styles/globals.css'
import { Inter, Space_Grotesk, Orbitron, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
})

export default function MyApp({ Component, pageProps }){
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${jetbrainsMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
