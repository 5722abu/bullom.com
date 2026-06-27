import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black border-t border-yellow-400/20 text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 font-bold text-xl text-white">
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center font-extrabold text-black text-sm shadow-lg shadow-yellow-400/20">
                B
              </div>
              <span className="tracking-tight">
                BULLOM <span className="text-yellow-400">GROUP</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Connecting Talent with Opportunity. Your trusted partner in career growth and talent acquisition.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "f"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-zinc-900 border border-yellow-400/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all text-sm font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-yellow-400 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", page: "home" },
                { label: "Browse Jobs", page: "jobs" },
                { label: "Companies", page: "companies" },
                { label: "About Us", page: "about" },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-5 text-yellow-400 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Blog", page: "blog" },
                { label: "Help Center", page: "contact" },
                { label: "Privacy Policy", page: "" },
                { label: "Terms of Service", page: "" },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => link.page && onNavigate(link.page)}
                    className="text-zinc-400 hover:text-yellow-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 text-yellow-400 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-yellow-400" />
                </div>
                <a href="mailto:info@bullom.com" className="text-zinc-400 hover:text-yellow-400 transition-colors">
                  info@bullom.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-zinc-400">
                  <span className="block">+232 31 297087</span>
                  <span className="block">+232 74 146230</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-zinc-400 leading-relaxed">
                  3 Tigi Drive, Regent Road, Lumley, Freetown, Sierra Leone
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-yellow-400/10 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 BULLOM GROUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
