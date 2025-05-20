import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import Link from "next/link";

export default function Demo() {
  return (
    <>
      <Navbar>
        <NavItem href="#" label="Solutions" />
        <NavItem href="#" label="Industries" />
        <NavItem href="#" label="About Us" />
        <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/"
            className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Back to homepage
          </Link>
        </button>
      </Navbar>
    </>
  );
}
