import { motion } from 'framer-motion'
import Image from 'next/image'

const SparkleBadge = ()=> (
  <motion.span initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/5 text-gray-200">
    <span className="text-xs">✨</span>
    We've raised $69M seed funding
  </motion.span>
)

const Hero = ()=>{
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <SparkleBadge />
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.15}} className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Generate Images, Text and Videos with AI
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-4 text-gray-300 max-w-xl">
            Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <motion.a whileHover={{scale:1.02}} className="px-5 py-3 rounded-md gradient-btn text-white btn-glow inline-block" style={{'--from':'#8B5CF6','--to':'#3B82F6'}}>Get started</motion.a>
            <motion.a whileHover={{scale:1.02}} className="px-5 py-3 rounded-md border border-gray-700 text-sm">Contact us</motion.a>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div animate={{y:[0,-18,0]}} transition={{duration:6, repeat:Infinity}} className="w-full max-w-md">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#091024] to-[#0b1220] p-6 glass">
              <Image src="/logo.svg" alt="mockup" width={640} height={360} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
