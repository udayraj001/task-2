import React from "react";
import {
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"; // using lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-[#c8c8c8] py-10 px-6 md:px-32 md:font-semibold">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Section */}
        <div className="md:col-span-1 space-y-4">
 <img 
    src="https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/footer-logo.png" 
    alt="KPIT Logo" 
    className="h-8 w-auto "
  />          <p className="text-sm leading-relaxed ">
            KPIT is reimagining the future of mobility, forging ahead with group
            companies and partners to shape a world that is cleaner, smarter,
            and safer.
          </p>
          <p className="text-sm leading-relaxed">
            With over 25 years of specialized expertise in Mobility, KPIT is
            accelerating the transformation towards Software and AI-Defined
            Vehicles through its advanced solutions, platforms, and
            products—propelled by mobility-infused AI frameworks, software
            craftsmanship, and systems integration mastery.
          </p>
          <p className="text-sm leading-relaxed">
            <strong>Vision in Motion</strong> <br />
            Fueled by 2000+ vehicle production programs and powering 20+ million
            vehicles on the road with KPIT software, our experience is
            unmatched. At the same time, we push boundaries, developing
            solutions that enable Mobility OEMs to innovate at speed and scale.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-600"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-600"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-600"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Mobility */}
        <div>
          <h3 className="text-[#b0ff44] font-semibold">Mobility</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Passenger Cars</li>
            <li>Trucks</li>
            <li>Off-Highway Vehicles</li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-[#b0ff44] font-semibold">Expertise</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="font-semibold">Domain Applications</li>
            <li>Autonomous Driving & ADAS</li>
            <li>Body Electronics</li>
            <li>Chassis</li>
            <li>Cockpit</li>
            <li>Propulsion</li>
            <li className="font-semibold mt-3 md:text-xl">Vehicle.OS</li>
            <li className="text-[#b0ff44]">E/E Architecture, Network & Middleware</li>
            <li>Cloud, Edge analytics & Data management</li>
            <li>Vehicle Engineering & Design</li>
            <li>Virtual Engineering</li>
            <li>Integrated Diagnostics & Aftersales</li>
            <li>Transformation [DART]</li>
            <li>Validation</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#b0ff44] font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Overview</li>
            <li>Awards</li>
            <li>Clients</li>
            <li>Journey So Far</li>
            <li>Sustainability</li>
            <li>Team</li>
            <li>Group Companies</li>
          </ul>

          <h3 className="text-[#b0ff44] font-semibold mt-6">Careers</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Overview</li>
            <li>For Graduates</li>
            <li>For Experienced Professionals</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#b0ff44] font-semibold">Contact Us</h3>
          <p className="mt-3 text-sm">
            KPIT Technologies Ltd <br />
            Plot Number-17, Rajiv Gandhi Infotech Park, MIDC-SEZ, Phase-III,{" "}
            <br />
            Hinjawadi, Pune - 41057 <br />
            Phone: +91 20 6770 6000
          </p>
          <p className="mt-3 text-sm">
            KPIT Technologies GmbH <br />
            Frankfurter Ring 105b, 80807 Munich, GERMANY <br />
            Phone: +49 89 3229 9660 <br />
            Fax: +49 89 3229 9669 99
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Whistleblower System</li>
            <li>Impressum</li>
            <li>Information requirements</li>
            <li className="text-[#b0ff44] font-semibold md:text-lg">Smart ODR Portal</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center md:font-bold md:text-sm">
        <p>
          All logos of organizations displayed are the property of their
          respective owners.
        </p>
        <p className="mt-2 md:mt-0 font-semibold text-white">
          KPIT and KPIT logo are registered trademarks - KPIT
        </p>
        <p>CIN: L74999PN2018PLC174192</p>
      </div>

      {/* Bottom Links */}
      <div className="mt-4 text-xs text-gray-400 flex flex-col md:flex-row gap-4 justify-center md:justify-end md:text-sm md:font-semibold">
        <a href="#">Terms of Uses</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
