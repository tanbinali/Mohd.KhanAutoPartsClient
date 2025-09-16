import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4"
      aria-label="Mohammad Khan Auto Parts Abu Dhabi Footer"
    >
      {/* Left section: logo and copyright */}
      <aside className="grid-flow-col items-center">
        <img
          src={logo}
          alt="Mohammad Khan Auto Parts Logo Abu Dhabi"
          className="w-10 h-10 object-contain mr-2"
        />
        <p>
          Copyright © {new Date().getFullYear()} – Mohammad Khan Auto Parts. All
          rights reserved.
        </p>
      </aside>

      {/* Right section: contact methods */}
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+971556939668"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-accent transition-colors"
        >
          <FiMessageSquare size={24} />
          WhatsApp
        </a>

        {/* Phone */}
        <a
          href="tel:+971556939668"
          className="flex items-center gap-1 hover:text-accent transition-colors"
        >
          <FiPhone size={24} />
          +971 55 693 9668
        </a>

        {/* Email */}
        <a
          href="mailto:info@mohammadkhanparts.com"
          className="flex items-center gap-1 hover:text-accent transition-colors"
        >
          <FiMail size={24} />
          info@mohammadkhanparts.com
        </a>
      </nav>

      {/* Schema.org Business Info */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          "name": "Mohammad Khan Auto Parts",
          "image": "https://mohammadkhanautoparts.ae/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mussafah",
            "addressRegion": "Abu Dhabi",
            "addressCountry": "AE"
          },
          "telephone": "+971556939668",
          "email": "info@mohammadkhanparts.com",
          "url": "https://mohammadkhanautoparts.ae",
          "sameAs": [
            "https://wa.me/+971556939668"
          ]
        }
        `}
      </script>
    </footer>
  );
};

export default Footer;
