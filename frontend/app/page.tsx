import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="absolute overflow-hidden h-[900px] w-full">
        <Image
          src="/images/grid-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <Navbar>
        <NavItem href="#" label="Solutions" />
        <NavItem href="#" label="Industries" />
        <NavItem href="#" label="About Us" />
        <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/demo"
            className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Demo
          </Link>
        </button>
      </Navbar>

      {/* Hero Section */}
      <section className="relative mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col pt-20 pb-20">
            <h1 className="text-5xl font-bold mb-5">
              Sound Event <span className="block">Detection</span>
            </h1>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
