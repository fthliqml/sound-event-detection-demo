import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import UploadAndShowResult from "@/components/UploadAndShowResult";
import Link from "next/link";

export default function Demo() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="absolute overflow-hidden h-full w-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Navbar>
        <NavItem href="/#about" label="About" />
        <NavItem href="/#features" label="Features" />
        <NavItem href="/#team" label="Team" />
        <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/"
            className="px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-300 bg-gradient-to-r from-gray-800 to-gray-900 border border-transparent rounded-full hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 shadow-lg hover:shadow-xl"
            role="button"
          >
            ← Back to Home
          </Link>
        </button>
      </Navbar>

      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-purple-700 bg-purple-100 rounded-full border border-purple-200 animate-bounce">
            🎵 Coba Teknologi AI Kami
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight">
            Audio Tagging Demo
          </h1>
          
          <p className="max-w-3xl text-xl text-gray-400 mb-8 leading-relaxed font-light mx-auto">
            Unggah file video Anda dan saksikan AI kami secara otomatis 
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> mengenali dan memberi tag suara</span> secara real-time
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <UploadAndShowResult />
        </div>
      </section>
    </>
  );
}