import { motion } from 'framer-motion'

const cards = [
  {name:'Sam K', text:'Best API ever. My app launched in a day.'},
  {name:'Aisha M', text:'The UIs and SDKs saved us months of work.'},
  {name:'Devon L', text:'Support is top notch and the models are fast.'}
]

const Testimonials = ()=> (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-2xl font-bold">Loved by people all over the universe</h3>
      <p className="text-gray-400 mt-2">CyberSec is used by millions of people around the globe. Our APIs have fan bases and people fight for us over twitter.</p>

      <div className="mt-6 overflow-hidden">
        <motion.div className="flex gap-6" animate={{x:[0,-650]}} transition={{repeat:Infinity, duration:22, ease:'linear'}}>
          {cards.concat(cards).map((c,i)=> (
            <motion.div key={i} className="min-w-[280px] p-5 rounded-xl bg-[#071026] border border-[#24303b]">
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm text-gray-300 mt-2">{c.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

export default Testimonials
