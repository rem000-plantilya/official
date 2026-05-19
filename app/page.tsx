import React from 'react';
import {
  Music,
  FileText,
  MicOff,
  Layers,
  Sparkles,
  Phone,
  MapPin,
  Mail,
  // Facebook, 
  Play,
  Volume2,
  ArrowUpRight
} from 'lucide-react';
import { AudioShowcase } from './components/audiowave';

// SEO Metadata for Next.js App Router
export const metadata = {
  title: 'Monad Digital | Elite AI-Powered Music Production Services',
  description: 'Monad Digital creates radio-ready, full-length tracks, lyrics, minus-ones, and custom compositions using cutting-edge AI. Elevate your sound today.',
  keywords: ['AI Music Production', 'Custom Songwriting', 'Minus One Tracks', 'Music Composition Service', 'Monad Digital', 'Philippines AI Music'],
  openGraph: {
    title: 'Monad Digital | Next-Gen AI Music Production',
    description: 'Bespoke, high-end music production powered by advanced AI. Full tracks, lyrics, and stems on demand.',
    url: 'https://monaddigital.art',
    siteName: 'Monad Digital',
    locale: 'en_US',
    type: 'website',
  },
};

// Sample tracks placeholder data (Ready for your links)
const SAMPLE_TRACKS = [
  { id: 1, title: "Himig Para Sa'yo", genre: "Tagalog / Worship", duration: "2:10", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkyrKYa65BrmFP1HIQ4cfO2To3aenE5AWbwkDC" },
  { id: 2, title: "Himig Para Sa'yo(Instrumental)", genre: "Minus One / Instrumental", duration: "2:10", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkpn8WXpDEhGA2Ccv5Y01FoVSU4rfdst8LMIeT" },
  { id: 3, title: "Kabataan Ika'y Isang Liwanag", genre: "Worship / Soft", duration: "4:42", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkVu4pz0dd4UpgHFXWe08YcTxu2krSIs7yQZDf" },
  { id: 4, title: "Be Good and Kind Like Jesus", genre: "English / Upbeat", duration: "2:30", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkJVuHWwm89EeGC8hy7d1iurVWPlZFgKSfAIvt" },
  { id: 5, title: "Kahit Magkaiba Tayo", genre: "Love Song / Pop", duration: "4:00", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkb3VnQ3SDnWxrPwzqs7Ou2ZVMKdgtlmIovGf3" },
];

const OFFERS = [
  {
    icon: <Music className="w-6 h-6 text-primary" />,
    title: "Full-Length Music",
    description: "Complete, broadcast-ready commercial tracks tailored precisely to your brand, mood, and genre specifications."
  },
  {
    icon: <FileText className="w-6 h-6 text-secondary" />,
    title: "Poetic Lyrics",
    description: "Deeply emotional, catchy, or story-driven lyrics engineered by AI to perfectly fit standard song structures."
  },
  {
    icon: <MicOff className="w-6 h-6 text-accent" />,
    title: "Minus One (Instrumentals)",
    description: "Flawless backing tracks and stems for vocalists, content creators, theatrical backing, and live performers."
  },
  {
    icon: <Layers className="w-6 h-6 text-info" />,
    title: "Chords & Progression",
    description: "Complex, emotionally resonant harmonic structures and charts ready to be handed off to any session musician."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-success" />,
    title: "Custom Composition",
    description: "Bespoke music curation, sonic branding, and full algorithmic arrangements that make your project unforgettable."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-300 text-base-content font-sans antialiased selection:bg-primary selection:text-primary-content">

      {/* HEADER / NAVBAR */}
      <header className="navbar bg-base-200/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-base-100">
        <div className="flex-1">
          <a className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary uppercase">
            Monad Digital
          </a>
        </div>
        <div className="flex-none gap-4 hidden md:flex">
          <a href="#about" className="btn btn-ghost btn-sm font-medium">About</a>
          <a href="#offers" className="btn btn-ghost btn-sm font-medium">Our Offers</a>
          <a href="#showcase" className="btn btn-ghost btn-sm font-medium">Showcase</a>
          <a href="#contact" className="btn btn-primary btn-sm rounded-full px-5">Get a Quote</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative hero min-h-[90vh] bg-gradient-to-b from-base-200 to-base-300 overflow-hidden px-4">
        {/* Subtle background glow decorative element */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="hero-content text-center max-w-4xl flex-col z-10">
          <div className="badge badge-primary badge-outline gap-2 py-3 px-4 font-semibold uppercase tracking-widest text-xs mb-4 animate-bounce">
            <Sparkles className="w-3 h-3" /> The Future of Sonic Identity
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
            We Don't Just Make Sound. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              We Engineer Anthems.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Monad Digital fuses elite human creative direction with advanced artificial intelligence to deliver premium, radio-grade audio services. No generic loops. No compromises. Just pure sonic gold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#showcase" className="btn btn-primary btn-lg rounded-full shadow-lg shadow-primary/20 group">
              Listen to the Demo
              <Play className="w-5 h-5 ml-2 fill-current group-hover:scale-110 transition-transform" />
            </a>
            <a href="#offers" className="btn btn-outline btn-lg rounded-full hover:bg-base-content hover:text-base-300">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* REASONING / MARKET PITCH */}
      <section id="about" className="py-24 px-4 bg-base-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Why Monad Digital?</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-6">Unhinged Speed. Legendary Quality.</h3>
            <p className="text-base-content/70 mb-4">
              Traditional studios take months, charge exorbitant retainer fees, and stall your momentum. We shattered that framework.
            </p>
            <p className="text-base-content/70">
              By utilizing tailored neural architectures overseen by veteran human audio engineers, we deliver bespoke master tracks, complex arrangements, and deep lyrical compositions at lightning speeds. You brief us, we hand deliver perfection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-base-300 p-6 rounded-2xl border border-base-100 shadow-xl">
              <div className="text-4xl font-black text-secondary mb-1">10x</div>
              <div className="text-sm font-semibold opacity-80">Faster Delivery Time</div>
            </div>
            <div className="bg-base-300 p-6 rounded-2xl border border-base-100 shadow-xl">
              <div className="text-4xl font-black text-accent mb-1">100%</div>
              <div className="text-sm font-semibold opacity-80">Commercial Rights</div>
            </div>
            <div className="bg-base-300 p-6 rounded-2xl border border-base-100 shadow-xl">
              <div className="text-4xl font-black text-primary mb-1">Zero</div>
              <div className="text-sm font-semibold opacity-80">Subscription Bloat</div>
            </div>
            <div className="bg-base-300 p-6 rounded-2xl border border-base-100 shadow-xl">
              <div className="text-4xl font-black text-info mb-1">AI+</div>
              <div className="text-sm font-semibold opacity-80">Human Supervised</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFFERS SECTION */}
      <section id="offers" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Our Capabilities</h2>
          <p className="text-4xl font-black">Weaponize Your Creative Portfolio</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer, index) => (
            <div key={index} className="card bg-base-200 hover:bg-base-100 transition-all duration-300 border border-base-100 group hover:-translate-y-1 hover:shadow-2xl">
              <div className="card-body p-8">
                <div className="w-12 h-12 rounded-xl bg-base-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {offer.icon}
                </div>
                <h3 className="card-title text-xl font-bold mb-2 group-hover:text-primary transition-colors">{offer.title}</h3>
                <p className="text-base-content/60 text-sm leading-relaxed">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <AudioShowcase />

      {/* CONTACT & COMPANY INFO FOOTER */}
      <footer id="contact" className="bg-base-100 border-t border-base-200 pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Brand Pillar */}
          <div>
            <h4 className="text-2xl font-black tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Monad Digital
            </h4>
            <p className="text-sm text-base-content/60 leading-relaxed mb-6">
              Next-generation commercial music and audio services deployed through advanced AI systems under strict premium curation. We build the sounds that secure the market.
            </p>
            <div className="flex gap-3">
              <a
                href="https://fb.com/monaddigital.art"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-square btn-outline btn-sm hover:btn-primary"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Explanatory Directives */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-base-content/40">Our Operations</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>**Service-Only Execution:** All generation workflows occur on our localized premium frameworks. No messy self-generation bugs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>**Global Ready:** Built, formatted, and scaled directly for rapid international digital asset pipelines.</span>
              </li>
            </ul>
          </div>

          {/* Pure Contact Vectors */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-base-content/40">Verified Coordinates</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+639151812312" className="hover:underline font-semibold">+63 915 181 2312</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:info@monaddigital.art" className="hover:underline font-semibold text-primary">info@monaddigital.art</a>
                  <a href="mailto:monad.digital.design.services@gmail.com" className="hover:underline text-xs opacity-60">monad.digital.design.services@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="opacity-80">Ph4 Bk97 Lt20 SpringTown Villas, Tanza Cavite, Philippines</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-base-200/60 pt-8 text-center text-xs opacity-40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Monad Digital. All Commercial Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
