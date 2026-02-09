const BenefitCard = ({title,desc})=> (
  <div className="p-5 rounded-xl border border-[#374151] bg-[#071026] hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition">
    <div className="h-10 w-10 rounded bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-sm">★</div>
    <h4 className="mt-3 font-semibold">{title}</h4>
    <p className="text-sm text-gray-300 mt-2">{desc}</p>
  </div>
)

const Benefits = ()=>{
  const items = [
    ['Built for engineers','Built for engineers, developers, dreamers, thinkers and doers.'],
    ['Ease of use','It\'s as easy as using an Apple, and as expensive as buying one.'],
    ['Pricing like no other','Our prices are best in the market. No cap, no lock, no credit card required.'],
    ['100% Uptime guarantee','We just cannot be taken down by anyone.'],
    ['Multi-tenant Architecture','You can simply share passwords instead of buying new seats'],
    ['24/7 Customer Support','We are available a 100% of the time. Atleast our AI Agents are.'],
    ['Money back guarantee','If you donot like CyberSec, we will convince you to like us.'],
    ['And everything else','I just ran out of copy ideas. Accept my sincere apologies']
  ]

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Built for developers</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([t,d],i)=> <BenefitCard key={i} title={t} desc={d} />)}
        </div>
      </div>
    </section>
  )
}

export default Benefits
