import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-stone-900/70 border-b border-amber-600/40 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            {/* <Image
              src="/icon_clear.webp"
              alt="ChaiLauncher Logo"
              width={48}
              height={48}
              className="drop-shadow-lg"
              priority
            /> */}
            <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">
              ChaiLauncher
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-stone-100 hover:text-amber-200 transition-colors">Home</Link>
          </div>
          <button
            type="button"
            className="md:hidden text-stone-100 hover:text-amber-200"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`md:hidden mt-4 space-y-4${mobileOpen ? '' : ' hidden'}`} id="mobile-menu">
          <Link href="/" className="block text-stone-100 hover:text-amber-200 transition-colors">Home</Link>
        </div>
      </div>
    </nav>
  );
}
