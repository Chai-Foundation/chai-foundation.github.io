import Image from 'next/image';
import Link from 'next/link';
import { Users, MessageCircle, Twitter, Github, Book, FileText, ExternalLink } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ElementType;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  footer?: {
    sections: FooterSection[];
  };
}

const defaultFooter: { sections: FooterSection[] } = {
  sections: [
    // {
    //   title: 'Product',
    //   links: [
    //     { label: 'Download', href: '#download', icon: ExternalLink },
    //     { label: 'Features', href: '/#features', icon: ExternalLink },
    //     { label: 'News', href: '/news', icon: Book },
    //   ],
    // },
    // {
    //   title: 'Resources',
    //   links: [
    //     { label: 'Documentation', href: '/docs', icon: Book },
    //     { label: 'Support', href: '/discord', icon: MessageCircle, external: true },
    //     { label: 'FAQ', href: '/faq', icon: FileText },
    //   ],
    // },
    // {
    //   title: 'Legal',
    //   links: [
    //     { label: 'Terms of Service', href: '/terms', icon: FileText },
    //     { label: 'Privacy Policy', href: '/privacy', icon: FileText },
    //   ],
    // },
    // {
    //   title: 'Community',
    //   links: [
    //     { label: 'Discord', href: '/discord', icon: Users, external: true },
    //     { label: 'Twitter', href: '/twitter', icon: Twitter, external: true },
    //     { label: 'GitHub', href: '/github', icon: Github, external: true },
    //   ],
    // },
  ],
};

export default function Footer({ footer = defaultFooter }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-t from-black via-stone-900/50 to-transparent border-t border-amber-800/30 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/20 pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* <Image
                src="/icon_clear.webp"
                alt="ChaiLauncher Logo"
                width={48}
                height={48}
                className="drop-shadow-lg"
                priority
              /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">
                ChaiLauncher
              </span>
            </div>
            <p className="text-stone-200 leading-relaxed mb-6 max-w-md">
              A modern, quality-of-life Minecraft client designed for the latest versions.
              Experience enhanced performance and features.
            </p>
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#download"
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 text-center"
              >
                Download Now
              </Link>
              <Link
                href="/discord"
                className="border border-amber-400 hover:border-amber-300 text-stone-100 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-amber-600/20 text-center"
              >
                Join Community
              </Link>
            </div>
          </div>
          {/* Footer Links */}
          {footer.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      aria-label={link.label}
                      className="group flex items-center gap-3 text-stone-200 hover:text-stone-100 transition-colors duration-200"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-200" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom Section */}
        <div className="pt-8 border-t border-amber-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-amber-400 mb-1">
                Not affiliated with Mojang Studios or Microsoft
              </p>
              <p className="text-sm text-stone-300">
                &copy; {new Date().getFullYear()} ChaiLauncher. All rights reserved.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="/discord"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800/30 hover:bg-stone-700/50 rounded-lg transition-colors duration-200"
                aria-label="Join Discord"
              >
                <Users className="w-5 h-5 text-amber-300" />
              </a>
              <a
                href="/twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800/30 hover:bg-stone-700/50 rounded-lg transition-colors duration-200"
                aria-label="Follow on Twitter"
              >
                <Twitter className="w-5 h-5 text-amber-300" />
              </a>
              <a
                href="/github"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800/30 hover:bg-stone-700/50 rounded-lg transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
