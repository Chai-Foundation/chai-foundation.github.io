import Image from 'next/image';
import Link from 'next/link';
import { Download, Play, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Hero" fill className="w-full h-full object-cover blur-sm" priority />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            {/* Logo image placeholder */}
            {/* <Image src="/favicon.svg" alt="Logo" width={120} height={120} className="mx-auto mb-6 drop-shadow-2xl" /> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent mb-6">
            ChaiLauncher
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A modern, quality-of-life Minecraft client designed for the latest versions. 
            Experience Minecraft like never before with enhanced performance and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="#download" className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Now
            </Link>
            <Link href="/discord" className="group border-2 border-amber-400 hover:border-amber-300 text-stone-100 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-amber-600/20 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join Discord
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-stone-800/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-amber-600/50">
                <Play className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
              <p className="text-stone-200">Simple installation and intuitive interface designed for all players</p>
            </div>
            <div className="text-center">
              <div className="bg-stone-800/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-amber-600/50">
                <Shield className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-stone-200">Built with security in mind, protecting your Minecraft experience</p>
            </div>
            <div className="text-center">
              <div className="bg-stone-800/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-amber-600/50">
                <Download className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Regular Updates</h3>
              <p className="text-stone-200">Constantly improving with new features and optimizations</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose ChaiLauncher?</h2>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">Discover the features that make ChaiLauncher the perfect companion for your Minecraft adventures</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Boost</h3>
              <p className="text-stone-200">Optimized rendering and resource management for smoother gameplay with higher frame rates.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visual Enhancements</h3>
              <p className="text-stone-200">Beautiful shaders, improved lighting, and customizable visual effects to enhance your world.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality of Life</h3>
              <p className="text-stone-200">Essential tools and improvements that make your Minecraft experience more enjoyable and efficient.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mod Support</h3>
              <p className="text-stone-200">Compatible with your favorite mods and modpacks, extending your gameplay possibilities.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform</h3>
              <p className="text-stone-200">Available for Windows, macOS, and Linux with consistent performance across all platforms.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-stone-200">Join our active Discord community for support, updates, and connecting with other players.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-stone-200 mb-12 max-w-2xl mx-auto">
            Download ChaiLauncher today and transform your Minecraft experience. 
            Compatible with the latest Minecraft versions.
          </p>
          <div className="bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/30 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Coming Soon!</h3>
            <p className="text-stone-200 mb-6">
              We're putting the finishing touches on ChaiLauncher. Join our Discord to be the first to know when it's ready!
            </p>
            <p className="text-sm text-stone-300 mb-8">
              Expected Release: Winter 2024 (Northern Hemisphere) / Summer 2024 (Southern Hemisphere)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/discord" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Join Discord for Updates
              </Link>
              <Link href="/news" className="border-2 border-amber-400 hover:border-amber-300 text-stone-100 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-amber-600/20">
                Read Latest News
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-stone-300">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>Windows Support</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-300">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>macOS Support</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-300">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>Linux Support</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
