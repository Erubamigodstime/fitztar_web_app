import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 ">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitzTar"
            width={66}
            height={46}
          />
        </div>
 
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Our Features</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        </nav>

        {/* CTA */}
        <a 
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-[#5CFF6B] px-5 py-2 text-sm font-medium text-black hover:bg-[#4ee85a] transition-colors"
        >
          Start your fitness journey
          <span className="text-lg">→</span>
        </a>
      </div>
    </header>
  );
}
