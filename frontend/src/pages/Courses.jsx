import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/courses-hero.png";
import Navbar from "../components/Navbar";

import {
  Megaphone,
  Code,
  BarChart,
  Palette,
  FileCode,
  Brain,
  Coffee,
  User,
} from "lucide-react";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "it", label: "IT Courses" },
    { id: "non-it", label: "Non-IT Courses" },
    { id: "medical", label: "Healthcare Courses" },
  ];

  const courses = [
    {
      title: "Digital Marketing",
      desc: "Learn SEO, Social Media, Google Ads & more.",
      icon: Megaphone,
      category: "non-it",
      qualification: "10th / 12th Pass",
      tags: ["Non-IT", "Beginner", "4 Months"],
    },
    {
      title: "Full-Stack Web Development",
      desc: "Build modern websites and web applications.",
      icon: Code,
      category: "it",
      qualification: "10th / 12th Pass",
      tags: ["Online", "Beginner", "6 Months"],
    },
    {
      title: "Data Analytics",
      desc: "Turn data into insights and decisions.",
      icon: BarChart,
      category: "it",
      qualification: "10th / 12th Pass",
      tags: ["Online", "Intermediate", "4 Months"],
    },
    {
      title: "Graphic Design",
      desc: "Create stunning visuals and brand identities.",
      icon: Palette,
      category: "non-it",
      qualification: "10th / 12th Pass",
      tags: ["Non-IT", "Beginner", "3 Months"],
    },
    {
      title: "Python Programming",
      desc: "Learn Python from basics to advanced level.",
      icon: FileCode,
      category: "it",
      qualification: "10th / 12th Pass",
      tags: ["Offline", "Beginner", "4 Months"],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      desc: "Learn AI concepts, machine learning models, and real-world applications.",
      icon: Brain,
      category: "it",
      qualification: "10th / 12th Pass",
      tags: ["Offline", "Intermediate", "4 Months"],
    },
    {
      title: "Java Programming",
      desc: "Build robust applications using core Java.",
      icon: Coffee,
      category: "it",
      qualification: "10th / 12th Pass",
      tags: ["Offline", "Intermediate", "6 Months"],
    },
    {
      title: "Soft Skills Training",
      desc: "Improve communication, leadership & more.",
      icon: User,
      category: "non-it",
      qualification: "10th Pass",
      tags: ["Offline", "Beginner", "1 Month"],
    },
    {
      title: "General Duty Assistant (Healthcare)",
      desc: "Patient care, hygiene, vital monitoring and hospital assistance.",
      icon: User,
      category: "medical",
      qualification: "10th Pass",
      tags: ["Non-IT", "Medical", "3 Months"],
    },
    {
      title: "Caregiver / Elder Care Assistant (Healthcare)",
      desc: "Elderly care, daily living support and emergency response.",
      icon: User,
      category: "medical",
      qualification: "10th Pass",
      tags: ["Non-IT", "Medical", "3 Months"],
    },
    {
      title: "Hospital Front Office & Billing (Healthcare)",
      desc: "Patient handling, appointments, billing and communication skills.",
      icon: User,
      category: "medical",
      qualification: "12th Pass",
      tags: ["Non-IT", "Medical", "2-3 Months"],
    },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="bg-[#F5F7FA] min-h-screen text-[#0A2540]">

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO (SMALL CLEAN) ================= */}
      <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white h-auto md:h-[180px]">

  {/* LEFT */}
  <div className="w-full md:w-1/2 px-4 md:px-16 py-6 md:py-0">
    <h1 className="text-2xl md:text-3xl font-bold">
      Our <span className="text-[#D4AF37]">Courses</span>
    </h1>

    {/* BREADCRUMB */}
    <p className="text-sm mt-2 flex items-center">

      <Link
        to="/"
        className="text-gray-300 hover:text-[#D4AF37] transition"
      >
        Home
      </Link>

      <span className="mx-2 text-gray-400">›</span>

      <span className="text-[#D4AF37]">
        Courses
      </span>

    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full md:w-1/2 h-48 md:h-full">
    <img
      src={hero}
      className="w-full h-full object-cover"
      alt="hero"
    />
  </div>

</div>
      {/* ================= FILTER ================= */}
      <div className="px-4 md:px-16 mt-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Explore Our Wide Range of Professional Courses
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Choose from our industry-relevant courses designed to build skills and shape your future.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-[#D4AF37] text-black"
                    : "bg-white text-[#0A2540] border border-[#0A2540]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= COURSE GRID ================= */}
      <div className="px-4 md:px-16 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredCourses.map((c, i) => {
          const originalIndex = courses.findIndex(course => course.title === c.title);
          return (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-lg transition duration-300"
          >

            {/* ICON */}
            <div className="mb-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${
                  i % 2 === 0
                    ? "bg-[#0A2540] text-white"
                    : "bg-[#D4AF37] text-white"
                }`}
              >
                <c.icon size={22} />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.desc}</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-3">
              {c.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-3">Qualification: {c.qualification}</p>

            {/* PRICE + LINK */}
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/course/${originalIndex}`}
                className="text-sm text-[#0A2540] font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
          );
        })}

      </div>

      {/* ================= CTA ================= */}
      <div className="px-4 md:px-16 mt-10 mb-10">
        <div className="bg-[#0A2540] text-white rounded-xl px-4 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-[#D4AF37] p-3 rounded-full text-black">
              🎧
            </div>

            <div>
              <h3 className="font-semibold">
                Not Sure Which Course is Right for You?
              </h3>
              <p className="text-sm text-gray-300">
                Our Experts will help you choose the perfect course based on your goals.
              </p>
            </div>
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="bg-[#D4AF37] px-6 py-3 rounded-lg font-semibold w-full md:w-auto"
          >
            Talk to Our Experts →
          </button>
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