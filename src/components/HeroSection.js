"use client";
import { MapPin, ChevronDown, User, Hospital } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Side: Promotional Banner */}
        <div className="lg:col-span-3 bg-pink-600 text-white p-8 rounded-2xl flex items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              ইন্ডিয়ান ডাক্তার অ্যাপয়েন্টমেন্ট এখন আরো সহজ
            </h1>
            <p className="text-lg">
              ইন্ডিয়ান ২০০+ হসপিটাল এর বিশেষজ্ঞ ডাক্তারদের অ্যাপয়েন্টমেন্ট
              করতে
            </p>
            <button className="bg-white text-pink-600 font-bold px-6 py-3 rounded-lg mt-4">
              এখানে ক্লিক করুন
            </button>
          </div>
          <div className="hidden md:block">
            {/* Using a placeholder for the illustration. Replace with your actual image */}
            <Image
              src="https://placehold.co/250x300/ffffff/db2777?text=Illustration"
              alt="Doctor and Patient Illustration"
              width={250}
              height={300}
            />
          </div>
        </div>

        {/* Right Side: Search Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
          <button className="bg-yellow-500 text-white font-bold w-full py-3 rounded-lg mb-6">
            Search Hospitals
          </button>
          <form className="space-y-4">
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select className="w-full appearance-none bg-gray-100 border-none rounded-lg pl-10 pr-8 py-3">
                <option>Country</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select className="w-full appearance-none bg-gray-100 border-none rounded-lg pl-10 pr-8 py-3">
                <option>City</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select className="w-full appearance-none bg-gray-100 border-none rounded-lg pl-10 pr-8 py-3">
                <option>Select Department</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative">
              <Hospital
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select className="w-full appearance-none bg-gray-100 border-none rounded-lg pl-10 pr-8 py-3">
                <option>Select Hospital</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
