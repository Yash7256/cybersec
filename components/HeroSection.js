import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex flex-col h-full p-8">
      {/* Navigation */}
      <div className="flex justify-between items-center py-6 px-8">
        <div className="h-12 w-auto">
          <Image 
            src="/logo.png" 
            alt="CYBERSEC Logo"
            width={180}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/dashboard" className="px-6 py-2 border border-[#9AA0B4] rounded-full text-[#9AA0B4] hover:bg-[#1a1f2d] transition-colors">
            Dashboard
          </Link>
          <Link href="/dashboard" className="px-6 py-2 rounded-full text-white" style={{ backgroundColor: '#8B5CF6' }}>
            Get started
          </Link>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-8 -mt-16">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-semibold max-w-4xl mx-auto mb-6"
          style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          See Every Open Port, Secure Every Entry.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: '#9AA0B4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Identify open and closed ports in real time to strengthen your system's security posture.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/dashboard"
            className="px-8 py-4 rounded-full font-medium text-white flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#8B5CF6' }}
          >
            <span>Go to Dashboard</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
