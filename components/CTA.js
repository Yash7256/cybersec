import { motion } from 'framer-motion'

const CTA = ()=> (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-6 text-center rounded-2xl p-12 glass">
      <h3 className="text-3xl font-bold">Ready to join the waitlist?</h3>
      <p className="text-gray-300 mt-2">Get instant access to our state of the art project and join the waitlist.</p>
      <motion.button whileHover={{scale:1.02}} className="mt-6 px-6 py-4 rounded-full gradient-btn text-white text-lg btn-glow" style={{'--from':'#8B5CF6','--to':'#3B82F6'}}>Join Waitlist</motion.button>
    </div>
  </section>
)

export default CTA
