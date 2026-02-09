import { motion } from 'framer-motion'

const FeatureCard = ({children})=> (
  <motion.div whileHover={{y:-6, boxShadow:'0 20px 40px rgba(2,6,23,0.6)'}} className="bg-[#0b1220] border border-[#374151] p-6 rounded-2xl">
    {children}
  </motion.div>
)

const Features = ()=>{
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Packed with thousands of features</h2>
        <p className="text-gray-400 mt-2">From Image generation to video generation, Everything AI has APIs for literally everything. It can even create this website copy for you.</p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard>
            <h4 className="font-semibold">Generate images with text</h4>
            <p className="text-sm text-gray-300 mt-2">Generate images from a text prompt, a video, or a video segment in bulk at the speed of light.</p>
            <div className="mt-4 bg-[#061021] p-3 rounded">
              <div className="h-40 bg-gradient-to-br from-[#08102a] to-[#05102a] rounded" />
            </div>
          </FeatureCard>

          <FeatureCard>
            <h4 className="font-semibold">Create stupid simple chatbots</h4>
            <p className="text-sm text-gray-300 mt-2">Create Chatbots with a single button click. Customize as per your requirements and the AI will take care of the rest.</p>
            <div className="mt-4 p-3 bg-[#061021] rounded">
              <div className="text-sm text-gray-200">User: What is this song?</div>
              <div className="text-sm text-cyan-300 mt-2">AI: Now Playing: Something in the way - Nirvana</div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <h4 className="font-semibold">We support every single LLM</h4>
            <p className="text-sm text-gray-300 mt-2">Whether it's OpenAI, GroQ or Your Mom's Basement LLM, we support everything.</p>
            <div className="mt-4 space-y-2">
              {['Groq LLM','OpenAI GPT0','Stable Diffusion','Llama 2','Claude 200k'].map((t,i)=> (
                <div key={i} className="p-2 bg-[#071424] rounded flex justify-between items-center">
                  <div>{t}</div>
                  <div className="text-xs text-gray-400">Added 2025</div>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard>
            <h4 className="font-semibold">Deploy in seconds</h4>
            <p className="text-sm text-gray-300 mt-2">With our blazing fast, state of the art, cutting edge, we are so back cloud services (read AWS) - you can deploy your model in seconds.</p>
            <div className="mt-4 overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {['Docker','Digital Ocean','Tailwind CSS','Framer Motion','Redis','Vercel','AWS','GitHub'].map((n,i)=> (
                  <div key={i} className="px-3 py-2 bg-[#061021] rounded text-sm">{n}</div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

export default Features
