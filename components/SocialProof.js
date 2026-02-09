import { motion } from 'framer-motion'

const logos = ['/logos/netflix.svg','/logos/google.svg','/logos/meta.svg','/logos/onlyfans.svg']

const SocialProof = ()=>{
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-gray-300 font-semibold">Trusted by the best companies</h3>
        <p className="mt-2 text-gray-400">CyberSec is the choice of all the fortune 500 companies.</p>

        <div className="mt-8 overflow-hidden">
          <motion.div className="flex gap-12 items-center marquee-mask" animate={{x:[0,-800]}} transition={{repeat:Infinity, duration:18, ease:'linear'}}>
            {logos.concat(logos).map((l,i)=> (
              <motion.img key={i} src={l} alt="logo" className="h-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transform transition-all"/>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
