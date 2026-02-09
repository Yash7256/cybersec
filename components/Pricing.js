import { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [isSwitching, setIsSwitching] = useState(false);

  const handleBillingCycleChange = () => {
    setIsSwitching(true);
    setTimeout(() => {
      setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
      setIsSwitching(false);
    }, 300); // Small delay for visual feedback
  };

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'yearly' ? '$19' : '$24',
      period: billingCycle === 'yearly' ? '/month (billed yearly)' : '/month',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 10,000 API calls per month',
        'Basic AI models access',
        'Email support',
        'Standard response times',
        'Basic documentation'
      ],
      cta: 'Get Started',
      mostPopular: false
    },
    {
      name: 'Professional',
      price: billingCycle === 'yearly' ? '$79' : '$99',
      period: billingCycle === 'yearly' ? '/month (billed yearly)' : '/month',
      description: 'For growing teams and businesses',
      features: [
        'Up to 100,000 API calls per month',
        'Advanced AI models access',
        'Priority email support',
        'Faster response times',
        'Detailed analytics',
        'Custom integrations'
      ],
      cta: 'Try for free',
      mostPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited API calls',
        'All AI models with full access',
        '24/7 dedicated support',
        'Fastest response times',
        'Custom model training',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise options'
      ],
      cta: 'Contact Sales',
      mostPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="pricing-title" className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-8 flex justify-center items-center">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={handleBillingCycleChange}
              disabled={isSwitching}
              className={`relative rounded-full w-14 h-7 gradient-btn ${isSwitching ? 'opacity-70' : ''}`}
              aria-label={`Switch to ${billingCycle === 'monthly' ? 'yearly' : 'monthly'} billing`}
            >
              {isSwitching ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <motion.span
                  className="absolute bg-white rounded-full w-5 h-5 top-1"
                  style={{ 
                    left: billingCycle === 'monthly' ? '3px' : 'calc(100% - 22px)',
                    transition: 'left 0.2s ease'
                  }}
                />
              )}
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.mostPopular
                  ? 'border-[#3B82F6] bg-gradient-to-b from-[#0b1220] to-[#0f172a] relative z-10'
                  : 'border-[#374151] bg-[#0b1220]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#3B82F6] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
              </div>
              <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
              
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 w-full py-3 rounded-lg font-medium ${
                  plan.mostPopular
                    ? 'gradient-btn text-white btn-glow'
                    : 'bg-[#071026] border border-gray-700 hover:bg-[#0b1220] transition-colors'
                }`}
                style={plan.mostPopular ? { '--from': '#8B5CF6', '--to': '#3B82F6' } : {}}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>All plans come with our 14-day money-back guarantee. No contracts. No setup fees.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;