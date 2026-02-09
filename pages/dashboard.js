export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-widest" style={{ color: '#C9C6E3' }}>
          CYBERSEC
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Welcome to your dashboard.</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Security Dashboard</h2>
          <p className="text-xl text-gray-400">Monitor and manage your security posture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#090C17] border border-[#010510] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Open Ports</h3>
            <p className="text-4xl font-bold text-green-400">24</p>
            <p className="text-gray-400 mt-2">Currently open ports</p>
          </div>
          
          <div className="bg-[#090C17] border border-[#010510] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Security Alerts</h3>
            <p className="text-4xl font-bold text-yellow-400">3</p>
            <p className="text-gray-400 mt-2">Active alerts</p>
          </div>
          
          <div className="bg-[#090C17] border border-[#010510] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Vulnerabilities</h3>
            <p className="text-4xl font-bold text-red-400">0</p>
            <p className="text-gray-400 mt-2">Critical issues</p>
          </div>
        </div>
      </main>
    </div>
  );
}
