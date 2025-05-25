import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import UploadFile from "@/components/UploadFile";
import Link from "next/link";

export default function Demo() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Navbar>
          <NavItem href="#" label="Solutions" />
          <NavItem href="#" label="Industries" />
          <NavItem href="/TimDevelop" label="About Us" />
          <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
            <Link
              href="/"
              className="px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-600/20"
              role="button"
            >
              Homepage
            </Link>
          </button>
        </Navbar>

        <section className="container mx-auto mt-15">
          <UploadFile />
        </section>
      </div>
    </>
  );
}
