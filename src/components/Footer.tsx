import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#1E2C16] pt-12 pb-20 text-white">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 mb-20">
        {/* Top Section */}
        <div className="max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Fitztar"
              width={80}
              height={80}
            />
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-white">
            Your All-in-One Fitness & Rewards Companion
          </p>

          <p className="mt-2 text-sm leading-relaxed text-white">
            Fitness is more than just working out, it's the balance of
            movement, nutrition, habits, accountability, and consistency.
          </p>

          {/* Social Icons */}
          <div className=" flex gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center "
            >
              <Image src="/images/facebook-icon.png" alt="Facebook" width={60} height={60} />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center "
            >
              <Image src="/images/instagram-icon.png" alt="Instagram" width={60} height={60} />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center "
            >
              <Image src="/images/X-icon.png" alt="Twitter" width={60} height={60} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-9 h-px w-full bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col items-start justify-between gap-6 text-sm md:flex-row md:items-center">
          {/* Links */}
          <div className="flex flex-wrap gap-6 text-[#9EDC9A]">
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white">
            © 2025 fitztar.com &nbsp; | &nbsp; All Rights Reserved
          </div>
        </div>
      </div>

      {/* FITZTAR Watermark */}
      <div className="pointer-events-none absolute bottom-[-100px] left-1/2 w-full -translate-x-1/2 text-center">
        <span className="block select-none text-[20vw] font-extrabold uppercase leading-none tracking-wider text-[#7CFA6B]/10">
          FITZTAR
        </span>
      </div>
    </footer>
  );
}
