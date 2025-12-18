'use client';

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <section id="home" className="relative w-full bg-[#5E7780] overflow-hidden">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src="/images/hero-mobile.jpg"
          alt="Fitness Background Mobile"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block z-0">
        <Image
          src="/images/hero-woman.jpg"
          alt="Fitness Background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* NAVBAR */}
      <header className="relative w-full z-20">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FitzTar"
              width={96}
              height={66}
            />
          </div>
   
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            <a 
              href="#home" 
              onClick={() => setActiveLink("home")}
              className={`hover:text-white transition-colors ${activeLink === "home" ? "text-[#5CFF6B] font-semibold" : ""}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setActiveLink("about")}
              className={`hover:text-white transition-colors ${activeLink === "about" ? "text-[#5CFF6B] font-semibold" : ""}`}
            >
              About Us
            </a>
            <a 
              href="#feature" 
              onClick={() => setActiveLink("feature")}
              className={`hover:text-white transition-colors ${activeLink === "feature" ? "text-[#5CFF6B] font-semibold" : ""}`}
            >
              Our Features
            </a>
            <a 
              href="#faq" 
              onClick={() => setActiveLink("faq")}
              className={`hover:text-white transition-colors ${activeLink === "faq" ? "text-[#5CFF6B] font-semibold" : ""}`}
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={() => setActiveLink("contact")}
              className={`hover:text-white transition-colors ${activeLink === "contact" ? "text-[#5CFF6B] font-semibold" : ""}`}
            >
              Contact Us
            </a>
          </nav>
  
          {/* Desktop CTA */}
          <a 
            href="#contact"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#5CFF6B] px-5 py-2 text-sm font-medium text-black hover:bg-[#4ee85a] transition-colors"
          >
            Start your fitness journey
            <ArrowUpRight size={18} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#212D1A] shadow-lg">
            <nav className="flex flex-col px-6 py-4 items-end">
              <a 
                href="#home" 
                onClick={() => { setActiveLink("Home"); setIsMenuOpen(false); }}
                className={`py-3 hover:text-white transition-colors w-full text-right ${activeLink === "Home" ? "text-[#5CFF6B] font-semibold" : "text-white/90"}`}
              >
                Home
              </a>
              <a 
                href="#About" 
                onClick={() => { setActiveLink("About"); setIsMenuOpen(false); }}
                className={`py-3 hover:text-white transition-colors w-full text-right ${activeLink === "About" ? "text-[#5CFF6B] font-semibold" : "text-white/90"}`}
              >
                About Us
              </a>
              <a 
                href="#features" 
                onClick={() => { setActiveLink("Features"); setIsMenuOpen(false); }}
                className={`py-3 hover:text-white transition-colors w-full text-right ${activeLink === "Features" ? "text-[#5CFF6B] font-semibold" : "text-white/90"}`}
              >
                Our Features
              </a>
              <a 
                href="#faq" 
                onClick={() => { setActiveLink("faq"); setIsMenuOpen(false); }}
                className={`py-3 hover:text-white transition-colors w-full text-right ${activeLink === "faq" ? "text-[#5CFF6B] font-semibold" : "text-white/90"}`}
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                onClick={() => { setActiveLink("contact"); setIsMenuOpen(false); }}
                className={`py-3 hover:text-white transition-colors w-full text-right ${activeLink === "contact" ? "text-[#5CFF6B] font-semibold" : "text-white/90"}`}
              >
                Contact Us
              </a>
              <a 
                href="#contact"
                className="mt-4 mb-2 flex items-center justify-center gap-2 rounded-full bg-[#5CFF6B] px-5 py-3 text-sm font-medium text-black hover:bg-[#4ee85a] transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Start your fitness journey
                <ArrowUpRight size={18} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1200px] items-center px-6 pb-12">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-2xl">
          <h1 className="max-w-xl text-heading md:text-[40px] font-bold leading-tight">
            Your All-in-One Fitness & <br />
            Rewards Companion.
          </h1>

          <p className="mt-6 max-w-lg text-body md:text-body-lg leading-relaxed text-white/80">
            Fitness is more than just working out, it’s the balance of movement, nutrition, habits, accountability, and consistency.
              Fitztar brings all of this together in one seamless experience, so you never have to switch between multiple apps again.
                </p>

          {/* Store Buttons */}
          <div className="mt-8 flex gap-4">
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={140}
              height={46}
            />
            <Image
              src="/images/googleplay.png"
              alt="Google Play"
              width={140}
              height={46}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
