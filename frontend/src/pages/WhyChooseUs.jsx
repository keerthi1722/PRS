import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import chooseImg from "../assets/choose.png";
import Navbar from "../components/Navbar";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* ================= NAVBAR ================= */}
       <Navbar/>



      {/* ================= IMAGE SECTION ================= */}
      <div className="px-4 md:px-12 py-6">

      <div className="w-full">
  <div className="w-full bg-[#F5F7FA] flex justify-center">
  <img
    src={chooseImg}
    alt="Why Choose Us"
    className="w-full max-w-[1400px] h-auto object-contain"
  />
</div>
</div>

      </div>
<div className="bg-[#0A2540] text-white mt-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 py-10">

    {/* LEFT */}
    <div>
      <h2 className="text-lg font-semibold">PRS Career Crafts</h2>
      <p className="text-sm text-gray-300 mt-3">
        Shaping careers and building futures with expert training.
      </p>
    </div>

    {/* EXPLORE */}
    <div>
      <h3 className="text-[#D4AF37] font-semibold mb-3">Explore</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>About Us</li>
        <li>Courses</li>
        <li>Training Mode</li>
        <li>Placement Support</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="text-[#D4AF37] font-semibold mb-3">Contact</h3>
      <p className="text-sm text-gray-300">LB Nagar, Hyderabad</p>
      <p className="text-sm text-gray-300">+91 99999 99999</p>
      <p className="text-sm text-gray-300">hello@prs.com</p>
    </div>

    {/* NEWSLETTER */}
    <div>
      <h3 className="text-[#D4AF37] font-semibold mb-3">Newsletter</h3>
      <input
        placeholder="Your email"
        className="px-3 py-2 rounded text-black w-full mb-2"
      />
      <button className="bg-[#D4AF37] px-4 py-2 rounded text-white">
        Join
      </button>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-600 text-center py-3 text-sm text-gray-300">
    © 2026 PRS Career Crafts. All rights reserved.
  </div>

</div>
    </div>
  );
}