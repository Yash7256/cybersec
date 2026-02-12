import Image from 'next/image'

const Footer = ()=> (
  <footer className="py-12 border-t border-[#111827] mt-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6">
          <img src="/1.gif" alt="Animation" className="w-full h-full object-cover rounded" />
        </div>
        <Image src="/logo.svg" alt="CyberSec" width={140} height={36} />
        <div className="text-gray-400 text-sm mt-3">© 2026 CyberSec-CLI - All rights reserved</div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:justify-self-center">
        <div>
          <h5 className="font-semibold">Product</h5>
          <ul className="text-sm text-gray-400 mt-2 space-y-2">
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Legal</h5>
          <ul className="text-sm text-gray-400 mt-2 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="md:text-right">
        <h5 className="font-semibold">Social</h5>
        <div className="flex gap-3 mt-2 justify-end">
          <div className="w-8 h-8 rounded bg-[#071026] flex items-center justify-center">T</div>
          <div className="w-8 h-8 rounded bg-[#071026] flex items-center justify-center">L</div>
          <div className="w-8 h-8 rounded bg-[#071026] flex items-center justify-center">G</div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
